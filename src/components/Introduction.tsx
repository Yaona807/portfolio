import styles from "pages/styles/Introduction.module.scss";
import Image from "next/image";
import { getImageSrc } from "utils/utils";

export function Introduction() {
  return (
    <div className={styles.body}>
      <div className={styles.myIcon}>
        <Image src={getImageSrc("/my-icon.png")} alt="my-icon" width={300} height={300} />
      </div>
      <div className={styles.title}>
        <span>i-708のポートフォリオへようこそ</span>
      </div>
    </div>
  );
}
