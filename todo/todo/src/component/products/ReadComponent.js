import { useEffect, useState } from "react";
import { getOne } from "../../api/productsApi";
import { API_SERVER_HOST } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    uploadFileNames: []
}

const host = API_SERVER_HOST

const ReadComponent = ({pno}) => {
    const [product, setProduct] = useState(initState)
    const {moveToList, moveToModify} = useCustomMove()
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
        setFetching(true)
        getOne(pno).then(data => {
            setProduct(data)
            setFetching(false)
        })
    }, [pno])

    return (
        <div>
            {fetching ? <FetchingModal/> : <></>}
            <div>
                <div>
                    <div>PNO</div>
                    <div>{product.pno}</div>
                </div>
            </div>
            <div>
                <div>
                    <div>PNAME</div>
                    <div>{product.pame}</div>
                </div>
            </div>
            <div>
                <div>
                    <div>PRICE</div>
                    <div>{product.price}</div>
                </div>
            </div>
            <div>
                <div>
                    <div>PDESC</div>
                    <div>{product.pdesc}</div>
                </div>
            </div>
            <div>
                {product.uploadFileNames.map((imgFile, i) => 
                <img alt='product' key={i} src={`${host}/api/products/view/${imgFile}`}/>)}
            </div>
            <div>
                <button type="button" onClick={() => moveToModify(pno)}>MODIFY</button>
                <button type="button" onClick={() => moveToList}>LIST</button>
            </div>
        </div>
    )
}

export default ReadComponent