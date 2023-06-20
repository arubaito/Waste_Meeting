import styles from "styles/Container.module.css";

/**
 *  このコンポーネントで囲むと画面幅をいい感じに調整してくれる 
 */
export default function Container({children}:any){
    return (
        <div className={styles.default}>
            {children}
        </div>
    );
}