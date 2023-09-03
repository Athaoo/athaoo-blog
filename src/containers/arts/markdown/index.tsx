import { Button, Card } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import testData from '@src/containers/articlePage/testData'
import { MDViewer } from '@src/admin/components/markdown'
import '@src/styles/tailwind.css'

const App = () => {
  const [content, setContent] = useState('惹啊')

  useEffect(() => {
    setContent(testData[6].content)
  }, [])

  const onClick = (e) => {
    const json = content
    console.log(json)
  }
  return (
    <Card className="w-full h-full" bodyStyle={{ width: '100%', height: '100%' }}>
      <Button onClick={onClick}>导出</Button>
      <MDViewer value={content} />
    </Card>
  )
}

export default App
