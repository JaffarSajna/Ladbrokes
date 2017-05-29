import React from 'react';
import AppLink from '../components/AppLink.jsx'


class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data:
      [
      {"id":1,"path":"/home","description":"Home","component":"Home"},
      {"id":2,"path":"/myqueue","description":"My Queue","component":"MyQueue"},
      {"id":3,"path":"/myrequest","description":"My Request","component":"MyRequest"}
      ]
    }
  }
   render() {
      return (
      <div>
      <div className="bgtop">
      	<div className="container-fluid">
      		<div className="row">
      			<div className="col-md-12">
      				<div className="navbar" role="navigation">
      					<div className="navbar-header"> <a className="navbar-brand" href="index.html"><img src="images/ladbrokes-logo.png" alt="logo"></img></a> </div>
      					<ul className="nav navbar-nav nav-main navbar-right">
      						<li className="pad10">
      							<div className="dropdown"><span className="badge">5</span> <a href="#" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span className="user-placeholder"></span></a>
      								<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
      									<li><a href="#"><span className="glyphicon glyphicon-user"></span> Hi, User</a></li>
      									<li role="separator" className="divider"></li>
      									<li><a href="#"><span className="glyphicon glyphicon-info-sign"></span> Account Info</a></li>
      									<li><a href="#"><span className="glyphicon glyphicon-wrench"></span> Settings</a></li>
      									<li><a href="index.html"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
      								</ul>
      							</div>
      						</li>
      					</ul>
      				</div>
      			</div>
      		</div>
      	</div>
      	<div className="container-fluid">
      		<div className="row">
      			<div className="col-xs-6">
         		<AppLink data={this.state.data} />
      			</div>
      			<div className="col-xs-6">
      				<div className="pad10"><a href="#AddDetails"  data-toggle="modal" data-target="#AddNewRequest" className="pull-right pad10"><span className="glyphicon glyphicon-plus"></span></a></div>
      			</div>
      		</div>
      	</div>
      </div>
			  
	<div className="heightfixinside relative">
	<div id="wrapper">
		<div className="container-fluid" id="wrapper">
			<div className="pad60">
				<div className="row">
					<div className="col-md-12">
						<div className="tab-content">
							{this.props.children}</div>
					</div>
				</div>
			</div>
		
		</div></div>
      </div>
	</div>
		  
      )
   }
}

export default Container;
