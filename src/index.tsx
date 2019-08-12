import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

interface IProps{
    color:string;
}
interface IState{
    counter:number;
}
class App extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {counter: 0}
    }
    increment=()=>{
        this.setState({
            counter: this.state.counter +1
        });
    }
    decrement=()=>{
        this.setState({
            counter: this.state.counter -1
        });
    } 
    render(){
        return (
            <Fragment>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}> increment </button>
                <button onClick={this.decrement}> decrement </button>
                <h1>{this.props.color}</h1>
            </Fragment>
        )
    }
}

ReactDom.render(<App color="red" />, document.querySelector('#root'));