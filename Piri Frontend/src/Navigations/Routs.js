import React,{Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import ThankYou from '../Components/thankYou';
import RegistrationForm from '../Components/registrationForm';


export class Routs extends Component {
    render() {
        return(
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route path='/registration' component={RegistrationForm}/>
                        <Route path='/thank-you' component={ThankYou}/>
                        <Redirect to="/registration" />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
