import React from "react";
import {useRecoilState, useRecoilValue, useResetRecoilState, useRecoilValueLoadable} from "recoil";
import {countEvenState, countState} from "../recoil/count";

function Counter() {
    const count = useRecoilValue(countState);
    const [evenCount, setEvenCount] = useRecoilState(countEvenState);
    const incrementByOneEvenCount = () => setEvenCount(count + 1);
    const resetCount = useResetRecoilState(countState);

    const countLoadable = useRecoilValueLoadable(countEvenState);
    console.log(countLoadable);

    return (
        <div>
            Count: {count}
            <br />
            Even Count: {evenCount ? '짝수' : '홀수'}
            <br />
            <button onClick={incrementByOneEvenCount}>Increment</button>
            <button onClick={resetCount}>reset</button>
        </div>
    );
}

export default Counter;
