import React from 'react'

export default function page({params}:{params:{postid:string}}
) {
  return (
    <div>details page{params.postid}</div>
  )
}
