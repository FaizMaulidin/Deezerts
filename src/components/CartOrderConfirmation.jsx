import React, { useEffect } from 'react'
import { DataContext } from '../useReact/AllContexts'
import { useContext } from 'react'

const CartOrderConfirmation = () => {
    const data = useContext(DataContext)
    let totalPrice = 0
    data.map((res) => {
        totalPrice += res.qty * res.price
    })
    
    return (
        <div className='p-6 bg-Rose50 rounded-lg flex flex-col gap-6 lg:py-3'>
            <ul className="list flex flex-col gap-3 max-h-[32vh] overflow-scroll overflow-x-hidden">
                {data.map((res, i) => {
                    const total = res.price * res.qty
                    if(res.qty > 0){
                        return <li key={i} className=' flex flex-col gap-3'>
                            <div className="grid grid-cols-orderConfirmed gap-3 items-center grid-rows-[48px] lg:grid-rows-[36px] text-xs">
                                <img className='rounded w-[48px] lg:w-[36px]' src={res.image.thumbnail} alt="" />
                                <div className="mid flex flex-col justify-between font-semibold h-full">
                                    <p className="top max-h-4 text-sm lg:text-xs font-bold overflow-hidden">{res.name}</p>
                                    <div className="bot flex gap-2">
                                        <p className='text-Red'>{res.qty}x</p>
                                        <p className='text-Rose400 font-normal'>@ ${res.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="total font-semibold text-right">${total.toFixed(2)}</div>
                            </div>
                            <div className="line bg-Rose100 h-[1px] w-full"></div>
                        </li>
                    }
                })}
            </ul>
            <div className="total flex justify-between items-center">
                <p className=' font-normal text-sm lg:text-xs'>Order Total</p>
                <p className='text-2xl lg:text-xl'>${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartOrderConfirmation