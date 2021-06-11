import React , {useState , useEffect} from 'react'

export default function UseEffectComponent() {
    const [val, setVal] = useState<number>(1);
    
    useEffect(() => {
       const id =  window.setInterval(() => {
            setVal((v) => v+1 );
        },1000)
        return () => clearInterval(id);
    }, []);

    return (
        <div>
            {val}
        </div>
    )
}
