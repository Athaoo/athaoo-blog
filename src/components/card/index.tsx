import React from 'react'
import { Tooltip, Typography } from 'antd'
import { formatDate } from '@src/utils/format'
import { useToken } from '@src/theme'

type MyCardProps = {
  title: string
  summary: string
  time: Date
  tags: string[]
  cover?: string
  onClick?: () => any
}

const defaultBg = 'http://154.8.162.201:80/static/files/default-bg.png'

const MyCard = ({ title, summary, tags, time, cover, onClick }: MyCardProps) => {
  const token = useToken()
  return (
    <Tooltip title={title} autoAdjustOverflow={false}>
      <div
        className="group flex flex-col group relative rounded-2xl h-full w-full p-0 transform transition-all duration-300 "
        style={{ background: token.colorBgElevated }}>
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
          {/* trick: height0 + padding-bottom可以保持比例 */}
          <div className="w-full h-0 pb-[48%] relative cursor-pointer" onClick={onClick}>
            {/* <div className="absolute top-0 left-0 h-full w-full bg-white/20 blur-sm"></div> */}
            <img
              src={cover ? cover : defaultBg}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Card Image"
            />
          </div>
          <div className="flex flex-1 flex-col pl-8 ">
            <div className="flex-1 w-full h-32 pt-8">
              <Typography.Title level={3} className="text-xl font-semibold mb-2">
                {title}
              </Typography.Title>
            </div>
            <div className="flex-1 w-full">
              <p style={{ color: token.colorTextDescription }}>{summary}</p>
            </div>
            <div className="flex-1 w-full">
              <p style={{ color: token.colorTextDescription }}>{formatDate(time)}</p>
            </div>
            <div className="w-full h-16">
              <div className="flex space-x-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-blue-500">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="-z-10 absolute -inset-3 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div
          className="-z-10 absolute -inset-2 rounded-2xl"
          style={{ background: token.colorBgContainer }}></div> */}
      </div>
    </Tooltip>
  )
}

export default MyCard
