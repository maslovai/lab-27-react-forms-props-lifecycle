import React from 'react';
import '../style/list.scss';
import Sublist from './sublist';
const renderIf = (test, componentTrue, componentFalse) => test ? componentTrue : componentFalse;

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:this.props.list,
            iconClass:'fas fa-angle-right icon-right',
            clicked:false,
            parentID:1,
            sublist:this.props.sublist,
            divAppear:false
        }
        this.toggleSublist = this.toggleSublist.bind(this);
        this.removeSublist = this.removeSublist.bind(this);
    }
    componentDidMount(){
        this.setState({
            divAppear:!this.state.divAppear
        })
    }
    toggleSublist(ID){
        this.setState({
            parentID:ID,
            clicked: !this.state.clicked  
        })
    }
    removeSublist(){
        this.setState({
            clicked: false  
        })
    }
render(){
    const items = this.state.list;
    const right = 'fas fa-angle-right icon-right';
    return(
        <div className ='resultBox'>
            <div className={this.state.divAppear ? 'listOne active':'listOne hidden'}>
                {items.map((item,i)=>{
                    return(
                        <div className = "listItem" key={i}><i className={this.state.clicked&&item.ID===this.state.parentID?`fas fa-image highlighted`: 'fas fa-image'} onClick = {this.removeSublist}></i>
                        <span className='itemName'>{item.text} </span>{item.image ? <i className = {right} onClick={()=>this.toggleSublist(item.ID)}></i> : null }
                        </div>
                    )})
                    } 
            </div>
            <div className= {this.state.clicked ? 'divActive' : 'divHidden'}>
                {renderIf(this.state.clicked, 
                        <Sublist sublist={this.state.sublist} sublist2 = {this.props.sublist2} handle = {this.toggleSublist} parentID = {this.state.parentID}/>,null)
                }   
            </div> 
        </div>

    )
}
}
export default List;

// onClick={()=>this.toggleSublist(item.id)}
// onClick={()=>this.toggleSublist(item.id)}