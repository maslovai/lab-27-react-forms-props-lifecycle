import React from 'react';
import superagent from 'superagent';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            number: '',
            list:[]}
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
}

handleSubmit(e){
    e.preventDefault();
    superagent
        .get(`https://www.reddit.com/r/${this.state.search}.json?limit=${this.state.number}`)
        .then((res)=>{
                this.setState({list:res.body.data.children});
                console.log(this.state.list);
                // console.log('response:::::',res)
                // let list = this.state.list;
                this.props.articles(this.state.list);       
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
        <div id = 'searchBox'>
            <h3>Search Form:</h3>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='searchFor'>Serch for:</label>
                <input name = 'searchFor' value = {this.state.value} onChange={this.handleChangeSearch} type='text'></input>
                <label htmlFor='resultsNumber'>Number of results (0 to100):</label>
                <input name = 'resultsNumber' value = {this.state.value} onChange={this.handleChangeNumber}type='text'></input>
                <input type='submit' text = 'Submit' ></input>
            </form>
        </div>
    )
} 
}
export default Search;