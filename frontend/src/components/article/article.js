import { h, Component } from 'preact';

import ArticleMiniList from './articleMiniList';


export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state = { 
            articleId: this.props.articleId,
            article: {
                title: '',
                author: '',
				body: '',
				summary: '',
				tags: [],
                date: {
                    $date: ''
                }
            }
		 };
	}
	setMetaData = (data) => {
		var metadata = document.getElementsByTagName('meta');
		metadata["description"].content = data.summary;
		console.log(data.tags)
		metadata["keywords"].content = data.tags.map(e => e.name).join(', ');
		document.title = `Libamen - ${data.title}`;
	}
    fetchArticle = (articleId) => {
		fetch('/api/article-by-title?article_title=' + articleId)
			.then(res => res.json())
			.then(data => this.setState({ article: data }, this.setMetaData(data)));
		
	}

	componentDidMount() {
		this.fetchArticle(this.state.articleId);
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.articleId !== nextProps.articleId) {
			this.setState({ articleId: nextProps.articleId}, this.fetchArticle(nextProps.articleId));
		}
		
	 }
    
    formatDate(articleDate) {
        var date = new Date(articleDate);
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    }

	render({}, { article }) {
		return (
            <div className="m-3">
				<div class="d-flex w-100 justify-content-center mt-2 col-xl-8 col-lg-7">
					<h1>{article.title}</h1>
				</div>
				<div className="row">
					<div className="col-xl-8 col-lg-7 border-right mt-2">
						<div dangerouslySetInnerHTML={{__html: article.body}} />
						<div class="d-flex w-100 justify-content-between">
							<small>{article.author}</small>
							<small>{this.formatDate(article.date.$date)}</small>
						</div>
					</div>
					<div className="col-xl-4 col-lg-5 mt-2">
						<h5>Recommended Articles</h5>
						<ArticleMiniList articleId={this.props.articleId}/>
					</div>
				</div>
			</div>
		);
	}
}
