import React, { Component } from 'react';
import './Register.css';





export default class Register extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName    = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this); 
        this.onChangeEmail   = this.onChangeEmail.bind(this);
        this.onChangeSnumber = this.onChangeSnumber.bind(this);
        this.onChangePhone   = this.onChangePhone.bind(this);
        this.onChangeYear    = this.onChangeYear.bind(this);



        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            surname: '',
            email: '',
            snumber: '',
            phone: '',
            year: ''
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    
    onChangeSurname(e){
      this.setState({surname: e.target.value})
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeSnumber(e){
      this.setState({snumber: e.target.value.toUpperCase()})
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }

    onChangeYear(e){
      this.setState({ year: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
       

      

        if(this.state.name === "" || this.state.surname === '' || this.state.email === '' || this.state.snumber === '' || this.state.phone === '' ){
          alert("Fields must not be empty");
        }else if(localStorage.getItem(this.state.snumber)){
            alert("There is already one user with same student number.")
        
        }else if(!this.state.email.endsWith("@ozu.edu.tr")){
            alert("Email must be OZU mail format.")
        }else if(this.state.snumber[0] !== 'S'){
            alert('Student number must start with S')
        }else if(this.state.snumber.length !== 7) {
            alert("Student number must be 7 digits");

        }else if(this.state.phone.length !== 11) {
          alert("Phone number must be 11 digit")
        }

          else{

          this.setState({
            name: '',
            surname: '',
            email: '',
            snumber: '',
            phone: '',
            year: ''
        })
          localStorage.setItem(this.state.snumber, JSON.stringify(this.state));
        }

        
    }

    // React Life Cycle
    componentDidMount() {
        this.setState({
                name: '',
                surname: '',
                email: '',
                snumber: '',
                phone: '',
                year : ''

        })
    }


    render() {
        return (
            <div className="register">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Surname</label>
                        <input type="text" className="form-control" value={this.state.surname} onChange={this.onChangeSurname} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Student Number</label>
                        <input type="text" className="form-control" value={this.state.snumber} onChange={this.onChangeSnumber} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <select className="form-control" value={this.state.year} onChange={this.onChangeYear}>
                        <option>Freshman</option>
                        <option>Sophomore</option>
                        <option>Junior</option>
                        <option>Senior</option>
                        </select>
                        
                        
                        
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}
