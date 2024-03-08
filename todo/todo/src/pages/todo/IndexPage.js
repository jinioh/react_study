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
            <div>
                <div onClick={handleClickList}>List</div>
                <div onClick={handleClickAdd}>ADD</div>
                <Outlet />
            </div>
        </BasicLayout>
    )
}