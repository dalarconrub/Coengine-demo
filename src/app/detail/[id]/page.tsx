import React from 'react'

type Props = {
    params: { id: string }
}

export default function ProductDetailPage({ params: {id}}: Props) {
  return (
    <div>I am product id: {id}</div>
  )
}