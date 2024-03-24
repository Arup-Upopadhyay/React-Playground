import {useEffect} from 'react';

const useDebounce = (callBack, delay = 0) => {
    useEffect(() => {
        const id = setTimeout(() => {
            callBack();

            return () => clearTimeout(id);
        },delay);

    },[callBack,delay]);
};

export default useDebounce;
