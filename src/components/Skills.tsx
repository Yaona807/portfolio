import styles from 'pages/styles/Skills.module.scss'
import Image from 'next/image'

export function Skills() {
    const skills = [
		'JavaScript',
		'Python',
		'TypeScript',
		'Node.js',
		'Riot.js',
		'Next.js',
		'C',
		'CSS',
		'HTML',
	];
	return (
		<div>
			<div>
				<span>スキル一覧</span>
			</div>
            <div>
                <ul>
                    {
                        skills.map((skill, index) => (
                            <li key={ index }>
                                <span>{ skill }</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
		</div>
	);
}
