import CategoryCard from '@/components/CategoryCard'
import { BASE_URL } from '@/utils/constant'
import React from 'react'


export async function fetchCategories(){
    const resp = await fetch(`${BASE_URL}/categories?limit=8`,{
        cache: 'no-store'
    })
    return resp.json()
}

export default async function Categories() {
    const categories = await fetchCategories()
  return (
    <main>
         <div className='text-center font-bold text-5xl pt-40 '>
    <h1>Categories</h1>
    </div>
    <div className="flex min-h-screen flex-wrap items-center justify-between p-10">
       {categories.map(category => (
        <CategoryCard key={category.id} category={category}/>
       ))}
    </div> 
    </main>
  )
}
