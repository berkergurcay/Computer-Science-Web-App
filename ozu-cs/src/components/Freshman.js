import React from 'react'
import './Freshman.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

class Freshman extends React.Component {
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
            <button class="button-freshman" id="myBtn" onClick={()=> this.handleClick('class1','myBtn','close')}>CS 101</button>
        <div id="class1" class="modal">
            <div class="modal-content">
                <span id="close">&times;</span>
                <h1>CS 101 Computer Programming</h1>
                <p>To introduce the student to the fundamental concepts of computer programming and algorithm
                    design and implementation using an modern programming language (e.g Java).
                </p>
                <p>Topics include computer organization, hardware and software terminology, programming
                    environments and tools, Java programming syntax, control statements (if-else, loops, break,
                    continue), methods, parameters, classes, and principle software engineering guidelines.
                </p>
            </div>
        </div>

        <button class="button-freshman" id="myBtn2" onClick={()=> this.handleClick('class2','myBtn2','close2')}>CS 102</button>
        <div id="class2" class="modal">
            <div class="modal-content">
                <span id="close2">&times;</span>
                <h1>CS 102 Object-Oriented Programming</h1>
                <p>To introduce the student to the fundamental concepts of object oriented programming such as
                    inheritance, polymorphism, code sharing, object oriented modularity
                </p>
                <p>Subjects of the course are classes and objects, inheritance, static and non-static methods,
                    polymorphism, interfaces, abstract classes, exception handling, collection libraries, basic UML
                    concepts, and principles of object oriented design.
                </p>
            </div>
        </div>

        <button class="button-freshman" id="myBtn3" onClick={()=> this.handleClick('class3','myBtn3','close3')}>MATH 103</button>
        <div id="class3" class="modal">
            <div class="modal-content">
                <span id="close3">&times;</span>
                <h1>MATH 103 Calculus for Engineering I</h1>
                <p>The student will learn some of the fundamental concepts, ideas and tools of single-variable
                    differential and integral calculus with emphasis on engineering applications.
                </p>
                <p>MATH 103 covers differential and integral calculus of single-variable functions. Topics include
                    functions, limit, continuity, the derivative, applications of derivatives, the definite integral,
                    indefinite integrals, applications of definite integrals, transcendental functions, and integration
                    techniques.
                </p>
            </div>
        </div>

        <button class="button-freshman" id="myBtn4" onClick={()=> this.handleClick('class4','myBtn4','close4')}>MATH 104</button>
        <div id="class4" class="modal">
            <div class="modal-content">
                <span id="close4">&times;</span>
                <h1>MATH 104 Calculus for Engineering II</h1>
                <p>The student will learn some of the fundamental concepts, ideas and tools of single and
                    multivariable differential and integral calculus with emphasis on engineering applications.
                </p>
                <p>MATH 104 covers selected topics in differential and integral calculus of single and multi-variable
                    functions. Topics include infinite sequences and series, parametric equations, polar coordinates,
                    vectors, vector-valued functions, partial derivatives, and multiple integrals
                </p>
            </div>
        </div>

        <button class="button-freshman" id="myBtn5" onClick={()=> this.handleClick('class5','myBtn5','close5')}>PHYS 101</button>
        <div id="class5" class="modal">
            <div class="modal-content">
                <span id="close5">&times;</span>
                <h1>PHYS 101 Physics I</h1>
                <p>Topics include computer organization, hardware and software terminology, programming
                    environments and tools, Java programming syntax, control statements (if-else, loops, break,
                    continue), methods, parameters, classes, and principle software engineering guidelines.
                </p>
                <p>This is an introductory, calculus-based physics course for engineering majors, which focuses on
                    mechanics, the study of the relationships among force, matter and motion.
                </p>
            </div>
        </div>

        <button class="button-freshman" id="myBtn6" onClick={()=> this.handleClick('class6','myBtn6','close6')}>PHYS 102</button>
        <div id="class6" class="modal">
            <div class="modal-content">
                <span id="close6">&times;</span>
                <h1>PHYS 102 Physics II</h1>
                <p>This course aims to provide adequate knowledge in science by teaching fundamental laws and
                    principles of physics related to electromagnetics and an ability to use this knowledge to solve
                    complex engineering problems.
                </p>
                <p>This is an introductory, calculus-based physics course for engineering majors, which focuses on
                    electricity and magnetism.
                </p>
            </div>
        </div> 
        
    </section>
    }
}

export default Freshman;