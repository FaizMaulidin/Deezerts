import './App.css';
import Headline from './components/Headline';
import Cartlist from './components/Cartlist';
import ProductList from './components/ProductList';
import database from './data.json'
import AllContexts from './useReact/AllContexts';
import { useReducer, useState} from 'react';
import { dataReducer } from './useReact/Reducer';
import OrderConfirmed from './components/OrderConfirmed';
import Credit from './components/Credit';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
    const [data, setData] = useReducer(dataReducer, database)
    const [state, setState] = useState(false)

    let blackClass = "hidden"
    if (state) blackClass = "fixed top-0 left-0 w-full h-screen bg-black opacity-70"

    return (
        <AllContexts 
            data={data} 
            setData={setData}
            confirm={state}
            setConfirm={setState}
        >
            <div className='p-6 lg:p-12 xl:p-24 flex flex-col lg:flex-row gap-7 font-default font-bold text-Rose900 bg-Rose50'>
                <div className='flex flex-col gap-8 flex-grow'>
                    <Headline text="Deezerts"/>
                    <ProductList/>
                </div>
                <Cartlist/>
                <div className={blackClass}></div>
            </div>
            <Credit/>
            <SpeedInsights/>
            <OrderConfirmed/>
        </AllContexts>
  );
}

export default App;
