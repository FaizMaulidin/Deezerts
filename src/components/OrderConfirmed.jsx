import React, { useContext, useState } from 'react'
import { ReactComponent as ConfirmLogo } from '../assets/icon-order-confirmed.svg'
import CartOrderConfirmation from './CartOrderConfirmation'
import { ConfirmContext, DispatchContext, SetConfirmContext } from '../useReact/AllContexts'

const OrderConfirmed = () => {
    const confirmState = useContext(ConfirmContext)
    const setConfirmState = useContext(SetConfirmContext)
    const dispatch = useContext(DispatchContext)

    if (confirmState){
        return (
            <div
                className='fixed bottom-0 bg-white rounded-t-xl w-full p-6 flex flex-col font-default font-bold text-Rose900 gap-5 lg:rounded-xl lg:w-[28rem] lg:bottom-1/2 lg:translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:gap-3 lg:pt-3'
            >
                <div className="">
                    <ConfirmLogo/>
                </div>
                <div className="title">
                    <p className='text-[2.5rem] lg:text-3xl leading-tight'>Order Confirmed</p>
                    <p className='text-Rose400 font-normal lg:text-sm'>We hope you enjoy your food!</p>
                </div>
                <CartOrderConfirmation/>
                <button className='font-semibold text-white bg-Red rounded-full py-3 lg:text-sm'
                    onClick={() => {
                        setConfirmState(false)
                        dispatch({
                            type: 'confirmed'
                        })
                    }}
                >Start New Order</button>
            </div>
        )
    }
}

export default OrderConfirmed