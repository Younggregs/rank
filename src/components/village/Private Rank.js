import React from 'react'
import initialData from './neighborhoods/data'
import Column from './neighborhoods/column'
import {DragDropContext} from 'react-beautiful-dnd'
import { Row, Col } from 'react-bootstrap'
import { Button, Progress } from 'reactstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import lottie from "lottie-web";
import RankPrivateTitle from './neighborhoods/rank private title'
import RankPrivateContestants from './neighborhoods/rank private contestants'
import RankPrivatePercentage from './neighborhoods/rank private percentage'




export default class PrivateRank extends React.Component {
      

      state = initialData;

      componentDidMount(){
            const that = this
            var v = localStorage.setItem("data", undefined);

            
                  setTimeout(function(){ 
                        if(v === undefined){
                              var data = JSON.parse(localStorage.getItem("data"))
                              that.setState(data) 
                        }

                  }, 3000);
           
            
                  
   
      }

      onDragStart = () => {
            document.body.style.color = 'orange';
      }

      onDragEnd = result => {
            //console.log(result)
            document.body.style.color = 'inherit';

            const { destination, source, draggableId } = result;

            if(!destination){
                  return;
            }

            if (
                  destination.droppableId === source.droppableId &&
                  destination.index === source.index
            ){
                  return;
            }

            const column = this.state.columns[source.droppableId];
            const newTaskIds = Array.from(column.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                  ...column,
                  taskIds: newTaskIds,
            };

            const newState = {
                  ...this.state,
                  columns: {
                        ...this.state.columns,
                        [newColumn.id]: newColumn,
                  },
            }

            this.setState(newState);
            this.setState({ dataBox: newState });
            //console.log(newState)

      };



      async submit(){
            
            this.setState({ show_result: true })
             
      }
 


      render() {

            return (
                  <section>
                  <Row>
                  <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
                  <section className="squared">
                        <div className="label">
                              Ranq
                        </div>
                  <div className="title">Rank Contestants</div>
                  <RankPrivateTitle rank_id={this.props.match.params.rank_id}/>
                  <RankPrivateContestants rank_id={this.props.match.params.rank_id}/>

                  {this.state.show_result ? (
                        <RankPrivatePercentage dataBox={this.state} rank_id={this.props.match.params.rank_id}/>
                  ) : ( 
                        <DragDropContext 
                              onDragEnd={this.onDragEnd}
                              onDragUpdate={this.onDragUpdate}
                              onDragStart={this.onDragStart}
                        >
                        {this.state.columnOrder.map(columnId => {
                              const column = this.state.columns[columnId];
                              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

                              return <Column key={column.id} column={column} tasks={tasks} />;
                        })}
                  </DragDropContext>

                  )}

                  

                  </section>
                  </Col>     
              </Row>
              {this.state.show_result ? (
                    <div></div>
              ) : (
                  <Row>
                  <Col lg={4} lgOffset={4} md={4} mdOffset={4} sm={12} xs={12}>
                      <br />
                        <Button onClick={this.submit.bind(this)} color="primary" block size="lg">Submit</Button>{' '}
                      <br />
                      <br />
                  </Col>
                  </Row>

              )}
              

              

            </section>
            
      )}
}

