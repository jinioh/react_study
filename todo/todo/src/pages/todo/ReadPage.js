import { useCallback } from "react";
import { useParams, useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import ReadComponent from "../../component/todo/ReadComponent";

const ReadPage  =  () => {
    const {tno} = useParams()
    
    return (
        <div>
            <div>
                Todo Read Page Component {tno}
                <ReadComponent tno={tno}></ReadComponent>
            </div>
        </div>
    )
}

export default ReadPage;