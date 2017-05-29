import React from 'react'
import moment from 'moment'
import Request from 'superagent'
import _ from 'lodash'
import 'whatwg-fetch'


class AddNewRequest extends React.Component
{
	
constructor(props) {
  super(props);

  this.state = {
        BusinessService:'',
        RequestedBy: '',
        Impact:'',
        Risk:'',
        Description: '',
        ChangeReason:'',
        RiskDetail:'',
        WorstCaseScenario:'',
        PreTesting: '',
        PostTesting: '',
        PlannedStartDate:'',
        PlannedEndDate:'',
        AdditionalInformation:'',

        Urls:{
        PostReleaseRequest :'http://localhost:8080/api/releaseRequest'
        }
  };


  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


resetForm(){
	this.setState( { BusinessService:'',
        RequestedBy: '',
        Impact:'',
        Risk:'',
        Description: '',
        ChangeReason:'',
        RiskDetail:'',
        WorstCaseScenario:'',
        PreTesting: '',
        PostTesting: '',
        PlannedStartDate:'',
        PlannedEndDate:'',
        AdditionalInformation:'',

        Urls:{
        PostReleaseRequest :'http://localhost:8080/api/releaseRequest'
        }}            );
}

handleSubmit(event){

      event.preventDefault();
	  this.props.additem(this.state);
	this.resetForm()
	this.refs.closebtn.click();
    
}
	
	

	
render(){
		
	return(
		<div>
		 <div className="modal fade"  id="AddNewRequest" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
    	<div className="modal-dialog modal-lg" role="document">
			  <form  onSubmit={this.handleSubmit}>
    		<div className="modal-content">
    			<div className="modal-header">
    				<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    				<h4 className="modal-title" id="myModalLabel">Add New Request</h4>
    			</div>
    			<div className="modal-body">
    				<div className="pad30">
    					    
								  <div className="row">
            <div className="form-group row">
            <label htmlFor="txtBusiness" className="col-md-2 col-form-control">Business Service</label>
            <div className="col-md-10">
            <input type="text" value={this.state.BusinessService} onChange={this.handleInputChange}  className="form-control" placeholder="Enter Business Service Affected" id="txtBusiness" name="BusinessService"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtReqBy"  className="col-md-2 col-form-control">Requested By</label>
            <div className="col-md-10">
            <input type="text" value={this.state.RequestedBy} onChange={this.handleInputChange} id="txtReqBy" className="form-control" placeholder="Enter Requested By" name="RequestedBy"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtImpact"  className="col-md-2 col-form-control">Impact</label>
            <div className="col-md-10">
            <input type="text" value={this.state.Impact} onChange={this.handleInputChange} id="txtImpact" className="form-control" placeholder="Enter Business criticality" name="Impact"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtRisk"  className="col-md-2 col-form-control">Risk</label>
            <div className="col-md-10">
            <input type="text" value={this.state.Risk} onChange={this.handleInputChange} id="txtRisk" className="form-control" placeholder="Enter Likelyhood of this Change going wrong" name="Risk"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtDescription"  className="col-md-2 col-form-control">Description</label>
            <div className="col-md-10">
            <input type="text" value={this.state.Description} onChange={this.handleInputChange} id="txtDescription" className="form-control" placeholder="Enter Description of the work" name="Description"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtChangeReason"  className="col-md-2 col-form-control">Change Reason</label>
            <div className="col-md-10">
            <input type="text" value={this.state.ChangeReason} onChange={this.handleInputChange} id="txtChangeReason" className="form-control" placeholder="Why is this change required" name="ChangeReason"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtRiskDetail"  className="col-md-2 col-form-control">RiskDetail</label>
            <div className="col-md-10">
            <input type="text" value={this.state.RiskDetail} onChange={this.handleInputChange} id="txtRiskDetail" className="form-control" placeholder="Enter Risk to Service of not implementing this change" name="RiskDetail" />
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtWorstCase"  className="col-md-2 col-form-control">Worst Case Scenario</label>
            <div className="col-md-10">
            <input type="text" value={this.state.WorstCaseScenario} onChange={this.handleInputChange} id="txtWorstCase" className="form-control" placeholder="Enter Worst Case Scenario" name="WorstCaseScenario"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtPreTest"  className="col-md-2 col-form-control">Pre Testing</label>
            <div className="col-md-10">
            <input type="text" value={this.state.PreTesting} onChange={this.handleInputChange} id="txtPreTest" className="form-control" placeholder="Enter Testing has been carried" name="PreTesting" />
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtPostTest"  className="col-md-2 col-form-control">Post Testing</label>
            <div className="col-md-10">
            <input type="text" value={this.state.PostTesting} onChange={this.handleInputChange} id="txtPostTest" className="form-control" placeholder="Enter How will the change be tested" name="PostTesting" />
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtPlanStart"  className="col-md-2 col-form-control">Planned Start Date</label>
            <div className="col-md-10">
            <input type="datetime-local" value={this.state.PlannedStartDate} onChange={this.handleInputChange} id="txtPlanStart" className="form-control" placeholder="Enter Release Start Time" name="PlannedStartDate"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtPlanEnd"  className="col-md-2 col-form-control">Planned End Date</label>
            <div className="col-md-10">
            <input type="datetime-local" value={this.state.PlannedEndDate} onChange={this.handleInputChange} id="txtPlanEnd" className="form-control" placeholder="Enter Release End Time" name="PlannedEndDate"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtAdditionalInfo"  className="col-md-2 col-form-control">Additional Information</label>
            <div className="col-md-10">
            <input type="textarea" value={this.state.AdditionalInformation} onChange={this.handleInputChange} id="txtAdditionalInfo" className="form-control" placeholder="Enter Additional Information" name="AdditionalInformation"/>
            </div>
            </div>
								  </div>
            
		
    				</div>
    			</div>
    			<div className="modal-footer">
    				<button type="submit" className="btn btn-primary pull-left" >Save changes</button>
    				<button type="button" className="btn btn-default" id="btnclose" data-dismiss="modal" ref='closebtn' >Close</button>
    			</div>
    		</div>
				  </form>
    	</div>
    </div>
		</div>
	);
	
}
}								
									
export default AddNewRequest