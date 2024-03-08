import { useEffect, useState } from "react"
import FetchingModal from "../common/FetchingModal"
import { getOne, putOne, deleteOne } from "../../api/productsApi"
import { API_SERVER_HOST } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from '../common/ResultModal';

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    deleteFlag: false,
    uploadFileNames: []
}

const ModifyComponent = ({pno}) => {

    const [product, setProduct] = useState(initState)
    const [fetching, setFetching] = useEffect(false)
    const uploadRef = useRef()
    const [result, setResult] = useState(null)
    const [moveToRead, moveToList] = useCustomMove()

    useEffect(() => {
        setFetching(true)
        getOne(pno).then(data => {
            setProduct(data)
            setFetching(false)
        })
    }, [pno])

    const handleChangeProduct = (e) => {
        product[e.target.name] = e.target.value
        setProduct({...product})
    }

    const deleteOldImages = (imageName) => {
        const resultFileNames = product.uploadFileNames.filter(fileName => fileName !== imageName)
        product.uploadFileNames = resultFileNames
        setProduct({...product})
    }

    const handleClickModify = (e) => {
        const files = uploadRef.current.files
        const formData = new FormData()

        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i])
        }

        formData.append('pname', product.pname)
        formData.append('pdesc', product.price)
        formData.append('price', product.price)
    
        for (let i = 0; i < product.uploadFileNames.length; i++) {
            formData.append("uploadFileNames", product.uploadFileNames[i])
        }
        putOne(pno, formData).then(data => {
            setResult('Modified')
            setFetching(false)
        })
    }

    const closeModal = () => {
        if (result === 'Modified') {
            moveToRead(pno)
        } else if (result === 'Deleted') {
            moveToList({page:1})
        }

        setResult(null)
    }

    const handleClickDelete = () => {
        setFetching(true)
        deleteOne(pno).then(data => {
            setResult('Deleted')
            setFetching(false)
        })
    }

    return (
        <div>
            {fetching ? <FetchingModal/> : <></>}
            {result ? <ResultModal title={`${result}`} content={`정상적으로 치리됨`} callbackFn={closeModal}/> : <></>}
            <div>
                <div>
                    <input name="pname" type={'text'} value={product.pname} onChange={handleChangeProduct}></input>
                </div>
            </div>
            <div>
                <div>
                    <textarea name="pdesc" rows="4"  value={product.pdesc} onChange={handleChangeProduct}></textarea>
                </div>
            </div>
            <div>
                <div>
                    <input name="price" type={'number'} value={product.price} onChange={handleChangeProduct}></input>
                </div>
            </div>
            <div>
                <div>
                    <select name="delFlag" value={product.delFlag} onChange={handleChangeProduct}>
                        <option value={false}>사용</option>
                        <option value={true}>삭제</option>
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <input ref={uploadRef} type={'file'} multiple={true}></input>
                </div>
            </div>
            <div>
                <div>
                    <div>Images</div>
                    <div>{product.uploadFileNames.map((imgFile,i) => <div key={i}>
                        <button type="button" onClick={() => deleteOldImages(imgFile)}>DELETE</button>
                        <button type="button" onClick={handleClickModify}>Modify</button>
                        <button type="button" onClick={handleClickDelete}>Delete</button>
                        <button type="button" onClick={moveToList} >List</button>
                        <img alt="img" src={`${host}/api/products/view/s_${imageFIle}`}/>
                    </div>)}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ModifyComponent