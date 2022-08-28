import React from 'react';
import GreenComponent from './Layer3/GreenComponent';
import yellowContainer from './YellowComponent.module.css';

class YellowComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
                products : [
                    {
                    id:1,
                    type : "T-Shirts",
                    price : "599",
                    description : "With M,L,XL,XXL Size"
                },
                    {
                    id:2,
                    type : "Shoes",
                    price : "999",
                    description : "With 7,8,9,10,11 Size"
                },
                    {
                    id:3,
                    type : "Trousers",
                    price : "799",
                    description : "With M,L,XL,XXL Size"
                },
                    {
                    id:4,
                    type : "Shirts",
                    price : "799",
                    description : "With M,L,XL,XXL Size"
                }
                ]
                
        }
    }

    componentDidMount(){
        this.props.setProductCount(this.state.products.length);
    }

    filterProducts=(prd)=>{
        if(prd == this.state.products[0]){
            return <GreenComponent focus = {true} removeProduct={this.removeProduct} setProductCount={this.props.setProductCount} productCount={this.state.products.length} productID = {prd.id}  productName ={prd.type} productPrice={prd.price} productDescription={prd.description}></GreenComponent>
        }
        else {
            return <GreenComponent focus ={false} removeProduct={this.removeProduct} setProductCount={this.props.setProductCount} productCount={this.state.products.length} productID = {prd.id} productName ={prd.type} productPrice={prd.price} productDescription={prd.description}></GreenComponent>
        }
    }

    removeProduct=(id)=>{
       let newProducts = this.state.products;
       let index = newProducts.findIndex((prd)=>{
           return prd.id == id
       })
        newProducts.splice(index,1);
        this.setState({
            products : newProducts
        })
    }

   componentDidUpdate(){
       if(this.props.throwError){
           throw new Error();
       }
       console.log(this.state.products);
   }

    render(){
        const {products} = this.state;
        // let newGreenComponent = products.map(product=><GreenComponent productName ={product.type} productPrice={product.price} productDescription={product.description}></GreenComponent>)
        // let newGreenComponent = products.filter(product => this.filterProducts(product));
        let newGreenComponent = products.filter(product=>product == this.state.products[0]).map(prd=><GreenComponent focus ={true} removeProduct={this.removeProduct} setProductCount={this.props.setProductCount} productCount={this.state.products.length} productID = {prd.id}  productName ={prd.type} productPrice={prd.price} productDescription={prd.description}></GreenComponent>);
        let anotherGreenComponent = products.filter(product=>product != this.state.products[0]).map(prd=><GreenComponent focus ={false} removeProduct={this.removeProduct} setProductCount={this.props.setProductCount} productCount={this.state.products.length} productID = {prd.id} productName ={prd.type} productPrice={prd.price} productDescription={prd.description}></GreenComponent>);

        return(
            <div className={yellowContainer.container}>
                {newGreenComponent}
                {anotherGreenComponent}
            </div>
        );
    }
}

export default YellowComponent;