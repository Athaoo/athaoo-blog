import React, { memo, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Tag, Typography, Row, Col, Spin } from 'antd'
import MarkdownRenderer from '@src/components/markdownRenderer'
import { MDViewer } from '@src/admin/components/markdown'
import { formatDate } from '@src/utils/format'
import { useRequest, getOneArticle } from '@src/api'
import type { Article } from '@src/api/types'
import BackBtn from './backBtn'
import { useToken } from '@src/theme'

const { Title, Text } = Typography

const Tags = (tags) => {
  const tagColors = ['megenta', 'red', 'volcano', 'orange', 'lime', 'green', 'cyan', 'geekblue']
  const randomColor = () => {
    const idx = Math.round(Math.random() * tagColors.length)
    return tagColors[idx]
  }

  const MyTags = tags.map((tag) => (
    <Button shape={'round'} size={'large'} key={tag} style={{}}>
      {tag}
    </Button>
  ))

  return <div>{MyTags}</div>
}

type HedaerProps = {
  data: Article
}
const Header: React.FC<HedaerProps> = ({ data }) => {
  return (
    <div className="flex flex-col w-full h-full mb-16">
      <div className="h-4 mt-16">
        <BackBtn />
      </div>
      <div className="pt-16">
        <Title level={1}>{data.title}</Title>
      </div>
      <div>
        <Text type="secondary" style={{ fontSize: 22 }}>
          {formatDate(data.createdAt)}
        </Text>
      </div>
      <div className="pt-8">{Tags(data.tags)}</div>
      <div className="relative md:-ml-5per mt-16 md:w-11/10 sm:ml-0 sm:w-4/5 h-0 pb-[60%] shadow-lg rounded-md overflow-hidden">
        <img
          src={data.cover ? data.cover : __APP_ENV__.DEFAULT_BG_URL}
          className="absolute w-full h-full object-cover"
          alt="Card Image"
        />
      </div>
    </div>
  )
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams()
  const [article, setArticle] = useState<Article>(null)
  const [loading, apiGetArticle] = useRequest(getOneArticle)
  const token = useToken()

  useEffect(() => {
    const get = async () => {
      const article = await apiGetArticle(Number(id))
      setArticle(article)
    }
    get()
  }, [])

  return loading ? (
    <Spin />
  ) : (
    <div className="lg:px-25per md:px-0" style={{ background: token.colorBgLayout }}>
      <Card style={{ boxShadow: 'none' }} bordered={false}>
        <Header data={article} />
        <MDViewer value={article.content} />
      </Card>
    </div>
  )
}

export default ArticleDetail
