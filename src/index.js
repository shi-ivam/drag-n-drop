import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import 'normalize.css';
import {v4} from 'uuid';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

// Actions -

import itemDrag from './Actions/itemDragEnd';
import columnDrag from './Actions/columnDragEnd'

// Components -

import Column from './Components/Column';

// Initial Data <- Sample Data

import InitialData from './initialData'


const Wrapper = styled.div`
    display:flex;
    margin:20px auto;
    padding:20px;
    width:800px;
`;


class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {...InitialData};
    }
    handleDragEnd = (result) => {
        const {type} = result;

        if (type==="columns"){
            const toBeState = columnDrag(result,this.state);
            if(!!toBeState){
                console.log('Drag Completed')
            }
        }
        else if (type==="items"){
            const toBeState = itemDrag(result,this.state);
            if (!!toBeState){
                this.setState({...toBeState})
            }
        }
    }
    render(){
        return (
            <DragDropContext onDragEnd={this.handleDragEnd}>
                <Droppable droppableId="all-columns" type="columns" direction="horizontal">
                {
                    (provided) => (
                        <Wrapper ref={provided.innerRef} key={v4()} {...provided.droppableProps}>
                            {
                                this.state.columns.map((column,columnIndex) => {
                                    const tasks = column.tasksIds.map(task => this.state.tasks.find(t => t.id === task));
                                    return <Column index={columnIndex} column={column} tasks={tasks} />
                                })
                            }
                            {provided.placeholder}
                        </Wrapper>
                    )
                }
                </Droppable>
            </DragDropContext>
        )
    }
}


ReactDOM.render(<Board/>,document.getElementById('root'))