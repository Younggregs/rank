import React from 'react'
import initialData from './neighborhoods/data'
import Column from './neighborhoods/column'
import {DragDropContext} from 'react-beautiful-dnd'
import { Row, Col, Button, Container } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';
import lottie from "lottie-web";
import RankTitle from './neighborhoods/rank title'
import RankContestants from './neighborhoods/rank contestants'
import RankPercentage from './neighborhoods/rank percentage'
import AppName from './neighborhoods/App Name'




export default class Rank extends React.Component {
      

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
                  <Container fluid="true">
                        <AppName/>   
                  <section className="rank-bg">
                  <Row>
                  <Col lg={12} md={12} sm={12} xs={12}>
                  <section className="squared">
                        <div className="label-2">
                              Rank Contestants
                        </div>
                  <div className="title">Rank Contestants from highest to lowest</div>
                  <RankTitle rank_id={this.props.match.params.rank_id}/>
                  <RankContestants rank_id={this.props.match.params.rank_id}/>

                  {this.state.show_result ? (
                        <RankPercentage dataBox={this.state} rank_id={this.props.match.params.rank_id}/>
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
                  <section className="squared">
                  <Row className="justify-content-center">
                  <Col lg={12} md={12} sm={12} xs={12}>
                      <br />
                        <Button onClick={this.submit.bind(this)} variant="success" size="lg">Submit</Button>{' '}
                      <br />
                      <br />
                  </Col>
                  </Row>
                  </section>

              )}
              

              

            </section>
            </Container>
            
      )}
}

