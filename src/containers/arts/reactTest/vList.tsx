import React, { useEffect, createContext, useContext, useState } from 'react'
import { Card, Tree, Typography } from 'antd'
import type { DataNode } from 'antd/es/tree'
import { generateRandomTreeListData as mockListData } from '@src/utils/mock'

const App = () => {
  const mock = mockListData(100000, 1)
  console.log(`🚀 -> App -> mock:`, mock)

  return (
    <Card>
      <Typography.Title level={2}>antd tree, height 300</Typography.Title>
      <Tree treeData={mock} height={300}></Tree>
    </Card>
  )
}

export default App
