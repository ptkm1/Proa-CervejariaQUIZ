import React, { useEffect, useRef } from 'react'
import {
  Balloon,
  ContainerToast,
  Square,
  Toasty,
  Toasty1
} from '../styles/pages/Cerveja'
import { MobileAngel } from '../styles/pages/Home'
import SleepAngel from '../assets/svgs/sleepangel.svg'

interface Props {
  style?: string | any
}

const ToastComponent: React.FC<Props> = ({ children, ...rest }: any) => {
  return (
    <ContainerToast>
      <Balloon>
        <Toasty1 {...rest}>{children}</Toasty1>
        <Square></Square>
      </Balloon>

      <MobileAngel id="angelBG">
        <SleepAngel />
      </MobileAngel>
    </ContainerToast>
  )
}

export default ToastComponent
