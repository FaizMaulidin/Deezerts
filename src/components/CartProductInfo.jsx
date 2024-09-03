import React, { useEffect, useRef, useState } from 'react'

const CartProductInfo = ({res}) => {
    const total = res.price * res.qty
    return (
        <div key={res.category} className="info flex flex-col gap-1">
            <div className='font-semibold'>{res.name}</div>
            <div className="bot flex gap-3 items-center">
                <div className="qty font font-semibold text-Red">{res.qty}x</div>
                <div className="price flex gap-2 items-center">
                    <p className="one text-Rose300">@ ${res.price.toFixed(2)}</p>
                    <p className="sum text-Rose500">${total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default CartProductInfo