import React, { useEffect, useRef } from 'react';
import { Square, Toasty, Toasty1 } from '../styles/pages/Cerveja';
import { MobileAngel } from '../styles/pages/Home';
import SleepAngel from '../assets/svgs/sleepangel.svg'

interface Props {
  style?: string | any
}

const ToastComponent: React.FC<Props> = ({children, ...rest}: any) => {

  const toasty = useRef<HTMLDivElement>()
  const toastysquare = useRef<HTMLDivElement>()

  // useEffect(()=>{ 
 
  //     setTimeout(()=>{
  //       toasty.current.style.transition = '3s'
  //       toasty.current.style.opacity = '0'
  //       toastysquare.current.style.transition = '2s'
  //       toastysquare.current.style.opacity = '0'
  //     },5000)
    
  //  },[])

  return (
    <>
    <Toasty1 {...rest} ref={toasty}>
      {children}
    </Toasty1>
    <Square ref={toastysquare}></Square>

    <MobileAngel id="angelBG">
      <SleepAngel />
    </MobileAngel>
    </>
  )
}

export default ToastComponent;