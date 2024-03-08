import { useRef, useState } from "react";
import { postAdd } from "../../api/productsApi";
import FetchingModal from "../common/FetchingModal";
import ResultModal from "../common/ResultModal";
import useCustomMove from '../../hooks/useCustomMove';

const initState = {
    pname: '',
    pdesc: '',
    price: 0,
    files: []
}

const AddComponent = () => {

    const [product, setProduct] = useState({...initState})
    const uploadRef = useRef()
    const [fetching, setFetching] = useState(false)
    const [result, setResult] = useState(null)
    const {moveToList} = useCustomMove()

    const handleChangeProduct = (e) => {
        product[e.target.name] = e.target.value
        setProduct({...product})
    }

    const handleClickAdd = (e) => {
        const files = uploadRef.current.files
        const formData = new FormData()

        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i])
        }

        formData.append('pname', product.pname)
        formData.append('pdesc', product.price)
        formData.append('price', product.price)
    
        setFetching(true)
        postAdd(formData).then(data => {
            setFetching(false)
            setResult(data.result);
        })
    }

    const closeModal = () => {
        setResult(null)
        moveToList({page:1})
    }

    return (
        <div>
            {fetching? <FetchingModal/> : <></>}
            {result ? <ResultModal title={'Product Add Result'} content={`${result}번 등록`} callbackFn={closeModal} /> : <></>}
            <div>
                <h1>Product Add Component</h1>
                <input name="pname" type={'text'} value={product.pname} onChange={handleChangeProduct}></input>
            </div>
            <div>
                <textarea name="pdesc" rows="4" onChange={handleChangeProduct} value={product.pdesc}>{product.pdesc}</textarea>
            </div>
            <div>
                <input name="price" type={"number"} value={product.price} onChange={handleChangeProduct}></input>
            </div>
            <div>
                <input ref={uploadRef} type={'file'} multiple={true}></input>
            </div>
            <div>
                <button type="button" onClick={handleClickAdd}>ADD</button>
            </div>
        </div>
    )
}

export default AddComponent;