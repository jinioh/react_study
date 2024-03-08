import { useEffect, useState } from "react";
import { getOne, deleteOne, putOne } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: null,
    complete: false
}

const ModifyComponent = ({tno, moveList, moveRead}) => {
    const [todo, setTodo] = useState({...initState})
    const [result, setResult] = useState(null)
    const {moveToList, moveToRead} = useCustomMove()

    useEffect(() => {
        getOne(tno).then(data => {
            setTodo(data)
        })
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

    const handleClickModify = () => {
        putOne(todo).then(data => {
            setResult('Modified')
        })
    }

    const handleClickDelete = () => {
        deleteOne(tno).then(data => {
            setResult('Deleted')
        })
    }

    const closeModal = () => {
        if (result === 'Deleted') {
            moveToList() 
        } else {
            moveToRead(tno)
        }
    }

    return (
        <div>
            {result ? <ResultModal title={'처리결과'} content={result} callbackFn={closeModal}></ResultModal> : <></>}
            <div>
                <div>TNO</div>
                <div>{todo.tno}</div>
                <div>WRITER</div>
                <div>{todo.writer}</div>
                <div>TITLE</div>
                <input name="title" type={'text'} value={todo.title} onChange={handleChangeTodo}></input>
                <button type="button" onClick={handleClickDelete}>DELETE</button>
                <button type="button" onClick={handleClickModify}>MODIFY</button>
            </div>
        </div>
    )
}

export default ModifyComponent;