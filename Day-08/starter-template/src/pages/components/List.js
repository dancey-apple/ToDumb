import { useEffect, useState } from 'react';

export default function List() {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        async function loadData() {
            const res = await fetch('/api/list');
            const data = await res.json();
            setListItems(data.items);
        }
        loadData();
    }, []);

    useEffect(() => {
        console.log("Items in your list: ", listItems);
    }, [listItems]);

    if (listItems.length === 0) {
        return <h1>Loading...</h1>;
    };

    return (
        <div>
            <h1>These are the things you need TO DO!</h1>
                {listItems.map((item) => {
                    return (
                    <div
                        key={item.id}>{item.title}{item.summary}
                    </div>
                    );
                })}
        </div>
    );
}