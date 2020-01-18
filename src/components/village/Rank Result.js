import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import lottie from "lottie-web";
import RankTitle from './neighborhoods/rank title'
import RankContestants from './neighborhoods/rank contestants'
import RankPolls from './neighborhoods/rank polls'
import AppName from './neighborhoods/App Name'



export default class Rank extends React.Component {
      



      render() {

            return (
                  <Container fluid="true">
                        <AppName/>   
                  <section className="rank-bg">
                  <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                  <section className="squared">
                        <div className="label">
                              Rank Polls
                        </div>
                  <div className="title">Realtime Result of Polls</div>
                        <RankTitle rank_id={this.props.match.params.rank_id}/>
                        <RankContestants rank_id={this.props.match.params.rank_id}/>
                        <RankPolls rank_id={this.props.match.params.rank_id}/>
                  </section>
                  </Col>     
              </Row>

            </section>
            </Container>
            
      )}
}

