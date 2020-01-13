import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Button, Progress } from 'reactstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import lottie from "lottie-web";




export default class RankPercentage extends React.Component {
      
    state = {
        isLoading: true,
        cList: {}
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

    async componentDidMount(){
        this.setState({ isLoading: true })
        const data = this.props.dataBox
        var order = data.columns['column-1'].taskIds 

        var result = []

        for (var i = 0; i < order.length; i++) {
              var datum = order[i];
              var name = data.tasks[datum]
               
              result.push(name.contestant)
              
        }
 
    try {
      const res = await fetch('http://127.0.0.1:8000/api/rank_vote/' + this.props.rank_id + '/', {
       method: 'POST',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(result),
      })
      const cList = await res.json();
        if(cList.error){ 
            this.setState({ error: true })
        }
        this.setState({
            cList
        });


        


    } catch (e) {
      console.log(e);
    }


    this.setState({ isLoading: false })
        this.toggleSuccess()
}
 




      render() {

            return (
                  <section>
 
                    {this.state.isLoading ? (
                              <Spinner color="#ff0000" size={20}/>
                        ) : (

                        <section>
                            {this.state.error ? (
                                <p className="err-msg">{this.state.cList.error}</p>
                            ) : (

                            <section>
                               
                                <Row className="justify-content-md-center">
                                <Col lg={4} md={4} sm={12} xs={12}>
                                      <div className="done-label">
                                            <div className="checked-done" ref={ref => this.ref = ref} />
                                            <br />
                                      </div>
                                </Col>
                                </Row>
                                
                          
                                <div className="result-label">
                                      {this.state.cList.map(item => (
                                            <div>
                                                  <p>{item.contestant}</p>
                                                  <Progress animated color="success" value={item.rank}>{item.rank}%</Progress>
                                            </div>
                                      ))}
                                </div>
                               
  
                               
                          </section>

                        )}
                        </section>
                       

                        )}
                        
                        </section>

 
            
      )}
}

