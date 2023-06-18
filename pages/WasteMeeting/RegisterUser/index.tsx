import { useRouter } from "next/router";
import { useRef } from "react";

/**
 * ユーザのコスト登録
 */
export default function RegisterUser() {
    
    const router = useRouter();
    const cost1 = useRef<number>(0)
    const cost2 = useRef<number>(0)
    const cost3 = useRef<number>(0)
    const cost4 = useRef<number>(0)

    // 入力したコストを画面遷移先に渡す
    const clickHandler = () => {
        router.push({
            pathname:"/WasteMeeting/Stopwatch", 
            query: {
                cost1: cost1.current, 
                cost2: cost2.current, 
                cost3: cost3.current, 
                cost4: cost4.current, 
            }
        });
    }
    
    
    return (
        <>
            <h1>Register Participants Cost (/ 1h)</h1>
            <div>
                <form >
                    <div>User 1 : <input type="number" onChange={(e) => cost1.current = Number(e.target.value)} /> ¥</div>
                    <div>User 2 : <input type="number" onChange={(e) => cost2.current = Number(e.target.value)} /> ¥</div>
                    <div>User 3 : <input type="number" onChange={(e) => cost3.current = Number(e.target.value)} /> ¥</div>
                    <div>User 4 : <input type="number" onChange={(e) => cost4.current = Number(e.target.value)} /> ¥</div>
                </form>
            </div>
            <div>
                <button onClick={clickHandler} >GO</button>
            </div>
        </>

    );
}