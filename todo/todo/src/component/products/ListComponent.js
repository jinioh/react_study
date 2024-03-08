import { useEffect, useState } from "react";
import { getList } from "../../api/productsApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";
import PageComponent from '../common/PageComponent';

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
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)
        getList({page, size}).then(data => {
            setServerData(data)
            setFetching(false)
        })
    }, [page, size, refresh])

    return (
        <div>
            {fetching ? <FetchingModal /> : <></>}
            <div>
                {serverData.dtoList.map(product => <div key={product.pno} onClick={() => moveToRead}>
                    <div>
                        <div>
                            <img alt="product" src={`${host}/api/products/view/s_${product.uploadFileName[0]}`} />
                        </div>
                        <div>
                            <div>이름: {product.pname}</div>
                            <div>가격: {product.price}</div>
                        </div>
                    </div>
                </div>)}
            </div>
            {fetching ? <FetchingModal/> : <></>}
            <PageComponent serverData={serverData} movePage={moveToList}></PageComponent>
        </div>
    )
}

export default ListComponent;