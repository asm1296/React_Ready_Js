import React from 'react';
import orangeComponent from './OrangeComponent.module.css';
import PopUpForm from './Layer3/PopUpForm'
import { connect } from 'react-redux';

class OrangeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            openPopup : false,
            username : ''
        }
    }

    popupHandler = () =>{
        this.setState({
            openPopup : !this.state.openPopup
        })
    }

    


    render(){
        return(
            <div className={orangeComponent.orangeContainer}>
                <div className={orangeComponent.orangeSection}>
                    {this.props.userna.length > 0 ? <h3 style={{color:"rgba(8, 201, 201, 0.911)"}}> Hello {this.props.userna}</h3> : null}
                    <button className={orangeComponent.buttonBlock} onClick={this.popupHandler}>ADD PRODUCT</button>
                    <h4 style={{color:"rgba(8, 201, 201, 0.911)"}}> Available Products : {this.props.productCount} </h4>
                    { this.state.openPopup && <PopUpForm popupChange={this.popupHandler} id={this.props.productCount} addProduct={this.props.addProduct}></PopUpForm>}
                </div>
            </div>
        );
    }
    
}

function mapStateToProps(state){
    return {
        userna : state.username
    }
}

export default connect(mapStateToProps)(OrangeComponent);