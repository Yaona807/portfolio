import styles from "pages/styles/SkillContainer.module.scss";
import Image from "next/image";
import { getImageSrc } from "utils/utils";
import { Modal } from "components/Modal";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface props {
  skill_item: {
    skill_name: string;
    src: string;
    content: string;
  };
}

interface setTypeOblect {
  set_show_modal: Dispatch<SetStateAction<boolean>>;
}

export const ShowModalContext = createContext({} as setTypeOblect);

export function SkillContainer(props: props) {
  const [show_modal, set_show_modal] = useState(false);

  const onClickContainer = () => {
    if (show_modal) {
      return;
    }

    set_show_modal(true);
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
      <ShowModalContext.Provider value={{ set_show_modal }}>
        {show_modal ? (
          <Modal
            skill_name={props.skill_item.skill_name}
            content={props.skill_item.content}
          />
        ) : null}
      </ShowModalContext.Provider>
    </div>
  );
}
