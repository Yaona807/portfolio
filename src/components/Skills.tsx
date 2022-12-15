import styles from "pages/styles/Skills.module.scss";
import Image from "next/image";
import { SkillContainer } from "components/SkillContainer";

export function Skills() {
  const skill_items = [
    {
      skill_name: "JavaScript",
      src: "/JavaScript.svg",
      content:
        "現在、仕事で利用しています\n" +
        "仕事ではフロントエンドとサーバサイドの両方を担当しています\n" +
        "サーバサイドはNode.jsを採用しているため、JavaScriptのコードばかり書いています\n" +
        "利用期間(2022/04~)",
    },
    {
      skill_name: "Python",
      src: "/Python.svg",
      content:
        "趣味でプログラムを書くときにたまに使います\n" +
        "大学時代の研究はPythonを使って書いてました\n" +
        "利用期間(1年以上)",
    },
    {
      skill_name: "TypeScript",
      src: "/TypeScript.svg",
      content:
        "仕事では使わないので、プライベートで勉強したり使ったりしています\n" +
        "利用期間(半年未満)",
    },
    {
      skill_name: "Node.js",
      src: "/Nodejs.svg",
      content:
        "現在、仕事で利用しています\n" +
        "サーバサイドはNode.jsを採用しているため、仕事で普段から使います\n" +
        "利用期間(2022/04~)",
    },
    {
      skill_name: "Riot.js",
      src: "/Riotjs.svg",
      content:
        "現在、仕事で利用しています\n" +
        "マイナーなライブラリなので、情報収集する際は大変です\n" +
        "利用期間(2022/04~)",
    },
    {
      skill_name: "Next.js",
      src: "/Nextjs.svg",
      content:
        "このポートフォリオはNext.jsで作成しています\n" +
        "仕事でReact.jsを触らないので、React.jsを知るために趣味で何か作ろうと思い、\n" +
        "React.jsのフレームワークであるNext.jsを採用しました\n" +
        "利用期間(半年未満)",
    },
    {
      skill_name: "CSS",
      src: "/CSS.svg",
      content: "仕事で利用しています\n" + "利用期間(半年未満)",
    },
    {
      skill_name: "HTML",
      src: "/HTML.svg",
      content: "仕事で利用しています\n" + "利用期間(半年未満)",
    },
    {
      skill_name: "Sass",
      src: "/Sass.svg",
      content:
        "仕事ではlessを利用しています\n" +
        "よくSassという言葉を聞くのでポートフォリオに採用しました\n" +
        "利用期間(半年未満)",
    },
    {
      skill_name: "React.js",
      src: "/Reactjs.svg",
      content:
        "仕事ではまったく触らないため、趣味で現在勉強中です\n" +
        "利用期間(半年未満)",
    },
    {
      skill_name: "C",
      src: "/C.svg",
      content:
        "高校・大学時代に授業で使っていました\n" +
        "現在はほとんど書きません\n" +
        "利用期間(6年程度)",
    },
    {
      skill_name: "Java",
      src: "/Java.svg",
      content:
        "高校・大学時代に授業で使っていました\n" +
        "現在はほとんど書きません\n" +
        "利用期間(3年程度)",
    },
    {
      skill_name: "MySQL",
      src: "/MySQL.svg",
      content:
        "現在、仕事で利用しています\n" +
        "サーバサイドはNode.jsを採用しており、\n" +
        "SequelizeというORMを使ってSQLを書くことが多いです\n" +
        "業務ではデータベース関連の障害などを対応することもあるので\n" +
        "生のSQLを書くこともあります\n" +
        "利用期間(2022/04~)",
    },
  ];
  return (
    <div className={styles.body}>
      <div className={styles.title}>
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
