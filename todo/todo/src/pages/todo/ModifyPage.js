import { useNavigate, useParams } from "react-router-dom";
import ModifyComponent from "../../component/todo/ModifyComponent";

const ModifyPage = () => {
    const {tno} = useParams()
    
    return (
        <div>
            <div>Todo Modify Page</div>
            <ModifyComponent tno={tno} />
        </div>
    )
}

export default ModifyPage;