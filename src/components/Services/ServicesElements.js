import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #010606;

  @media screen and (max-width: 928px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1400px;
    margin-top: 8rem;
  }

  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 26px;
  padding: 0px 40px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen  and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  height: 350px;
  padding: 30px;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background: #01bf71;
    color: #fff;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    &:hover {
      transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    }
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.6rem;
  color: #fff;
  margin-bottom: 50px;

  @media screen and (max-widht: 480px) {
    font-size: 2rem;
  }
`;


export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;