import React from "react";
import categories from "@/data/categories.json";
type Props = {};

export default function Header({}: Props) {
  console.log("categories", categories);
  return (
    <header className="py-6 px-4 border-b border-black">
      <section className="flex items-center gap-2">
        <div className="h-5 w-5 bg-black"></div>
        <p>Coengine</p>
      </section>
    </header>
  );
}
