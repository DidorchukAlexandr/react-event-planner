import styled from 'styled-components';

export const Wr = styled.div`
    position: relative;
`;

export const Span = styled.span`
    display: inline-block;
        background-color: FFFFFF;
        border-radius: 10px;
        padding: 12px 12px;
        min-width: 69px;
        height: 48px;
         margin-left: 20px;
        text-align: start;
       font-size: 16px;
  font-weight: 500;
  line-height: 1;
    border: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
        box-shadow: 2px 4px 9px 0px #A68DAE47;
        transition: all 0.5s linear, opacity 0.5s ease-in-out;

        &:hover,
        &:focus {
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 4px 9px 0px #332b3646;
        transition: all 0.2s linear, opacity 0.2s ease-in-out;
        }
`;

export const Sort = styled.div`
/* display: inline-block; */
 margin-left: 20px;
        background-color: FFFFFF;
        border-radius: 10px;
        padding: 10px 12px;
        min-width: 69px;
        height: 68px;
        text-align: center;
        font-weight: 500;
    border: 0;
    box-shadow: 2px 4px 9px 0px #A68DAE47;
    position: absolute;
    cursor: pointer;
    transition: all 0.5s linear, opacity 0.5s ease-in-out;
    
`;

export const LangItem = styled.li`
 width: 100%;
    color: #aca7c3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  align-content: center;
   text-align: start;
  padding-bottom: 4px;
  border-bottom: 1px solid #aca7c3;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* padding: 0 12px; */
`


// export const Svg = styled.icon`
//     position: absolute;
//     left: 60px;
//     top: 20px;
// `;

/* .root {
    position: relative;
}

.span {
    display: inline-block;
        background-color: FFFFFF;
        border-radius: 10px;
        padding: 10px 20px;
        min-width: 69px;
        height: 48px;
        text-align: start;
        font-weight: 500;
    border: 0;
        cursor: pointer;
        box-shadow: 2px 4px 9px 0px #A68DAE47;
}

.icon {
    
    opacity: 0.5;
    position: absolute;
    left: 60px;
    top: 20px;
} */