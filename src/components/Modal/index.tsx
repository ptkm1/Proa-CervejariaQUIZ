import Link from 'next/link';
import React from 'react';

import { Container } from './Styles';

interface Props {
  children?: any
  title?: string
  description?: string | null
  img?: string | null
  url?: string | null
}

const Modal: React.FC<Props> = ({children, title, description, img, url}) => {
  return (
    <Container>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href={url}>Comprar</Link>
    </Container>
  )
}

export default Modal;