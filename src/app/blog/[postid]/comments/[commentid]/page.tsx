import React from 'react'

export default function page({params}:{
    params:{
        postid: string
        commentid: string
    }
}) {
  return (
    <div>Comment {params.commentid} for blog post {params.postid}</div>
  )
}
