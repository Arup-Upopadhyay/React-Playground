import {useState, useCallback} from 'react';
import axios from 'axios';
import {useDebounce} from '../';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isFetchInProgress, setFetchStatus] = useState(false);
    const fetchRemoteData = useCallback(async () => {
        setFetchStatus(true);
        try {
            const response = await axios.get(url);
            setData(response.data);
        }catch(err) {
            
        }
        setFetchStatus(false);
    },[url]);

    useDebounce(fetchRemoteData);

    return [data, isFetchInProgress];
};

export default useFetch;
