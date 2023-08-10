import { FaRegTrashAlt } from 'react-icons/fa';

const ToDo = ({ todo, index, toggleComplete, deleteToDo }) => {
	return (
		<li className='todo-list-element'>
			<div className='todo-list-box'>
				<input
					type='checkbox'
					className='ckeckbox-check'
					id={index}
					checked={todo.completed ? 'checked' : ''}
					onChange={() => {
						toggleComplete(todo);
					}}
				/>
				<label
					htmlFor={index}
					className='todo'
					onClick={() => {
						toggleComplete(todo);
					}}
				>
					{todo.value}
				</label>
			</div>
			<button
				type='button'
				className='trash-button'
				onClick={() => {
					deleteToDo(todo.id);
				}}
			>
				<FaRegTrashAlt className='trash-bucket' />
			</button>
		</li>
	);
};

export default ToDo;
