import * as React from 'react';
import GiphyList from './components/giphy-list/GiphyList';
import Title from './components/title/Title';
import Header from './components/header/Header';

import './App.css';

const API_KEY = "QnJhWIXwS59aPWO6hXi0rUIDNqEZ4mwj";

interface Original{
    url: string;
    width: string;
    height: string;
    size: string;
    frames: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
    hash?: string;
}

interface Images{
    original: Original;
    '480w_still': {
        url: string;
        width: string;
        height: string;
    };
}

export interface ImagesData {
    type: string;
    id: string;
    url: string;
    bitly_gif_url: string;
    bitly_url: string;
    username: string;
    rating: string;
    title: string;
    is_sticker: number;
    source: string;
    images: Images
}

interface AppState {
    imagesData: ImagesData[];
    valueText: string;
}

class App extends React.Component<{}, AppState>{

	state = {
		imagesData: [],
		valueText: ''
	};

	getGiphy = async (type: string, valueTextUrl: string) => {
		const api_call = await fetch(`http://api.giphy.com/v1/${type}/search?q=${valueTextUrl}&api_key=${API_KEY}`);
		const data = await api_call.json();
		this.setState ({
			imagesData: data.data
		});
	};

	componentDidMount = () => {
		// @ts-ignore
        const json: string  = localStorage.getItem("giphys");
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

				<h1 className="valueText_h1">{valueText}</h1>
				<GiphyList imagesData={imagesData} />
			</div>
		);
	}
}

export default App;
