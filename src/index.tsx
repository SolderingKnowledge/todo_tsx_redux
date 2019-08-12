import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

interface IProps{
    color:string;
}

const App = (props: IProps):JSX.Element=>{
    return(
        <Fragment>
            <h1>{props.color}</h1>
        </Fragment>
    )
}

ReactDom.render(<App color="red" />, document.querySelector('#root'));