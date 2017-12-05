import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
import Header from './components/header';
import Footer from './components/footer';
import ArtilceList from './components/list';
import Search from './components/search'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <div>
                    <Search />
                    <ArtilceList list={this.state.list}
                    /> 
                </div>
                <Footer/>
            </div>

        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));