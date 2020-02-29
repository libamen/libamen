import { h, Component } from 'preact';

import ArticleMiniCard from './articleMiniCard';


export default class ArticleMiniList extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			articles: [],
			articleId: props.articleId
		 };
	}
	
	fetchArticles = (articleId) => {
		fetch('https://api.libamen.tech/api/articles/recommended?article_title='+ articleId)
			.then(res => res.json())
			.then(data => this.setState({ articles: data.articles }));
	}

	componentDidMount() {
		this.fetchArticles(this.state.articleId);
	}
	
	componentWillReceiveProps(newProps) {
		if (this.props.articleId !== newProps.articleId) {
			this.fetchArticles(newProps.articleId);
		}
	 }
    

    getAricles() {
        const articles = this.state.articles;
        let entries = [];
        var article;
        for (article in articles) {
			entries.push(<ArticleMiniCard article={articles[article]}/>)
        }
        return entries;
    }

	render() {
		return (
            <div className="list-group">{this.getAricles()}</div>
		);
	}
}
