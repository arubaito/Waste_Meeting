import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useRef } from "react";
import styles from "styles/W01_RegisterUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYenSign } from "@fortawesome/free-solid-svg-icons";
import { useForm, useFieldArray } from "react-hook-form";

/**
 * ユーザのコスト登録
 * 
 * ↓動的にフォームを増減
 * https://tech-o-proch.com/programing/react/579
 */
export default function RegisterUser() {

    // 画面遷移
    const router = useRouter();
    // 翻訳ファイル
    const { t } = useTranslation('common')

    // React Hook Formを使う為の基本設定
    const { register, handleSubmit, control }: any = useForm({
        defaultValues: {
            costs: [{ cost: "" }]
        }
    });

    // input を動的に増減させるための設定
    const { fields, append } = useFieldArray({
        control,
        name: "costs",
    });

    // 入力したコストを画面遷移先に渡す
    // ※ 入力データは一時配列に展開して遷移先の画面に受け渡すobjectに変換してる
    const clickHandler = (data: any) => { // data.costs⇒[0:{cost:値}, 1:{cost:値}]

        const tempList: any = []
        let queryList = {};

        // 一時配列に展開
        data.costs.forEach((element: any, index: number) => {
            tempList.push(element.cost)
        });

        // 配列をオブジェクトに変換
        queryList = { ...tempList };

        // 画面遷移
        router.push({
            pathname: "/WasteMeeting/Stopwatch",
            query: queryList,
        });
    }

    return (
        <>
            <div className={styles.contentsContainer}>
                <form >
                    <div className={styles.inputContainer}>
                        {/* 入力フォームの配列を展開 */}
                        {fields.map((field, index) => {
                            // 入力フォーム
                            return (
                                <div key={field.id}>
                                    <span className={styles.participantText}>
                                        {t("W01_participant")} {index + 1} :
                                    </span>
                                    <input
                                        type="number"
                                        {...register(`costs.${index}.cost`)} // 配列をcostsプロパティに登録
                                    />
                                    <span className={styles.currencyUnit}>
                                        <FontAwesomeIcon icon={faYenSign} />
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.plusButton}>
                        <button
                            type="button"
                            onClick={() => append({ cost: '' })}
                        >
                            +
                        </button>
                    </div>
                </form>
                <div className={styles.buttons}>
                    <button onClick={handleSubmit(clickHandler)}>{t("W01_go")}</button>
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
