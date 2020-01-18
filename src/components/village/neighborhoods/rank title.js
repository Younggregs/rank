import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';


export default class RankTitle extends React.Component {


    state = {
        isLoading: false,
        t: [],
    }


      async componentDidMount(){

        this.setState({ 
          isLoading: true
        })


        try {
          const res = await fetch('http://127.0.0.1:8000/api/rank_title/' + this.props.rank_id)
          const t = await res.json();
            this.setState({
                t
            });
  
        } catch (e) {
          console.log(e);
        }


        this.setState({ isLoading: false })
  
  }




    render() {
            return (
                <section className="rank-title">
                    <p>Contest Title: {this.state.t.title}</p>
                </section>
            )
    }
}

