import React from 'react'
import { Outlet } from 'react-router-dom'
import { lazySuspense } from '@src/router/inedx'
import '@src/styles/tailwind.css'

const ArticlePage = () => {
  return <div className="flex flex-col my-16">{lazySuspense(<Outlet />)}</div>
}

export default ArticlePage
