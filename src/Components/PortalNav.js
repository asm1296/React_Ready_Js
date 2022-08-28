import React from 'react';
import logo from '../logo.svg';
import portalNav from './PortalNav.module.css'
import { Link } from 'react-router-dom';

class PortalNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className={portalNav.container}>
                <div className={portalNav.itemLogoTitle}>
                    <img className={portalNav.itemLogo} src={logo} alt="ReactLogo" style={{width:'175px', height:'100px'}}></img>
                    <h2 className={portalNav.itemTitle}>React Store</h2>
                </div>
                <div className={portalNav.itemShopLogin}>
                    <Link to="/Shop"><h3 className={portalNav.itemShop}>Shop</h3></Link>
                    <Link to="/Login"><h3 className={portalNav.itemLogin}>Login</h3></Link>
                </div>
            </div>
        );
    }
}

export default PortalNav;