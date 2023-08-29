import React from 'react'
import { Editor, Viewer } from '@bytemd/react'
import type { EditorProps, ViewerProps } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import frontmatter from '@bytemd/plugin-frontmatter'
import gemoji from '@bytemd/plugin-gemoji'
import breaks from '@bytemd/plugin-breaks'
import 'bytemd/dist/index.css'
import 'highlight.js/styles/atom-one-dark.css'

const plugins0 = [gfm(), highlight(), frontmatter(), gemoji(), breaks()]
const plugins1 = [gfm(), highlight(), frontmatter(), gemoji()]
const plugins2 = [gfm(), highlight(), frontmatter()]
const plugins3 = [gfm(), highlight()]
const plugins4 = [gfm(), frontmatter(), breaks()]
const plugins5 = [frontmatter(), breaks()]

const plugins = plugins0

export const MDEditor = (props: EditorProps) => {
  return <Editor {...props} plugins={plugins} />
}

export const MDViewer = (props: ViewerProps) => {
  return <Viewer {...props} plugins={plugins} />
}
