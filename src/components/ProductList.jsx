import React, { useContext, useState } from 'react'
import { DataContext } from '../useReact/AllContexts'
import AddToCart from './AddToCart'

const ProductList = () => {
	const data = useContext(DataContext)

	return (
		<div className='grid grid-cols-prodList font-default font-semibold gap-6'>
			{data.map((prods, i) => {
				return (
					<div key={i} className='text-xl flex gap-8 flex-col'>
						<div className="image relative">
							<AddToCart index={i}/>
						</div>
						<div className="txt text-base">
							<h1 className='text-sm font-normal text-Rose500'>{prods.category}</h1>
							<h1>{prods.name}</h1>
							<h1 className='text-Red'>${prods.price.toFixed(2)}</h1>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default ProductList