import React from 'react';
import template from '../../../Template.png'
import greenComponent from './GreenComponent.module.css'

class GreenComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }

        this.inputRef = React.createRef();
    }

    removeThisProduct=()=>{
        this.props.removeProduct(this.props.productID);
    }

    componentDidMount(){
        if(this.props.focus){
            document.getElementById('focusable').focus();
        }
    }

    componentWillUnmount(){
        let count = this.props.productCount - 1;
        this.props.setProductCount(count);
    }

    render(){
        return(
            <div id="focusable" tabIndex={0} className={greenComponent.card} ref={this.inputRef}>
                <img src={template} alt="Template" style={{width:"100%"}} />
                <div className={greenComponent.container}>
                    <h2 style={{color:"rgba(8, 201, 201, 0.911)"}}>{this.props.productName}</h2>
                    <h3> RS. {this.props.productPrice}</h3>
                    <h5>{this.props.productDescription}</h5>
                    <button className={greenComponent.buttonBlock}>View Details</button>
                    <button className={greenComponent.buttonBlock} onClick={this.removeThisProduct}>Remove Product</button> 
                </div>          
            </div>
        );
    }
    
}

export default GreenComponent;