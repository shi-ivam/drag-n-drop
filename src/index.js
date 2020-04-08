import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import 'normalize.css';
import {v4} from 'uuid';
import {DragDropContext} from 'react-beautiful-dnd'

// Components -

import Column from './Components/Column';

// Initial Data <- Sample Data

import InitialData from './initialData'


const Wrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    margin:20px auto;
    padding:20px;
    width:800px;
    grid-gap:40px;
`;


class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {...InitialData};
    }
    handleDragEnd = (result) => {
        
        const {destination,source} = result;


        if (!destination){
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ){
            return;
        }


        const sourceColumn = this.state.columns.find(column => column.id === source.droppableId);
        const destinationColumn = this.state.columns.find(column => column.id === destination.droppableId);
        const item = this.state.tasks.find(task => task.id === result.draggableId)

        const newSourcetasksIds = [...sourceColumn.tasksIds]
        const newDestinationtasksIds = [...destinationColumn.tasksIds]


        newSourcetasksIds.splice(source.index,1)
        newDestinationtasksIds.splice(destination.index,0,item.id)



        const newDestinationColumn = {
            ...destinationColumn,
            tasksIds:[
                ...newDestinationtasksIds
            ]
        }

        const newSourceColumn = {
            ...sourceColumn,
            tasksIds:[
                ...newSourcetasksIds
            ]
        }

        const prevColumns = [...this.state.columns];

        const newColumns = prevColumns.map(column => {
            if (column.id === newDestinationColumn.id){
                return newDestinationColumn
            }
            else if (column.id === newSourceColumn.id){
                return newSourceColumn
            }
            else{
                return column
            }
        })

        

        const newColumnsforState = {
            columns:[...newColumns]
        }

        const newState = {
            ...this.state,
            ...newColumnsforState
        }

        this.setState({...newState})
    }
    render(){
        return (
            <DragDropContext onDragEnd={this.handleDragEnd}>
                <Wrapper key={v4()}>
                    {
                        this.state.columns.map(column => {
                            const tasks = column.tasksIds.map(task => this.state.tasks.find(t => t.id === task));
                            return <Column key={column.id} column={column} tasks={tasks} />
                        })
                    }
                </Wrapper>
            </DragDropContext>
        )
    }
}


ReactDOM.render(<Board/>,document.getElementById('root'))