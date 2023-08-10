import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Regular from './components/Regular';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route index element={<Home />} />
					<Route path='/regular' element={<Regular />} />
					<Route path='/todolist' element={<TodoList />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
