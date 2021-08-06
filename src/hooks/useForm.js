// write your custom hook here to control your checkout form
import { useState } from "react";

// const useLocalStorage = (key, initialValue) => {
//     const [value,setValue] = useState(() => {
//         if(localStorage.getItem(key)) {
//             return(JSON.parse(localStorage.getItem(key)));
//         }

//         localStorage.setItem(key, JSON.stringify(initialValue));
//         return(initialValue);
//     });

//     const setLocalStorageValue = (value) => {
//         setValue(value);
//         localStorage.setItem(key, JSON.stringify(value));
//     }

//     return [value,setLocalStorage];
// }

const useForm = (initialValue) => {
    const [values,setValues] = useState( initialValue);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        });
    };

    // const clearForm = e => {
    //     e.preventDefault();
    //     setValues(initialValue);
    // };

    return [values,handleChanges];
}

export default useForm;