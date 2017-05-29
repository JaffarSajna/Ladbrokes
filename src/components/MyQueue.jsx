import React from 'react';
import {Tabs, Tab,Row, Col, NavItem, Nav} from 'react-bootstrap-tabs'
import AddNewRequest from '../components/AddNewRequest.jsx'
import MyRequestTable from '../components/datatable_MyRequest.jsx'
import {Modal,Button} from 'react-bootstrap'
var databody = require('../jsondata/myrequests.json')


class MyQueue extends React.Component {
	
	
   constructor(props){
	   super(props);
	   this.state={data:[],plans:[],active:false,showModal:false,currentData:0,showReleaseModal: false}
	   this.addItem=this.addItem.bind(this);
	   this.close=this.close.bind(this);
	   this.changeStatus=this.changeStatus.bind(this);
	   this.open=this.open.bind(this);
	   this.openReleaseModel=this.openReleaseModel.bind(this);
	   this.closeReleaseModel=this.closeReleaseModel.bind(this);
   }	
	
	
	
   componentWillMount(){
	   this.setState({data:databody.releases,plans:databody.ApprovedPlans});
      
   }

  close() {
    this.setState({ showModal: false });
  }
	closeReleaseModel() {
    this.setState({ showReleaseModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
	openReleaseModel() {
    this.setState({ showReleaseModal: true });
  }
	  
	addItem(item){
		this.state.data.push(item);
		this.setState({data:this.state.data});
		this.render();
	}	
	
	changeStatus(item){
		debugger;
			 this.setState({ showModal: false ,showReleaseModal: false});
	}
	
	
	
   render() {
   const releasecolumns = [
			 {
				 id:'BusinessService',
    Header: 'BusinessService',
    accessor: "BusinessService" 
  }, 
	   {
    Header: 'RequestedBy',
    accessor: 'RequestedBy',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components! 
  }, 
	  {
    id: 'Description', // Required because our accessor is not a string 
    Header: 'Description',
    accessor: d => d.Description // Custom value accessors! 
  }, 
	   {
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
    Cell: row=> (<button type="button" className="btn btn-default" onClick={this.openReleaseModel}><span className="glyphicon glyphicon-edit"></span></button>) 
  }, 
	   {
    Header: props => <span>Remove</span>, // Custom header components! ,
	accessor: 'id',
    Cell: row=> (<button type="button" className="btn btn-danger" onClick={this.open} ><span className="glyphicon glyphicon-trash"></span></button>) 
  }];
	   
	     const plancolumns = [
			 {
    Header: 'Number',
    accessor: 'Number' // String-based value accessors! 
  }, {
    Header: 'RequestedBy',
    accessor: 'RequestedBy',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components! 
  }, 
	  {
    id: 'Approval', // Required because our accessor is not a string 
    Header: 'Approval',
    accessor: d => d.Approval // Custom value accessors! 
  }, {
    Header: 'ProjectName',
    accessor: 'ProjectName',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components! 
  },
  {
    id: 'PlannedStartDate', // Required because our accessor is not a string 
    Header: 'PlannedStartDate',
    accessor: d => d.PlannedStartDate // Custom value accessors! 
  }, {
    id: 'PlannedEndDate', // Required because our accessor is not a string 
    Header: 'PlannedEndDate',
    accessor: d => d.PlannedEndDate // Custom value accessors! 
  }, {
    id: 'Stage', // Required because our accessor is not a string 
    Header: 'Stage',
    accessor: d => d.Stage // Custom value accessors! 
  }, {
    Header: props => <span>Status Update</span>, // Custom header components! 
    Cell: row=> (<button type="button" className="btn btn-danger" onClick={this.open} ><span className="glyphicon glyphicon-edit"></span></button>) 
  }
	];
	   
      return (
         <div>
            <h2>My Queue</h2>
			<div className="box pad30 bgwhite table-responsive">
			 <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
    		<Tab label="Approved" eventKey={1}><MyRequestTable data={this.state.plans} cols={plancolumns} /></Tab>
   			<Tab label="New" eventKey={2}><MyRequestTable data={this.state.data} cols={releasecolumns} /></Tab>
  			</Tabs>
			</div>
			  
			  
  <Modal show={this.state.showModal} onHide={this.close} >
          <Modal.Header closeButton>
            <Modal.Title><h4 className="modal-title" id="myModalLabel">Status Update</h4></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h3>Please click on current status of this release</h3>
            <p>....</p>
          </Modal.Body>
          <Modal.Footer>
			   <Button onClick={this.changeStatus}>Started</Button>
			   <Button onClick={this.changeStatus}>Not Started</Button>
			  <Button onClick={this.changeStatus}>Completed</Button>
            <Button ref="closebtn" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
			  
			  <Modal show={this.state.showReleaseModal} onHide={this.closeReleaseModel} >
          <Modal.Header closeButton>
            <Modal.Title><h4 className="modal-title" id="myModalLabel">New Release Request</h4></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h3>Release Request Details</h3>
            <p>....</p>
          </Modal.Body>
          <Modal.Footer>
			   <Button onClick={this.changeStatus}>Approved</Button>
			   <Button onClick={this.changeStatus}>Rejected</Button>
            <Button ref="closebtn" onClick={this.closeReleaseModel}>Close</Button>
          </Modal.Footer>
        </Modal>
         </div>
      )
   }
}

export default MyQueue;
