import React, {useState, useMemo} from 'react';

const UseMemoSample = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItems((prevItems) => {
            return [...prevItems, text];
        })
        setText('')
    }

    const numberOfChar1 = items.reduce((sub, item) => sub + item.length, 0)
    const numberOfChar2 = useMemo(() => {
        return items.reduce((sub, item) => sub + item.length, 0)
    }, [items])

    return (
        <div>
            <p>UserMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <div>
                    <p>Total Number of Char1: {numberOfChar1}</p>
                    <p>Total Number of Char2: {numberOfChar2}</p>
                </div>
            </div>
        </div>
    );
}

export default UseMemoSample