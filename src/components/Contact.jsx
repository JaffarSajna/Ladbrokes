import React from 'react';
import moment from 'moment'
import Request from 'superagent'
import _ from 'lodash'
import 'whatwg-fetch'

class Contact extends React.Component {

constructor(props) {
  super(props);

  this.state = {
        businessService:'',
        requestedBy: '',
        impact:'',
        risk:'',
        description: '',
        changeReason:'',
        riskDetail:'',
        worstCaseScenario:'',
        preTesting: '',
        postTesting: '',
        plannedStartDate:'',
        plannedEndDate:'',
        additionalInformation:'',

        urls:{
        postReleaseRequest :'http://localhost:8080/api/releaseRequest'
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




handleSubmit(event){

      event.preventDefault();

      Request
        .get(this.state.urls.postReleaseRequest)
        .end(function(err, res){
          if (err || !res.ok) {
            alert('Oh no! error');
          } else {
            alert('yay got ' + JSON.stringify(res.body));
          }
        });

/*   Request.post(this.state.urls.postReleaseRequest)
   .send({ name: 'Manny', species: 'cat' })
   .set('Content-Type', 'application/x-www-form-urlencoded')
   .set('Accept', 'application/json')
   .end(function(err, res){
     if (err || !res.ok) {
       alert('Oh no! error');
     } else {
       alert('yay got ' + JSON.stringify(res.body));
     }
   });*/


    /*  fetch(this.state.urls.postReleaseRequest, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })
    .then(function(response) {
     alert('status');
   }).then(function(json) {
     alert('data');
   }).catch(function(ex) {
     alert('err');
   })*/

    }


   render() {
      return (
         <div>
            <h1>Contact...</h1>

            <form className="col-xs-4" onSubmit={this.handleSubmit}>
            <div className="form-group row">
            <label htmlFor="txtBusiness" className="col-md-2 col-form-control">Business Service</label>
            <div className="col-md-10">
            <input type="text" value={this.state.businessService} onChange={this.handleInputChange}  className="form-control" placeholder="Enter Business Service Affected" id="txtBusiness" name="businessService"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtReqBy"  className="col-md-2 col-form-control">Requested By</label>
            <div className="col-md-10">
            <input type="text" value={this.state.requestedBy} onChange={this.handleInputChange} id="txtReqBy" className="form-control" placeholder="Enter Requested By" name="requestedBy"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtImpact"  className="col-md-2 col-form-control">Impact</label>
            <div className="col-md-10">
            <input type="text" value={this.state.impact} onChange={this.handleInputChange} id="txtImpact" className="form-control" placeholder="Enter Business criticality" name="impact"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtRisk"  className="col-md-2 col-form-control">Risk</label>
            <div className="col-md-10">
            <input type="text" value={this.state.risk} onChange={this.handleInputChange} id="txtRisk" className="form-control" placeholder="Enter Likelyhood of this Change going wrong" name="risk"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtDescription"  className="col-md-2 col-form-control">Description</label>
            <div className="col-md-10">
            <input type="text" value={this.state.description} onChange={this.handleInputChange} id="txtDescription" className="form-control" placeholder="Enter Description of the work" name="description"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtChangeReason"  className="col-md-2 col-form-control">Change Reason</label>
            <div className="col-md-10">
            <input type="text" value={this.state.changeReason} onChange={this.handleInputChange} id="txtChangeReason" className="form-control" placeholder="Why is this change required" name="changeReason"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtRiskDetail"  className="col-md-2 col-form-control">RiskDetail</label>
            <div className="col-md-10">
            <input type="text" value={this.state.riskDetail} onChange={this.handleInputChange} id="txtRiskDetail" className="form-control" placeholder="Enter Risk to Service of not implementing this change" name="riskDetail" />
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtWorstCase"  className="col-md-2 col-form-control">Worst Case Scenario</label>
            <div className="col-md-10">
            <input type="text" value={this.state.worstCaseScenario} onChange={this.handleInputChange} id="txtWorstCase" className="form-control" placeholder="Enter Worst Case Scenario" name="worstCaseScenario"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtPreTest"  className="col-md-2 col-form-control">Pre Testing</label>
            <div className="col-md-10">
            <input type="text" value={this.state.preTesting} onChange={this.handleInputChange} id="txtPreTest" className="form-control" placeholder="Enter Testing has been carried" name="preTesting" />
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtPostTest"  className="col-md-2 col-form-control">Post Testing</label>
            <div className="col-md-10">
            <input type="text" value={this.state.postTesting} onChange={this.handleInputChange} id="txtPostTest" className="form-control" placeholder="Enter How will the change be tested" name="postTesting" />
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtPlanStart"  className="col-md-2 col-form-control">Planned Start Date</label>
            <div className="col-md-10">
            <input type="datetime-local" value={this.state.plannedStartDate} onChange={this.handleInputChange} id="txtPlanStart" className="form-control" placeholder="Enter Release Start Time" name="plannedStartDate"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtPlanEnd"  className="col-md-2 col-form-control">Planned End Date</label>
            <div className="col-md-10">
            <input type="datetime-local" value={this.state.plannedEndDate} onChange={this.handleInputChange} id="txtPlanEnd" className="form-control" placeholder="Enter Release End Time" name="plannedEndDate"/>
            </div>
            </div>
            <div className="form-group row">
            <label htmlFor="txtAdditionalInfo"  className="col-md-2 col-form-control">Additional Information</label>
            <div className="col-md-10">
            <input type="textarea" value={this.state.additionalInformation} onChange={this.handleInputChange} id="txtAdditionalInfo" className="form-control" placeholder="Enter Additional Information" name="additionalInformation"/>
            </div>
            </div>
            <div className="form-group col-md-5 row">
            <button className="btn btn-primary" type="submit">Submit</button>
            <button className="btn btn-default" type="button">Clear</button>
            </div>
            </form>

         </div>

      )
   }
}

export default Contact;
