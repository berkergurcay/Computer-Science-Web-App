import React from 'react'
import './Senior.css'
import Modal from './Modal'
import { Container, Row, Col } from 'reactstrap';

class Senior extends React.Component {
    render() {
        return <Container id='lessons'>
        <Row><Col sm="12" md="12" lg="12">
            <Modal  className='senior-button' 
                    buttonLabel={'CS 391'} title ='CS 391 Web Application Development' 
                    description1='To introduce the students to state-of-the-practice technologies, tools and frameworks for
                    developing Web applications.' 
                    description2='This course aims at providing students hands-on experience in Web application development,
                    with a particular focus on client-side development by means of popular technologies and
                    frameworks.'/>
            
            <Modal  className='senior-button' 
                    buttonLabel={'CS 401'} title ='CS 401 Computer Science Senior Project I' 
                    description1='To apply computer science knowledge to design and implement a prototype of a complicated
                    software system that solves a problem or improves/automates a process' 
                    description2='This is the first phase of the CS senior project course series meant to demonstrate the
                    knowledge and skills acquired in earlier coursework by applying them to tackle a concrete
                    project. Students work as part of inter -disciplinary teams, under the supervision of a faculty
                    member to plan and provide the design and a prototype implementation of a complicated
                    system.'/>

            <Modal  className='senior-button' 
                    buttonLabel={'CS 402'} title ='CS 402 Computer Science Senior Project II' 
                    description1='To guide students in applying computer science knowledge to develop, test, verify and validate
                    a complicated software system that solves a problem or improves/automates a process.' 
                    description2='This is the second phase of the CS senior project course series meant to demonstrate the
                    knowledge and skills acquired in earlier coursework by applying them to implement and verify a
                    concrete project. Students work as part of inter-disciplinary teams, under the supervision of a
                    faculty member to plan, develop, verify and validate a software system.'/>
            
            <Modal  className='senior-button' 
                    buttonLabel={'CS 410'} title ='CS 410 Automata Theory and Formal Languages' 
                    description1='To equip students with the skill of using abstract machines and formal languages to reason
                    about and deduce fundamental facts and limitations of computation that all current computers
                    are based on.' 
                    description2='This course covers automata theory, Turing machine, regular languages, context-free
                    grammars, and their properties, abstract machines and their fundamental role in computer
                    science theory, decidability and undecidability.'/>
            
            <Modal  className='senior-button' 
                    buttonLabel={'CS 447'} 
                    title ='CS 447 Computer Networkin' 
                    description1='To learn the basics of computer networking technologies and be able to use networking tools
                    and network programming techniques.' 
                    description2='Principles of data communications between computers and other computing machines.
                    Overview of computer networking. ISO-OSI layered model as a framework. Basics of the
                    Internet applications. TCP/IP protocol suite. Network congestion and its control. Aspects of
                    reliable and efficient data transmission. Routing. Protocol design and analysis. Data link layer.
                    Local area networks. Assessment of network performance. Network programming exercises.'/>
                    </Col> </Row>         
        </Container>
    }
}

export default Senior;