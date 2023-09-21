import React, { useEffect, createContext, useContext, useState } from 'react'
import { Card, Tree, Typography } from 'antd'

import {
  generateRandomTreeListData as mockListData,
  flatVTreeListData as flat,
} from '@src/utils/mock'

const App = () => {
  const mock = mockListData(10, 3)

  return (
    <Card
      style={{
        minHeight: '1000px',
      }}>
      <div className="p-4 shadow-md">
        <Typography.Title level={2}>antd tree, height 300</Typography.Title>
        <Tree treeData={mock} height={300}></Tree>
      </div>
    </Card>
  )
}

export default App
