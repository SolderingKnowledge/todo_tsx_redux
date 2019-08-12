import React from 'react';
import ReactDom from 'react-dom';

interface IFace{
    color:string;
}
class App extends React.Component<IFace>{
    render(){
        return (
            <h1>{this.props.color}</h1>
        )
    }
}

ReactDom.render(<App color="red" />, document.querySelector('#root'));