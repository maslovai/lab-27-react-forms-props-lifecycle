import React from 'react';
import '../style/header.scss';
const renderIf = (test, componentTrue, componentFalse) => test ? componentTrue : componentFalse;
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bar:this.props.bar
        }  
        this.toggleMenu = this.toggleMenu.bind(this) 
        // this.toggleButton = this.toggleButton.bind(this) 

    }
    toggleMenu(){
        this.setState({
            bar: !this.state.bar
        })
        this.props.setBar(this.state.bar);
    }
  
    render(){
        return(
            <div className = 'header'>
                <div className="alaska"> 
                    <span>ALASKA</span> 
                    <div id="menu-toggle" onClick={this.toggleMenu} className={this.state.bar ? null : 'open'}>
                        <div id="hamburger" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div id="cross">
                            <span></span>
                            <span></span>
                        </div>
                    </div> 
                </div>
                <div className = "greeting">
                    {renderIf(this.state.bar, 
                        (<div> <span>Section</span><i className="fas fa-angle-right"></i><span>Page Titile</span></div>), 
                        (<div><p> Hello {this.props.name}!</p></div>)) 
                    } 
                </div>
            </div>
        )
    }
}
export default Header;
