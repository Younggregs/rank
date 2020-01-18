import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import NewRankTank from './neighborhoods/New Rank Tank'
import AppName from './neighborhoods/App Name'


export default class Login extends React.Component {

      render() {


            return (
                
              <Container fluid="true">
              <AppName/>          
              <section className="rank-bg"><br /> 
            <Row>
                <Col lg={8} md={8} sm={12} xs={12}>
                <section className="squared">
                <div className="title">New RankTank Public</div>
                <div className="squared-box">
                    <NewRankTank />
                </div>
                </section>
                </Col>     
            </Row>
            </section>
            </Container>
            

            )
        }
}

