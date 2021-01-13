import React from 'react'
import './Sophomore.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

  class Sophomore extends React.Component {
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
        <button className="button" id="myBtn" value="CS 112" onClick={()=> this.handleClick('class1','myBtn','close')}> CS 112</button>
        <div id="class1" className="modal">
            
            <div className="modal-content">
                <span id="close">&times;</span>
                <h1>CS 112 Discrete Math</h1>
                <p>To introduce the student to the fundamental concepts of computer programming and algorithm
                    To introduce students to the concepts and techniques of discrete mathematics and to teach
                    the relevance and practicality of this course in the field of computer science through examples.
                </p>
                <p>Students are expected to develop skills for modeling theoretical or real-life problems using
                    mathematical abstractions and finding an optimal or heuristic solution to these problems. It is
                    anticipated that students become skilled at identifying sets, matrices, logic equations, recursive
                    functions, and graphs. Students learn some of the fundamental mathematical concepts used in
                    the computer science field. Topics include logic and proofs, set theory, relations and functions,
                    induction and recursion, counting theory, permutations, discrete probability, graphs and tree
                    structures, and Boolean algebra and computer programming related to these concepts.
                </p>
                </div>
            </div>
        <button class="button" id="myBtn2" onClick={()=> this.handleClick('class2','myBtn2','close2')}>EE 203</button>
        <div id="class2" class="modal">
            <div class="modal-content">
                <span id="close2">&times;</span>
                <h1>EE 203 Digital Design</h1>
                <p>Students will find out what is digital versus analog, what is system, and they will learn how a
                    problem or a part of it can be solved with a digital system. They will also finish the course with
                    the necessary foundations so they can take microprocessors and digital electronics courses
                </p>
                <p>This course teaches the basics of digital logic design but yet emphasizes high-level aspects of
                    "digital systems design" -- as the word "systems" in the course name implies. In that context, it
                    is critical to understand analog versus digital, sensors, system I/O, waveforms, timing, area,
                    power, and cost issues. As modern digital design problems are large, they can only be
                    addressed with a scalable hence language based approach. In this course, we write digital
                    designs in Verilog language (similar to C) for the most part and map them to FPGAs. In the lab,
                    we also implement digital circuits with discrete components ? the traditional way, in addition to
                    Verilog on FPGAs.
                </p>
            </div>
        </div>
        <button class="button" id="myBtn3"  onClick={()=> this.handleClick('class3','myBtn3','close3')}>MATH 212</button>
        <div id="class3" class="modal">
            <div class="modal-content">
                <span id="close3">&times;</span>
                <h1>Math 212 Differential Equations</h1>
                <p>The student will learn some of the fundamental concepts, ideas and tools of differential
                    equations with modeling and engineering applications.
                </p>
                <p>MATH 212 covers techniques for solving ordinary differential equations (ODE) and includes an
                    introduction to boundary-value problems for partial differential equations (PDEs). Topics include
                    first-order ODE, second- and higher-order linear ODE, series solutions for second-order linear
                    ODE, the Laplace transform, systems of first-order linear ODE and second-order linear PDE.
                </p>
            </div>
        </div>

        <button class="button" id="myBtn4" onClick={()=> this.handleClick('class4','myBtn4','close4')}>CS 201</button>
        <div id="class4" class="modal">
            <div class="modal-content">
                <span id="close4">&times;</span>
                <h1>CS 201 Data Structures</h1>
                <p>To learn techniques for the design and analysis of algorithms using fundamental data
                    structures.
                </p>
                <p>This course provides an overview of fundamental data structures that are used frequently in
                    computer science. It also introduces algorithm design and complexity analysis. Topics include
                    singly and doubly linked lists, trees, graphs, queues, heaps, hash tables, and operations
                    performed on these structures such as insertion, deletion, searching and sorting.
                </p>
            </div>
        </div>

        <button class="button" id="myBtn5" onClick={()=> this.handleClick('class5','myBtn5','close5')}>CS 240</button>
        <div id="class5" class="modal">
            <div class="modal-content">
                <span id="close5">&times;</span>
                <h1>CS 240 Computer Architecture</h1>
                <p>Have them build a basic CPU on FPGA. Have them understand the trade-offs between common
                    architectures. Have them understand the subsystems around a CPU, especially memory. Make
                    them familiar with the jargon in the computer hardware world.
                </p>
                <p>Topics include: design of a basic CPU on FPGA, instruction pipeline, RISC versus CISC, ALU
                    design, Von Neumann vs Harvard architecture, memory hierarchy, OS support, interrupts,
                    microcontrollers (MCU) versus microprocessors (uP), system buses, peripherals such as hard
                    disk.
                </p>
            </div>
        </div>

        <button class="button" id="myBtn6" onClick={()=> this.handleClick('class6','myBtn6','close6')}>CS 202</button>
        <div id="class6" class="modal">
            <div class="modal-content">
                <span id="close6">&times;</span>
                <h1>CS 202 Database Management Systems</h1>
                <p>Students learn general working principles of database management systems. They practice
                    storing structured data in a database and then learn methods to update or query that data in
                    an efficient way.
                </p>
                <p>This course covers fundamental concepts in database management systems (DBMS). Topics
                    include schemas, functional relations and normalization in relational databases, data storage
                    medium, and file systems. In addition, new and emerging types DBMS that support objectoriented, semi-structured XML data models are discussed. Students learn to implement SQL
                    queries and optimize them over open-source and/or commercial databases. They also develop
                    applications using databases.
                </p>
            </div>
        </div>

        <button class="button" id="myBtn7" onClick={()=> this.handleClick('class7','myBtn7','close7')}>MATH 211</button>
        <div id="class7" class="modal">
            <div class="modal-content">
                <span id="close7">&times;</span>
                <h1>MATH 211 Linear Algebra</h1>
                <p>To introduce student to some of the fundamental concepts of linear algebra and useful tools to
                    solve engineering problems.
                </p>
                <p>Topics include vectors and matrices, solving linear equations, vector spaces and subspaces,
                    orthogonality, determinants, complex algebra, eigenvalues and eigenvectors.
                    
                </p>
            </div>
        </div>

        <button class="button" id="myBtn8" onClick={()=> this.handleClick('class8','myBtn8','close8')}>MATH 217</button>
        <div id="class8" class="modal">
            <div class="modal-content">
                <span id="close8">&times;</span>
                <h1>Math 217 Probability and Statictics</h1>
                <p>To introduce students to the fundamentals of probability theory as well as statistics and the
                    modeling and analysis of random phenomena encountered in different engineering problems.
                </p>
                <p>Topics include an introduction to probability theory and mathematical statistics that emphasizes
                    the probabilistic foundations required to understand probability models and statistical methods
                    in solving practical problems in the real world. Additionally, topics include the probability
                    axioms, Venn diagrams, tree diagrams, basic combinations, discrete and continuous random
                    variables, common families of probability distributions, expectation, variance and moment for a
                    given single random variable and its functions, covariance and correlation of jointly distributed
                    random variables, the central limit theorem, fundamental one sample estimation techniques
                    (method of point estimators), exploratory data analysis via various descriptive statistics,
                    inferential statistical methods such as the various forms of the t-test, use of confidence
                    intervals.
                </p>
            </div>
        </div>





        </section>
    }
}

export default Sophomore;