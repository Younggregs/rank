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
                <section className="squared">
                <div className="label-2">New RankTank Public</div>
                <div className="squared-box">
                    <NewRankTank />
                </div>
                </section>    
            </Row>
            </section>
            </Container>
            

            )
        }
}

