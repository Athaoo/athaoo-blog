import React from 'react'
import { Editor, Viewer } from '@bytemd/react'
import type { EditorProps, ViewerProps } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import frontmatter from '@bytemd/plugin-frontmatter'
import gemoji from '@bytemd/plugin-gemoji'
import breaks from '@bytemd/plugin-breaks'
import 'bytemd/dist/index.css'
import 'juejin-markdown-themes/dist/condensed-night-purple.min.css'
import 'highlight.js/styles/atom-one-dark.css'
// import 'github-markdown-css/github-markdown-dark.css'
// import 'juejin-markdown-themes/dist/juejin.min.css'
import { useTheme } from '@src/theme'

export const MDEditor = (props: EditorProps) => {
  const plugins = [gfm(), highlight(), frontmatter(), gemoji(), breaks()]
  return <Editor {...props} plugins={plugins} />
}

export const MDViewer = (props: ViewerProps) => {
  const plugins = [gfm(), highlight(), frontmatter(), gemoji(), breaks()]
  return <Viewer {...props} plugins={plugins} />
}
