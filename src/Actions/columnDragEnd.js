const columnDragEnd = (result,state) => {

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

    const columns = state.columns;
    const column = columns.find(column => column.id === result.draggableId)
    columns.splice(source.index,1)
    columns.splice(destination.index,0,column)

 


    const newColumnsforState = {
        columns:[...columns]
    }

    const newState = {
        ...state,
        ...newColumnsforState
    }

    return newState
}

export default columnDragEnd;