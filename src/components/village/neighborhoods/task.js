import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid #E1E8ED;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    font-size: 17px;
    background-color: ${props => (props.isDragging ? '#4267B2' : 'white' )};
`;

export default class Task extends React.Component {

      render() {
            return (
                <Draggable draggableId={this.props.task.id} index={this.props.index}>
                
                {(provided, snapshot) => (

                    <Container
                        className="contest-items"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        >
                        {this.props.task.contestant}
                    </Container>

                )}
                
                </Draggable>
            )
        }
}

