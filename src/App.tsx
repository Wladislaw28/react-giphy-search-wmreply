import * as React from 'react';
import GiphyList from './components/giphy-list/GiphyList';
import Title from './components/title/Title';
import Header from './components/header/Header';
import {API_KEY} from './constants';
import {ImagesData, AppState} from './interface';

import './App.css';

class App extends React.Component<{}, AppState>{

	state = {
		imagesData: [],
		valueText: '',
        dataImg: []
	};

	getGiphy = async (type: string, valueTextUrl: string) => {
		const api_call = await fetch(`http://api.giphy.com/v1/${type}/search?q=${valueTextUrl}&api_key=${API_KEY}`);
		const data = await api_call.json();
		this.setState ({
			imagesData: data.data
		});
	};

    componentWillMount = () => {
        if (localStorage.getItem("giphys") === null) {
            this.getGiphy('gifs', 'trending');
        } else {
             this.getLocalStorage();
        }
    };

    getLocalStorage = () => {
        const json: string | null  = localStorage.getItem("giphys");
        // @ts-ignore
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

    updateData(config: ImagesData[]) {
        this.setState({
            dataImg: config
        });
    };

	render(){
		const {imagesData, valueText} = this.state;
		return (
			<div className="App">
				<Header dataImg={this.state.dataImg} />
				<Title title="Giphy Application" />

				<span className="input input--hoshi	">
					<input className="input__field input__field--hoshi" type="text"
                           onChange={this.handleInputChange} value={valueText}/>
					<label className="input__label input__label--hoshi input__label--hoshi-color-1"
                           htmlFor="input-4">
					</label>
				</span>

				<button onClick={() => this.getGiphy("gifs", valueText)} className="giphy_buttons">GIPHY</button>
				<button onClick={() => this.getGiphy("stickers", valueText)} className="giphy_buttons">STICKERS</button>

				<h1 className="valueText_h1">{valueText}</h1>
				<GiphyList isSimilar={false} updateData={this.updateData.bind(this)} imagesData={imagesData} />
			</div>
		);
	}
}

export default App;
