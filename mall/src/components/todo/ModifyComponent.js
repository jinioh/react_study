import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    tno: 0, 
    title: '',
    writer: '',
    dueDate: 'null',
    complete: false
}

const ModifyComponent = ({tno, moveList, moveRead}) => {
    const [todo, setTodo] = useState({...initState})
    const {moveToList, moveToRead} = useCustomMove()

    useEffect(() => {
        getOne(tno).then(data => setTodo(data))
    }, [tno])

    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const handleChangeTodoComplete = (e) => {
        const value = e.target.value
        todo.complete = (value === 'Y')
        setTodo({...todo})
    }

    const closeModal = () => {
        if (result === 'Delete') {
            moveToList()
        } else {
            moveToRead()
        }
    }

    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            <div className="flex justify-end p-4">
                <div>{todo.tno}</div>
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500">
                    Delete
                </button>
                <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500">
                    Modifty
                </button>
            </div>
        </div>
    )
}

export default ModifyComponent;