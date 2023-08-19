import React from 'react'

type Props = {
    params: { category: string }
}

export default function ProductCategoryPage({ params: {category}}: Props) {
  return (
    <div>Product Category {category}</div>
  )
}