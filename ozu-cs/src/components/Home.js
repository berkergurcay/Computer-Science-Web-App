import React from 'react'
import './Home.css'
import photo from '../images/ozu-eng.png';
import { Container, Row, Col} from 'reactstrap';



class Home extends React.Component {
    render() {

        return <Container>
            <Row> <Col sm='12' md='12' lg='12'>
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
            </Col>
            </Row>
        </Container>
    }
}

export default Home;