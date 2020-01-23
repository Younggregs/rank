import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NewRTAdmin from './neighborhoods/New RT Admin'


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
          const res = await fetch('http://167.172.221.98:8000/api/signin/', {
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
                
                
            <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                <section className="squared">
                <div className="label">
                        RankTank
                </div>
                <div className="title">New RankTank Admin</div>
                <div className="squared-box">
                    <NewRTAdmin />
                </div>
                </section>
                </Col>     
            </Row>
            
            

            

            )
        }
}

