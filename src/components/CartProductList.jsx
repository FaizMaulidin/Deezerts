import React, { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../useReact/AllContexts'
import CartProd from './CartProd'

const CartProductList = () => {
    const data = useContext(DataContext)

    return (
        <ul className='flex flex-col gap-2'>
            {data.map((res, i) => {                
                if(res.qty > 0){
                    return <li key={i}>
                        <CartProd
                            res={res}
                            keyId={i}
                        />
                    </li>
                } else {
                    return null
                }
            })}
        </ul>
    )
}
export default CartProductList