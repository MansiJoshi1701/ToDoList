const ToDos = [
    {
        id: 1,
        task: "Buy groceries",
        isCompleted: false,
        subtask: [
            {
                id: 2,
                task: "Snacks",
                isCompleted: false,
                subtask: []
            },
            {
                id: 3,
                task: "Veggies",
                isCompleted: false,
                subtask: []
            }
        ]
    },
    {
        id: 4,
        task: "Do laundry",
        isCompleted: true,
        subtask: [
            {
                id: 5,
                task: "Clean shoes",
                isCompleted: false,
                subtask: []
            }
        ]
    }
]

export default ToDos;