import React from 'react'
import { Row, Col, FormGroup, FormControl, Form } from 'react-bootstrap'
import { Button } from 'reactstrap';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import lottie from 'lottie-web';

export default class ForgotPassword extends React.Component {


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
        })


        var proceed = false
        //const auth_code = localStorage.getItem('auth_code') 
  
        var formData = new FormData()

        var email = document.getElementById("email").value

        if(email){

                proceed = true

        }else{
          this.setState({email_err: true})
        }

        



        
        if(proceed){

  
        formData.append('email', email)


        try {
          const res = await fetch('http://167.172.221.98:8000/api/forgot_password/', {
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
  
        this.setState({ isLoading: false })
  
  }




      render() {
            return (
            <div className="login-bg">
              <Row>

                <Col lg={6} md={6} sm={12} xs={12}> 

                <section className="login">
                    

                    <div className="label">
                        RankTank
                    </div>
                    <div className="login-box">
                      <div className="title">Recover Password</div>


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
         
            </Row>

            <Row className="justify-content-md-center">
            <Col lg={4} md={4} sm={12} xs={12}>
                <br />
                  <Button color="secondary" onClick={this.submit.bind(this)}>Submit</Button>
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
                <span><p className="success-msg">{this.state.message.code}</p></span>  
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

