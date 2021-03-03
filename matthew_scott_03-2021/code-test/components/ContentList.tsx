import Link from 'next/link'

import { ContentSection } from '../utils/cms-data-interface'
import styles from '../styles/ContentList.module.scss'

type Props = {
  cmsSections: ContentSection[]
}

const ContentList = ({ cmsSections }: Props) => (
  <div className={styles.contentList}>
    {cmsSections.map((section) => (
      <section key={section.id} className={styles.contentSection}>
        <div className={styles.placeholderImage}></div>
        <h2>{section.heading}</h2>
        <p>{section.body}</p>
        <Link href={section.link}>
          <a className='linkAsButton'>{section.linkText}</a>
        </Link>
      </section>
    ))}
  </div>
)

export default ContentList