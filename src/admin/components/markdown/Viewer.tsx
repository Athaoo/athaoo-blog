import React, { useEffect } from 'react'
import { Editor, Viewer } from '@bytemd/react'
import type { EditorProps, ViewerProps } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import frontmatter from '@bytemd/plugin-frontmatter'
import gemoji from '@bytemd/plugin-gemoji'
import breaks from '@bytemd/plugin-breaks'
import 'bytemd/dist/index.css'
// import 'juejin-markdown-themes/dist/fancy.min.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'github-markdown-css/github-markdown-dark.css'
// import 'github-markdown-css/github-markdown-light.css'
import { useTheme } from '@src/theme'

export const MDViewer = (props: ViewerProps) => {
  const theme = useTheme()
  // todo 用theme.isDark动态区分markdown明暗

  // useEffect(() => {
  //   if (theme.isDark) {
  //     import('@src/theme-dark.css')
  //   } else {
  //     import('@src/theme-light.css')
  //   }
  // }, [theme.isDark])

  const plugins = [gfm(), highlight(), frontmatter(), gemoji(), breaks()]
  return <Viewer {...props} plugins={plugins} />
}
