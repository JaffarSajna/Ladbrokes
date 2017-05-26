import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom';

//import AppRoute from '../components/AppRoute.jsx'


import Container from '../components/Container.jsx'
import Home from '../components/Home.jsx'
import MyQueue from '../components/MyQueue.jsx'
import MyRequest from '../components/MyRequest.jsx'
import Header from '../components/Header.jsx'




class AppRoutes extends React.Component
{
render()
{
  return (
  <Router>
  <div>
  <Container>
    <Route exact path="/" component={Home}/>
    <Route path="/" component={Header}/>
    <Route path="/home" component={Home}/>
    <Route path="/myqueue" component={MyQueue}/>
    <Route path="/myrequest" component={MyRequest}/>
  </Container>
  </div>
  </Router>
);
}
}
//{this.state.data.map((data,i)=> <AppRoute key={i} data={data} />)}    <AppLink data={this.state.data}/>
export default AppRoutes;
