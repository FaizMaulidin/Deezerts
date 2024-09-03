import React, { useContext } from 'react'
import { ReactComponent as NeutralLogo } from '../assets/icon-carbon-neutral.svg'
import { ReactComponent as EmptyCartLogo } from '../assets/illustration-empty-cart.svg'
import CartProductList from './CartProductList'
import { SetConfirmContext } from '../useReact/AllContexts'
import { DataContext } from '../useReact/AllContexts'

const Cartlist = () => {
	const data = useContext(DataContext)
	const setConfirmState = useContext(SetConfirmContext)
	let totalQty = 0
	let totalPrice = 0
	data.map((res) => {
		totalQty = totalQty + res.qty
		totalPrice = totalPrice + (res.qty * res.price)
	})
	return (
		<div className=' font-normal lg:w-[30%] bg-white h-fit rounded-lg px-7 py-7 text-sm'>
			<div className="title text-2xl font-bold text-Red mb-4">Your Cart ({totalQty})</div>
			{
				totalPrice > 0 
					? <>
						<CartProductList/>
						<div className="total my-5 flex justify-between items-center">
							<p>Order Total</p>
							<p className="price text-2xl"><b>${totalPrice.toFixed(2)}</b></p>
						</div>
						<div className="notes flex justify-center gap-1 p-3 bg-Rose50 rounded-md">
							<NeutralLogo/>
							<p>This is a <b>carbon-neutral</b> delivery</p>
						</div>
						<button className='my-6 text-white bg-Red font-semibold flex justify-center w-full py-4 rounded-full'
							onClick={() => {
								setConfirmState(true)
							}}
						>Confirm Order</button>
					</>
					: <div className='flex flex-col items-center'>
						<EmptyCartLogo/>
						<p className='text-Rose500 font-semibold'>Your added items will appear here</p>
					</div>
			}
			
		</div>
	)
}

export default Cartlist