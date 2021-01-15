import React from 'react'
import './Junior.css'
import Modal from './Modal'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

class Junior extends React.Component {
    render() {
        return <div id='lessons'>
            <Modal  className='junior-button' 
                    buttonLabel={'CS 320'} title ='CS 320 Software Engineering' 
                    description1='To learn techniques for the management of quality of software products and software
                    development processes.' 
                    description2='This course introduces the theory and practice of software engineering. Main course topics
                    include software project management, process models, software quality metrics, and software
                    product/process quality management. The course will cover state-of-the-practice methods and
                    techniques that are utilized for different phases of the software development lifecycle including
                    requirement analysis, design, implementation, testing and maintenance.'/>
            
            <Modal  className='junior-button' 
                    buttonLabel={'CS 321'} title ='CS 321 Programming Paradigms' 
                    description1='Comprehend the concepts of programming languages, be aware of their pros and cons under
                    realistic conditions, write programs using multiple paradigms at once.' 
                    description2='This course introduces the student to the fundamental semantic properties (such as operational
                        semantics, scoping, type inference, polymorphism) of functional, generic and imperative
                        programming paradigms and to how a programming language employs those paradigms in a
                        holistic way.'/>

            <Modal  className='junior-button' 
                    buttonLabel={'CS 333'} title ='CS 333 Algorithm Analysis' 
                    description1='To equip students with the skills of designing algorithms for a range of computational problems
                    (graph theoretic, number theoretic and general data processing) and analyzing the time
                    efficiency and correctness of algorithms.' 
                    description2='Topics include Greedy/Dynamic Programming/Divide and Conquer algorithm design paradigms,
                    Graph algorithms (minimum path, spanning tree, max flow), and intractability (NP & NPcomplete problem classes)'/>
            
            <Modal  className='junior-button' 
                    buttonLabel={'CS 350'} title ='CS 350 Operating Systems' 
                    description1='Comprehend the fundamental concepts, components, and mechanisms of modern operating
                    systems.' 
                    description2='This course covers the fundamental concepts of operating systems (OS), as well as the major
                    components of OSs, their mechanisms and interactions. Subjects include process
                    management, scheduling, synchronization, locks, memory management, virtualization, inputoutput, storage and file systems. Students gain practical knowledge by examining the kernel of
                    the open-source Linux OS and by implementing device drivers. Other advanced topics include
                    system security, multicore and distributed computing, OSs for mobile devices, and energy
                    efficiency'/>
            
            <Modal  className='junior-button' 
                    buttonLabel={'CS 447'} 
                    title ='CS 447 Computer Networkin' 
                    description1='To learn the basics of computer networking technologies and be able to use networking tools
                    and network programming techniques.' 
                    description2='Principles of data communications between computers and other computing machines.
                    Overview of computer networking. ISO-OSI layered model as a framework. Basics of the
                    Internet applications. TCP/IP protocol suite. Network congestion and its control. Aspects of
                    reliable and efficient data transmission. Routing. Protocol design and analysis. Data link layer.
                    Local area networks. Assessment of network performance. Network programming exercises.'/>
        </div>
    }
}

export default Junior;