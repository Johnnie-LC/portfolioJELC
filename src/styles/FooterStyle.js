import styled from 'styled-components'

const FooterStyle = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.inputColor};
  color: white;
  .contactMe {
    width: 100%;
    padding: 30px 60px;
    max-width: 820px;
    h2 {
      padding-bottom: 14px;
      border-bottom: 3px solid rgba(255, 255, 255, 0.2);
    }
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 20px;
      li {
        margin: 0px 10px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 1.5rem;
      }
      a {
        width: 100%;
        text-decoration: none;
        color: white;
        padding: 10px 10px;
        border-radius: 10px;
        transition: 300ms ease-in-out all;
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
          /* border: 1px solid rgba(255, 255, 255, 0.2); */
        }
        i {
          transition: 300ms ease-in-out all;
        }

        &:hover i {
          transform: rotate(-360deg);
          color: rgba(255, 255, 0, 0.9);
        }
      }
    }
  }

  @media (max-width: 550px) {
    .contactMe {
      padding: 30px 60px;
      margin-bottom: 30px;
      li {
        width: 100%;
        padding: 0 !important;
        text-align: center;
        background-color: rgba(255, 255, 255, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-radius: 10px;
        font-size: 1.5rem;

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            margin-right: 10px;
          }
          &:hover {
            background-color: rgba(255, 255, 255, 0);
          }
        }
      }
    }
  }

  @media (min-width: 736px) {
    .contactMe {
      padding: 50px 60px;
      max-width: 1000px;
      h2 {
        font-size: 2.2rem;
      }
      li {
        font-size: 1.5rem;
      }
    }
  }
`

export { FooterStyle }
