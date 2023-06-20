import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from "styles/W02_Stopwatch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

export default function Stopwatch() {
    // 翻訳設定
    const { t } = useTranslation('common')

    // ストップウォッチ
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const interValRef = useRef<number | undefined>(undefined);

    // コスト計算
    const router = useRouter();
    // queryで渡されたコストを加算する
    const costsList = Object.values(router.query);
    var per1hourCost: number = 0;
    costsList.forEach((element: any) => {
        per1hourCost = per1hourCost + Number(element);
    });
    // １時間単位を各単位へ変換
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
            <div className={styles.contentsContainer}>
                {/* ストップウォッチ */}
                <div>
                    <div className={styles.stopwatch}>{hours}:{minutes}:{seconds}</div>
                    <div className={styles.buttons}>
                        {isRunning ? (
                            <button onClick={handlePause}>PAUSE</button>
                        ) : (
                            <button onClick={handleStart}>START</button>
                        )}
                        <button onClick={handleReset}>RESET</button>
                    </div>
                </div>
                {/* コスト */}
                <div className={styles.costTitle}>
                    <h1>
                        <FontAwesomeIcon icon={faSackDollar} />
                        {t("W02_meeting_cost")}　:　
                        {Math.round(cost * Math.pow(10, 2)) / Math.pow(10, 2)}¥
                    </h1>
                </div>
                <div className={styles.costContainer}>
                    <div>
                        {per1hourCost}¥
                        {t("W02_1h_cost")}
                    </div>
                    <div>
                        {per1minCost}¥ {t("W02_1m_cost")}
                    </div>
                    <div>
                        {per1sCost}¥ {t("W02_1s_cost")}
                    </div>
                </div>
            </div>
        </>

    );
}

/**
 * 
 * @param locale: next-i18nextの設定 
 */
export async function getStaticProps({ locale }: { locale: any }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
        },
    }
}