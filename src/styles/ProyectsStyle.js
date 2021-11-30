import styled from 'styled-components'

const ProyectsStyle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.inputColor};
  color: white;
  .containerProjects {
    width: 100%;
    padding: 30px 60px;
    max-width: 820px;
    background: ${(props) => props.inputColor};

    h2 {
      padding-bottom: 14px;
      font-size: 2.2rem;
      font-weight: normal;
      border-bottom: solid 3px rgba(255, 255, 255, 0.125);
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    p {
      padding: 20px 0;
      color: rgb(164, 168, 175);
    }
    .containerProject {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 736px) {
    .containerProjects {
      h2 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }

  @media (min-width: 736px) {
    .containerProjects {
      padding: 120px 60px;
      max-width: 1000px;
      h2 {
        font-size: 2.8rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
`
export { ProyectsStyle }
