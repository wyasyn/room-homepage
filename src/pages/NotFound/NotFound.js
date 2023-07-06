import React from 'react'
import './NotFound.scss'
import { motion } from "framer-motion"

function NotFound() {

  const myVariant = {
   visible: {
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 30,
      delay: 0.3,
      when: "beforeChildren",
    }
   },
   hidden: {
    y: -700,
    scale: .2,
   }
  }

  const myBoxVariant = {
   visible: {
    opacity: 1,
    staggerChildren: .2,
   },
   hidden: {
    opacity:0,
   }
  }



  return (
    <div className='not-found'>
      <div className="not-found-container">
        <motion.div 
            className="square"
            variants={myVariant}
            initial="hidden"
            animate="visible"

            >

              {[1,2,3,4].map(box => (
                <motion.div 
                className='box'
                variants={myBoxVariant}
                ></motion.div>
              ))}

        </motion.div>
        <p>Page Not Found!</p>
      </div>
    </div>
  )
}

export default NotFound