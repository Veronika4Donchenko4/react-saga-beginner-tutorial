import { AiOutlinePlus } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import ToDo from './Todo';
import {
	collection,
	onSnapshot,
	query,
	updateDoc,
	doc,
	addDoc,
	deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase';

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');
	useEffect(() => {
		const queryColection = query(collection(db, 'todos'));
		const unsubscribe = onSnapshot(queryColection, querySnapshot => {
			let todoArray = [];
			querySnapshot.forEach(doc => {
				todoArray.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todoArray);
		});
		return () => {
			unsubscribe();
		};
	}, []);
	const toggleComplete = async todo => {
		await updateDoc(doc(db, 'todos', todo.id), {
			completed: !todo.completed
		});
	};
	const createToDo = async element => {
		element.preventDefault(element);
		if (input === '') {
			alert('Введите коректную задачу');
			return;
		}
		await addDoc(collection(db, 'todos'), {
			value: input,
			completed: false
		});
		setInput('');
	};
	const deleteToDo = async id => {
		await deleteDoc(doc(db, 'todos', id));
	};
	return (
		<div className='main-box'>
			<div className='container'>
				<h1>ToDo List</h1>
				<form onSubmit={createToDo} className='form' action=''>
					<input
						value={input}
						onChange={element => {
							setInput(element.target.value);
						}}
						type='text'
						placeholder='Add ToDo:'
						className='add-todo-input'
					/>
					<button className='addtodo-button' type='submit'>
						<AiOutlinePlus size={40} className='plus' />
					</button>
				</form>
				<ul className='todo-list-container'>
					{todos.map((todo, index) => (
						<ToDo
							todo={todo}
							key={index}
							index={index}
							toggleComplete={toggleComplete}
							deleteToDo={deleteToDo}
						/>
					))}
				</ul>
				<span className='todos-count'>
					{todos.length < 1 ? (
						'Ваш список дел пуст'
					) : todos.length === 1 ? (
						<span>{`У вас ${todos.length} запланированое дело`}</span>
					) : todos.length < 5 && todos.length > 1 ? (
						<span>{`У вас ${todos.length} запланированых дела`}</span>
					) : (
						<span>{`У вас ${todos.length} запланированых дел`}</span>
					)}
				</span>
			</div>
		</div>
	);
};

export default TodoList;
