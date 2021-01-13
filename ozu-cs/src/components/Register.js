import React from 'react'
import './Register.css'

class Register extends React.Component {
    constructor(props){
        super(props);
        this.store = this.store.bind(this);
    }

    store(){

        var student = {
            firstname: document.getElementById("name").value,
            surname: document.getElementById("surname").value,
            email: document.getElementById("email").value,
            snumber: document.getElementById("snumber").value,
            number: document.getElementById("number").value,
            class: document.getElementById("class").value,
        };
        
        if (student.firstname == "" || student.surname == "" || student.email == "" || student.snumber == "" || student.number == "") {
            alert('Please fill all necessary fields');
            // document.getElementById("action-form").action="/register"
            // return false;
        }
       
        if (student.snumber.toLowerCase()[0] != 's') {
            alert('Student number should start with S');
            // document.getElementById("action-form").action="/register"

            // return false;
        }

        if (!student.email.endsWith('@ozu.edu.tr')) {
            alert ('Please enter your OzU email address');
            // document.getElementById("action-form").action="/register"

            // return false;
        }
        

        localStorage.setItem(student.snumber, JSON.stringify(student));
    }

    render() {
        return <div id="register">
            <form onSubmit={this.store} className="form-login"  method="GET" id="action-form"> 
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="firstname" placeholder="Name"></input>

                <label htmlFor="surname">Surname</label>
                <input type="text" id="surname" name="surname" placeholder="Surname"></input>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Email"></input>

                <label htmlFor="snumber">Student Number</label>
                <input type="text" id="snumber" name="snumber" placeholder="Student Number (starts with s)"></input>

                <label htmlFor="number">Number</label>
                <input type="text" id="number" name="number" placeholder="Phone Number"></input>
            
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