import styles from "pages/styles/Skills.module.scss";
import Image from "next/image";
import { SkillContainer } from "components/SkillContainer";

export function Skills() {
  const skill_items = [
    {
      skill_name: "JavaScript",
      src: "/JavaScript.svg",
      content: "",
    },
    {
      skill_name: "Python",
      src: "/Python.svg",
      content: "",
    },
    {
      skill_name: "TypeScript",
      src: "/TypeScript.svg",
      content: "",
    },
    {
      skill_name: "Node.js",
      src: "/Nodejs.svg",
      content: "",
    },
    {
      skill_name: "Riot.js",
      src: "/Riotjs.svg",
      content: "",
    },
    {
      skill_name: "Next.js",
      src: "/Nextjs.svg",
      content: "",
    },
    {
      skill_name: "CSS",
      src: "/CSS.svg",
      content: "",
    },
    {
      skill_name: "HTML",
      src: "/HTML.svg",
      content: "",
    },
    {
      skill_name: "Sass",
      src: "/Sass.svg",
      content: "",
    },
    {
      skill_name: "React.js",
      src: "/Reactjs.svg",
      content: "",
    },
    {
      skill_name: "C",
      src: "/C.svg",
      content: "",
    },
    {
      skill_name: "Java",
      src: "/Java.svg",
      content: "",
    },
    {
      skill_name: "MySQL",
      src: "/MySQL.svg",
      content: "",
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
