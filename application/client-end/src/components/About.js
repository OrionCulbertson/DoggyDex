import React from 'react';
import '../App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu';
import { TEAMMEMBER } from '../components/shared/Person';

import {StyledLink} from "./style";

class About extends React.Component {					
	constructor(props){
		super(props);
		this.state = {
			person: TEAMMEMBER
		};
	}

    render(){
        return (
       <section className='About'>
        <h1>This is the About me page</h1>



      



            <Navbar color="primary">
              <div className="container" id="brand">
                <NavbarBrand>Team Members</NavbarBrand>
              </div>
            </Navbar>
    
            <Menu person={this.state.person} />
            </section>
        );
      }
      }
      


      export default About;
