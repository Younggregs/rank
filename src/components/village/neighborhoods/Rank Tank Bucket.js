import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


export default class AdminBucket extends React.Component {


    state = {
        isLoading: false,
        rtList: []
    }


      async componentDidMount(){

        this.setState({ isLoading: true })
        const auth = localStorage.getItem('auth_code')


        try {
          const res = await fetch('http://167.172.221.98:8000/api/my_rtlist/', {
            headers : {
              'Authorization' : 'Token ' + auth,
            },
          })
          const rtList = await res.json();
            this.setState({
              rtList
            });
          console.log(rtList)
  
        } catch (e) {
          console.log(e);
        }


        this.setState({ isLoading: false })
  
  }

  isEmpty(){

    var empty = false

    if(this.state.rtList.length <= 0 ){
      empty = true
    }

    return empty


  }




      render() {


        const RTBucket = (props) => {
            const [isOpen, setIsOpen] = useState(false);
          
            const toggle = () => setIsOpen(!isOpen);
          
            return (
              <div>
                <Button color="success" size="lg" block onClick={toggle} style={{ marginBottom: '1rem' }}>Manage RankTanks</Button>
                <Collapse isOpen={isOpen}>
                  <Card>
                    <CardBody>
                      {this.isEmpty() ? (
                        <div><p>Its empty here, create a new ranktank</p></div>
                      ) : (
                        <div>
                      {this.state.rtList.map(item => (
                        <Link to={`/rank_result/${ item.url }`}>
                        <div className="mini-link-box">
                            <p className="mini-t">{item.title}</p>
                        </div>
                      </Link>
                      ))}
                    </div>

                      )}
                    
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
            );
          }


            return (
                <section>
                    <RTBucket />
                </section>
            )
        }
}

