import { h, Component } from 'preact';
import { Link } from 'preact-router/match';


export default class ArticleMiniCard extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			article: this.props.article
         };
	}
	
	componentWillReceiveProps(newProps) {
		if (this.props.articleId !== newProps.article) {
			this.setState({ article: newProps.article });
		}
	 }

	render({}, { article }) {
		return (
            <Link href={"/article/" + article.title.replace(/ /g, '-').toLowerCase()} class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-center">
                    <small>{article.title}</small>
                </div>
            </Link>
		);
	}
}
