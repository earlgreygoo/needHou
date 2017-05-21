import React from 'react';
import Backbone from 'backbone';
import ACTIONS from '../ACTIONS.js';
import STORE from '../STORE.js';
import Shelter from '../shelters'
import Header from './header'


var SheltersList = React.createClass({
 render: function() {
	return (
		<div>
			<h1> houNeed </h1>
			<ShelterView />
		</div>
	) }
})


var ShelterView = React.createClass({

	
	componentWillMount: function() {


			ACTIONS.checkInfoStatus('#Shelter');

			STORE.on('storeChanged', ()=>{
				this.setState(
					STORE._getData()
				)
			})
	},

	componentWillUnmount: function() {
		STORE.off()
	},


	getInitialState: function() {
		return STORE._getData()
	},
	

	render: function() {

		return (
			<div className="container">

			 <div className="well">
			  <div className="row">
			    
			  </div>
			  <div className="row">
			    <h2 className="col-xs-12 text-center">
			            Star of Hope Men's Development Center Clinic (HHH)
			        </h2>
			  </div>
			  <div className="row">
			    <div id="map-canvas" className="col-xs-12"></div>
			  </div>
			  <div className="row">
			    <h3>
			      Address
			    </h3>
			    <a className="col-xs-12 text-left" href="#1">1811 Ruiz, Houston, TX 77002</a>
			    <a className="col-xs-12 text-left" href="#1"><i className="fa fa-bus" aria-hidden="true"></i> Accessible via Project Access Bus</a>
			  </div>
			  <div className="row">
			    <h3>
			      Phone
			    </h3>
			    <a className="col-xs-12 text-left" href="#1"><i className="fa fa-phone" aria-hidden="true"></i> (713) 226-5426</a>
			  </div>
			  <div className="row">
			    <h3>
			      WebSite
			    </h3>
			    <a className="col-xs-12 text-left" href="#1"><i className="fa fa-chrome" aria-hidden="true"></i> http://www.homeless-healthcare.org/locations-schedules</a>
			  </div>
			  <div className="row">
			    <h3>
			      Hours
			    </h3>
			    <p className="col-xs-12 text-left" href="#1"><i className="fa fa-clock-o" aria-hidden="true"></i> Wed, 10am to 7pm</p>
			  </div>
			  <div className="row">
			    <h3>
			      About
			    </h3>
			    <p className="col-xs-12 text-left" href="#1">Free clinic owned and operated by Healthcare for the Homeless Houston (HHH) located within the Star of Hope Men’s Development Center. Primary medical care is provided on Wednesdays.</p>
			  </div>
			 </div>

			 <div className="well">
			  <div className="row">
			    <h2 className="col-xs-12 text-center">
			            SEARCH Homeless Services
			        </h2>
			  </div>
			  <div className="row">
			    <div id="map-canvas" className="col-xs-12"></div>
			  </div>
			  <div className="row">
			    <h3>
			      Address
			    </h3>
			    <a className="col-xs-12 text-left" href="#1">2015 Congress Ave, Houston, Tx, 77002"</a>
			    <a className="col-xs-12 text-left" href="#1"><i className="fa fa-bus" aria-hidden="true"></i> Accessible via Project Access Bus</a>
			  </div>
			  <div className="row">
			    <h3>
			      Phone
			    </h3>
			    <a className="col-xs-12 text-left" href="#1"><i className="fa fa-phone" aria-hidden="true"></i> (713) 354-7792</a>
			  </div>
			  <div className="row">
			    <h3>
			      WebSite
			    </h3>
			    <a className="col-xs-12 text-left" href="#1"><i className="fa fa-chrome" aria-hidden="true"></i> http://www.searchHouston.org</a>
			  </div>
			  <div className="row">
			    <h3>
			      Hours
			    </h3>
			    <p className="col-xs-12 text-left" href="#1"><i className="fa fa-clock-o" aria-hidden="true"></i> 9am to 4pm</p>
			  </div>
			  <div className="row">
			    <h3>
			      About
			    </h3>
			    <p className="col-xs-12 text-left" href="#1">Search Homeless Services works to engage, stabilize, educate, employ and house individuals and families who are homeless in the Houston, Texas area.</p>
			  </div>
			</div>
		

			<div className="well" >
			  <div className="row">
			    <h2 className="col-xs-12 text-center">
			            The Life Center for the Homeless
			        </h2>
			  </div>
			  <div className="row">
			    <div id="map-canvas" className="col-xs-12"></div>
			  </div>
			  <div className="row">
			    <h3>
			      Address
			    </h3>
			    <a className="col-xs-12 text-left" href="#1">4516 Old Yale St, Houston, Tx, 77018</a>
			    <a className="col-xs-12 text-left" href="#1"><i className="fa fa-bus" aria-hidden="true"></i> Accessible via Project Access Bus</a>
			  </div>
			  <div className="row">
			    <h3>
			      Phone
			    </h3>
			    <a className="col-xs-12 text-left" href="#1"><i className="fa fa-phone" aria-hidden="true"></i> (832) 524-7054</a>
			  </div>
			  <div className="row">
			    <h3>
			      WebSite
			    </h3>
			    <a className="col-xs-12 text-left" href="#1"><i className="fa fa-chrome" aria-hidden="true"></i> http://www.lifeCenterAid.org/location</a>
			  </div>
			  <div className="row">
			    <h3>
			      Hours
			    </h3>
			    <p className="col-xs-12 text-left" href="#1"><i className="fa fa-clock-o" aria-hidden="true"></i> Closed Today</p>
			  </div>
			  <div className="row">
			    <h3>
			      About
			    </h3>
			    <p className="col-xs-12 text-left" href="#1">The Life Center is dedicated to serve, educate and represent the Homeless of Houston.</p>
			  </div>
			</div>
		</div> 

		/*	
			<div className="shelterList"> 
				<div className="well">
					<h1 className="title"> SEARCH Homeless Services </h1> 
					<h2 className="addressHeader"> Address </h2>
					<h3 className="address"> 2015 congress Ave, Houston, Tx, 77002 </h3>
					<h2 className="hoursHeader"> Hours </h2> 
					<h3 className= "hours"> 8 Am to 4 pm </h3> 
					<h2 className="phoneHeader"> Phone </h2> 
					<h3 className="phoneNumbers"> 713-227-8900 </h3> 
				</div> 

				<div className="well">
					<h1 className="title"> The Life Center for the Homeless </h1> 
					<h2 className="addressHeader"> Address </h2>
					<h3 className="address"> 4516 Old Yale St, Houston, Tx, 77002 </h3>
					<h2 className="hoursHeader"> Hours </h2> 
					<h3 className= "hours"> 9 Am to 6 pm </h3> 
					<h2 className="phoneHeader"> Phone </h2> 
					<h3 className="phoneNumbers"> 713-347-3763 </h3> 
				</div> 

				<div className="well">
					<h1 className="title"> Star of Hope Men's Shelter </h1> 
					<h2 className="addressHeader"> Address </h2>
					<h3 className="address"> 2015 congress Ave, Houston, Tx, 77002 </h3>
					<h2 className="hoursHeader"> Hours </h2> 
					<h3 className= "hours"> CLOSED TODAY </h3> 
					<h2 className="phoneHeader"> Phone </h2> 
					<h3 className="phoneNumbers"> 713-227-5732 </h3> 
				</div> 

			</div> 
			
			*/
      
      )

	}

})


export default ShelterView;