import React from 'react'
import {useState} from "react";
import { isNamespaceExport } from 'typescript';


export default function UseStateComponent() {
    const [arr, setarr] = useState<number[]>([]);
    const [name, setName] = useState<string | null >(null);
    
    return (
        <div>
            <button onClick = {() => setarr([...arr , arr.length + 1 ])}>
                Add to array {JSON.stringify(arr)}
            </button>
            <button onClick = {() => setName("Jack")}>
                setName 
            </button>
            <div>
                {name}
            </div>
        </div>
    )
}
