import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px 'Overpass Mono', monospace;
  }

  

      #reduce {
        right: 50px;
        position: absolute;
      }

      

  @media (max-width: 768px) {


    @media (min-height: 780px) {
        
      }


    #reduce {
      width: 40px;
      right: 10px;
      bottom: 0px;
    }
  }
  #responsive {
    #reduce1 {
      width: 170px;
      margin-top: 80px;
    }



    @media (max-width: 768px) {
      img {
        margin-top: 85px;
        width: 100px;
      }

    }

    @media (max-height: 812px) {
      img {
        margin-top: 105px;
        width: 100px;
      }

      @media (max-width:377px) {
        #reduce1 {
        width: 140px;
        margin-top:20px;
        }
        #reduce {
          margin-top:-30px;
        }
      }

    }
  }
`
