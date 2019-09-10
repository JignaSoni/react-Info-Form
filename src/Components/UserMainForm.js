import React,{ Component } from 'react';
import UserDetails from './UserDetails';
import UserPersonalDetails from './UserPersonalDetails';
import ConfirmationPage from './ConfirmationPage';
import Success from './success'
 
class UserMainForm extends Component {
    state ={
        step : 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        country: '',
        bio: '',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input =>e =>{
        this.setState({[input]:e.target.value});
    }

    render(){

        const { step } = this.state;
        const { firstName, lastName, email, occupation, country, bio} = this.state;
        const values = { firstName, lastName, email, occupation, country, bio} ;

        switch(step){
            case 1 :
             return(
                <UserDetails 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}/>
                 )
            case 2:
                return (
                    <UserPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}/>
                     )
            case 3:
                return (
                    <ConfirmationPage 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}/>
                     )
            case 4:
                return <Success />



        }
        return(
            <div>

            </div>
        );
    }
}

export default UserMainForm;