import React from 'react'


function getRandomInt(count: number){
  return Math.floor(Math.random() * count)
}

export default function page({params}:{
    params:{
        postid: string
        commentid: string
    }
}) {

  const random = getRandomInt(2)
  if (random === 1){
    throw new Error("error loading this comment")
  }
  return (
    <div>Comment {params.commentid} for blog post {params.postid}</div>
  )
}
