import { GetStaticProps } from 'next'

import { ContentSection } from '../utils/cms-data-interface'
import { sampleContentSectionData } from '../utils/cms-data'
import ContentList from '../components/ContentList'
import Layout from '../components/Layout'

type Props = {
  cmsSections: ContentSection[]
}

const Contact = ({ cmsSections }: Props) => (
    <Layout>
      <main className="fixedWidth">
        <h1>Heading One</h1>
        <ContentList cmsSections={cmsSections} />
      </main>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const cmsSections: ContentSection[] = sampleContentSectionData
  return { props: { cmsSections } }
}

export default Contact
