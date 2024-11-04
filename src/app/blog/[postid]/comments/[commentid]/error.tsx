'use client'
import React from 'react'

export default function errorBoundary({error}:{
    error: Error
}) {
  return (
    <div className='p-4 bg-red-200'>{error.message}</div>
  )
}
