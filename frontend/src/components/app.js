import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { ThemeContext, themes } from '../theme/theme-context';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import ArticlePage from '../routes/article';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.toggleTheme = () => {
			this.setState(state => ({
				theme:
				state.theme === themes.dark
				? themes.light
				: themes.dark,
			}));
		};
		this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme,
		};
	}
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<ThemeContext.Provider value={this.state}>
				<div id="app" className={this.state.theme.className}>
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<ArticlePage path="/article/:id" />
					</Router>
				</div>
			</ThemeContext.Provider>
		);
	}
}
