"use client"
import React from "react"
import products from "@/data/products.js"

type Props = {
  params: { category: string }
}

export default function ProductCategoryPage({ params: { category } }: Props) {
  console.log("PRODUCTS", products)
  return (
    <div>
      Product Category {category}
      <img src={products[0].img} className="w-64 h-64" />
      <img src={products[0].variants[0].img} className="w-24 h-24" />
    </div>
  )
}
