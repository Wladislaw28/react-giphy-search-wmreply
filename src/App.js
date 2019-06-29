import React from 'react';
import Form from './components/search/Form';
import GiphyList from './components/giphy-list/GiphyList';
import Title from './components/title/Title';
import Header from './components/header/header';

import './App.css';

const API_KEY = "QnJhWIXwS59aPWO6hXi0rUIDNqEZ4mwj";

class App extends React.Component{

	state = {
		imagesData: [],
		valueText: ''
	};

	getGiphy = async (type, valueTextUrl) => {
	// .replace(/\s/g, '+')
		const api_call = await fetch(`http://api.giphy.com/v1/${type}/search?q=${valueTextUrl}&api_key=${API_KEY}&limit=10`);

		const data = await api_call.json();
		this.setState ({
			imagesData: data.data
		});
		console.log(this.state.imagesData);
	};

	componentDidMount = () => {
		const json = localStorage.getItem("giphys");
		const giphys = JSON.parse(json);
		this.setState({
			imagesData: giphys
		})
	};

	componentDidUpdate = () => {
		const giphys = JSON.stringify(this.state.imagesData);
		localStorage.setItem("giphys", giphys);
	};

	handleInputChange = ({ target: { value } }) => {
		this.setState({
			valueText: value,
		})
	};

	render(){
		const {imagesData, valueText} = this.state;
		return (
			<div className="App">
				<Header />
				<Title title="Giphy Application" />

				<span className="input input--hoshi	">
					<input className="input__field input__field--hoshi" type="text" onChange={this.handleInputChange} value={valueText}/>
					<label className="input__label input__label--hoshi input__label--hoshi-color-1" htmlFor="input-4">
					</label>
				</span>

				<button onClick={() => this.getGiphy("gifs", valueText)} className="giphy_buttons">GIPHY</button>
				<button onClick={() => this.getGiphy("stickers", valueText)} className="giphy_buttons">STICKERS</button>

				<GiphyList giphyData={imagesData} />
			</div>
		);
	}
}

export default App;
