import React, { useEffect, useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// Search styles moved to Tailwind + small component classes in index.css
import api from '../../api/api';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import useFetch from '../../hooks/useFetch'

//DEBOUNCING

const Search = ({ setSearch }) => {
    const [query, setQuery] = useState("")
    const [data, setData] = useState(null)
    // const navigate = useNavigate()
    const change = (e) => {
        setQuery(e.target.value)
    }
    useEffect(()=>{
        if(!query){
            setData(null);
            return;
        }
        const fetchData=async()=>{
            const response = await api.post('/api/v1/products/search',{
                query
            })
            setData(response.data.response)
        }
        fetchData()
    },[query])
    return (
        <div className="fixed inset-0 z-50 bg-white animate-search-slide overflow-auto">
            <div className="flex justify-center px-6 py-4">
                <div className="w-full max-w-[1000px] flex items-center gap-4">
                    <input
                        type="text"
                        placeholder='Search Products...'
                        autoFocus
                        value={query}
                        onChange={change}
                        className="w-full h-12 sm:h-14 text-center text-lg sm:text-xl font-semibold uppercase border rounded-lg px-4"
                    />
                    <button onClick={() => setSearch(false)} className="p-2">
                      <CloseOutlinedIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>

            <div className="mx-auto max-w-[800px] px-4">
                <div className="mt-4 mb-8 h-[calc(100vh-160px)] overflow-auto">
                    {data?.map(item => (
                        <div className="flex items-center gap-4 py-3 border-b border-gray-200 cursor-pointer" key={item._id}>
                            <div className="w-14 h-14 flex-shrink-0 overflow-hidden rounded">
                                <img src={item.image1} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <Link to={`/product/${item._id}`}>
                                    <h3 className="text-base font-medium truncate">{item.title.split(" ").slice(0,10).join(" ")}</h3>
                                </Link>
                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description.split(" ").slice(0,20).join(" ")}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search