const handleItemDragEnd = (result,state) => {

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


    const sourceColumn = state.columns.find(column => column.id === source.droppableId);
    const destinationColumn = state.columns.find(column => column.id === destination.droppableId);
    const item = state.tasks.find(task => task.id === result.draggableId)

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

    const prevColumns = [...state.columns];
 

    const newColumns = prevColumns.map(column => {
        if (column.id === newDestinationColumn.id && destination.droppableId !== source.droppableId){
            return newDestinationColumn
        }
        if (column.id === newSourceColumn.id && destination.droppableId !== source.droppableId){
            return newSourceColumn
        }
        else if (destination.droppableId === source.droppableId && destination.droppableId === column.id){
            const c = column.tasksIds;
            c.splice(source.index,1);
            c.splice(destination.index,0,item.id);
            const newC = {
                ...column,
                tasksIds:[...c]
            }
            return newC
        }
        else{
            return column
        }
    })

    const newColumnsforState = {
        columns:[...newColumns]
    }

    const newState = {
        ...state,
        ...newColumnsforState
    }

    return newState
}


export default handleItemDragEnd;