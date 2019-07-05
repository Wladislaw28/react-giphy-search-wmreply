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

    //метод 1 : получ отфильтр массива(из GiphyList-компонента - 19стр.) в LocalSt и измен стейта
    componentDidMount = () => {
        const saveImages = JSON.parse(localStorage.getItem("saveImg") || "[]");
        this.setState({
            saveImagesData: saveImages
        })
    };


    //метод 2 :
    //получение concat-массива и измен стейта
    // componentDidMount = () => {
    //     const saveImages = JSON.parse(localStorage.getItem("saveImg") || "[]");
    //     this.setState({
    //         saveImagesData: saveImages
    //     })
    // };
    //создан concat-массива из сохран стейта компонента и отфильтров массива из GiphyList-компонента(19стр)
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
    //сохранение стейта компонента перед удалением
    // componentWillUnmount = () => {
    //         const saveState = JSON.stringify(this.state.saveImagesData);
    //         localStorage.setItem("saveState", saveState);
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
