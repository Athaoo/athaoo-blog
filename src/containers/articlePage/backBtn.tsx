import React from 'react'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import { useNavigate } from 'react-router-dom'
import { useToken } from '@src/theme'

const BackBtn = () => {
  const navigate = useNavigate()
  const token = useToken()
  const back = () => {
    navigate('/article')
  }
  return (
    <Button
      type="link"
      className="group font -ml-2"
      size="large"
      icon={<ArrowLeftOutlined className="group-hover:-translate-x-1 transition-transform" />}
      onClick={back}>
      回到主页
    </Button>
  )
}

export default BackBtn
