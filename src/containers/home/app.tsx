import React, { useRef } from 'react'
import { Layout, Row, Col, Divider } from 'antd'
import { theme } from 'antd'

import { RouterRoot } from '@src/router/inedx'
import MyHeader from '../topMenu'

import { useScrollNearBottom } from '@src/utils/useScrollToBottom'

import './styles/index.scss'
import '@src/styles/tailwind.css'

const { Footer } = Layout
const { useToken } = theme
const App: React.FC = () => {
  const { token } = useToken()
  const scrollContainerRef = useRef(null)

  return (
    <Row
      className="transition duration-300 overflow-x-hidden h-full w-full"
      style={{ background: token.colorBgContainer }}>
      <Col ref={scrollContainerRef} className="w-full h-full overflow-y-auto" span={24}>
        <MyHeader defaultSelectedKey={''}></MyHeader>
        <main
          className="overflow-x-hidden overflow-y-visible"
          style={{ background: token.colorBgLayout, minHeight: 'calc(100% - 64px)' }}>
          <div style={{ minHeight: '960px' }}>
            <RouterRoot></RouterRoot>
          </div>
          <Divider className="my-0"></Divider>
          <Footer className="h-16 text-center" style={{ background: token.colorBgLayout }}>
            Athaoo 2023
          </Footer>
        </main>
      </Col>
    </Row>
  )
}

export default App
