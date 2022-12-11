import styles from "pages/styles/Skills.module.scss";
import Image from "next/image";
import { SkillContainer } from "components/SkillContainer";

export function Skills() {
  const skill_items = [
    {
      skill_name: "JavaScript",
      src: "/JavaScript.svg",
    },
    {
      skill_name: "Python",
      src: "/Python.svg",
    },
    {
      skill_name: "TypeScript",
      src: "/TypeScript.svg",
    },
    {
      skill_name: "Node.js",
      src: "/Nodejs.svg",
    },
    {
      skill_name: "Riot.js",
      src: "/Riotjs.svg",
    },
    {
      skill_name: "Next.js",
      src: "/Nextjs.svg",
    },
    {
      skill_name: "CSS",
      src: "/CSS.svg",
    },
    {
      skill_name: "HTML",
      src: "/HTML.svg",
    },
    {
      skill_name: "Sass",
      src: "/Sass.svg",
    },
    {
      skill_name: "React.js",
      src: "/Reactjs.svg",
    },
    {
      skill_name: "C",
      src: "/C.svg",
    },
    {
      skill_name: "Java",
      src: "/Java.svg",
    },
    {
      skill_name: "MySQL",
      src: "/MySQL.svg",
    },
  ];
  return (
    <div>
      <div>
        <span>スキル一覧</span>
      </div>
      <div className={styles.skillField}>
        {skill_items.map((skill_item, index) => (
          <SkillContainer key={index} skill_item={skill_item} />
        ))}
      </div>
    </div>
  );
}
