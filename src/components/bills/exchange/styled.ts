import styled from 'styled-components/macro';
import Modal from 'styled-react-modal';
import Form from '../../common/form/form';
import SocialTable from '../../common/table/socialTable'
import detailForm from '../../common/form/detailForm';
import { ActivityIndicator } from '../../common/loader/activityIndicator';

export const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalBody = styled.div<{ size: string | null, fadeType: string | null }>`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
transition: opacity linear 0.15s;
z-index: 2000;
height: 650px;
width: ${props => {
        switch (props.size) {
            case "lg":
                return "800";
            default:
                return "480";
        }
    }}px;
margin: 40px auto;
&.fade-in {
  opacity: 1;
  transition: opacity linear 0.15s;
}
&.fade-out {
  opacity: 0;
  transition: opacity linear 0.15s;
}
.background {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1040;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 0;
}
.box-dialog {    
border-radius: 6px 6px 6px 6px;
  z-index: 1050;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  .box-content {
    padding: 24px;
    width: 100%;
  }
  .box-header {
    height: 48px;
    padding: 8px 24px;
    color: ${props => props.theme.colors.banner1};
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    .box-title {
      font-size: 24px;
      font-weight: bold;
      margin: 0 0 0 0;
    }
    .x-close {
      font-size: 35px;
      line-height: 35px;
      font-weight: bold;
      text-shadow: none;
      color: black;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  .box-body {
    font-size: 14px;
    padding: 0px;
    width: auto;
    height: auto;
  }
  .box-footer {
    height: 48px;
    padding: 0px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid ${props => props.theme.colors.border};
  }
}
  opacity: ${props => {
        switch (props.fadeType) {
            case "in":
                return "1";
            default:
                return "0";
        };
    }};
  transition: ${props => {
        switch (props.fadeType) {
            case "in":
                return `opacity linear 0.25s;`;
            case "out":
                return `opacity linear 0.25s;`;
            default:
                return "";
        }
    }};
`
export const SpecialModalBackground = styled.div<{ opacity?: string }>`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  opacity: ${props => props.opacity ? props.opacity : '50%'};
  background-color: white;
`
export const Content = styled.div`
display: grid;
grid-template-rows: 1fr 10fr 1fr;
grid-column-gap: 5px;
position: relative;
margin: 20px;
height: 100%;
justify-items: center;
`
export const ToolBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 50%;
    background-image: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.banner2});
    height: 40px;
    align-content: center;
    align-items: center;
    /* left: 20%; */
    position: relative;
    border-radius: 5px;
`
export const SearchForm = styled.form``
export const SearchInput = styled.input`
position: relative;
border: solid;
border-color: ${props => props.theme.colors.compliment};
border-radius: 3px;
border-width: 1px;
color: ${props => props.theme.colors.banner2};
top: 10px;
right: 100px;
padding-left: 20px;
/* width: 100%;
  padding: 10px;
  outline: none; */
/* * {box-sizing: border-box;} */

box-sizing: border-box;

&:focus {
  border: 2px solid ${props => props.theme.colors.banner2};
}
&:focus::placeholder {
  color: transparent;
}
`
export const SearchContainer = styled.div`
 display: flex;
  /* width: 100%; */
  box-sizing: border-box;
  margin-bottom: 15px;
`
export const SearchIcon = styled.i`
position: relative;
box-sizing: border-box;
border-radius: 2px 0 0 2px;
z-index: 30;
top: 10px;
right: 80px;
 padding: 10px;
  background: ${props => props.theme.colors.banner2};
  color: white;
  min-width: 0px;
  text-align: center;
    background-image: url('/icons/gb/search.svg');
    background-repeat: no-repeat;
`
export const ToolBarItem = styled.li<{ float?: 'left' | 'right' | 'center' }>`
float: ${props => props.float ? props.float : 'left'};
width: 50px;
height: 10px;
`
export const ToolBarButton = styled.a`
    display: block;
  color: white;
  text-align: center;
  padding: 5px 16px;
  text-decoration: none;
  &:hover{
    background-color: ${props => props.theme.colors.primary};
  }
`
export const ToolBarButtonIcon = styled.div<{ name: string }>`
   background-image: ${props => `url(/icons/gb/${props.name}.svg)`};
   position: relative;
   height: 30px;
   width: 30px;
   border: solid;
   fill: ${props => props.theme.colors.white};
   border-color: ${props => props.theme.colors.compliment};
`

export const AddExchangeForm = styled(Form)`
color: ${props => props.theme.colors.primary};
`
export const ExchangeDetailForm = styled(detailForm)`
color: ${props => props.theme.colors.primary};
`
export const AllExchangesGridTable = styled(SocialTable)`
color: ${props => props.theme.colors.primary};
`
export const AddExchangeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin: 0px 20px 0px 20px;
    `
export const AllExchangesWrapper = styled.div`
margin: 0px 20px 0px 20px;
position: relative;
overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
height: 100%;
width: 80%;
padding: 10px;
/* background-color: none;${props=> props.theme.colors.background}; */
`
export const ActivityIndicatorStyled = styled(ActivityIndicator)``