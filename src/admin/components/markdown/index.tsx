import React, { useEffect } from 'react'
import { Editor, Viewer } from '@bytemd/react'
import type { EditorProps, ViewerProps } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import frontmatter from '@bytemd/plugin-frontmatter'
import gemoji from '@bytemd/plugin-gemoji'
import breaks from '@bytemd/plugin-breaks'
import 'bytemd/dist/index.css'
import lightStyles from './light.module.css'
import 'highlight.js/styles/atom-one-dark.css'
import darkStyles from './dark.module.css'
// import 'juejin-markdown-themes/dist/juejin.min.css'
import { useTheme } from '@src/theme'

const ThemeContainer = ({ children }) => {
  const { isDark } = useTheme()
  lightStyles
  console.log(`🚀 -> ThemeContainer -> lightStyles:`, lightStyles)
  console.log(`🚀 -> ThemeContainer -> darkStyles:`, darkStyles)

  return (
    // <div>
    <div className={isDark ? darkStyles['markdown-body'] : lightStyles['markdown-body']}>
      {children}
    </div>
  )
}

export const MDEditor = (props: EditorProps) => {
  const plugins = [gfm(), highlight(), frontmatter(), gemoji(), breaks()]
  return (
    <ThemeContainer>
      <Editor {...props} plugins={plugins} />
    </ThemeContainer>
  )
}

export const MDViewer = (props: ViewerProps) => {
  const plugins = [gfm(), highlight(), frontmatter(), gemoji(), breaks()]

  // return <Viewer {...props} plugins={plugins} />
  return (
    <ThemeContainer>
      <Viewer {...props} plugins={plugins} />
    </ThemeContainer>
  )
}
