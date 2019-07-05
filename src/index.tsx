import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/loader/Loading';
import * as serviceWorker from './serviceWorker';

const LoadableApp = Loadable({
    loader: () => import(/* webpackChunkName: "giphy" */'./App'),
    loading: Loading,
    timeout: 10000,
    delay: 500
});

const LoadableGiphyItem = Loadable({
    loader: () => import(/* webpackChunkName: "giphyitem" */'./components/giphy-item/GiphyItem'),
    loading: Loading,
    timeout: 10000,
    delay: 500
});

const LoadableSave = Loadable({
    loader: () => import(/* webpackChunkName: "savegiphy" */'./components/save-giphy/Save'),
    loading: Loading,
    timeout: 10000,
    delay: 500
});

ReactDOM.render((
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={LoadableApp}/>
			<Route path="/giphyitem/:id" component={LoadableGiphyItem} />
			<Route path="/savegiphy" component={LoadableSave} />
		</Switch>
	</BrowserRouter>
), document.getElementById('root') as HTMLElement );

serviceWorker.unregister();
