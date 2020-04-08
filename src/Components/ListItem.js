import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';


const ListItem = styled.div`
    padding:10px;
    margin:10px;
    border:1px solid lightgray;
    display:flex;
    justify-content:center;
`;


const Item = (props) => {
    return (
        <Draggable index={props.index}  draggableId={props.id}>
            {(provided) => (
                <ListItem {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}  key={props.id}>{props.content}</ListItem>
            )}
        </Draggable>
    )
}

export default Item