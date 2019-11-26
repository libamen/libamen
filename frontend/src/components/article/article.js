import { h, Component } from 'preact';


export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state = { 
            articleId: this.props.articleId,
            article: {
                title: '',
                author: '',
                body: '',
                date: {
                    $date: ''
                }
            }
		 };
    }
    fetchArticle = () => {
		fetch('http://192.168.1.101:5000/article?article_id=' + this.state.articleId)
			.then(res => res.json())
			.then(data => {this.setState({ article: data }); console.log(data);});
	}

	componentDidMount() {
        this.fetchArticle();
        console.log(this.state.article);
    }
    
    formatDate(articleDate) {
        var date = new Date(articleDate);
        return date.getFullYear() + "-" + "-" + date.getMonth() + "-" + date.getDate();

    }

	render({}, { article }) {
		return (
            <div class="m-3">
                <div class="d-flex w-100 justify-content-center">
                    <h1>{article.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{__html: article.body}} />
                <div class="d-flex w-100 justify-content-between">
                    <small>{article.author}</small>
                    <small>{this.formatDate(article.date.$date)}</small>
                </div>
            </div>
		);
	}
}
