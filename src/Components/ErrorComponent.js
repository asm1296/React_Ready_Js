import React from 'react'

class ErrorComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={ hasError : false}
    }

    static getDerivedStateFromError(error){
      return{hasError : true}  
    }

    render(){
        if (this.state.hasError){
           return (<h2> Something Went Wrong</h2>);
        }
        else {
            return (this.props.children);
        }
    }
}

export default ErrorComponent;