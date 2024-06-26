import styled from 'styled-components';

export const ImageEvent = styled.img`
    display: block;
    width: 272px;
    height: 336px;
    position: relative;
    border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: none;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 332px;
  }
   
   @media screen and (min-width: 1280px) {
    width: 302px;
  }
`;

export const WrapCategory = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: absolute; */
    top: 12px;
    left: 12px;

`;

export const CategoryEvent = styled.p`
font-family:'Poppins';
font-size: 14px;
  line-height: 20px;
  display: block;
  margin-right:10px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  font-weight: 600;
  text-align: center;
  color: #7b61ff;

`;

export const PriorityEvent = styled.p`
    font-family:'Poppins';
font-size: 14px;
  line-height: 20px;
  display: block;
  margin-right:10px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  font-weight: 600;
  text-align: center;
  color: #7b61ff;
`;

export const WrapDate = styled.div`
/* position: absolute; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 144px;
  left: 0;
  margin: 0;
  /* font-weight: 700;
  line-height: 1.14;
  text-align: center;
  text-transform: uppercase; */
  color: #fff;
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  @media screen and (min-width: 768px) {
    bottom: 104px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 104px;
  }
`;

export const DateEvent = styled.p`
    font-size: 12px;
  line-height: 26px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const LocationEvent = styled.p`
    font-size: 12px;
  line-height: 26px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
`;

export const TitleEvent = styled.h3`
 font-family:'Poppins';
 font-weight: 600;
    font-size: 16px;
  line-height: 24px;
  margin-top: 15px;
  color: #1c1b1f;
`;

export const TextEvent = styled.p`
    font-size: 14px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top:15px;
  color: #49454f;
`;

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  grid-gap: 16px;
  grid-column-gap: 0px;
margin-top: 50px;
margin-bottom: 50px;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;

@media screen and (min-width: 768px) {
  width: 768px;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));

}

@media screen and (min-width: 1280px) {
  width: 1280px;
}

`;

export const ListItem = styled.ul`
  

`;