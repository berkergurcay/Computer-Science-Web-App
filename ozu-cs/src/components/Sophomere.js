import React from 'react'
import './Sophomore.css'
import Modal from './Modal'
import { Container, Row, Col } from 'reactstrap'

  class Sophomore extends React.Component {

    
    
    render() {
        return <Container id='lessons'>
        <Row><Col sm="12" md="12" lg="12">
        <Modal  className='sophomore-button' 
        buttonLabel={'CS 112'} title ='CS 112 Discrete Mathematics' 
        description1='To introduce the student to the fundamental concepts of computer programming and algorithm
        To introduce students to the concepts and techniques of discrete mathematics and to teach
        the relevance and practicality of this course in the field of computer science through examples.' 
        description2='Students are expected to develop skills for modeling theoretical or real-life problems using
        mathematical abstractions and finding an optimal or heuristic solution to these problems. It is
        anticipated that students become skilled at identifying sets, matrices, logic equations, recursive
        functions, and graphs. Students learn some of the fundamental mathematical concepts used in
        the computer science field. Topics include logic and proofs, set theory, relations and functions,
        induction and recursion, counting theory, permutations, discrete probability, graphs and tree
        structures, and Boolean algebra and computer programming related to these concepts.'/>

        <Modal  className='sophomore-button' 
        buttonLabel={'EE 203'} title ='EE 203 Digital Design' 
        description1='Students will find out what is digital versus analog, what is system, and they will learn how a
        problem or a part of it can be solved with a digital system. They will also finish the course with
        the necessary foundations so they can take microprocessors and digital electronics courses.' 
        description2='This course teaches the basics of digital logic design but yet emphasizes high-level aspects of
        "digital systems design" -- as the word "systems" in the course name implies. In that context, it
        is critical to understand analog versus digital, sensors, system I/O, waveforms, timing, area,
        power, and cost issues. As modern digital design problems are large, they can only be
        addressed with a scalable hence language based approach. In this course, we write digital
        designs in Verilog language (similar to C) for the most part and map them to FPGAs. In the lab,
        we also implement digital circuits with discrete components ? the traditional way, in addition to
        Verilog on FPGAs.'/>

        <Modal  className='sophomore-button' 
        buttonLabel={'CS 201'} title ='CS 201 Data Structures' 
        description1='To learn techniques for the design and analysis of algorithms using fundamental data
        structures.' 
        description2='This course provides an overview of fundamental data structures that are used frequently in
        computer science. It also introduces algorithm design and complexity analysis. Topics include
        singly and doubly linked lists, trees, graphs, queues, heaps, hash tables, and operations
        performed on these structures such as insertion, deletion, searching and sorting.'/>

        <Modal  className='sophomore-button' 
        buttonLabel={'CS 240'} title ='CS 240 Computer Architecture' 
        description1='Have them build a basic CPU on FPGA. Have them understand the trade-offs between common
        architectures. Have them understand the subsystems around a CPU, especially memory. Make
        them familiar with the jargon in the computer hardware world.' 
        description2='Topics include: design of a basic CPU on FPGA, instruction pipeline, RISC versus CISC, ALU
        design, Von Neumann vs Harvard architecture, memory hierarchy, OS support, interrupts,
        microcontrollers (MCU) versus microprocessors (uP), system buses, peripherals such as hard
        disk.'/>
         
         <Modal  className='sophomore-button' 
            buttonLabel={'CS 202'} title ='CS 202 Database Management Systems' 
            description1='Students learn general working principles of database management systems. They practice
            storing structured data in a database and then learn methods to update or query that data in
            an efficient way.' 
            description2='This course covers fundamental concepts in database management systems (DBMS). Topics
            include schemas, functional relations and normalization in relational databases, data storage
            medium, and file systems. In addition, new and emerging types DBMS that support objectoriented, semi-structured XML data models are discussed. Students learn to implement SQL
            queries and optimize them over open-source and/or commercial databases. They also develop
            applications using databases.'/>
        
        <Modal  className='sophomore-button' 
            buttonLabel={'MATH 211'} title ='>MATH 211 Linear Algebra' 
            description1='To introduce student to some of the fundamental concepts of linear algebra and useful tools to
            solve engineering problems.' 
            description2='Topics include vectors and matrices, solving linear equations, vector spaces and subspaces,
            orthogonality, determinants, complex algebra, eigenvalues and eigenvectors.'/>


        <Modal  className='sophomore-button' 
            buttonLabel={'MATH 217'} title ='Math 217 Probability and Statictics' 
            description1='To introduce students to the fundamentals of probability theory as well as statistics and the
            modeling and analysis of random phenomena encountered in different engineering problems.' 
            description2='Topics include an introduction to probability theory and mathematical statistics that emphasizes
            the probabilistic foundations required to understand probability models and statistical methods
            in solving practical problems in the real world. Additionally, topics include the probability
            axioms, Venn diagrams, tree diagrams, basic combinations, discrete and continuous random
            variables, common families of probability distributions, expectation, variance and moment for a
            given single random variable and its functions, covariance and correlation of jointly distributed
            random variables, the central limit theorem, fundamental one sample estimation techniques
            (method of point estimators), exploratory data analysis via various descriptive statistics,
            inferential statistical methods such as the various forms of the t-test, use of confidence
            intervals.'/>

        
        </Col> </Row>         
        </Container>
        
        
        
        
        
            
    }
}

export default Sophomore;