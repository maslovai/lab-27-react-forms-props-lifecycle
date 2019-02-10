import React from 'react';
import '../style/sublist.scss';

const renderIf = (test, componentTrue, componentFalse) => test ? componentTrue : componentFalse;

class Sublist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sublist: this.props.sublist,
            sublist2:this.props.sublist2,
            parentID: this.props.parentID,
            clicked:false,
            clickedOnSublist:false,
            subgroupID:null
        }
        this.toggleSublist = this.toggleSublist.bind(this);
        this.toggleSublist2 = this.toggleSublist2.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({sublist2: nextProps.sublist2})
    }

    toggleSublist(ID){
        this.setState({
            clicked: !this.state.clicked, 
            parentID:ID  
        })
        this.props.handle();
    }

    toggleSublist2(ID){
        this.setState({
            clickedOnSublist: !this.state.clickedOnSublist,
            subgroupID:ID
        })
    }

    render(){
        const items = this.state.sublist.filter((item)=>{return(item.parentID === this.state.parentID)});
        const right = 'fas fa-angle-right icon-right';
        const down = 'fas fa-angle-down icon-right';
        
        return(
        // append level two items
            <div className= 'subList'>
                    {
                     items.map((item,i)=>{
                        return(
                            <div className='listWrapper'>    
                                <div className = 'listItem' key={i}>
                                    <span className='itemName'>{item.text} </span>
                                    {(i===0) ? <i id={item.ID}className = 'fas fa-times icon-right' onClick={()=>this.toggleSublist(item.ID)}></i>:null}
                                    {(item.image && i!=0) ? <i className = {this.state.clickedOnSublist&&this.state.subgroupID===item.ID ? down : right} onClick={()=>this.toggleSublist2(item.ID)}></i> : null}
                                </div>    
        {/* append level three items to each parent*/}
                                <div id = {item.ID} className = {this.state.clickedOnSublist ? 'subList2':'subList2'}>
                                    {this.state.sublist2.filter((subitem)=>{return(subitem.parentID===item.ID)}).map((subitem,j)=>{
                                        return(
                                            <div className={(this.state.clickedOnSublist&&subitem.parentID===this.state.subgroupID) ? 'listItem active':'listItem  hidden'} key={j}><span className='subitemName'>{subitem.text} </span></div>
                                        )})
                                    }
                                </div> 
                            </div>       
                        )})
                        }   
            </div>
        )
    }
}
export default Sublist;