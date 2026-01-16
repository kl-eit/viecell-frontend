
import SectionBlock from '../../../shared/Section'
export default function ContentSection({contactData}) {
    console.log(contactData,'contactdata')
  return (
    <SectionBlock>
        <div dangerouslySetInnerHTML={{ __html: contactData?.contentHTML || "" }}></div>
    </SectionBlock>
  )
}
