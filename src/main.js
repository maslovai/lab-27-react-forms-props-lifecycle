import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
import superagent from 'superagent';

// let redditAPI =  `http://reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`
class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>Search Reddit</h1>
            </header>
        )
    }
}

class Footer extends React.Component{
    render(){
        return(
            <header>
                <h4>footer here</h4>
            </header>
        )
    }
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             search: '',
             number:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        superagent
        .get(`https://www.reddit.com/r/${this.state.search}.json?limit=${this.state.number}`)
        .end(function(err, res){
                console.log(err, res.body)
               })
    }  
    handleChangeSearch(e) {
        this.setState({search: e.target.value});
      }
      handleChangeNumber(e) {
        this.setState({number: e.target.value});
      }  
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <div id = 'searchBox'>
                        <form onSubmit={this.handleSubmit}>
                          <label htmlFor='searchFor'>Serch for:</label>
                          <input name = 'searchFor' value = {this.state.value} onChange={this.handleChangeSearch} type='text'></input>
                          <label htmlFor='resultsNumber'>Number of results (0 to100):</label>
                          <input name = 'resultsNumber' value = {this.state.value} onChange={this.handleChangeNumber}type='text'></input>
                          <input type='submit' text = 'Submit' ></input>
                        </form>
                    </div>
                    <div id ='resultBox'>
                        in result
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));