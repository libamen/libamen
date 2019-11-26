import { h, Component } from 'preact';

import Article from '../../components/article/article';


export default class ArticlePage extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			articleId: this.props.id
		 };
    }

	render() {
		return (
			<div className="container col-xl-8 col-lg-9 col-md-10 col-sm-12" >
				<Article articleId={this.state.articleId}/>
			</div>
		);
	}
}
