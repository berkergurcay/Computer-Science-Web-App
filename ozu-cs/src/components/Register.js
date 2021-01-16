import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Register.css'


function validate(name, surname, email, snumber, number){

    const errors = [];

    if (name === "" || surname === "" || email === "" || snumber === "" || number === "") {
       errors.push('Please fill all necessary fields');
    }
   
    if (snumber.toLowerCase()[0] != 's') {
        errors.push('Student number should start with S');
    }

    if (!email.endsWith('@ozu.edu.tr')) {
        errors.push('Please enter your OzU email address');
        
    }
    if(snumber.length != 7) {
        errors.push("Student number must be 7 digits");

    }
    
    if (number.length != 11){
        errors.push("Phone number must be 11 digits starting from 0");
    }

    return errors;
}

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname:"",
            email:"",
            snumber:"",
            number:"",
            year:"",

            errors: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({year: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();


        alert('Reha')

        const {name, surname, email, snumber, number} = this.state;

        const errors = validate(name, surname, email, snumber, number);
        if (errors.length > 0){

            alert('1')
            this.setState({errors});
            return;
        }else{
            var student = {
                "firstname": name,
                "surname": surname,
                "email": email,
                "snumber": snumber,
                "Number": number,
                "class": this.year,
            };
            this.setState({errors: []})
            alert('2')
            localStorage.setItem(student.snumber,JSON.stringify(student));
            // document.getElementById("register").action = "/register"
        }
    }


    render() {
        const { errors } = this.state;
        return (    
            <Form id='register' onSubmit={this.handleSubmit}>
                {errors.map(error => (
                    <p key= {error} id='warning'>{error}</p>
                ))} 
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder="Name" />
              </FormGroup>
        
              <FormGroup>
                <Label>Surname</Label>
                <Input type="text"  placeholder="Surname" />
              </FormGroup>
        
              <FormGroup>
                <Label>Email</Label>
                <Input type="text" placeholder="Email" />
              </FormGroup>
        
              <FormGroup>
                <Label>Student number</Label>
                <Input type="text" placeholder="Student number" />
              </FormGroup>
        
              <FormGroup>
                <Label>Number</Label>
                <Input type="text" placeholder="Phone number" />
              </FormGroup>
        
              <FormGroup>
                <Label for="exampleSelect">Class</Label>
                <Input type="select" id="class" onChange={this.handleChange}>
                  <option>Freshman</option>
                  <option>Sophomore</option>
                  <option>Junior</option>
                  <option>Senior</option>
                </Input>
              </FormGroup>
            
              <Input id='submit' type='submit'>Submit</Input>
            </Form>
          );
    }
}

export default Register;