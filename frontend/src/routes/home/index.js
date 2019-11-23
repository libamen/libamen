import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	constructor() {
		super();
		this.state = { 
			article: {
				title: 'Green',
				author: '',
				body:'' 
			}
		 };
	}
	
	fetchArticle = () => {
		fetch('http://127.0.0.1:5000/article')
			.then(res => res.json())
			.then(data => this.setState({ article: data }));
	}

	componentDidMount() {
		this.fetchArticle();
	}

	render({}, { article }) {
		return (
			<div class={style.home}>
				<h1>Title: {article.title}</h1>
				<h3>Author: {article.author}</h3>
				<div dangerouslySetInnerHTML={{__html: article.body}} />
			</div>
		);
	}
}

