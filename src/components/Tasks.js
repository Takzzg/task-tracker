import { useState } from 'react'

function Tasks() {
    const [ tasks, setTasks ] = useState({
        id: 1,
        text: 'task 1',
        day: 'Feb 5th at 2:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'task 2',
        day: 'Feb 6th at 2:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'task 3',
        day: 'Feb 7th at 2:30',
        reminder: true,
    })

    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>
                    {task.text}
                </h3>
            ))}
        </>
    )
}

export default Tasks
