import React,{ Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UserPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values, handleChange} =this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                  <AppBar  title="Enter Personal Details"/>
                   <TextField 
                    hintText="Enter Your Occupation"
                    floatingLabelText=" Occupation"
                    onChange ={ handleChange('occupation')}
                    defaultValue={values. occupation}/>
                    <br />
                   <TextField 
                    hintText="enter your Country"
                    floatingLabelText=" Country"
                    onChange ={ handleChange('country')}
                    defaultValue={values. country}/>
                    <br />
                   <TextField 
                    hintText="enter your bio"
                    floatingLabelText="bio"
                    onChange ={ handleChange('bio')}
                    defaultValue={values.bio}/>
                    <br />
                <RaisedButton 
                label="Continue"
                primary={true}
                style={styles.button}
                onClick ={this.continue}/>
                 <RaisedButton 
                label="Back"
                primary={false}
                style={styles.button}
                onClick ={this.back}/>
                </React.Fragment>
            </MuiThemeProvider>
           
        );
    }
}

const styles = {
    button:{
        margin:15
    }
}
export default UserPersonalDetails;