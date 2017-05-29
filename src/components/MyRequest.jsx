import React from 'react';
import {Tabs, Tab,Row, Col, NavItem, Nav} from 'react-bootstrap-tabs'
import AddNewRequest from '../components/AddNewRequest.jsx'
import MyRequestTable from '../components/datatable_MyRequest.jsx'
import {Modal,Button} from 'react-bootstrap'
var databody = require('../jsondata/myrequests.json')


class MyRequest extends React.Component {
	
	

	
   constructor(props){
	   super(props);
	   this.state={data:[],active:false,showModal:false,currentData:0}
	   this.addItem=this.addItem.bind(this);
	   this.close=this.close.bind(this);
	      this.removeItem=this.removeItem.bind(this);
	    this.open=this.open.bind(this);
	   this.setEditTitle=this.setEditTitle.bind(this);
   }	
	
	
	
   componentWillMount(){
	   this.setState({data:databody.releases});
      
   }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
	  
	addItem(item){
		this.state.data.push(item);
		this.setState({data:this.state.data});
		this.render();
	}	
	
	removeItem(item){
		debugger;
	this.state.data.pop();
			 this.setState({ showModal: false });
	}
	
	setEditTitle(){
		this.setState({title:"Edit"});
	}
	
   render() {
	   
	     const columns = [
			 {
    Header: 'BusinessService',
    accessor: 'BusinessService' // String-based value accessors! 
  }, {
    Header: 'RequestedBy',
    accessor: 'RequestedBy',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components! 
  }, 
	  {
    id: 'Description', // Required because our accessor is not a string 
    Header: 'Description',
    accessor: d => d.Description // Custom value accessors! 
  }, {
    Header: 'PlannedStartDate',
    accessor: 'PlannedStartDate',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components! 
  },
	  {
    id: 'PlannedEndDate', // Required because our accessor is not a string 
    Header: 'PlannedEndDate',
    accessor: d => d.PlannedEndDate // Custom value accessors! 
  },
			 {
    Header: props => <span>Edit</span>, // Custom header components! 
    Cell: row=> (<button type="button" className="btn btn-default" onClick={this.setEditTitle} data-toggle="modal" data-target="#AddNewRequest"><span className="glyphicon glyphicon-edit"></span></button>) 
  }
	, {
    Header: props => <span>Remove</span>, // Custom header components! ,
	accessor: 'id',
    Cell: row=> (<button type="button" className="btn btn-danger" onClick={this.open} ><span className="glyphicon glyphicon-trash"></span></button>) 
  }];
	   
      return (
         <div>
            <h1>MyRequest...</h1>
			  <MyRequestTable data={this.state.data} cols={columns} />
			 <AddNewRequest data={this.state.data} additem={this.addItem} title={this.state.title}/>
			  
			  <Modal show={this.state.showModal} onHide={this.close} >
          <Modal.Header closeButton>
            <Modal.Title><h4 className="modal-title" id="myModalLabel">Are you sure?</h4></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h3>You want to delete user?</h3>
            <p>....</p>
          </Modal.Body>
          <Modal.Footer>
			   <Button onClick={this.removeItem}>Yes</Button>
            <Button ref="closebtn" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
			  
         </div>
      )
   }
}

export default MyRequest;
  