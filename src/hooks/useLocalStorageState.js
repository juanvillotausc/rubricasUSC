import { useEffect, useState } from "react"

const useLocalStorageState = (key, initialValue) => {

    const [value, setValue] = useState(() => {
        const persistedValue = localStorage.getItem(key);
        return persistedValue !== null ? persistedValue : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorageState;