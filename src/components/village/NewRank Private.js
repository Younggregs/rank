import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Button } from 'reactstrap';
import NewRankTankPrivate from './neighborhoods/New Rank Tank Private'


export default class Login extends React.Component {


    state = {
        email_err: false,
        password_err: false,
        isLoading: false,
        message: {},
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
        var password = document.getElementById("password").value

        if(email){

          if(password){

                proceed = true

          }else{
            this.setState({password_err: true})
          }

        }else{
          this.setState({email_err: true})
        }

        



        
        if(proceed){

  
        formData.append('email', email)
        formData.append('password', password )


        try {
          const res = await fetch('http://127.0.0.1:8000/api/signin/', {
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
                
              <section className="rank-bg">
              <div className="label">
                        RankTank
                </div><br /> 
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
            

            

            )
        }
}

