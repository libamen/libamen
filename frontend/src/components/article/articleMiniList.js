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
	
	fetchArticles = () => {
		fetch('http://192.168.1.101:5000/articles')
			.then(res => res.json())
			.then(data => this.setState({ articles: data.articles }));
	}

	componentDidMount() {
		this.fetchArticles();
	}
	
	componentWillReceiveProps(newProps) {
		if (this.props.articleId !== newProps.articleId) {
			this.fetchArticles();
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
