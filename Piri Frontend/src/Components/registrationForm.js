import React, {Component} from "react";
import RegisterApi from "../Services/register"

export default class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            phone: '',
            address: '',

            form_errors : {
                full_name : null,
                email : null,
                phone_no : null,
                address : null,
            }
        }

        this.full_nameChangeHandler = this.full_nameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.phoneChangeHandler = this.phoneChangeHandler.bind(this);
        this.addressChangeHandler = this.addressChangeHandler.bind(this);
        this.register = this.register.bind(this);


    }
    full_nameChangeHandler(event){

        this.setState({full_name: event.target.value});
        this.resetFormErrors('full_name')
    }
    emailChangeHandler(event){
        this.setState({email: event.target.value});
        this.resetFormErrors('email')


    }
    phoneChangeHandler(event){
        this.setState({phone: event.target.value});
        this.resetFormErrors('phone')


    }
    addressChangeHandler(event){
        this.setState({address: event.target.value});
        this.resetFormErrors('address')


    }

    resetFormErrors( input_to_reset ){
        let formErrors = this.state.form_errors
        formErrors[input_to_reset] = null
        this.setState({form_errors: formErrors});
        console.log(this.state.form_errors)


    }
    register(event){

        const payload = {
            full_name : this.state.full_name,
            email : this.state.email,
            phone : this.state.phone,
            address : this.state.address,
        }
        RegisterApi.registerUser(payload).then(res =>{
            this.props.history.push('/thank-you')


        }).catch((error) => {
            if (error.response && error.response.status){
                this.setState({form_errors: error.response.data});
            }
        })
    }



    render() {
        return (
            <div className="limiter">
                <div className="container-login100 " >
                    <div className="wrap-login100 wow bounceInDown" data-wow-delay="0.5s">

                        <div className="login100-form validate-form" onSubmit={this.register}>
                            <span className="login100-form-title ">Registration</span>

                            <div className="wrap-input100 validate-input ">
                                <span className="label-input100">Full Name</span>
                                <input className="input100" type="text" name="full_name"
                                       placeholder="Please Enter Your Full Name." value={this.state.full_name} onChange={this.full_nameChangeHandler}/>
                                <span className="focus-input100 " data-symbol="	&#xf007;"/>


                                {this.state.form_errors.full_name ? (
                                    this.state.form_errors.full_name.map(error =>(
                                        <span className="error_out">{error} </span>
                                    ))
                                ) : (
                                    null
                                )}

                            </div>

                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Email</span>
                                <input className="input100" type="email" name="email" value={this.state.email} onChange={this.emailChangeHandler} placeholder="Please Enter Your Email."/>
                                <span className="focus-input100" data-symbol="&#xf0e0;"/>
                                {this.state.form_errors.email ? (
                                    this.state.form_errors.email.map(error =>(
                                        <span className="error_out">{error} </span>
                                    ))
                                ) : (
                                    null
                                )}
                            </div>


                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Phone Number</span>
                                <input className="input100" type="text" name="phone" value={this.state.phone} onChange={this.phoneChangeHandler}
                                       placeholder="Please Enter Your Phone Number."/>
                                <span className="focus-input100" data-symbol="&#xf095;"/>
                                {this.state.form_errors.phone ? (
                                    this.state.form_errors.phone.map(error =>(
                                        <span className="error_out">{error} </span>
                                    ))
                                ) : (
                                    null
                                )}
                            </div>

                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Address</span>
                                <input className="input100" type="text" name="address" value={this.state.address} onChange={this.addressChangeHandler} placeholder="Type your address"/>
                                <span className="focus-input100" data-symbol="&#xf041;"/>
                                {this.state.form_errors.address ? (
                                    this.state.form_errors.address.map(error =>(
                                        <span className="error_out">{error} </span>
                                    ))
                                ) : (
                                    null
                                )}
                            </div>


                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"/>
                                    <button type={"submit"} onClick={this.register} className="login100-form-btn" >Submit</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

