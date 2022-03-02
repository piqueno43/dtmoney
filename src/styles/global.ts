import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
:root {
  --background: #F0F2F5;

  --text-body: #969CB3;
  --text-title: #363F5F;

  --shape: #FFFFFF;

  --red: #E62E4D;
  --green: #33CC95;

  --blue: #5429CC;
  --blue-light: #6933ff;

  --max-width: 1120px;

  --input-background: #e7e9ee;
  --input-border-color: #e7e9ee;

  --radius: 0.25rem;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* font-size: 16px; */

html {
  @media (max-width:1080px) {
    font-size: 93.75%; 
  }

  @media (max-width:720px) {
    font-size: 87.5%;
  }    
}

body {
  background-color: var(--background);
  --webkit-font-smoothing: antialiased
}

body, input, textarea, button {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 , strong {
  font-weight: 600;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal {
  &-overlay {
    background-color: rgba(0,0,0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  &-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;

    &:hover {
      filter:  brightness(0.9);
    }
  }
}
`