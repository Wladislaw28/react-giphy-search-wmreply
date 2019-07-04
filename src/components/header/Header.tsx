import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.css';
import {HeaderProps} from '../../interface'

class Header extends React.Component<HeaderProps, {}>{
	render(){
		return(
			<div className="header">
				<div className="container-fluid">
					<div className="row no-gutters menu">
						<div className="col-md-6 col-lg-3 logo_header">
							<NavLink exact to="/">WL28</NavLink>
						</div>
						<div className="col-md-6 col-lg-9 d-none d-lg-block d-xl-block">
							<nav className="d-flex flex-row-reverse">
								<ul className="p-2 nav_header">
									<li>
                                        <button className="active-giphy__button">
                                            <Link to={{
                                                pathname: `/savegiphy`,
                                                state: { saveData: this.props.dataImg }
                                            }}>Save</Link>
                                        </button>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
