import { Link } from 'preact-router/match';
import ThemeTogglerButton from '../../theme/togglerButton';
import mainLogo from '../../assets/logo.svg'

const Header = () => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
		<Link className="navbar-brand" href="/"><img src={mainLogo} height="30" alt=""/></Link>
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
