import React, { useState , useContext } from 'react'
import context , {UserState} from './store'

export default function UseContextComponent() {
    const [user , setUser] = useState<UserState>({
        first : "Jane",
        last : "Smith"
    })
    return (
        <div>
            <context.Provider value = {user}>
                <ConsumerComponent/>
                <button onClick = {() => {
                    setUser({
                        first : "Josie",
                        last : "Wales"
                    })
                }}>
                    change context
                </button>
            </context.Provider>
        </div>
    )
}


function ConsumerComponent() {
    const user = useContext<UserState>(context);
    return (
        <div>
            <div>First : {user.first}</div>
            <div>Second : {user.last}</div>
        </div>
    )
}