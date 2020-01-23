import React, {useState} from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Row, Col, FormGroup, Form, Button, FormControl, Alert } from 'react-bootstrap'
import { Collapse, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import lottie from "lottie-web";


export default class NewRankTank extends React.Component {


    state = {
        name_err: false,
        contestants_err: false,
        isLoading: false,
        message: {},
        value: '',
        copied: false,
    }


      async submit(){

        this.setState({ 
          isLoading: true,
          number_err: false,
          contestants_err: false,
        })

        const auth = localStorage.getItem('auth_code')


        var proceed = false
        //const auth_code = localStorage.getItem('auth_code') 
  
        var formData = new FormData()

        var title = document.getElementById("title").value
        var contestants = document.getElementById("contestants").value

        if(title){

          if(contestants){

                proceed = true
           
          }else{
            this.setState({number_err: true})
          }

        }else{
          this.setState({name_err: true})
        }

        



        
        if(proceed){
  
        formData.append('title', title)
        formData.append('contestants', contestants)


        try {
          const res = await fetch('http://167.172.221.98:8000/api/new_contest/', {
           body : formData,
           method: 'POST',
           headers : {
            'Authorization' : 'Token ' + auth,
          },
          })
          const message = await res.json();
            this.setState({
              message
            });
          
            if(message.code){
              const url = 'http://167.172.221.98:3000/rank/' + message.code
              this.setState({
                value: url, success: true
              });
              this.toggleSuccess()
            }
  
        } catch (e) {
          console.log(e);
        }

      }
  
        this.setState({ isLoading: false })
  
  }






  toggleSuccess() {

    setTimeout(() => { 
      lottie.loadAnimation({
        container: this.ref,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/checked-done.json"
      });
    }, 1000);
  }




      render() {

            return (
                <section>
                    <Button variant="warning" size="lg" block style={{ marginBottom: '1rem' }}>Create RankTank</Button>

                  <div className="button-switch">

                    <Link to='/new_rank'>
                        <Button variant="info" size="lg" block>Public</Button>
                    </Link><br /><br />
                    <Link to='/new_rank_private'>
                        <Button variant="outline-info" size="lg" block>Private</Button>
                    </Link>

                  </div>

                  <Row className="justify-content-md-center">
                  <Col lg={10} md={10} sm={12} xs={12}>
                  <FormGroup controlId="formControlsTextarea">
                    <Form.Label>
                        <div className="form-label"> Title
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
                      type="text"
                      id="title"
                      name="title"
                    />
                  </FormGroup>
               </Col>
         
            </Row>


            <Row className="justify-content-md-center">
                <Col lg={10} md={10} sm={12} xs={12}>
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


            <Row className="justify-content-md-center">
            <Col lg={10} md={10} sm={12} xs={12}>
                <Alert key='dark' variant='dark'>
                    Note: :Seperate contestants with comma like so: : Jon, Janet, Jan
                    <br />End list with no trailing comma like so: :John, Janet
                </Alert>
            </Col>
            </Row>


         
            <Row className="justify-content-md-center">
              {this.state.success ? (
                  <Col lg={4} lgOffset={4} md={4} mdOffset={4} sm={12} xs={12}>
                    <div className="checked-done" ref={ref => this.ref = ref} />
                  </Col>
                ) : ( 
                  <Col lg={4} lgOffset={5} md={4} mdOffset={5} sm={12} xs={12}>
                  <br />
                     <Button onClick={this.submit.bind(this)} variant="success" size="lg">Submit</Button>{' '}
                  <br />
                  <br />
                </Col>
                )}
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
                <Row className="justify-content-md-center">
                 
                <InputGroup size="lg">
                  <InputGroupAddon addonType="prepend">
                    <Button color="danger">Rank Url</Button>
                  </InputGroupAddon>
                    <Input value={this.state.value}
                      onChange={({target: {value}}) => this.setState({value, copied: false})} />
                  <InputGroupAddon addonType="append">
                  <CopyToClipboard text={this.state.value}
                    onCopy={() => this.setState({copied: true})}>
                    <Button color="success">Copy</Button>
                  </CopyToClipboard>
              
                 </InputGroupAddon>
                </InputGroup>
                {this.state.copied ? <span style={{color: 'red', textAlign: 'center'}}>Copied.</span> : null}
                </Row>
            ) : (
                <span></span>
            )}

            </div>
          
          )}
          </section>
              </Col>

            </Row>


            </section>

            )
        }
}

