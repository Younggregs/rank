import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import NewRankTankPrivate from './neighborhoods/New Rank Tank Private'
import AppName from './neighborhoods/App Name'


export default class Login extends React.Component {

      render() {


            return (
                
            <Container fluid="true">
              <AppName/>        
              <section className="rank-bg"><br /> 
            <Row>
                <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                <section className="squared">
                <div className="title">New RankTank Private</div>
                <div className="squared-box">
                    <NewRankTankPrivate />
                </div>
                </section>
                </Col>     
            </Row>
            </section>
            </Container>

            )
        }
}

