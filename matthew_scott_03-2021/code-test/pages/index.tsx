import { GetStaticProps } from 'next'

import { ContentSection } from '../utils/cms-data-interface'
import { sampleContentSectionData } from '../utils/cms-data'

import ContactForm from '../components/ContactForm'
import ContentList from '../components/ContentList'
import Layout from '../components/Layout'

type Props = {
  cmsSections: ContentSection[]
}

const Contact = ({ cmsSections }: Props) => (
    <Layout>
      <div className="fixedWidth">
        <h1>Heading One</h1>
        <ContentList cmsSections={cmsSections} />
      </div>
      <div>
        <ContactForm />
      </div>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const cmsSections: ContentSection[] = sampleContentSectionData
  return { props: { cmsSections } }
}

export default Contact
