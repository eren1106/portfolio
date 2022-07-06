import React from 'react'
import './productList.css'
import Product from '../product/Product'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>Create & inspire. It's Eren</h1>
            <p className='pl-desc'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae velit autem iusto assumenda qui eligendi quasi mollitia ad consequuntur illo dignissimos, dolores ex aperiam saepe fugiat veniam voluptatum optio nisi!
            </p>
        </div>
        <div className="pl-list">
            {products.map((product)=><Product key={product.id} img={product.img} link={product.link}/>)}
        </div>
    </div>
  )
}

export default ProductList