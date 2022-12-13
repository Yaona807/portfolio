import styles from "pages/styles/Overlay.module.scss";
import Image from "next/image";
import { getImageSrc } from "utils/utils";
import { useContext } from "react";
import { ShowModalContext } from "components/SkillContainer";

export function Overlay() {
  const { set_show_modal } = useContext(ShowModalContext);

  const onClickOverlay = () => {
    set_show_modal(false);
  };

  return <div className={styles.overlay} onClick={onClickOverlay}></div>;
}
