import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import { useCallback } from "react";

const IndexPage = () => {
    const navigate = useNavigate()
    const handleClickList = useCallback(() => {
        navigate({ pathname: 'list' })
    })
    const handleClickAdd = useCallback(() => {
        navigate({ pathname: 'add' })
    })

    return(
        <BasicLayout>
            <div>Products Menus</div>
            <div>
                <div onClick={handleClickList}>List</div>
                <div onClick={handleClickAdd}>ADD</div>
            </div>
            <div>
                <Outlet />
            </div>
        </BasicLayout>
    )
}

export default IndexPage;