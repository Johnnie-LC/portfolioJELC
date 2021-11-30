import styled from 'styled-components'

const JobDescriptionStyles = styled.section`
  width: 100%;
  background-color: ${(props) => props.bgColor};

  display: flex;
  align-items: center;
  justify-content: center;

  .containerDescription {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 30px 60px;
    max-width: 820px;
    margin: 0 auto;
    & .sideLeft {
      flex: 1;
      color: white;
      text-align: end;
      h2 {
        padding: 15px 0;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
      }
      p {
        padding: 15px 0;
      }
    }
    & .sideRight {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        background-image: rgb(0, 0, 0);
        background-color: rgb(0, 0, 0);
        border-radius: 50%;
        width: 200px;
        height: 200px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0px 10px 13px -7px #000000;
      }
    }
  }
  @media (max-width: 550px) {
    .containerDescription {
      flex-direction: column-reverse;
      & .sideLeft {
        text-align: center;
      }
      & .sideRight {
        padding-bottom: 10px;
      }
    }
  }
  @media (min-width: 736px) {
    .containerDescription {
      font-size: 1.2rem;
      max-width: 1000px;
      & .sideRight {
        padding-left: 20px;
        img {
          width: 300px;
          height: 300px;
        }
      }
    }
  }
  @media (min-width: 800px) {
    .containerDescription {
      /* padding: 60px 60px; */
      & .sideLeft {
        flex: 2;
      }
      & .sideRight {
        flex: 1;
      }
    }
  }
`

export { JobDescriptionStyles }
