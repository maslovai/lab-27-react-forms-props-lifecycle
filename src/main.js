import React from 'react';
import ReactDom from 'react-dom';
import './style/main.scss';
import Header from './components/header';
import List from './components/list';

const renderIf = (test, componentTrue, componentFalse) => test ? componentTrue : componentFalse;

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bar:true,
            list:[
                {ID:1,text:'MY SCHEDULE AND BIDDING', image:true}, 
                {ID:2, text:'SAFETY', image:true},
                {ID:3,text:'TRAINING', image:null},
                {ID:4, text:'ADMINISTRATION', image:true},
                {ID:5, text:'CATERING & BRAND', image:true},
                {ID:6, text:'HOTELS', image:false},
                {ID:7, text:'MY BASE', image:false},
                {ID:8, text:'HOTELS', image:false}
            ],
            sublist:[{ID:10,parentID:1,text:'MY SCHEDULE AND BIDDING', image:true},
                     {ID:20,parentID:2,show:true,text:'SAFETY', image:true},
                     {ID:21,parentID:2,show:true,text:'Reporting', image:true},
                     {ID:22,parentID:2,show:false,text:'Agriculture and Customs', image:true},
                     {ID:23,parentID:2,show:false,text:'Known Crewmember', image:false},
                     {ID:24,parentID:2,show:true,text:'Product Safety Data Search', image:false},
                     {ID:40,parentID:4,show:true,text:'ADMINISTRATION', image:true},
                     {ID:41,parentID:4,show:true,text:'OJI and Leaves', image:false},
                     {ID:42,parentID:4,show:true,text:'Pay and Benefits', image:true},
                     {ID:43,parentID:4,show:true,text:'Performance', image:false},
                     {ID:44,parentID:4,show:true,text:'Inflight Resource Directory', image:false},
                     {ID:45,parentID:4,show:true,text:'Mobile and Web', image:false},
                     {ID:46,parentID:4,show:true,text:'AFA', image:false},
                     {ID:50,parentID:5,show:true,text:'CATERING & BRAND', image:false}
                    ],
            sublist2:[
                    {ID:211,parentID:21,show:true,text:'I21 Injury Reporting', image:false},
                    {ID:212,parentID:21,show:true,text:'ASAP Reporting', image:false},
                    {ID:213,parentID:21,show:true,text:'General ASAP Information', image:false},
                    {ID:214,parentID:22,show:true,text:'Something about Agriculture', image:false},
                    {ID:421,parentID:42,show:true,text:'AFA', image:false},
                    {ID:422,parentID:42,show:true,text:'AFA first', image:false},
                    {ID:423,parentID:42,show:true,text:'AFA second', image:false}
        ]
        }            
        this.setBar = this.setBar.bind(this)      
    }

    setBar(passed){
        this.setState({bar:!passed});
    }

    render(){
        return(
            <div id = "main">
                <Header name = {'Iryna Maslova'} bar = {this.state.bar} setBar = {this.setBar}/>
                <div className={this.state.bar ? 'hidden':'active' }>
                    {renderIf(this.state.bar, null, <List list = {this.state.list} sublist = {this.state.sublist} sublist2 = {this.state.sublist2}/>)}
                </div>
            </div>

        )
    }
}
ReactDom.render(<App/>, document.getElementById('root'));