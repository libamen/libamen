import { Link } from 'preact-router/match';
import ThemeTogglerButton from '../../theme/togglerButton';

const Header = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
		<Link className="navbar-brand" href="/">Libamen</Link>
		<div id="navbarNav" className="collapse navbar-collapse">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link className="nav-link" href="/">Home</Link>
				</li>
			</ul>
			<div className="text-secondary">
				<ThemeTogglerButton/>
			</div>
		</div>
	</nav>
);

export default Header;
