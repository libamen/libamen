import { h, Component } from 'preact';

import ArticleList from '../../components/article/articleList';


export default class Home extends Component {
	render() {
		return (
			<div className="container col-xl-8 col-lg-9 col-md-10 col-sm-12" >
				<div class="list-group">
					<ArticleList/>
				</div>
			</div>
		);
	}
}
