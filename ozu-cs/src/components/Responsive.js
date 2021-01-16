import React from 'react'
import Modal from './Modal'
import { Container, Row, Col } from 'reactstrap';


class Responsive extends React.Component {
    constructor(props) {
        super(props);
    const {
        buttonLabel,
        className,
        title,
        description1,
        description2,
      } = props;
    }


    render() {
       return  <Container> 
                <Row>
                    <Col sm="2" md="4"  lg="6"><Modal buttonLabel ={"CS 112"} className={"junior-button"} title={this.title} description1={this.description1}
                    description2={this.description2} /></Col>
                </Row>
        </Container>

}
    }
export default Responsive;