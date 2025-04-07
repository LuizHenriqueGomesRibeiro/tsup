import { useState } from "react";




const Test = () => {
    const [counter, setCounter] = useState(0);

    return <div style={{ backgroundColor: 'red', cursor: 'pointer' }} onClick={() => setCounter(prev => prev + 1)}>
        este é um componente test {counter}
    </div>
}

export default Test;