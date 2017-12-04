import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>Forms</h1>
            </header>
        )
    }
}
class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header/>
            </div>
        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));