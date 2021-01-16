import React from 'react'
import './Freshman.css'
import Modal from './Modal'
import { Container, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

class Freshman extends React.Component {
    render() {
        return <div id='lessons'>
            <Modal  className='freshman-button' 
                    buttonLabel={'CS 101'} title ='CS 101 Computer Programming' 
                    description1='To introduce the student to the fundamental concepts of computer programming and algorithm
                     design and implementation using an modern programming language (e.g Java).' 
                    description2='Topics include computer organization, hardware and software terminology, programming
                     environments and tools, Java programming syntax, control statements (if-else, loops, break,
                     continue), methods, parameters, classes, and principle software engineering guidelines.'/>
            
            <Modal  className='freshman-button' 
                    buttonLabel={'CS 102'} title ='CS 102 Object-Oriented Programming' 
                    description1='To introduce the student to the fundamental concepts of object oriented programming such as
                     inheritance, polymorphism, code sharing, object oriented modularity' 
                    description2='Subjects of the course are classes and objects, inheritance, static and non-static methods,
                                      polymorphism, interfaces, abstract classes, exception handling, collection libraries, basic UML
                                      concepts, and principles of object oriented design.'/>

            <Modal  className='freshman-button' 
                    buttonLabel={'MATH 103'} title ='MATH 103 Calculus for Engineering I' 
                    description1='The student will learn some of the fundamental concepts, ideas and tools of single-variable
                     differential and integral calculus with emphasis on engineering applications.' 
                    description2='MATH 103 covers differential and integral calculus of single-variable functions. Topics include
                                      functions, limit, continuity, the derivative, applications of derivatives, the definite integral,
                                      indefinite integrals, applications of definite integrals, transcendental functions, and integration
                                      techniques.'/>
            
            <Modal  className='freshman-button' 
                    buttonLabel={'MATH 104'} title ='MATH 104 Calculus for Engineering II' 
                    description1='The student will learn some of the fundamental concepts, ideas and tools of single and
                     multivariable differential and integral calculus with emphasis on engineering applications.' 
                    description2='MATH 104 covers selected topics in differential and integral calculus of single and multi-variable
                     functions. Topics include infinite sequences and series, parametric equations, polar coordinates,
                     vectors, vector-valued functions, partial derivatives, and multiple integrals'/>
            
            <Modal  className='freshman-button' 
                    buttonLabel={'PHYS 101'} 
                    title ='PHYS 101 Physics I' 
                    description1='Topics include computer organization, hardware and software terminology, programming
                     environments and tools, Java programming syntax, control statements (if-else, loops, break,
                     continue), methods, parameters, classes, and principle software engineering guidelines.' 
                    description2='This is an introductory, calculus-based physics course for engineering majors, which focuses on
                                      mechanics, the study of the relationships among force, matter and motion.'/>

            <Modal  className='freshman-button' 
                    buttonLabel={'PHYS 102'} 
                    title ='PHYS 101 Physics II' 
                    description1='This course aims to provide adequate knowledge in science by teaching fundamental laws and
                     principles of physics related to electromagnetics and an ability to use this knowledge to solve
                     complex engineering problems.' 
                    description2='This is an introductory, calculus-based physics course for engineering majors, which focuses on
                                      electricity and magnetism.'/>
            
        </div>
    }
}

export default Freshman;