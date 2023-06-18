import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function Stopwatch() {

    // ストップウォッチ
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const interValRef = useRef<number | undefined>(undefined);

    // コスト計算
    const router = useRouter();
    const per1hourCost: number = Number(router.query.cost1) + Number(router.query.cost2) + Number(router.query.cost3) + Number(router.query.cost4);
    const per1minCost: number = Math.round(per1hourCost / 60);
    const per1sCost: number = Math.round(per1minCost * Math.pow(10, 2) / 60) / Math.pow(10, 2); // 1mあたりは小数点２桁まで残す
    const [cost, setCost] = useState<number>(0);


    // START
    function handleStart(): void {
        setIsRunning(true);
        interValRef.current = window.setInterval(() => {
            setTime(prevTime => prevTime + 1000); // 時刻計算
            setCost(cost => cost + per1sCost); // コスト計算
        }, 1000)
    }

    // STOP
    function handlePause(): void {
        clearInterval(interValRef.current);
        setIsRunning(false);
    }

    // RESET
    function handleReset(): void {
        clearInterval(interValRef.current);
        setIsRunning(false);
        setTime(0);
        setCost(0);
    }
    // 時刻表示用の変換
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000) % 60}`.slice(-2);


    return (
        <>
            <h1>Your Meeting Time</h1>
            <div>
                <div>{hours}:{minutes}:{seconds}</div>
                <div id="buttons">
                    {isRunning ? (
                        <button onClick={handlePause}>PAUSE</button>
                    ) : (
                        <button onClick={handleStart}>START</button>
                    )}
                    <button onClick={handleReset}>RESET</button>
                </div>
            </div>
            <h1>Participants Cost</h1>
            <div>{Math.round(cost * Math.pow(10, 2)) / Math.pow(10, 2)}¥</div>
            <h3>1H Cost</h3>
            <div>{per1hourCost}¥</div>
            <h3>1MIN Cost</h3>
            <div>{per1minCost}¥</div>
            <h3>1S Cost</h3>
            <div>{per1sCost}¥</div>

        </>

    );
}