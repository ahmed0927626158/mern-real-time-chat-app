import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversation from "../../hooks/useGetConversation"
import toast from 'react-hot-toast';
  function SearchInput() {
  const [search,setSearch]=useState()
  const {conversation}=useGetConversation()
  const {setSelectedConversation}=useConversation()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!search) return;
    const convers=conversation.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(convers){
      setSelectedConversation(convers)
      setSearch("")
    }
    else{
      toast.error("No such user found")
    }
  }
  return (
    <form className='flex items-center gap-2 search-form ' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search user here ' className='input input-bordered rounded-full search'
        value={search} onChange={(e)=>setSearch(e.target.value)}></input>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white search-btn'>
            <FaSearch  />
            </button> 
    </form>
  )
}

export default SearchInput