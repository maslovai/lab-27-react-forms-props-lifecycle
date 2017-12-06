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
        this.state = {
            search: '',
            number:'',
            list:[]}  
        this.getArticles = this.getArticles.bind(this)      
    }
    
    // componentDidMount(){
    //     console.log("__STATE__", this.state)
    // }
    
    // componentWillMount(){
    //     this.setState({list: []})
    // }
    
    // componentWillUnmount(){
    //     this.setState({list: []})
    // }

    getArticles(articles,number){
        this.setState({list:(articles).slice(0, number)});
        console.log('in main, articles', this.state.list)
    }

    render(){
        return(
            <div>
                <Header/>
                <div>
                    <Search articles = {this.getArticles}/>
                    <ArtilceList list = {this.state.list}/>
                </div>
                <Footer/>
            </div>

        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));