import React from 'react'
import { Outlet } from 'react-router-dom'
import { theme, Row, Col } from 'antd'
import { lazySuspense } from '@src/router/inedx'
import '@src/styles/tailwind.css'

const { useToken } = theme
const ArticlePage = () => {
  const { token } = useToken()

  return (
    <div
      className="h-full"
      style={{
        background: token.colorBgContainer,
      }}>
      <div>{lazySuspense(<Outlet />)}</div>
    </div>
  )
}

export default ArticlePage
