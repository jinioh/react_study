import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: null,
    complete: false
}

const ReadComponent = ({tno}) => {
    const [todo, setTodo] = useState(initState)
    const {moveToList, moveToModify} = useCustomMove()

    useEffect(() => {
        getOne(tno).then(data => {
            setTodo(data)
        })
    }, [tno])

    return (
        <div>
            {makeDiv('Tno', todo.tno)}
            {makeDiv('Writer', todo.writer)}
            {makeDiv('Title', todo.title)}
            {makeDiv('Due Date', todo.dueDate)}
            {makeDiv('Complete', todo.complete? 'Complete' : 'Not Yet')}
            <div>
                <button type="button" onClick={() => moveToList()}>List</button>
                <button type="button" onClick={() => moveToModify()}>Modify</button>
            </div>
        </div>
    )
}

const makeDiv = (title, value) => {
    <div>
        <div>
            <div>{title}</div>
            <div>{value}</div>
        </div>
    </div>
}

export default ReadComponent;