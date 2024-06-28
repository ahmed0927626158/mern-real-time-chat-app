import React from 'react'
import SearchInput from "./SearchInput"
import Conversations from './Conversations'
import Logout from './Logout'
function SideBar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col left-side'>
        <SearchInput />
        <div className='divider px-6'></div>
        <Conversations />
        <Logout />
    </div>
  )
}

export default SideBar