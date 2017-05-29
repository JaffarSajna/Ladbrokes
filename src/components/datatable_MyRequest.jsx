import React from 'react'
//import {DataTable, Column} from 'react-dtable'
//import moment from 'moment'
import Request from 'superagent'
import ReactTable from 'react-table'
//import _ from 'lodash'
//var databody = require('../jsondata/myrequests.json')




class MyRequestTable extends React.Component{
	
	constructor(props){
		super(props);	
		debugger;
		this.state = {data: []};
	}
	
	componentWillMount(){
		this.setState({data:this.props.data});
	}
     
	
	
	
	render(){
		return ( <div className="box pad30 bgwhite table-responsive"> <ReactTable defaultPageSize={10} 
    data={this.state.data}
    columns={this.props.cols}
																		  /></div>)
			}
}


export default MyRequestTable