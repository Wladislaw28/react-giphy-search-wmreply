import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import GiphyItem from './components/giphy-item/GiphyItem';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/giphyitem/:id" component={GiphyItem} />
		</Switch>
	</BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
