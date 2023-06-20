import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useRef } from "react";
import styles from "styles/W01_RegisterUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYenSign } from "@fortawesome/free-solid-svg-icons";

/**
 * ユーザのコスト登録
 */
export default function RegisterUser() {

    // 翻訳ファイル
    const { t } = useTranslation('common')

    const router = useRouter();
    const cost1 = useRef<number>(0)
    const cost2 = useRef<number>(0)
    const cost3 = useRef<number>(0)
    const cost4 = useRef<number>(0)

    // 入力したコストを画面遷移先に渡す
    const clickHandler = () => {
        router.push({
            pathname: "/WasteMeeting/Stopwatch",
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
            <div className={styles.contentsContainer}>
                <form >
                    <div className={styles.inputContainer}>
                        <div>
                            <span className={styles.participantText}>{t("W01_participant")} 1 :</span>
                            <input type="number" onChange={(e) => cost1.current = Number(e.target.value)} />
                            <span className={styles.currencyUnit}>
                                <FontAwesomeIcon icon={faYenSign} />
                            </span>
                        </div>
                        <div>
                            {t("W01_participant")} 2 :
                            <input type="number" onChange={(e) => cost2.current = Number(e.target.value)} />
                            ¥
                        </div>
                        <div>
                            {t("W01_participant")} 3 : <input type="number" onChange={(e) => cost3.current = Number(e.target.value)} />
                            ¥
                        </div>
                        <div>
                            {t("W01_participant")} 4 : <input type="number" onChange={(e) => cost4.current = Number(e.target.value)} />
                            ¥
                        </div>
                    </div>
                    <button >+</button>
                </form>
                <div className={styles.buttons}>
                    <button onClick={clickHandler} >{t("W01_go")}</button>
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


