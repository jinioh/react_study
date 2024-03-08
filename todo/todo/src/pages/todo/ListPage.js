import ListComponent from "../../component/todo/ListComponent";

const ListPage = () => {

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo List Page component {page} -- {size}
            </div>
            <ListComponent />
        </div>
    )
}

export default ListPage;