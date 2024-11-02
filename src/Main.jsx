import React from 'react'
import "./assets/css/custom.css"
import "./assets/js/custom.js"
import Intro from './layouts/Intro'
import CardBox from './components/CardBox'
import Backdrop from './components/Backdrop.jsx'

const Main = () => {
  return (
        <>
            <Intro/>
            <CardBox/>
           <Backdrop/>
        </>
  )
}

export default Main