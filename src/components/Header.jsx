import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header className='header'>
				<nav>
					<ul className='nav'>
						<li>
							<NavLink to='/' id='home'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/regular'>Regular</NavLink>
						</li>
						<li>
							<NavLink to='/todolist'>Todo List</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
