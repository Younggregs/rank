import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import RankTankBucket from './neighborhoods/Rank Tank Bucket'
import AdminBucket from './neighborhoods/Admin Bucket'
import AppName from './neighborhoods/App Name'


export default class Login extends React.Component {



    render() {

        return (
            <Container fluid="true">
                <AppName/>   
            
            <div className="login-bg">  
            <Row className="justify-content-center">
                <Col lg={12} md={12} sm={12} xs={12}>
                <section className="squared">
                <div className="squared-box">
                <div className="label-2">
                    Control Room
                </div>
                <div className="title"></div>

                <section className="link-container">
                    <Link to='/new_rank'>
                        <div className="link-box">
                            Create New RankTank
                        </div>
                    </Link>
                    <RankTankBucket />

                    {/*
                    <Link to='/new_admin'>
                        <div className="link-box">
                            Create New Admin
                        </div>
                    </Link>
                    <AdminBucket />
                    */}
                    <Link to='/logout'>
                        <div className="link-box">
                            Logout
                        </div>
                    </Link>
                    </section>

                </div>
                </section>
                </Col>     
            </Row>
            </div>
            </Container>
    
            )
        }
}

