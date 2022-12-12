import styles from "pages/styles/SkillContainer.module.scss";
import Image from "next/image";
import { getImageSrc } from "utils/utils";
import { Modal } from "components/Modal";
import { useState } from "react";

interface props {
  skill_item: {
    skill_name: string;
    src: string;
  };
}

export function SkillContainer(props: props) {
  const [show_modal, set_show_modal] = useState(false);

  const onClickContainer = () => {
    set_show_modal(() => !show_modal);
  };

  return (
    <div className={styles.container} onClick={onClickContainer}>
      <Image
        src={getImageSrc(props.skill_item.src)}
        alt="icon"
        width={100}
        height={100}
      />
      <div className={styles.triangle}></div>
      <Modal show_modal={show_modal} />
    </div>
  );
}
