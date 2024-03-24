import {useReducer, useCallback} from 'react';

const initialStatus = {
    status: null,
    value: null,
    error: null
};

const useAsync = (asyncMethod) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'STATUS_PENDING': {
                return {
                    ...state,
                    status: 'pending',
                    value: null,
                    error: null
                };
            }
            case 'STATUS_SUCCESS': {
                return {
                    ...state,
                    status: 'success',
                    value: action.payload,
                    error: null
                };
            }
            case 'STATUS_FAILED': {
                return {
                    ...state,
                    status: 'failed',
                    error: action.payload,
                    value: null
                };
            }
            default : {
                return {
                    ...state
                };
            }
        }
    },{...initialStatus,status: 'waiting'});

    const execute = useCallback(async () => {
        dispatch({
            type: 'STATUS_PENDING',
            payload: null
        });

        try {
            const response = await asyncMethod();

            dispatch({
                type: 'STATUS_SUCCESS',
                payload: response
            });
        }
        catch (err) {
             dispatch({
                type: 'STATUS_FAILED',
                payload: err
            });
        }
    },[asyncMethod]);

    return [state, execute];
}

export default useAsync;
