import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";

const initState = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0,
}

const ListComponent = () => {
    const {page, size, refresh, moveToList, moveToRead} = useCustomMove()
    const [serverData, setServerData] = useState(initState)

    useEffect(() => {
        getList({page, size}).then(data => {
            setServerData(data)
        })
    }, [page, size, refresh])

    return (
        <div>
            <div>
                {serverData.dtoList.map(todo => {
                    <div key={todo.tno} onClick={() => moveToRead(todo.tno)}>
                        <div>{todo.title}</div>
                        <div>{todo.dueDate}</div>
                    </div>
                })}
            </div>
            <PageComponent serverData={serverData} movePage={moveToList}></PageComponent>
        </div>
    )
}

export default ListComponent; 