
import SectionBlock from '../../../shared/Section'
export default function ContentSection({contactData}) {
  return (
    <SectionBlock>
        <div dangerouslySetInnerHTML={{ __html: contactData?.contentHTML || "" }}></div>
    </SectionBlock>
  )
}
