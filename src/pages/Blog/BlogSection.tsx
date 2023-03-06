import React from 'react'
import {useParams} from 'react-router-dom'
import {dataBlog} from './data'

function BlogSection() {
  let {blogId} = useParams()
  const contentProps = dataBlog.find(content => content.id === blogId)

  React.useEffect(() => {
    window.scroll(0, 0)
  }, [])

  if (!contentProps?.id) return <></>
  return <div>{contentProps.contentMDX}</div>
}

export default BlogSection
