import styled from 'styled-components/macro';
import Modal from 'styled-react-modal';

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
grid-template-rows: 1fr 10fr;
grid-column-gap: 5px;
position: relative;
margin: 20px;
height: 60%;
justify-items: center;
`


export const StyledModal2 = styled.div<{size: string | null, fadeType: string | null}>`
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
  z-index: 1050;
  width: 100%;
  background-color: #fefefe;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  .box-content {
    padding: 24px;
    width: 100%;
  }
  .box-header {
    height: 48px;
    padding: 8px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c7c7c7;
    .box-title {
      font-size: 24px;
      font-weight: 400;
      margin: 0 0 0 0;
    }
    .x-close {
      font-size: 35px;
      line-height: 35px;
      font-weight: 400;
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
    border-top: 1px solid #c7c7c7;
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
`;
export default StyledModal;