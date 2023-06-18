import { useRouter } from "next/router";

export default function Stopwatch() {
    
    // 遷移元から値を受け取る
    const router = useRouter();
    
    return (
        <>
        {router.query.cost1}
        {router.query.cost2}
        {router.query.cost3}
        {router.query.cost4}
        </>

    );
}