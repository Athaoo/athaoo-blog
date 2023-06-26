import React, { useEffect, createContext, useContext, useState } from 'react'
import { Card, Col, Menu, MenuProps, Row, theme, Divider } from 'antd'
import { ReactChildrenProps } from '@src/types/types'

type SonProps = {
  name: string
  age: number
  school?: string
} & ReactChildrenProps

type GSonProps = SonProps & {
  address: string
} & ReactChildrenProps

type ParentProps = {
  name: string
  theme: 'white' | 'black'
} & ReactChildrenProps

type NameContext = {
  firstName: string
  change: (name: string) => void
}

const Ctx = createContext<NameContext>({
  firstName: 'name1',
  change: (name: string) => {
    null
  },
})

const useNameCtx = () => useContext(Ctx)

const Pa = ({ name, theme, children }: ParentProps) => {
  const { firstName } = useNameCtx()
  useEffect(() => {
    console.log(`Parent render`)
  }, [])
  return (
    <Card>
      爷爷:
      <div>
        姓名{firstName}
        {name}
      </div>
      <div>主题{theme}</div>
      <Divider />
      {children}
    </Card>
  )
}
const Son = ({ name, age, school, children }: SonProps) => {
  const { firstName } = useNameCtx()
  useEffect(() => {
    console.log(`Son render`)
  }, [])
  return (
    <Card>
      爹:
      <div>
        姓名{firstName}
        {name}
      </div>
      <div>年龄{age}</div>
      {school ? <div>学校{school}</div> : null}
      <Divider />
      {children}
    </Card>
  )
}
const Gson = ({ name, age, school, address }: GSonProps) => {
  const { firstName } = useNameCtx()
  useEffect(() => {
    console.log(`GSon render`)
  }, [])
  return (
    <Card>
      笋子:
      <div>
        姓名{firstName}
        {name}
      </div>
      <div>年龄{age}</div>
      {school ? <div>学校{school}</div> : null}
      {address ? <div>学校{address}</div> : null}
      <div>主题{name}</div>
      <Divider />
    </Card>
  )
}

const App = () => {
  const [firstName, setFirstName] = useState('赵')
  useEffect(() => {
    console.log(`App render`)
  }, [])

  const changeFirstName = (firstName: string) => setFirstName(firstName)
  return (
    <Ctx.Provider value={{ firstName: firstName, change: changeFirstName }}>
      <Pa name="爷爷" theme="white">
        <Son name="爹" age={25} school={'家里蹲'}>
          <Gson name="笋子" age={25} school={'科比烧烤'} address={'沈阳大街'}></Gson>
        </Son>
      </Pa>
    </Ctx.Provider>
  )
}

export default App
