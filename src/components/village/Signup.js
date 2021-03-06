import React from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, FormGroup, Button, Form, FormControl } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import lottie from 'lottie-web';
import { login } from './auth/Auth'

export default class Signup extends React.Component {


    state = {
        email_err: false,
        password_err: false,
        isLoading: false,
        message: {},
    }



    componentDidMount() {

        setTimeout(() => { 
          lottie.loadAnimation({
            container: this.ref,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "/login-bg.json"
          });
        }, 1000);
      }



      async submit(){

        this.setState({ 
          isLoading: true,
          email_err: false,
          password_err: false,
          name_err: false,
        })


        var proceed = false
        //const auth_code = localStorage.getItem('auth_code') 
  
        var formData = new FormData()

        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        var name = document.getElementById("name").value

        if(email){

            if(password){

                if(name){

                    proceed = true

                }else{
                    this.setState({firstname_err: true})
                }
   
            }else{
                this.setState({password_err: true})
            }

        }else{
          this.setState({email_err: true})
        }

        



        
        if(proceed){

  
        formData.append('email', email)
        formData.append('password', password)
        formData.append('name', name)


        try {
          const res = await fetch('http://ranq.xyz/api/signup/', {
           body : formData,
           method: 'POST',
          })
          const message = await res.json();
            this.setState({
              message
            });
          console.log(message)
  
        } catch (e) {
          console.log(e);
        }

      }
      
        login(email, password)
        this.setState({ isLoading: false })
  
  }




      render() {
            return (
            <div className="login-bg">
              <Row>

                <Col lg={6} md={6} sm={12} xs={12}> 

                <section className="login">
                    

                    <div className="label">
                        Ranq
                    </div>
                    <div className="login-box">
                      <div className="title">Register</div>
                    



            <Row className="justify-content-center">
            <Col lg={6} md={6} sm={6} xs={6}> 
            <Link to="/">
              <Button variant="outline-success">Signin</Button>
            </Link>
            </Col>

            <Col lg={6} md={6} sm={6} xs={6}> 
            <Link to="/signup">
              <Button variant="info">Signup</Button>
            </Link>
            </Col>
            </Row><br />




                <Row className="justify-content-md-center">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <Form.Label>
                        <div className="form-label"> Full Name
                        {this.state.name_err ? (
                            <span className="err-msg">
                                **
                            </span>
                            ) : (
                                <div/>
                        )}
                        </div>
                    </Form.Label>
                    <FormControl
                      type="name"
                      id="name"
                      name="name"
                    />
                  </FormGroup>
               </Col>
            </Row>


               
            

            <Row className="justify-content-md-center">
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <Form.Label>
                        <div className="form-label"> Email
                        {this.state.email_err ? (
                            <span className="err-msg">
                                **
                            </span>
                            ) : (
                                <div/>
                        )}
                        </div>
                    </Form.Label>
                    <FormControl
                      type="email"
                      id="email"
                      name="email"
                    />
                  </FormGroup>
               </Col>
         
               <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <Form.Label>
                        <div className="form-label"> Password
                        {this.state.password_err ? (
                            <span className="err-msg">
                                **
                            </span>
                            ) : (
                                <div/>
                            )}
                        </div>
                    </Form.Label>
                    <FormControl
                      type="password"
                      id="password"
                      name="password"
                      cols={5}
                    />
                  </FormGroup>
               </Col>
            </Row>

            <Row className="justify-content-center">
            <Col lg={6} md={6} sm={6} xs={6}>
                <br />
                  <Button variant="success" onClick={this.submit.bind(this)}>Submit</Button>
                <br />
                <br />
            </Col>
            
            </Row>

          <Row>
          
          <Col lg={12} md={12} sm={12} xs={12}>
          <section>
          {this.state.isLoading ? (
             
            <Spinner color="#ff0000" size={20}/>

          ) : (
            <div>
            
            {this.state.message.error ? (
                <span><p className="err-msg">{this.state.message.error}</p></span>
            ) : (
                <span></span>
            )}


            {this.state.message.code ? (
               <span><Redirect to='/admin'/></span>
            ) : (
                <span></span>
            )}

            </div>
          
          )}
          </section>
              </Col>

            </Row>


            </div>
            </section>

            </Col>     
            </Row>

            </div>

            )
        }
}

