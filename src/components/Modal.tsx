import styles from "pages/styles/Modal.module.scss";
import Image from "next/image";
import { getImageSrc } from "utils/utils";
import { Overlay } from "components/Overlay";
import { useContext, useEffect } from "react";
import { ShowModalContext } from "components/SkillContainer";

interface props {
  skill_name: string;
  content: string;
}

export function Modal(props: props) {
  const { set_show_modal } = useContext(ShowModalContext);
  const onClickOverlay = () => {
    set_show_modal(false);
  };

  useEffect(() => {
    const _handle = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    };

    // スクロールバーを固定する
    document.addEventListener("touchmove", _handle, { passive: false });
    document.addEventListener("mousewheel", _handle, { passive: false });

    return () => {
      // スクロールバーの固定を解除する
      document.removeEventListener("touchmove", _handle);
      document.removeEventListener("mousewheel", _handle);
    };
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <span>{props.skill_name}</span>
        </div>
        <div className={styles.text}>
          <span>{props.content}</span>
        </div>
      </div>
      <Overlay />
    </div>
  );
}
