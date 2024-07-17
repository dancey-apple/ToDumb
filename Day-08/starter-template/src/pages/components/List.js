import { useEffect, useState } from 'react';

export default function List() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        async function loadData() {
            const res = await fetch('/api/list');
            const data = await res.json();
            setLists(data.items);
        }
        loadData();
        console.log("Items in your list: ", lists);
    }, []);

    if (lists.length === 0) {
        return <h1>Loading...</h1>;
    };

    return (
        <div>
            <h1>These are the things you need TO DO!</h1>
                {lists.map((item) => {
                    return (
                    <div
                        key={item.id}>{item.title}{item.summary}
                    </div>
                    );
                })}
        </div>
    );
}