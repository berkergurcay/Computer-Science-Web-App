import React from 'react'
import './Home.css'
import photo from '../images/ozu-eng.png';

import Register from './Register';


class Home extends React.Component {
    render() {

        <Container> 
            <Row>
                <Col sm="6" md="4"  lg="2"><img src={bag} alt="bag" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={camera} alt="camera" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={shoe} alt="shoe" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={tablet} alt="tablet" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={toy} alt="toy" /></Col>
                <Col sm="6" md="4"  lg="2"><img src={watch} alt="watch" /></Col>
            </Row>
        </Container>
        return <div>
        <div id="warning">
            <label class="anaTitle" id="page-title" >
                <a href="https://www.ozyegin.edu.tr/tr/covid-19/2020-2021-akademik-yili-guz-donemi%22%3E">
                  2020 - 2021 Akademik Yılı Güz Döneminde Derslerin Uzaktan Eğitim Yoluyla Yapılmasına Karar Verilmiştir</a>
            </label>
        </div>
        <div id="div2">
            <label class="anaTitle" id="page-title">
                <a id="nodecoration" href="https://cs.ozyegin.edu.tr/%22%3E">
                  Welcome to Ozyegin University Computer Science Department Website</a>
            </label>
        </div>

        <div id="photo"> 
            <img src={photo} alt=""/>
        </div>

    </div>
    }
}

export default Home;