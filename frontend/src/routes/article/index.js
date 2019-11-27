import { h, Component } from 'preact';

import Article from '../../components/article/article';


export default class ArticlePage extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			articleId: this.props.id
		 };
	}
	componentWillReceiveProps (nextProps) {
		this.setState({ articleId: nextProps.id });
	 }

	render() {
		return (
			<div className="container col-xl-9 col-lg-11 col-md-11 col-sm-12">
				<Article articleId={this.state.articleId}/>
			</div>
		);
	}
}
