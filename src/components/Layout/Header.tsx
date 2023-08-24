import React from "react"
import categories from "@/data/categories.json"
type Props = {}

export default function Header({}: Props) {
  console.log("categories", categories)
  return <div>Header</div>
}
