import Link from "next/link";
import styles from 'styles/Logo.module.css';

export default function Logo(){
    
    return (
        <Link href='/' className={styles.header}>
            Waste Meeting
        </Link>
    )

}