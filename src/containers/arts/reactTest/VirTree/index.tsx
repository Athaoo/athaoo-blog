import React, { useEffect, createContext, useContext, useState, useRef, useCallback } from 'react'
import { Card, Tree, Typography, Button } from 'antd'
import {
  generateRandomTreeListData as mockListData,
  flatVTreeListData as flat,
} from '@src/utils/mock'
import './vir.css'
import './iconfont.css'
import './iconfont.woff'
import './iconfont.woff2'
import { defaultPlugins, createTree } from './virh5.js'
import { Link } from 'react-router-dom'

const App = () => {
  const mock = mockListData(200000, 1)
  const myVirRootRef = useRef(null)
  const [ifRenderAntdExample, setIfRenderAntdExample] = useState(false)
  const treeRef = useRef(null)

  const renderAntdSampleTree = useCallback(() => {
    setIfRenderAntdExample(true)
  }, [])

  const renderMyTree = useCallback(() => {
    if (myVirRootRef.current) {
      console.log(
        `🚀 -> file: index.tsx:21 -> renderMyTree -> myVirRootRef.current:`,
        myVirRootRef.current
      )
      const mock2 = mockListData(90000, 5)
      if (!treeRef.current) {
        const treeCheckbox = defaultPlugins.createCheckboxPlugin()
        treeRef.current = createTree(
          {
            root: myVirRootRef.current,
            itemHeight: 20,
          },
          mock2,
          [treeCheckbox.plugin]
        )
      } else {
        treeRef?.current?.flush(mock2)
      }
    }
  }, [])

  return (
    <>
      <Card>
        <Typography.Title level={2}>虚拟列表效果demo</Typography.Title>
        <div
          style={{
            fontSize: '16px',
          }}>
          之前公司项目里的可折叠3d物体列表在量大时会导致内存过大和卡顿, 于是想到用虚拟列表优化
        </div>
        <Link
          to="http://154.8.162.201/blog/article/10"
          style={{
            fontSize: '16px',
          }}>
          虚拟列表demo链接
        </Link>
        <Typography.Title level={2} className="my-4">
          antd tree, 最外层节点个数为20w, 最大随机深度为2
        </Typography.Title>
        <Button
          className="mb-4"
          onClick={() => {
            renderAntdSampleTree()
          }}>
          渲染
        </Button>
        <div
          className="p-4 shadow-lg mt-4 rounded-md"
          style={{
            minHeight: '300px',
          }}>
          {ifRenderAntdExample && <Tree treeData={mock} height={300}></Tree>}
        </div>
        <Typography.Title level={2} className="my-4">
          基于原生h5虚拟列表demo, 最外层节点数为90w个以上,最大随机深度为5
        </Typography.Title>
        <Button
          className="mb-4"
          onClick={() => {
            renderMyTree()
          }}>
          渲染
        </Button>
        <div
          className="p-4 shadow-lg rounded-md"
          style={{
            minHeight: '300px',
          }}>
          <div id="virListRoot" className="relative" ref={myVirRootRef}></div>
        </div>
      </Card>
    </>
  )
}

export default App
