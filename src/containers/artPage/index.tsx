import React from 'react'
import { Link, Outlet, useParams, useRoutes } from 'react-router-dom'

import { Card, Col, Menu, MenuProps, Row, theme } from 'antd'
import { ThunderboltOutlined } from '@ant-design/icons'
import { lazySuspense } from '@src/router/inedx'

type page = {
  id: string
  path: string
  name: string
}

const sub3dRoutes: page[] = [{ id: '2', path: '3d/rotateBox2', name: '旋转盒子' }]
const subReactRoutes: page[] = [
  { id: '1', path: 'react/dnfCustom', name: 'dnf自定义装备' },
  { id: '2', path: 'react/hooks1', name: 'hooks1' },
  { id: '3', path: 'react/testHooks2', name: 'testHooks2' },
  { id: '4', path: 'react/vList', name: 'vList' },
  { id: '5', path: 'react/iframeTest', name: 'iframeTest' },
]

const sideMenuItems: MenuProps['items'] = [
  {
    key: `3d`,
    icon: React.createElement(ThunderboltOutlined),
    label: `3d`,
    children: sub3dRoutes.map((subRoute, j) => {
      const { id, path, name } = subRoute
      return {
        key: `3d-${id}`,
        label: <Link to={path}>{name}</Link>,
      }
    }),
  },
  {
    key: `react`,
    icon: React.createElement(ThunderboltOutlined),
    label: `react`,
    children: subReactRoutes.map((subRoute, j) => {
      const { id, path, name } = subRoute
      return {
        key: `react-${id}`,
        label: <Link to={path}>{name}</Link>,
      }
    }),
  },
]
const { useToken } = theme
const ArtPage = () => {
  const token = useToken().token
  return (
    <Row
      className="p-0 pt-8 w-full min-h-screen"
      style={{
        background: token.colorBgContainer,
      }}>
      <Col span={4}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['3d', 'react']}
          style={{ height: '100%' }}
          items={sideMenuItems}></Menu>
      </Col>
      <Col span={20} style={{ height: '100%', minHeight: '50vh' }}>
        {lazySuspense(<Outlet />)}
      </Col>
    </Row>
  )
}

export default ArtPage
