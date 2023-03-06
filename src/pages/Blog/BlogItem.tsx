import React from 'react'
import {useParams} from 'react-router-dom'
import {datablog} from './data'

function BlogItem() {
  let {blogId} = useParams()
  const contentProps = datablog.find(content => content.id === blogId)

  if (!contentProps?.id) return <></>
  return <div>{contentProps.contentMDX}</div>
}

export default BlogItem
