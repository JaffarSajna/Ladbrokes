import React from 'react';
import {Link} from 'react-router-dom';

class AppLink extends React.Component {
   render() {
     var menus=this.props.data;
      return (

          <div className="tab-main-outer">
        <ul className="nav nav-tabs">

          {menus.map((menu,i)=>
          {
          return(
          <li role="presentation" className="active" key={i}><Link role="tab" key={menu.id} to={menu.path}>{menu.description}</Link></li>)
        })}

        </ul>
        </div>
      )
   };
}

export default AppLink;
