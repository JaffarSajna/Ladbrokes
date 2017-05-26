import React from 'react'
import {Tabs, Tab} from 'react-bootstrap-tabs'
import ApprovedReleases from '../components/datatableComp'


class MyQueue extends React.Component {
   render() {
 
      return (
         <div>
            <h2>My Queue</h2>
			<div className="box pad30 bgwhite table-responsive">
			 <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
    		<Tab label="Approved" eventKey={1}><ApprovedReleases/></Tab>
   			<Tab label="New" eventKey={2}><ApprovedReleases/>qwqw</Tab>
  			</Tabs>
			</div>
         </div>
      )
   }
}

export default MyQueue;
