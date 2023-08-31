import React from 'react'
import { Outlet } from 'react-router-dom'
import { theme, FloatButton } from 'antd'
import { lazySuspense } from '@src/router/inedx'
import '@src/styles/tailwind.css'

const { useToken } = theme
const ArticlePage = () => {
  const { token } = useToken()

  return (
    <div
      className="h-full my-16"
      style={{
        minHeight: '960px',
        background: token.colorBgElevated,
      }}>
      {lazySuspense(<Outlet />)}
      <FloatButton.BackTop />
    </div>
  )
}

export default ArticlePage
