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
    render() {
        return   <section>
        <button class="button-sophomore" id="myBtn">CS 112</button>
        <div id="class1" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
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
        </section>
    }
}

export default Sophomore;