import {useAsync} from './Hooks';
import {useEffect} from 'react';

function App() {
    const [state, execute] = useAsync(() => {
        return new Promise((resolve,reject) => {
            2 === 1 ? resolve('Pappu pass hogaya'): reject('Pappu fail hogaya')
        });
    });

    useEffect(() => {
        execute();
    },[]);

    useEffect(() => {
        console.log(state);
    },[state])
    return (
        <>Test</>
    );
}

export default App
