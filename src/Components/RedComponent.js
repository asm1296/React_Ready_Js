import React from 'react';
import redcomponent from './RedComponent.module.css';
import OrangeComponent from './Layer2/OrangeComponent';
import YellowComponent from './Layer2/YellowComponent';
import ErrorComponent from './ErrorComponent'

class RedComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            noOfProducts : 0,
            newProduct : null,
            throwError : false
        }
    }

    changeProductCount = (no)=>{
        this.setState({
            noOfProducts : no
        },()=>(console.log(`Product Count change to ${this.state.noOfProducts}`)));
    }

    addProduct = (prd)=>{
        if (prd.type == ''){
            this.setState({
                throwError : true
            })
        }
        else{
            this.setState({
                newProduct:prd
            },()=>(console.log(this.state.newProduct)));
        }
    }

    render(){
        return(
            <div className={redcomponent.container}>
                <OrangeComponent className={redcomponent.item1} productCount={this.state.noOfProducts} addProduct={this.addProduct}></OrangeComponent>
                <ErrorComponent>
                    <YellowComponent className={redcomponent.item2} setProductCount={this.changeProductCount} newPrd={this.state.newProduct} throwError={this.state.throwError}></YellowComponent>
                </ErrorComponent>
                                
            </div>
        );
    }
}

export default RedComponent;