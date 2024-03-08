import { useParams } from "react-router-dom";
import ReadComponent from "../../component/products/ReadComponent";

const ReadPage = () => {
    const {pno} = useParams()

    return (
        <div>
            <div>Products Read Page</div>
            <ReadComponent pno={pno}></ReadComponent>
        </div>
    )
}

export default ReadPage;