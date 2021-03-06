import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


export default class AdminBucket extends React.Component {


    state = {
        isLoading: false,
        rtList: [],
    }


      async componentDidMount(){

        this.setState({ 
          isLoading: true
        })

        try {
          const res = await fetch('http://ranq.xyz/api/my_admin/')
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
                <Button color="success" size="lg" block onClick={toggle} style={{ marginBottom: '1rem' }}>Manage Admins</Button>
                <Collapse isOpen={isOpen}>
                  <Card>
                    <CardBody>
                    <div>
                      {this.state.rtList.map(item => (
                        <Link to={`/rank/${ item.url }`}>
                        <div className="mini-link-box">
                            <p className="mini-t">{item.firstname} {item.lastname}</p>
                            <div className="mini-glyph" glyph="arrow-right"/>
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

