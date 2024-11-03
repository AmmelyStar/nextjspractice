import React from 'react'
import type { Metadata } from 'next'

type Props = {
    params: {
        postid: string
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Blog post ${params.postid}`
    }
}

export default function Page({ params }: Props) {
    return (
        <div>details page {params.postid}</div>
    )
}
