import React from 'react'
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

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            surname:"",
            email:"",
            snumber:"",
            number:"",

            errors: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();

        const {name, surname, email, snumber, number} = this.state;

        const errors = validate(name, surname, email, snumber, number);
        if (errors.length > 0){
            this.setState({errors});
            return;
        }else{
            var student = {
                "firstname": name,
                "surname": surname,
                "email": email,
                "snumber": snumber,
                "Number": number,
                "class": document.getElementById("class").value,
            };
            this.setState({errors: []})
            localStorage.setItem(student.snumber,JSON.stringify(student));
            document.getElementById("action-form").action = "/register"
        }

    }

 
        


    render() {
        const { errors } = this.state;
        return <div id="register">
            <form onSubmit={this.handleSubmit} className="form-login" id="action-form">
                {errors.map(error => (
                    <p key= {error}>Error: {error}</p>
                ))} 
                <label htmlFor="name">Name</label>
                <input type="text" value={this.state.name} onChange={evt => this.setState({ name: evt.target.value}) }id="name" name="firstname" placeholder="Name"></input>

                <label htmlFor="surname">Surname</label>
                <input type="text" value={this.state.surname} onChange={evt => this.setState({ surname: evt.target.value}) } id="surname" name="surname" placeholder="Surname"></input>

                <label htmlFor="email">Email</label>
                <input type="text" value={this.state.email} onChange={evt => this.setState({ email: evt.target.value}) } id="email" name="email" placeholder="Email"></input>

                <label htmlFor="snumber">Student Number</label>
                <input type="text" value={this.state.snumber} onChange={evt => this.setState({ snumber: evt.target.value}) } id="snumber" name="snumber" placeholder="Student Number (starts with s)"></input>

                <label htmlFor="number">Number</label>
                <input type="text" value={this.state.number} onChange={evt => this.setState({ number: evt.target.value}) } id="number" name="number" placeholder="Phone Number"></input>
            
                <label htmlFor="class">Class</label>
                <select id="class" name="country">
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                </select>

                <input type="submit" value="Submit"></input>
            </form>
        </div>
    }
}

export default Register;