import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/

import ScrollToTopRoute from "./ScrollToTopRoute";
import homesupport from "./Pages/home-support";


class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={homesupport} />
          {/* <ScrollToTopRoute
            path="/Digital-marketing"
            component={DigitalMarketing}
          />
          <ScrollToTopRoute
            path="/Payment-processing"
            component={PaymentProcessing}
          />
          <ScrollToTopRoute path="/HR-Management" component={HRManagement} />
          <ScrollToTopRoute path="/Startup" component={Startup} />
          <ScrollToTopRoute path="/Home-CRM" component={HomeCRM} />
          <ScrollToTopRoute path="/About" component={About} />
          <ScrollToTopRoute path="/Service" component={Service} />
          <ScrollToTopRoute path="/Process" component={Process} />
          <ScrollToTopRoute path="/Team" component={Team} />
          <ScrollToTopRoute path="/Portfolio-2col" component={Portfolio2col} />
          <ScrollToTopRoute path="/Portfolio-3col" component={Portfolio3col} />
          <ScrollToTopRoute
            path="/Portfolio-fullwidth-4col"
            component={Portfoliofull4col}
          />
          <ScrollToTopRoute
            path="/PortfolioSingle"
            component={PortfolioSingle}
          />
          <ScrollToTopRoute path="/Bloglist" component={Bloglist} />
          <ScrollToTopRoute path="/BlogSingle" component={BlogSingle} />
          <ScrollToTopRoute path="/BlogGridPage" component={BlogGridPage} />
          <ScrollToTopRoute path="/Contact" component={Contact} />
          <ScrollToTopRoute path="/Landing" component={Landing} />
          <ScrollToTopRoute path="/home-support" component={homesupport} />
          <ScrollToTopRoute path="/HomeHosting" component={homeHosting} />
          <ScrollToTopRoute path="/Home-ERP" component={homeERP} />
          <ScrollToTopRoute path="/HomeSecurity" component={homeSecurity} />
          <ScrollToTopRoute
            path="/HomeAppShowcase"
            component={HomeAppShowcase}
          />
          <ScrollToTopRoute
            path="/Home-software-dark"
            component={homeSoftwareDark}
          />
          <ScrollToTopRoute path="/Home-cloud" component={HomeCloud} />
          <ScrollToTopRoute path="/Home-Tracking" component={HomeTracking} />
          <ScrollToTopRoute path="/Home-event" component={HomeEvent} />
          <ScrollToTopRoute path="/Home-chat" component={HomeChat} />
          <ScrollToTopRoute path="/Price" component={Price} />
          <ScrollToTopRoute path="/Faq" component={Faq} />
          <ScrollToTopRoute path="/ServiceDetails" component={ServiceDetails} />
          <ScrollToTopRoute path="/SignIn" component={SignIn} />
          <ScrollToTopRoute path="/SignUp" component={SignUp} />
          <ScrollToTopRoute component={NotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
