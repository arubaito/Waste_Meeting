import styles from "styles/Footer.module.css";
import Logo from "./Logo";

/**
 * フッタモジュール
 */
export default function Footer() {
    return (
        <>
            <div className={styles.footerBar}>
                <div className={styles.icon}></div>
            </div>
        </>
    );
}