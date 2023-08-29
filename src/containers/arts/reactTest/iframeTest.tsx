import React, { useRef } from 'react'

const App = () => {
  const ref = useRef<HTMLIFrameElement>()
  const msg = () => {
    if (ref.current) {
      const iframeWindow = ref.current.contentWindow
      iframeWindow.postMessage({ msg: '111' })
    }
  }
  // return <iframe ref={ref} src="http://127.0.0.1:5500/iframe/test.html" onLoad={msg}></iframe>
  return <div></div>
}

export default App
