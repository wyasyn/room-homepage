import React from 'react'
import {HomeOne} from "../../constants/Data";
import {Hero} from "../../components";

function Home() {
  return (
    <>
      <Hero
      {...HomeOne}
       />
    </>
  )
}

export default Home