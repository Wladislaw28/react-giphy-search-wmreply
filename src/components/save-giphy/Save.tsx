import  React,{ Suspense, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import {SaveState, SaveProps} from '../../interface';
import Loading from '../loader/Loading';

import './Save.css'

const GiphyList = lazy(() => import('../giphy-list/GiphyList'));

class Save extends React.Component<SaveProps,SaveState>{

	state = {
		saveImagesData : [],
	};

    componentDidMount = () => {
        const saveImages = JSON.parse(localStorage.getItem("gifsave") || "[]");
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
                        <Suspense fallback={<div><Loading /></div>}>
                            <GiphyList imagesData={saveImagesData} isSimilar={true} />
                        </Suspense>
                    </div>
                    :  <h3 className="active-giphy__title__similar">No Save Images</h3>
                }
			</div>
		)
	}
}

export default Save;
