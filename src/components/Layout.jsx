import { NavLink } from 'react-router';
import { Logo } from './Logo';
import  '../styles/layout.css';



export const Layout = ({children}) => {
	return(
		<div className="layout">
			<header className='container'>
				<nav >
					<Logo width='150' height='60'/>
					<ul>
						<li>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
							>
								Accueil
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
							>
								A propos
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main className='container'>
				<div className='wrapperContentMain'>
					{children}
				</div>
			</main>
			<footer>
				<div className='wrapperContentFooter'>
					<Logo color="white" width='120' height='50' />
					<p>© 2020 Kasa. All rights reserved</p>
				</div>
			</footer>
		</div>
	)
}
