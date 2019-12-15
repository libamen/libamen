import { h, Component } from 'preact';
import { Link } from 'preact-router/match';


export default class ArticleCard extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			article: this.props.article
		 };
	}

	createTags = () => {
		let tags = [];
		var tag;
		for(tag in this.state.article.tags) {
			var tagObj = this.state.article.tags[tag]
			tags.push(<span className="badge badge-pill badge-primary mx-1 tag" style={"background-color: " + tagObj.color}>{tagObj.name}</span>)
		}
		return tags;
	}

	render({}, { article }) {
		return (
            <Link href={"/article/" + article._id.$oid} class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h4>{article.title}</h4>
                    <small>Author: {article.author}</small>
                </div>
                <p>{article.summary}</p>
                {this.createTags()}
            </Link>
		);
	}
}
