import React, { useContext, useEffect, useState } from 'react'
import {ReactComponent as CartLogo} from '../assets/icon-add-to-cart.svg'
import {ReactComponent as PlusLogo} from '../assets/icon-increment-quantity.svg'
import {ReactComponent as MinusLogo} from '../assets/icon-decrement-quantity.svg'
import { DataContext, DispatchContext } from '../useReact/AllContexts'

const AddToCart = ({index}) => {
    const data = useContext(DataContext)
    const dispatchs = useContext(DispatchContext)
    const qty = data[index].qty
    let state = false
    qty > 0 ? state = true : state = false

	let imgClassName = 'rounded-lg outline-2 outline outline-Rose50'
	if(state) imgClassName = 'rounded-lg outline-2 outline outline-Red'

    let classes = 'absolute hover:cursor-pointer bg-white bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex gap-2 text-sm px-7 py-3 rounded-full border-Rose500 border-[1px] w-[80%] justify-center'
    if(state){
        classes = 'absolute bg-Red text-white bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex gap-8 text-sm px-3 py-3 rounded-full items-center border-Red border-[1px] w-[80%] justify-evenly'
    }

  return (
    <>
        {window.innerWidth >= 1024 
            && <img className={imgClassName} src={data[index].image.desktop} />
        }
        {(window.innerWidth >= 768 && window.innerWidth < 1024) 
            && <img className={imgClassName} src={data[index].image.tablet} />
        }
        {window.innerWidth < 768 
            && <img className={imgClassName} src={data[index].image.mobile} />
        }
        <div className={classes}
            onClick={() => {
                !state && dispatchs({
                    type: "increment",
                    id: index
                })
            }}
        >
            {state && qty > 0 
                ? <>
                    <button 
                        className=' border-white border-[1px] rounded-full w-5 h-5 flex justify-center items-center'
                        onClick={(e) => {
                            e.stopPropagation()
                            qty > 0 && dispatchs({
                                type: 'decrement',
                                id: index
                            })
                        }}
                    >
                        <MinusLogo/>
                    </button>
                    <div className="qty w-8 flex justify-center text-white">
                        {qty}
                    </div>
                    <button
                        className=' border-white border-[1px] rounded-full w-5 h-5 flex justify-center items-center'
                        onClick={() => {
                            dispatchs({
                                type: 'increment',
                                id: index
                            })
                        }}
                    >
                        <PlusLogo/>
                    </button>
                </>
                : <>
                    <CartLogo/>
                    Add to Cart
                </>
            }
        </div>
    </>
  )
}

export default AddToCart