import React from 'react'
import InternetStatus from './Component/InternetStatus/InternetStatus'
import Editor from './Component/Editor/Editor'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='w-full h-screen bg-red-400 overflow-hidden'>
<InternetStatus />
<Header/>
{/* <Editor/> */}
<Main/>
{/* <Footer/> */}
      </div>
    </>
  )
}

export default App