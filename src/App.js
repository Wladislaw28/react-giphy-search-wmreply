import React from 'react';
import Form from './components/search/Form';
import GiphyList from './components/giphy-list/GiphyList';
import Title from './components/title/Title';

import './App.css';

const API_KEY = "QnJhWIXwS59aPWO6hXi0rUIDNqEZ4mwj";

class App extends React.Component{

	state = {
		giphyData: []
	};

	getGiphy = async (e) => {
		const giphyName = e.target.elements.giphyName.value;
		console.log(giphyName);
		e.preventDefault();

	// .replace(/\s/g, '+')

		const api_call = await fetch(`http://api.giphy.com/v1/gifs/search?q=${giphyName}&api_key=${API_KEY}&limit=10`);

		const data = await api_call.json();
		this.setState ({
			giphyData: data.data
		});
		console.log(this.state.giphyData);
	};

	componentDidMount = () => {
		const json = localStorage.getItem("giphys");
		const giphys = JSON.parse(json);
		this.setState({
			giphyData: giphys
		})
	};

	componentDidUpdate = () =>{
		const giphys = JSON.stringify(this.state.giphyData);
		localStorage.setItem("giphys", giphys);
	};

	render(){
		const {giphyData} = this.state;
		return (
			<div className="App">
				<Title title="Giphy Application" />
				<Form getGiphy={this.getGiphy} />
				<GiphyList giphyData={giphyData} />
			</div>
		);
	}
}

export default App;
