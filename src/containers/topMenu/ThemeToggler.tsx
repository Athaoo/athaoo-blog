import React, { useState } from 'react'
import { Space, Button, Tooltip } from 'antd'
import { BulbOutlined } from '@ant-design/icons'
import { useTheme } from '@src/theme'

const GithubBtn: React.FC = () => {
  const { toggleTheme } = useTheme()

  return (
    <Space>
      <Button shape="circle" onClick={toggleTheme} icon={<BulbOutlined />}></Button>
    </Space>
  )
}

export default GithubBtn
