import React from 'react'
import Task from './task'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    font-size: 17px;
    padding: 5px;
    background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'white' )};
`;

const Hint = styled.div`
    font-size: 15px;
    padding: 5px;
`

export default class Column extends React.Component {

      render() {
            return(
                <section className="list-container"> 
                    <div className="list-title">{this.props.column.title}</div>
                    <Hint>Hint: Order from highest to lowest. Drag contestants to order.</Hint>
                    <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (

                        <TaskList 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                            >
                            {this.props.tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index}/>
                            ))}
                            {provided.placeholder}
                        </TaskList>

                    )}
                    
                    </Droppable>


                </section>
                
            );
        }
}

