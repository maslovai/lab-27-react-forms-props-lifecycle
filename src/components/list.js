import React from 'react';

class ArticleList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articles:[]
        }
        this.getList = this.getList.bind(this);
    }

    getList(props){
        this.setState({articles:this.props.list});
    }

    render(){
        return(
        <div id ='resultBox'>
            <h3>Search Results:</h3>
            <ul>
                {this.state.articles.map((article,i) => 
                    <li key={i}>{article}</li>
                )}
            </ul>
        </div>
        )
    }
}
export default ArticleList;