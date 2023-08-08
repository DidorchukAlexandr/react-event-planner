import styled from 'styled-components';

export const Head = styled.div`
display: flex;
  background-color: #fefcff;
  padding: 25px 16px;
  width: 100vw;
  
  flex-direction: column;
  align-items: center;
  align-items: center;
   /* justify-content: space-between; */
  flex-wrap: wrap;
  border-bottom: 1px solid #7b61ff;
  @media screen and (min-width: 768px) {
    display: block;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    height: 100px;
    width: 100vw;
  }
`;

export const Logo = styled.p`
    font-family: Alata;
    font-weight: 400;
    font-size: 24px;
    color: #7B61FF;
    margin-right: auto;
    cursor: pointer;
    &:hover,
    &:focus {
        
font-size: 25px;
color: #745fdf;
transition: all 0.3s linear, opacity 0.3s ease-in-out;
    }
`;

export const Wraper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

/* .header {

width: 1440px;
border: 0px,0px,1px,0px;
border-color: #7B61FF;
background-color: #FEFCFF;
padding: 30px 0;
}

.container {
    width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.title {
    font-size: Alata;
    font-weight: 400;
    font-size: 24px;
    color: #7B61FF;
}
.root {
    margin-right: auto;
} */
