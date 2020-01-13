const initialData = {
    tasks: { 
        'task-1': {id: 'task-1', content: 'Van Diyk'},
        'task-2': {id: 'task-2', content: 'Christiano Ronaldo'},
        'task-3': {id: 'task-3', content: 'Van Diyk'},
        'task-4': {id: 'task-4', content: 'Sadio Mane'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Contestants',
            taskIds: ['task-1','task-2','task-3','task-4']
        }
    },
    columnOrder: ['column-1'],
};

export default initialData;