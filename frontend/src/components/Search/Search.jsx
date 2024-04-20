import React, { useEffect, useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './Search.scss'
import axios from 'axios';
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
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/products/search`,{
                query
            })
            setData(response.data.response)
        }
        fetchData()
    },[query])
    return (
        <div className='search'>
            <div className="search-field">
                <input
                    type="text"
                    placeholder='Search Products...'
                    autoFocus
                    value={query}
                    onChange={change}
                />
                <span className='icon'>
                    <CloseOutlinedIcon className='close-icon' onClick={() => setSearch(false)} />
                </span>
            </div>
            <div className="result-content">
                <div className="search-result">
                    {data?.map(item => (
                        <div className="item" key={item._id}>
                            <div className="img-container">
                                <img src={item.image1} alt="" />
                            </div>
                            <div className="details">
                                <Link to={`/product/${item._id}`}>
                                    <h1>{item.title.split(" ").slice(0,10).map((i)=>(i+" "))}</h1>
                                </Link>
                                <p>{item.description.split(" ").slice(0,20).map((i)=>(i+" "))}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search