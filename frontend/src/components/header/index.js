import { Link } from 'preact-router/match';

const Header = () => (
	<nav className="navbar navbar-dark bg-dark" >
		<Link className="navbar-brand" href="/">Libamen</Link>
		<div id="navbarNav">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" href="/">Home</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Header;
