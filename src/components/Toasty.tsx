import React, { useEffect, useRef } from 'react';
import { Square, Toasty, Toasty1 } from '../styles/pages/Cerveja';

const ToastComponent: React.FC = ({children, ...rest}: any) => {

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
    <Toasty1 ref={toasty}>
      {children}
    </Toasty1>
    <Square ref={toastysquare}></Square>
    </>
  )
}

export default ToastComponent;