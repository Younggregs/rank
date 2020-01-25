import React from 'react'
import { Row, Col, FormGroup, Form, FormControl, Alert } from 'react-bootstrap'
import { Button } from 'reactstrap';


export default class NewRTAdmin extends React.Component {


    state = {
        title_err: false,
        number_err: false,
        contestants_err: false,
        isLoading: false,
        message: {},
    }


      async submit(){

        this.setState({ 
          isLoading: true,
          title_err: false,
          number_err: false,
          contestants_err: false,
        })


        var proceed = false
        //const auth_code = localStorage.getItem('auth_code') 
  
        var formData = new FormData()

        var name = document.getElementById("name").value
        var contestants_no = document.getElementById("contestants_no").value
        var contestants = document.getElementById("contestants").value

        if(name){

          if(contestants_no){

            if(contestants){

                proceed = true
                
            }else{
                this.setState({ contestants_err: true })
            }  

          }else{
            this.setState({number_err: true})
          }

        }else{
          this.setState({name_err: true})
        }

        



        
        if(proceed){
  
        formData.append('name', name)
        formData.append('contestants_no', contestants_no)
        formData.append('contestants', contestants)


        try {
          const res = await fetch('http://ranq.xyz/api/new_contest/', {
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
                <section>
                    <Button color="danger" size="lg" block style={{ marginBottom: '1rem' }}>Create RankTank</Button>
                    <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <Form.Label>
                        <div className="form-label"> Title
                        {this.state.title_err ? (
                            <span className="err-msg">
                                **
                            </span>
                            ) : (
                                <div/>
                        )}
                        </div>
                    </Form.Label>
                    <FormControl
                      type="text"
                      id="name"
                      name="name"
                    />
                  </FormGroup>
               </Col>
         
               <Col lg={6} md={6} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <Form.Label>
                        <div className="form-label"> Number of Contestants
                        {this.state.number_err? (
                            <span className="err-msg">
                                **
                            </span>
                            ) : (
                                <div/>
                            )}
                        </div>
                    </Form.Label>
                    <FormControl
                      type="number"
                      id="contestants_no"
                      name="contestants_no"
                    />
                  </FormGroup>
               </Col>
            </Row>


            <Row>
                <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <Form.Label>
                        <div className="form-label"> Contestants
                        {this.state.contestants_err ? (
                            <span className="err-msg">
                                **
                            </span>
                            ) : (
                                <div/>
                        )}
                        </div>
                    </Form.Label>
                    <FormControl
                      componentClass="textarea"
                      id="contestants"
                      name="contestants"
                      placeholder="eg Jim, Janet Jam"
                      rows={3}
                    />
                  </FormGroup>
               </Col>
            </Row>


            <Row>
            <Col lg={10} lgOffset={1} md={10} mdOffset={1} sm={12} xs={12}>
                <Alert key='dark' variant='dark'>
                    Note: :Seperate contestants with comma like so: : John, Joseph, Janet, Jim. 
                    <br />End list with no trailing comma like so: :John, Janet
                </Alert>
            </Col>
            </Row>


         
            <Row>
            <Col lg={4} lgOffset={5} md={4} mdOffset={5} sm={12} xs={12}>
                <br />
                  <Button onClick={this.submit.bind(this)} color="danger" size="lg">Submit</Button>{' '}
                <br />
                <br />
            </Col>
            </Row>
                </section>

            )
        }
}

