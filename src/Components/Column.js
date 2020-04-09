import React from 'react';
import styled from 'styled-components';
import Item from './ListItem';
import {Droppable,Draggable} from 'react-beautiful-dnd';

const ColumnWrapper = styled.div`
    padding:10px;
    background:white;
    border:1px solid lightgrey;
    color:black;
    width:250px;
    margin:0 20px;
`;

const ColumnHeader = styled.h3`
    padding:0 0 0 15px;
`;


const Column = (props) => {
    return (
        <Draggable key={props.column.id} draggableId={props.column.id} index={props.index}> 
            {
                (provided) => (
                    <ColumnWrapper ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={props.column.id}>
                    <ColumnHeader>{props.column.name}</ColumnHeader>
                            <Droppable droppableId={props.column.id} type="items" direction="vertical">
                            {
                                (provided) => (    
                                    <div key={props.column.id} {...provided.droppableProps} ref={provided.innerRef}>
                                        {props.tasks.map((element,index) => <Item index={index} key={element.id} {...element} />)}
                                        {provided.placeholder}
                                    </div>
                                )
                            }
                            </Droppable>
                    </ColumnWrapper>  
                )
            }
        </Draggable>
    )
}

export default Column;