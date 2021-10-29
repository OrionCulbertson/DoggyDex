import React from 'react';
import { Media } from 'reactstrap';
//import './media.css';

class Menu extends React.Component {
	constructor(props){
		super(props);	
		this.state = {};
	}
	render(){
		const menu = this.props.person.map((person) => {
			return(
				<div key={person.id} id="unit" className="col-12 mt-5">					
					<Media tag="li">
						<Media left>
							<Media object src={person.image} alt={person.name} />
						</Media>
						<Media body className="ml-3">
							<Media heading><strong>{person.name}</strong></Media>
							<div><strong>Country of origin - </strong>{person.country}</div>
							<div><strong>About: </strong>{person.description}</div>
							<div><strong>Info source </strong>- {person.source}</div>
						</Media>
					</Media>
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="row">
					<Media list>
						{menu}
					</Media>
				</div>
			</div>
		);
	}
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default Menu;