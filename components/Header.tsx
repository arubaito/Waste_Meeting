import styles from "styles/Header.module.css";
import Logo from "./Logo";

export default function Header() {
    return (
        <>
            <div className={styles.headerBar}>
                <div className={styles.icon}>
                    <Logo/>
                </div>
            </div>
        </>
    );
}


