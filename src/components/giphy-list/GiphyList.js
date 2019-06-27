import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from '../giphy-item/Modal';
import './GiphyList.css';

// class GiphyList extends React.Component{
//
// 	state = {
// 		isOpen: false,
// 	}
//
// 	openModal = () => {
// 		this.setState({ isOpen: true });
// 	}
//
// 	handleSubmit = () => {
// 		console.log('Submit function!');
// 		this.setState({ isOpen: false });
// 	}
//
// 	handleCancel = () => {
// 		console.log('Cancel function!');
// 		this.setState({ isOpen: false });
// 	}
//
// 	render(){
// 		return(
// 			<div className="container">
// 				<div className="row">
// 					{this.props.giphyData.map((giph) => {
// 						return(
// 							<div key={giph.id} className="col-md-4">
// 								<div className="giphy__box">
// 									<img className="giphy__box-img" src={giph.images.original.url} alt={giph.title}/>
// 									<div className="giphy__text">
// 										<h2 className="giphy__title">
// 											{giph.title.length < 20 ? `${giph.title}` : `${giph.title.substring(0,25)}...` }
// 										</h2>
// 									</div>
// 									<button onClick={this.openModal} className="giphy_buttons">View Giphy</button>
// 									<Modal
// 										title={giph.title}
// 										isOpen={this.state.isOpen}
// 										onCancel={this.handleCancel}
// 										onSubmit={this.handleSubmit}
// 									/>
// 								</div>
// 							</div>
// 						)
// 					})}
// 				</div>
// 			</div>
// 		);
// 	}
// }
const GiphyList = (props) => (

		<div className="grid">

				{props.giphyData.map((giph) => (
					<div className="grid__item">
						<div key={giph.id}>
							{console.log(giph.title)}
								<div className="grid__item-imgwrap">
									<img className="grid__item-img grid__item-img--scaled" src={giph.images.original.url} alt={giph.title}/>
								</div>
								<div className="grid__item-content">
									<h2 className="grid__item-title">
										{giph.title.length < 20 ? `${giph.title}` : `${giph.title.substring(0,25)}...` }
									</h2>

								{console.log(giph.id)}
								<button className="giphy_buttons">
									<Link to={{
										pathname: `/giphyitem/${giph.id}`,
										state: { giphTitle: giph.title }
									}}>View Giphy</Link>
								</button>
								</div>
						</div>
					</div>
				))}

		</div>
);

export default GiphyList;
