import ProductCard from '@/components/ProductCard'
import { BASE_URL } from '@/utils/constant'
import Link from 'next/link'
import React from 'react'


export async function fetchProduct(){
    const resp = await fetch(`${BASE_URL}/products?limit=20&offset=0`,{
        cache: 'no-store'
    })
    return resp.json()
}


export default async function Products() {
    const products = await fetchProduct() 
  return (
   <main>
    <div className='text-center font-bold text-5xl p-10 '>
    <h1>Product List</h1>
    </div>
     <div className="flex min-h-screen flex-wrap items-center justify-between p-10">
        
        {products.map(product => (
            <Link href={`products/${product.id}`}>
                <ProductCard key={product.id} product={product}/>
            </Link>
        ))}
       
    </div>
   </main>
  )
}
