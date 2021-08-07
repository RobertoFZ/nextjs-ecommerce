import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  // Animation
  @-webkit-keyframes GradientAnimation {
    0% {
      background-position: 0% 97%;
    }
    50% {
      background-position: 100% 4%;
    }
    100% {
      background-position: 0% 97%;
    }
  }
  @-moz-keyframes GradientAnimation {
    0% {
      background-position: 0% 97%;
    }
    50% {
      background-position: 100% 4%;
    }
    100% {
      background-position: 0% 97%;
    }
  }
  @-o-keyframes GradientAnimation {
    0% {
      background-position: 0% 97%;
    }
    50% {
      background-position: 100% 4%;
    }
    100% {
      background-position: 0% 97%;
    }
  }
  @keyframes GradientAnimation {
    0% {
      background-position: 0% 97%;
    }
    50% {
      background-position: 100% 4%;
    }
    100% {
      background-position: 0% 97%;
    }
  }

`
