import { h, Component } from 'preact';

import ArticleCard from './articleCard';


export default class ArticleList extends Component {
	constructor() {
		super();
		this.state = { 
			articles: []
		 };
	}
	
	fetchArticles = () => {
		
		fetch('/api/articles')
			.then(res => res.json())
			.then(data => this.setState({ articles: data.articles }));
	}

	componentDidMount() {
		this.fetchArticles();
    }
    

    getAricles() {
        const articles = this.state.articles;
        let entries = [];
        var article;
        for (article in articles) {
            entries.push(<ArticleCard article={articles[article]}/>)
        }
        return entries;
    }

	render() {
		return (
            <div className="list-group">{this.getAricles()}</div>
		);
	}
}
