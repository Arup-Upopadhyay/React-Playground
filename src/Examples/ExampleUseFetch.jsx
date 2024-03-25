import {useFetch} from '../Hooks';
import {useState} from 'react';

function ExampleUseFetch() {
    const [url] = useState('https://jsonplaceholder.typicode.com/users');
    const [data, isFetchInProgress] = useFetch(url);

    return (
        <>
        {
            isFetchInProgress && <div>Loading...</div>
        }
        {
            data && <ul>{data.map(user => <li key={user.name}>{user.name}</li>)}</ul>
        }
        </>
    )
}

export default ExampleUseFetch;
