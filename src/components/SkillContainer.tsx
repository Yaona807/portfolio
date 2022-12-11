import styles from "pages/styles/SkillContainer.module.scss";
import Image from "next/image";

interface props {
  skill_item: {
    skill_name: string;
    src: string;
  };
}

export function SkillContainer(props: props) {
  return (
    <div className={styles.container}>
      <Image src={props.skill_item.src} alt="icon" width={100} height={100} />
      <div className={styles.triangle}></div>
    </div>
  );
}
