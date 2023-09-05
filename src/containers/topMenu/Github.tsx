import React from 'react'
import { Space, Button, Tooltip } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

const onclick = () => {
  const githubUrl = 'https://github.com/Athaoo'
  window.open(githubUrl, '_blank')
}

const ThemeToggler: React.FC = () => {
  return <Button shape="circle" onClick={onclick} icon={<GithubOutlined />}></Button>
}

export default ThemeToggler
