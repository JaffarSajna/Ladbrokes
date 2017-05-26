import React from 'react'
//import Carousel from '../components/Carousel.jsx'
import Timeline from 'new-react-calendar-timeline'
import moment from 'moment'
import Request from 'superagent'
import _ from 'lodash'

class Home extends React.Component {

constructor(props){
super(props);
this.state = {
groups : [{id: 1, title: 'Project 1'},
{id: 2, title: 'Project 2'},
{id: 3, title: 'Project 3'},
{id: 4, title: 'Project 4'},
{id: 5, title: 'Project 5'}],
items : [{id: 1, group: 1, title: 'Release 1 - Enhancement Changes', start_time: moment(), end_time: moment().add(1, 'hour'), canMove:false, itemProps:{'data-custom-attribute':'Random content'}},
{id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour')},
{id: 3, group: 5, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')}],
urls:{
getReleaseData :'http://localhost:8000/fake/getAllReleaseData'
}
}
}

loadReleaseData()
{
alert(this.state.urls.getReleaseData);
Request.get(this.state.urls.getReleaseData).then((response)=>{
this.setState({ groups:response.body.projects , items:response.body.releases });});
}

componentWillMount(){

}


componentDidMount(){
//this.loadReleaseData();
}

componentWillReceiveProps(nextProps){
}

componentWillUpdate(nextProps,nextState){
}

componentWillUnmount(){
}

render() {
      return (
         <div role="tabpanel" className="tab-pane fade in active" >
            <h1>Dashboard...  </h1>
			  <div class="box pad30 bgwhite table-responsive">
            <Timeline groups={this.state.groups} fullUpdate={true}
                      items={this.state.items}
                      defaultTimeStart={moment().add(-12, 'hour')}
                      defaultTimeEnd={moment().add(12, 'hour')}
                      />
             </div>
		  </div>
      )
   }
}

export default Home;
