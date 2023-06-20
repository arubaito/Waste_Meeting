import Link from "next/link";
import styles from "styles/C01_TopMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faCoins } from "@fortawesome/free-solid-svg-icons";

export default function TopMenu() {
  return (
    <>
      <div className={styles.menuContainer}>
        <h1>メニュー</h1>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <Link href="/WasteMeeting/RegisterUser">
              <FontAwesomeIcon icon={faCoins} />
              <span>Waste Meeting</span>
            </Link>
          </div>
          <div className={styles.menuItem}>
          <Link href="/SimpleStopwatch">
            <FontAwesomeIcon icon={faStopwatch} />
            <span>Simple Stopwatch</span>
          </Link>
          </div>
        </div>
      </div>
    </>

  );
}