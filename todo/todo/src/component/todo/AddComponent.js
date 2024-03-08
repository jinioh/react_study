import { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    title: '',
    writer: '',
    dueDate: ''
}

const AddComponent = () => {
    const [todo, setTodo] = useState({...initState})
    const [result, setResult] = useState(null)
    const {moveToList} = useCustomMove()

    const handleChageTodo = (e) => {
        todo[e.tartget.name] = e.tartget.value
        setTodo({...todo})
    }

    const handleClickAdd = () {
        postAdd(todo).then(result => {
            setTodo({...initState})
        }).catch(e => {
            console.error(e)
        })
    }

    const closeModal = () => {
        setResult(null)
        moveToList()
    }

    return (
        <div>
            {result ? <ResultModal title={'Add Result'} content={`New ${result} Added`} callbackFn={closeModal}/> : <></>}
            <div>
                <div>TITLE</div>
                <input name="title" type={'text'} value={todo.title} onChange={handleChageTodo}></input>
            </div>
            <div>
                <div>WRITER</div>
                <input name="writer" type={'text'} value={todo.writer} onChange={handleChageTodo}></input>
            </div>
            <div>
                <div>DUEDATE</div>
                <input name="dueDate" type={'date'} value={todo.dueDate} onChange={handleChageTodo}></input>
            </div>
            <div>
                <button type="button" onClick={handleClickAdd}>AD</button>
            </div>
        </div>
    )
}

export default AddComponent;