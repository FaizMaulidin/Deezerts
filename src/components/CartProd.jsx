import React, { useContext, useEffect, useRef } from 'react'
import { ReactComponent as XLogo } from '../assets/icon-remove-item.svg'
import CartProductInfo from './CartProductInfo'
import { DispatchContext } from '../useReact/AllContexts'

const CartProd = ({res, keyId}) => {
    const dispatchs = useContext(DispatchContext)
    const ref = useRef()

    useEffect(() => {
        const node = ref.current
        setTimeout(() => {
            node.classList.remove('opacity-0', '-translate-y-5')
            node.classList.add('opacity-100', 'translate-y-0')
        }, 50);

        return () => {
            node.classList.remove('opacity-100', 'translate-y-0')
            node.classList.add('opacity-0', '-translate-y-5')
        }
    }, [])

    return (
        <div ref={ref} className='opacity-0 transition-all duration-300 ease-in-out -translate-y-5'>
            <div className='flex justify-between items-center'>
                <CartProductInfo res={res}/>
                <button className='border-[1px] h-5 w-5 border-Rose300 flex items-center justify-center rounded-full'
                    onClick={() => dispatchs({
                        type: 'remove',
                        id: keyId
                    })}
                >
                    <XLogo/>
                </button>
            </div>
            <div className="line h-[1px] w-full bg-Rose300 mt-3"></div>
        </div>
    )
}

export default CartProd