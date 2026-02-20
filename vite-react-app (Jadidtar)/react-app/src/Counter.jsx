import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [isShow, setIsShow] = useState(true)
    const increaseHandler = () => setCounter(counter => counter + 1)
    const increase3Handler = () => {
        // میشد + 3 کرد. ولی عمدا این شکلی نوشت که بگه تابع setCounter
        // و تو حالت کلی برای هر هوکی که تعریف میکنیم تابع setState ش
        // یه کالبک فانکشن میخواد. حالا اگه به مقدار قبلی وابسته نباشه، میتونیم
        // مستقیما بهش بگیم که چه چیزی رو ست کنه. اما اگه به مقدار قبلی وابسته
        // باشه بهش کالبک فانکشن میدیم (به فانکشنی که ورودی تابع دیگه هست میگن کال بک فانکشن)
        // نکته آخر این که عملیات ست استیت به صورت آسنکرون انجام میشه.
        setCounter(counter => counter + 1);
        setCounter(counter => counter + 1);
        setCounter(counter => counter + 1);
    };
    const decreaseHandler = () => setCounter(counter => counter - 1);
    const stopHandler = () => setCounter("-");
    const showHandler = () => setIsShow(true);
    const hideHandler = () => setIsShow(false);
    return (
        <>
            <button onClick={showHandler}>Show</button>
            <button onClick={hideHandler}>Hide</button>
            {
                isShow?                
                    <div>
                        <h1>Counter: {counter}</h1>
                        {/* <button onClick={()=>console.log("increase")}>Increse</button> */}
                        <button onClick={increaseHandler}>Increse</button>
                        <button onClick={increase3Handler}>Increse 3</button>
                        <button onClick={decreaseHandler}>Decrease</button>
                        <button onClick={stopHandler}>Stop</button>
                    </div>
                    :
                    null
            }
            {
                // این شکلی هم میشه نوشت با &&
                // isShow &&             
                //     <div>
                //         <h1>Counter: {counter}</h1>
                //         {/* <button onClick={()=>console.log("increase")}>Increse</button> */}
                //         <button onClick={increaseHandler}>Increse</button>
                //         <button onClick={increase3Handler}>Increse 3</button>
                //         <button onClick={decreaseHandler}>Decrease</button>
                //         <button onClick={stopHandler}>Stop</button>
                //     </div>
            }
        </>
    )
}

export default Counter