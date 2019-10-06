import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:null,
            header:''
        }
    }

    makeH1Jermaine(){
       console.log("ping")
       this.setState({
           header:'jermaine'
       })
    }

    render(){
        return(
            <div>
                <button className="counter"
                    onClick={() => this.makeH1Jermaine()}>
                    {this.state.value}
                </button>
                <h1>{this.state.header}</h1>

            </div>
           
        )
    }
}

export default Counter;