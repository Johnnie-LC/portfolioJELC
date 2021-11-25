import styled from 'styled-components'

const BannerStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(72, 77, 89);
  background: linear-gradient(
    180deg,
    rgba(72, 77, 89, 1) 0%,
    rgba(60, 67, 82, 1) 35%,
    ${(props) => props.inputColor} 100%
  );
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 60px;
    max-width: 820px;

    h2 {
      color: white;
      padding-bottom: 14px;
      font-size: 2.2rem;
      font-weight: normal;
      border-bottom: solid 3px rgba(255, 255, 255, 0.125);
      text-transform: uppercase;
      letter-spacing: 3px;
      & b {
        color: white;
      }
    }
    h3 {
      color: white;
      letter-spacing: 2px;
      font-size: 1.5rem;
      font-weight: normal;
    }
    p {
      padding: 14px 0;
      color: rgb(164, 168, 175);
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  @media (max-width: 736px) {
    div {
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.8rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
  @media (min-width: 736px) {
    div {
      padding: 120px 60px;
      max-width: 1000px;
      h2 {
        font-size: 2.8rem;
      }
      p {
        font-size: 1.2rem;
      }
      h3 {
        font-size: 1.8rem;
      }
    }
  }
`
export { BannerStyle }
