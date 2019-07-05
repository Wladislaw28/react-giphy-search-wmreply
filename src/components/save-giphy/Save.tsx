import * as  React from 'react';
import { NavLink } from 'react-router-dom';
import {SaveState, SaveProps} from '../../interface';
import Loading from '../loader/Loading';
import Lazyload from 'react-lazyload'

import '../giphy-list/GiphyList.css'

class Save extends React.Component<SaveProps,SaveState>{

	state = {
		saveImagesData : [],
	};

    componentDidMount = () => {
        const saveImages = JSON.parse(localStorage.getItem("gifs") || "[]");
        this.setState({
            saveImagesData: saveImages
        });
    };

   	render(){
		const {saveImagesData} = this.state;
		return(
			<div>
				<button className="active-giphy__button">
					<NavLink to="/">Go Home</NavLink>
				</button>
                {saveImagesData.length > 0 ?
                    <div>

                        <h3 className="active-giphy__title__similar">Save Images</h3>
                        <div className="grid">
                            {saveImagesData.map((item) => (
                                <Lazyload throttle={200} height={300} key={item}>
                                    <div className="grid__item" >
                                        <div className="grid__item-imgwrap">
                                            <img className="grid__item-img grid__item-img--scaled"
                                                 src={item} alt={item}/>
                                        </div>
                                    </div>
                                </Lazyload>
                            ))}
                        </div>

                    </div>
                    :  <h3 className="active-giphy__title__similar">No Save Images</h3>
                }
			</div>
		)
	}
}

export default Save;
