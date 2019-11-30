import { h, Component } from 'preact';
import { Link } from 'preact-router/match';


export default class ArticleCard extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			article: this.props.article
		 };
	}

	render({}, { article }) {
		return (
            <Link href={"/article/" + article._id.$oid} class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h4>{article.title}</h4>
                    <small>Author: {article.author}</small>
                </div>
                <p>{article.summary}</p>
            </Link>
		);
	}
}
