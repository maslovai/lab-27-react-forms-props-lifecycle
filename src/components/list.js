import React from 'react';

class ArticleList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articles:this.props.list
        }
    }

    render(){
        return(
        <div id ='resultBox'>
            <h3>Search Results:</h3>
            <ul>
                {this.state.articles.map((article,i) => 
                    <li key={i}><a href ={article.url} target="_blank">{article.title}</a></li>
                )}
            </ul>
        </div>
        )
    }
}
export default ArticleList;