import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'



export const metadata: Metadata = {
    title: {
        absolute: 'This is the absolute title'
    }
}

export default function page() {
  return (
    <div>
        <Link href={"/"}>Home</Link>
        <div><Link href={'/blog/1'}>blog post 1</Link></div>
        <div><Link href={'/blog/2'}>blog post 2</Link></div>
        <div><Link href={'/blog/3'}>blog post 3</Link></div>
        <div><Link href={'/blog/4'}>blog post 4</Link></div>
        <div><Link href={'/blog/5'}>blog post 5</Link></div>
        <div><Link href={'/blog/6'}>blog post 6</Link></div>
        <div><Link href={'/blog/7'}>blog post 7</Link></div>
        <div><Link href={'/blog/8'}>blog post 8</Link></div>
      
    
    </div>
    
    
  )
}
