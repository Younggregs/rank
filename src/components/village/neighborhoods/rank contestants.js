import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

const initialData = {
    tasks: { 
        'task-1': {id: 'task-1', contestants: 'Van Diyk'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Contestants',
            taskIds: ['task-1','task-2','task-3','task-4']
        }
    },
    columnOrder: ['column-1'],
};


export default class RankContestants extends React.Component {


    state = {
        isLoading: false,
        contestants: [],
        data: {}
    }


      async componentDidMount(){

        this.setState({ 
          isLoading: true
        })


        try {
          const res = await fetch('http://167.172.221.98:8000/api/rank_tanker/' + this.props.rank_id)
          const contestants = await res.json();
            this.setState({
                contestants
            });

            if(!contestants){
                this.setState({ error: true })
            }

            var cObjects = []
            for (var i = 0; i < contestants.length; i++) {
                var datum = contestants[i];
                cObjects.push(datum)
            }
        
            var arr = []
            for (var c_p in contestants) {
                arr.push(c_p)
            }

            var data = initialData;
            data.tasks = cObjects
            data.columns['column-1'].taskIds = arr

            localStorage.setItem("data", JSON.stringify(data));

  
        } catch (e) {
          console.log(e);
        }


        this.setState({ isLoading: false })
  
  }




      render() {
            return (
                <section>
                   
                    {this.state.isLoading ? (
             
                        <Spinner color="#ff0000" size={20}/>

                        ) : (
                        <div>
            
                        {this.state.error ? (
                            <span><p className="err-msg">Wrong turn, could be because of: </p></span>
                        ) : (
                            <span></span>
                        )}
                        </div>
                    )}
 
                   
                </section>
            )
        }
}

