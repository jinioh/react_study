import { useParams } from "react-router-dom";
import ModifyComponent from "../../component/products/ModifyComponent";

const ModifyPage = () => {
    const {pno} = useParams()
    
    return (
        <div>
            <div>Products Modify Page</div>
            <ModifyComponent pno={pno}/>
        </div>
    )
}

export default ModifyPage;