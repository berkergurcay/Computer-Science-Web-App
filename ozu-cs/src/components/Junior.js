import React from 'react'
import './Junior.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

class Junior extends React.Component {
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
            <button class="button-junior" id="myBtn2" onClick={()=> this.handleClick('class2','myBtn2','close2')}>CS 320</button>
            <div id="class2" class="modal">
                <div class="modal-content">
                    <span id="close2">&times;</span>
                    <h1>CS 320 Software Engineering</h1>
                    <p>To learn techniques for the management of quality of software products and software
                        development processes.
                    </p>
                    <p>This course introduces the theory and practice of software engineering. Main course topics
                        include software project management, process models, software quality metrics, and software
                        product/process quality management. The course will cover state-of-the-practice methods and
                        techniques that are utilized for different phases of the software development lifecycle including
                        requirement analysis, design, implementation, testing and maintenance.
                        
                    </p>
                </div>
            </div>

            <button class="button-junior" id="myBtn3" onClick={()=> this.handleClick('class3','myBtn3','close3')}>CS 321</button>
            <div id="class3" class="modal">
                <div class="modal-content">
                    <span id="close3">&times;</span>
                    <h1>CS 321 Programming Paradigms</h1>
                    <p>Comprehend the concepts of programming languages, be aware of their pros and cons under
                        realistic conditions, write programs using multiple paradigms at once.                    
                    </p>
                    <p>This course introduces the student to the fundamental semantic properties (such as operational
                        semantics, scoping, type inference, polymorphism) of functional, generic and imperative
                        programming paradigms and to how a programming language employs those paradigms in a
                        holistic way.
                    </p>
                </div>
            </div>

            <button class="button-junior" id="myBtn4" onClick={()=> this.handleClick('class4','myBtn4','close4')}>CS 333</button>
            <div id="class4" class="modal">
                <div class="modal-content">
                    <span id="close4">&times;</span>
                    <h1>CS 333 Algorithm Analysis</h1>
                    <p>To equip students with the skills of designing algorithms for a range of computational problems
                        (graph theoretic, number theoretic and general data processing) and analyzing the time
                        efficiency and correctness of algorithms.
                    </p>
                    <p>Topics include Greedy/Dynamic Programming/Divide and Conquer algorithm design paradigms,
                        Graph algorithms (minimum path, spanning tree, max flow), and intractability (NP & NPcomplete problem classes)
                    </p>
                </div>
            </div>

            <button class="button-junior" id="myBtn5" onClick={()=> this.handleClick('class5','myBtn5','close5')}>CS 350</button>
            <div id="class5" class="modal">
                <div class="modal-content">
                    <span id="close5">&times;</span>
                    <h1>CS 350 Operating Systems</h1>
                    <p>Comprehend the fundamental concepts, components, and mechanisms of modern operating
                        systems.                    
                    </p>
                    <p>This course covers the fundamental concepts of operating systems (OS), as well as the major
                        components of OS's, their mechanisms and interactions. Subjects include process
                        management, scheduling, synchronization, locks, memory management, virtualization, inputoutput, storage and file systems. Students gain practical knowledge by examining the kernel of
                        the open-source Linux OS and by implementing device drivers. Other advanced topics include
                        system security, multicore and distributed computing, OS's for mobile devices, and energy
                        efficiency
                    </p>
                </div>
            </div>

            <button class="button-junior" id="myBtn" onClick={()=> this.handleClick('class1','myBtn','close')}>CS 447</button>
            <div id="class1" class="modal">
                <div class="modal-content">
                    <span id="close">&times;</span>
                    <h1>CS 447 Computer Networking</h1>
                    <p>To learn the basics of computer networking technologies and be able to use networking tools
                        and network programming techniques.
                    </p>
                    <p>Principles of data communications between computers and other computing machines.
                        Overview of computer networking. ISO-OSI layered model as a framework. Basics of the
                        Internet applications. TCP/IP protocol suite. Network congestion and its control. Aspects of
                        reliable and efficient data transmission. Routing. Protocol design and analysis. Data link layer.
                        Local area networks. Assessment of network performance. Network programming exercises.
                    </p>
                </div>
            </div>
            
        </section>
    }
}

export default Junior;