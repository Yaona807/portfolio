import styles from "pages/styles/Introduction.module.scss";
import Image from "next/image";
import { getImageSrc } from "utils/utils";

export function Introduction() {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.myIcon}>
          <Image
            src={getImageSrc("/my-icon.png")}
            alt="my-icon"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.title}>
          <span>{"i-708's portfolio"}</span>
        </div>
      </div>
    </div>
  );
}
