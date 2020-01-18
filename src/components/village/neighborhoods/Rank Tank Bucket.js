import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class AdminBucket extends React.Component {


    state = {
        isLoading: false,
        rtList: [],
    }


      async componentDidMount(){

        this.setState({ isLoading: true })
        const auth = localStorage.getItem('auth_code')


        try {
          const res = await fetch('http://127.0.0.1:8000/api/my_rtlist/', {
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
                    <div>
                      {this.state.rtList.map(item => (
                        <Link to={`/rank_result/${ item.url }`}>
                        <div className="mini-link-box">
                            <p className="mini-t">{item.title}</p>
                        </div>
                      </Link>
                      ))}
                    </div>
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

