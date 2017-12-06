import React from 'react';
import ReactDom from 'react-dom';

class ArticleList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        console.log('in list:::::', this.props.list);
        const articles = this.props.list;
        console.log('articles:::::', articles);
        return(
        <div id ='resultBox'>
            <ul>{
                articles.map((article,i)=>{
                return(
                <li key={i}>
                  <a href={article.data.url} target = '_blank'> {article.data.title}</a>
                </li>
                )})
                
            }   
            </ul>
        </div>
        )
    }
}
export default ArticleList;