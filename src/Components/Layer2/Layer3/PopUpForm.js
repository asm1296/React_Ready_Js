import React from 'react';
import ReactDOM from 'react-dom';
import popupcss from './PopUpForm.module.css';

const popupContainer = document.getElementById('popup-form');

class PopUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            type:'',
            price:0,
            description:''
        }
        this.newDiv = document.createElement('div');

        this.nameRef = React.createRef();
        this.priceRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    componentDidMount(){
        popupContainer.appendChild(this.newDiv);
    }

    componentWillUnmount(){
        popupContainer.removeChild(this.newDiv);
    }

    addProductHandler =()=>{
        let newid = this.props.id + 1;
        let newPrd = {id:newid,type:this.nameRef.current.value,price:this.priceRef.current.value,description:this.descriptionRef.current.value};
        // let newPrd = {id:newid,type:this.state.type,price:this.state.price,description:this.state.description};
        this.props.addProduct(newPrd);
        this.props.popupChange();
    }

    /* inputHandler = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    } */

    render(){
        return ReactDOM.createPortal(
            <div className={popupcss.oneDiv}>
                <div className={popupcss.secondDiv}>
                    <h3 className={popupcss.addProduct}> Add Product </h3>
                    <span className={popupcss.close} onClick={this.props.popupChange}> X </span>
                    <label className={popupcss.itemLabel}> Name : </label>
                    <input className={popupcss.itemInput} type="text" ref={this.nameRef} name="type"></input>
                    <label className={popupcss.itemLabel}> Price : </label>
                    <input className={popupcss.itemInput} type="text" ref={this.priceRef} name="price"></input>
                    <label className={popupcss.itemLabel}> Description : </label>
                    <input className={popupcss.itemInput} type="text" ref={this.descriptionRef} name="description"></input>
                    <button className={popupcss.buttonBlock} onClick={this.addProductHandler}> Add </button>
                </div>
            </div>
            ,this.newDiv,)
    }
}

export default PopUpForm;