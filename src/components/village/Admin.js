import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import RankTankBucket from './neighborhoods/Rank Tank Bucket'
import AdminBucket from './neighborhoods/Admin Bucket'


export default class Login extends React.Component {



    render() {

        return (
            <div className="login-bg">  
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                <section className="squared">
                <div className="label">
                        RankTank
                </div>
                <div className="title">Control Room</div>

                <section className="link-container">
                    <Link to='/new_rank'>
                        <div className="link-box">
                            Create New RankTank
                        </div>
                    </Link>
                    <RankTankBucket />
                    <Link to='/new_admin'>
                        <div className="link-box">
                            Create New Admin
                        </div>
                    </Link>
                    <AdminBucket />
                    </section>
                </section>
                </Col>     
            </Row>
            </div>

    
            )
        }
}

