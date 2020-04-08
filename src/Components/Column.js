import React from 'react';
import styled from 'styled-components';
import Item from './ListItem';
import {Droppable} from 'react-beautiful-dnd';

const ColumnWrapper = styled.div`
    padding:10px;
    background:white;
    border:1px solid lightgrey;
    color:black;
`;

const ColumnHeader = styled.h3`
    padding:0 0 0 15px;
`;


const Column = (props) => {
    return (
        <ColumnWrapper key={props.column.id}>
            <ColumnHeader>{props.column.name}</ColumnHeader>
                <Droppable droppableId={props.column.id}>
                {
                    (provided) => (    
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {props.tasks.map((element,index) => <Item index={index} key={element.id} {...element} />)}
                            {provided.placeholder}
                        </div>
                    )
                }
                </Droppable>
        </ColumnWrapper>    
    )
}

export default Column;