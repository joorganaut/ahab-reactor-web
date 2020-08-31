import styled from 'styled-components/macro';

export const PagerContainer = styled.div`
position: fixed;
top: 90%;
left: 10%;
color: ${props => props.theme.colors.white};
width: 60%;
left: 20%;
height: 40px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
background-color: ${props => props.theme.colors.background};
/* background-image: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.banner2}); */
/* opacity: 85%; */
border-radius: 6px;
`
export const PagerButtonContainer = styled.div`
padding: 5px 5px;
width: auto;
height: 40px;
display: grid;
font-size: 20px;
grid-template-columns: 1fr 1fr 1fr 1fr;
cursor: pointer;
text-align: center;
`

export const PagerSortContainer = styled.div`
padding: 5px 5px;
width: auto;
height: 40px;
display: grid;
font-size: 20px;
grid-template-columns: 1fr 1fr;
cursor: pointer;
text-align: center;
`
export const PagerButton = styled.span<{ disabled?: boolean }>`
 display: block;
 height: 25px;
  color: ${props => props.theme.colors.banner1};
  align-self: center;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0;
  text-decoration: none;
  border: solid;
  border-width: 1px;
  font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    font-size: .7em;
    font-weight: 900;
//   background-image: url('/icons/gb/previous.svg');
//   background-size: 100%;
  border-radius: 3px;
  border-color: ${props=>props.theme.colors.compliment};
  margin-right: 5px;
  background-color: ${props => props.disabled ? props.theme.colors.border : props.theme.colors.white};
  &:hover{
    background-color: ${props => props.disabled ? props.theme.colors.border : props.theme.colors.banner2};
  }
  &:click{
      pointer-events: ${props=> props.disabled ? 'none' : '' };
  }
`


export const PagerDirectionButton = styled.span<{ disabled?: boolean }>`
 display: block;
 height: 25px;
  color: ${props => props.theme.colors.banner1};
  align-self: center;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0;
  text-decoration: none;
  border: solid;
  border-width: 1px;
  font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    font-size: .7em;
    font-weight: 900;
//   background-image: url('/icons/gb/previous.svg');
//   background-size: 100%;
  border-radius: 3px;
  border-color: ${props=>props.theme.colors.compliment};
  margin-right: 5px;
  width: 40px;
  background-color: ${props => props.disabled ? props.theme.colors.border : props.theme.colors.white};
  &:hover{
    background-color: ${props => props.disabled ? props.theme.colors.border : props.theme.colors.banner2};
  }
  &:click{
      pointer-events: ${props=> props.disabled ? 'none' : '' };
  }
`
export const PagerSelectOption = styled.option`

`

export const PagerSelect = styled.select<{ disabled?: boolean }>`
 display: block;
 height: 25px;
  color: ${props => props.theme.colors.banner1};
  align-self: center;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0;
  text-decoration: none;
  border: solid;
  border-width: 1px;
  font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    font-size: .7em;
    font-weight: 900;
//   background-image: url('/icons/gb/previous.svg');
//   background-size: 100%;
  border-radius: 3px;
  border-color: ${props=>props.theme.colors.compliment};
  margin-right: 5px;
  background-color: ${props => props.disabled ? props.theme.colors.border : props.theme.colors.white};
  &:hover{
    background-color: ${props => props.disabled ? props.theme.colors.border : props.theme.colors.white};
  }
`

export const Count = styled.span`
display: block;
text-align: start;
 height: 25px;
  color: ${props => props.theme.colors.banner1};
  align-self: center;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0;
  text-decoration: none;
  border: solid;
  border-width: 1px;
  font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    font-size: .7em;
    font-weight: 900;
/* //   background-image: url('/icons/gb/previous.svg');
//   background-size: 100%; */
  border-radius: 3px;
  border-color: ${props=>props.theme.colors.compliment};
  margin-right: 5px;
  background-color: ${props => props.theme.colors.white};
  &:hover{
    background-color: ${props => props.theme.colors.banner2};
  }
`
export const PageSize = styled.span`
text-align: end;
display: block;
 height: 25px;
  color: ${props => props.theme.colors.banner1};
  align-self: center;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0;
  text-decoration: none;
  border: solid;
  border-width: 1px;
  font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    font-size: .7em;
    font-weight: 900;
/* //   background-image: url('/icons/gb/previous.svg');
//   background-size: 100%; */
  border-radius: 3px;
  border-color: ${props=>props.theme.colors.compliment};
  margin-right: 5px;
  background-color: ${props=> props.theme.colors.white};
  &:hover{
    background-color: ${props => props.theme.colors.banner2};
  }
`
export const PageNumber = styled.span`
text-align: center;
display: block;
 height: 25px;
  color: ${props => props.theme.colors.banner1};
  align-self: center;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 0;
  text-decoration: none;
  border: solid;
  border-width: 1px;
  font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    font-size: .7em;
    font-weight: 900;
/* //   background-image: url('/icons/gb/previous.svg');
//   background-size: 100%; */
  border-radius: 3px;
  border-color: ${props=>props.theme.colors.compliment};
  margin-right: 5px;
  background-color: ${props => props.theme.colors.white};
  &:hover{
    background-color: ${props => props.theme.colors.banner2};
  }
`