import * as React from 'react';
import { Link } from 'react-router-dom';
import './GiphyList.css';
import Lazyload from 'react-lazyload';
import {GiphyListProps} from '../../interface';

class GiphyList extends React.PureComponent<GiphyListProps, {}>{

	getDataId = (id: string) => {
	    alert("You saved this image");
		const dataI = this.props.imagesData.filter((image) => image.id === id );
        const dataISave = dataI["0"];
        this.getLocalStorage(dataISave);
	};

     getDataRemove = (id: string) => {
        const saveImages = JSON.parse(localStorage.getItem("gifsave") || "[]");
        const dataR = saveImages.filter((image) => image.id !== id );
        localStorage.setItem("gifsave", JSON.stringify(dataR));
         window.location.reload(true);
    };

    getLocalStorage = (dataISave : Object) => {
        if (localStorage.getItem("gifsave") !== null) {
            // @ts-ignore
            const parseGiphy = JSON.parse(localStorage.getItem("gifsave"));
            parseGiphy.push(dataISave);
            localStorage.setItem("gifsave", JSON.stringify(parseGiphy));
        } else {
            const gifsave = new Array();
            gifsave.push(dataISave);
            localStorage.setItem("gifsave", JSON.stringify(gifsave));
        }
    };

	render(){
		const {imagesData, isSimilar} = this.props;
		return(
				<div className="grid">
					{imagesData.map((image) => (
						<Lazyload throttle={200} height={300} key={image.id}>
							<div className="grid__item" >
								<div>
									<div className="grid__item-imgwrap">
										<img className="grid__item-img grid__item-img--scaled"
                                             src={image.images.original.url} alt={image.title}/>
									</div>
									<div className="grid__item-content">

										<h2 className="grid__item-title">
											{image.title.length < 20 ? `${image.title}` :
                                                `${image.title.substring(0,25)}...` }
										</h2>

                                        {isSimilar === false ? <div>
                                            <button className="giphy_buttons">
                                                <Link to={{
                                                    pathname: `/giphyitem/${image.id}`,
                                                    state: { giphTitle: image.title,
                                                        giphUrl: image.images.original.url,
                                                        giphSource: image.source,
                                                        giphUrlInGiphyCom: image.url}
                                                }}>View {image.is_sticker !== 1 ? 'Giphy' : 'Stick'}</Link>
                                            </button>

                                            <button onClick={() => this.getDataId(image.id)}
                                                    className="giphy_buttons">Save</button>
                                        </div>
                                            : <button onClick={() => this.getDataRemove(image.id)}
                                                      className="giphy_buttons">Delete</button>}
									</div>
								</div>
							</div>
						</Lazyload>
					))}
				</div>
		);
	}
}

export default GiphyList;
