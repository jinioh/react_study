const ResultModal = ({title, content, callbackFn}) => {
    return (
        <div onClick={() => {
                if (callbackFn) {
                    callbackFn()
                }
            }}>
            <div>
                <div>{title}</div>
                <div>{content}</div>
                <div><button onClick={() => {
                    if (callbackFn) {
                        callbackFn()
                    }
                    }} >CloseModal</button>
                </div>
            </div>
        </div>
    )
}

export default ResultModal;