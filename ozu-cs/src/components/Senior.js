import React from 'react'
import './Senior.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

class Senior extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(classno,mybtn,close){
        var modal = document.getElementById(classno);
        var btn = document.getElementById(mybtn);
        var span = document.getElementById(close);

        btn.onclick = function () {
            modal.style.display ="block";
        }
        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onClick = function (event) {
            if(event.target == modal){
                modal.style.display = "none";
            }
        }
    }
    
    render() {
        return   <section>
            <button class="button-senior" id="myBtn4" onClick={()=> this.handleClick('class4','myBtn4','close4')}>CS 391</button>
        <div id="class4" class="modal">
            <div class="modal-content">
                <span id="close4">&times;</span>
                <h1>CS 391 Web Application Development</h1>
                <p>To introduce the students to state-of-the-practice technologies, tools and frameworks for
                    developing Web applications.
                </p>
                <p>This course aims at providing students hands-on experience in Web application development,
                    with a particular focus on client-side development by means of popular technologies and
                    frameworks.
                </p>
            </div>
        </div>

        <button class="button-senior" id="myBtn" onClick={()=> this.handleClick('class1','myBtn','close')}>CS 401</button>
        <div id="class1" class="modal">
            <div class="modal-content">
                <span id="close">&times;</span>
                <h1>CS 401 Computer Science Senior Project I</h1>
                <p>To apply computer science knowledge to design and implement a prototype of a complicated
                    software system that solves a problem or improves/automates a process
                </p>
                <p>This is the first phase of the CS senior project course series meant to demonstrate the
                    knowledge and skills acquired in earlier coursework by applying them to tackle a concrete
                    project. Students work as part of inter -disciplinary teams, under the supervision of a faculty
                    member to plan and provide the design and a prototype implementation of a complicated
                    system.
                </p>
            </div>
        </div>

        <button class="button-senior" id="myBtn3" onClick={()=> this.handleClick('class3','myBtn3','close3')}>CS 402</button>
        <div id="class3" class="modal">
            <div class="modal-content">
                <span id="close3">&times;</span>
                <h1>CS 402 Computer Science Senior Project II</h1>
                <p>To guide students in applying computer science knowledge to develop, test, verify and validate
                    a complicated software system that solves a problem or improves/automates a process.
                </p>
                <p>This is the second phase of the CS senior project course series meant to demonstrate the
                    knowledge and skills acquired in earlier coursework by applying them to implement and verify a
                    concrete project. Students work as part of inter-disciplinary teams, under the supervision of a
                    faculty member to plan, develop, verify and validate a software system.
                </p>
            </div>
        </div>

        <button class="button-senior" id="myBtn2" onClick={()=> this.handleClick('class2','myBtn2','close2')}>CS 410</button>
        <div id="class2" class="modal">
            <div class="modal-content">
                <span id="close2">&times;</span>
                <h1>CS 410 Automata Theory and Formal Languages</h1>
                <p>To equip students with the skill of using abstract machines and formal languages to reason
                    about and deduce fundamental facts and limitations of computation that all current computers
                    are based on.
                </p>
                <p>This course covers automata theory, Turing machine, regular languages, context-free
                    grammars, and their properties, abstract machines and their fundamental role in computer
                    science theory, decidability and undecidability
                </p>
            </div>
        </div>
     
        
    </section>
    }
}

export default Senior;