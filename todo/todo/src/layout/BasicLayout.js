import BasicMenu from "../component/menu/BasicMenu";

const BasicLayout = ({children}) => {
    return (
        <>
        <BasicMenu />
        <div >
            <main>{children}</main>
            <aside>
                <h1>Sidebar</h1>
            </aside>
        </div>
        </>
    )
}

export default BasicLayout;