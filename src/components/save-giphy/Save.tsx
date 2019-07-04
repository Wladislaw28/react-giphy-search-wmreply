import * as React from 'react';
import { NavLink } from 'react-router-dom';
import GiphyList from '../giphy-list/GiphyList';
import {SaveState} from '../../interface';
import {SaveProps} from '../../interface';

import './Save.css'

class Save extends React.Component<SaveProps,SaveState>{

	state = {
		saveImagesData : [],
	};

    componentDidMount = () => {
        const saveImages = JSON.parse(localStorage.getItem("saveImg") || "[]");
        this.setState({
            saveImagesData: saveImages
        })
    };


    // componentWillMount = () => {
    //     const saveState_json1 = JSON.parse(localStorage.getItem("saveImg") || "[]");
    //
    //     const saveState_json_state1 = JSON.parse(localStorage.getItem("saveState") || "[]");
    //
    //     const savv = saveState_json1.concat(saveState_json_state1);
    //     const saveImages = JSON.stringify(savv);
    //     localStorage.setItem("saveImages", saveImages);
    // };
    //
    // componentWillUnmount = () => {
    //         const saveState = JSON.stringify(this.state.saveImagesData);
    //         localStorage.setItem("saveState", saveState);
    // };





    // componentWillMount = () => {
    //     const saveState_json: any = localStorage.getItem("saveState");
    //     const saveState_json1 = JSON.parse(saveState_json);
    //
    //     const s = this.props.location.state.saveData;
    //     const savv = s.concat(saveState_json1);
    //     const saveImages = JSON.stringify(savv);
    //     localStorage.setItem("saveImages", saveImages);
    // };
    //
    // componentWillUnmount = () => {
    //         const saveImages = JSON.stringify(this.state.saveImagesData);
    //         localStorage.setItem("saveState", saveImages);
    // };

	render(){
		// const saveImages = this.props.location.state.saveData;
		const {saveImagesData} = this.state;
		return(
			<div>
				<button className="active-giphy__button">
					<NavLink to="/">Go Home</NavLink>
				</button>
                {saveImagesData.length > 0 ?
                    <div>
                        <h3 className="active-giphy__title__similar">Save Images</h3>
                        {console.log(saveImagesData)}
                        <GiphyList imagesData={saveImagesData} isSimilar={true} />
                    </div>
                    :  <h3 className="active-giphy__title__similar">No Save Images</h3>
                }

                    {/*<div className="grid">*/}
                        {/*{saveImages.map((image) => (*/}
							{/*<Lazyload throttle={200} height={300} key={image.id}>*/}
                                {/*<div className="grid__item" >*/}
                                    {/*<div className="grid__item-imgwrap">*/}
                                        {/*<img className="grid__item-img grid__item-img--scaled" src={image.images.original.url} alt={image.title}/>*/}
                                    {/*</div>*/}
                                    {/*<div className="grid__item-content">*/}
                                        {/*<h2 className="grid__item-title">*/}
                                            {/*{image.title.length < 20 ? `${image.title}` : `${image.title.substring(0,25)}...` }*/}
                                        {/*</h2>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</Lazyload>*/}
                            {/*))}*/}
                    {/*</div>*/}
			</div>
		)
	}
}

export default Save;
