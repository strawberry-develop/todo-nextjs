'use client'

import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdClose, IoMdFlower, IoMdNotifications, IoMdRefresh, IoMdSearch } from 'react-icons/io'
import { MdLogout } from 'react-icons/md'
import Logo from '../common/Logo'

const Header = () => {
  const [search, setSearch] = useState('')
  const resetSearch = () => setSearch('')
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen)
  return (
    <header className="flex items-center justify-between px-10 py-4 w-full">
      <div className="flex items-center">
        <Logo width={32} height={32} />
        <h1 className="ml-2 text-xl font-medium">StrawBoard</h1>
      </div>
      <div className="flex items-center rounded-full px-3 py-1 bg-white w-[500px]">
        <label htmlFor="search">
          <IoMdSearch className="text-gray-500 w-6 h-6" />
        </label>
        <input
          type="text"
          id="search"
          className="w-full px-2 py-1 focus:outline-none placeholder:text-gray-500"
          placeholder="검색"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className="text-gray-500" onClick={resetSearch}>
            <IoMdClose className="w-6 h-6" />
          </button>
        )}
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-5 text-gray-600">
          <button>
            <IoMdRefresh className="w-7 h-7" />
          </button>
          <button>
            <IoMdNotifications className="w-7 h-7" />
          </button>
          <button>
            <IoMdFlower className="w-7 h-7" />
          </button>
        </div>
        <button className="relative cursor-pointer" onClick={toggleNotification}>
          <FaUserCircle className="w-9 h-9 text-gray-400" />
          {isNotificationOpen && (
            <div className="absolute top-10 -right-1 w-28 bg-white rounded-md shadow-md">
              <p className="px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-50">
                <MdLogout className="w-5 h-5" />
                로그아웃
              </p>
            </div>
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
