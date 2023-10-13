import React from 'react'
import { router, useForm, usePage } from '@inertiajs/react'

const Search = () => {
    const {nav_data} = usePage().props;
    const prices = ['10k-100k', '100k-1M', '1M-100M', '100M-1B']
    const {data, setData} = useForm({
        'category' : '',
        'location' : '',
        'price' : '',
    })

    function submit(e) {
        e.preventDefault();
        router.get(route('search.business'), data)
    }
  return (
    <div className="absolute w-full" style={{'bottom' : '-100px'}}>
        <div className='mx-20'>
            <div className="border border-slate-800 p-5 bg-yellow-500">
                {/* top section search  */}
                <div className="flex items-center">
                    <div className='w-2/3'>
                        <h1 className='text-4xl'> Search  Business </h1>
                        <p> Find the right business for you.</p>
                    </div>
                    <div className='w-1/3 '>
                        <div className="flex justify-end">
                            <button  className='bg-slate-900 text-white p-2 me-4'> Buy a business </button>
                            <button className='border border-slate-700 px-5 me-4'> Sell  </button>
                            <button className='border border-slate-700 px-5'> Buy  </button>
                        </div>
                    </div>
                </div>

                {/* button section search  */}
                <form onSubmit={submit}>
                    <div className="border border-slate-800 p-4 mt-10">
                        <div className="flex justify-between">
                            <div className='w-1/4 me-3'>
                                <label htmlFor="location" className='block font-bold'> Location </label>
                                <select className='border border-slate-800 bg-yellow-500 w-full'
                                onChange={e => setData('location', e.target.value)}
                                >
                                    <option value=""> Any Location </option>
                                    {
                                        nav_data.locations.data.map(item => (
                                            <option value={item.id}> {item.name} </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div  className='w-1/4 me-3'>
                                <label htmlFor="category" className='block font-bold'> Category </label>
                                <select className='border border-slate-800 bg-yellow-500 w-full'
                                onChange={(e) => setData('category', e.target.value)}
                                >
                                    <option value=""> Any Category </option>
                                    {
                                        nav_data.categories.data.map(item => (
                                            <option value={item.id}> {item.name} </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div  className='w-1/4 me-3'>
                                <label htmlFor="price" className='block font-bold'> Price </label>
                                <select className='border border-slate-800 bg-yellow-500 w-full'>
                                    <option value=""> Any Price </option>
                                    {
                                        prices.map(item => (
                                            <option value={item} key={item}> {item} MMK </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='w-1/4'>
                                <label htmlFor="price" className='block font-bold'>  </label> <br />
                                <button type='submit' className='p-2 bg-slate-900 text-white w-full'> Search </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Search
