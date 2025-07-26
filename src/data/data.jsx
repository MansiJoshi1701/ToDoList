const ToDos = [
    {
        id: 1,
        task: "Buy groceries",
        isCompleted: false,
        subtask: {
            id: 3,
            task: "Snacks",
            isCompleted: false,
            subtask: {}
        }
    },
    {
        id: 2,
        task: "Do laundry",
        isCompleted: true,
        subtask: {
            id: 4,
            task: "Clean shoes",
            isCompleted: false,
            subtask: {}
        }
    }
]

export default ToDos;