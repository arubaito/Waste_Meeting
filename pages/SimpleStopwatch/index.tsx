import Meta from "@/components/Meta";
import { useRef, useState } from "react";
import styles from "styles/W03_SimpleStopwatch.module.css";

/**
 * ストップウォッチ画面
 * 
 * ↓参考↓
 * https://zenn.dev/ringotabetai/articles/a25060eb756b0c
 */
export default function StopWatch() {

    // 時間
    const [time, setTime] = useState<number>(0);
    // 起動フラグ
    const [isRunning, setIsRunning] = useState<boolean>(false);
    // setIntervalで使用するinterval IDを保持
    const interValRef = useRef<number | undefined>(undefined);

    // START
    function handleStart(): void {
        setIsRunning(true);
        // setIntervalの戻り値について⇒https://blog.kubosho.com/entries/setinterval-trap-on-typescript
        interValRef.current = window.setInterval(() => {
            setTime(prevTime => prevTime + 10);
        }, 10);

    }

    // STOP
    function handlePause(): void {
        clearInterval(interValRef.current);
        setIsRunning(false)
    }

    // RESET
    function handleReset(): void {
        clearInterval(interValRef.current);
        setIsRunning(false);
        setTime(0);
    }

    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000) % 60}`.slice(-2);

    return (
        <>
            <Meta pageTitle="Simple Stopwatch" />
            <div className={styles.contentsContainer}>
                <div>
                    <div className={styles.stopwatch}>{hours}:{minutes}:{seconds}:{milliseconds}</div>
                    <div className={styles.buttons}>
                        {isRunning ? (
                            <button onClick={handlePause}>PAUSE</button>
                        ) : (
                            <button onClick={handleStart}>START</button>
                        )}
                        <button onClick={handleReset}>RESET</button>
                    </div>
                </div>
            </div>
        </>
    );
}