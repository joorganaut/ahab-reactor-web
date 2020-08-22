import styled from 'styled-components/macro';
export const Banner = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 50px;
width: 100%;
/* margin: 20px; */
padding-right: 20px;
padding-top: 6px;
background-image: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.banner2});
text-align: end;
align-items: center;
color: ${props => props.theme.colors.white};
font-size: 12px;
`

export const BannerChild = styled.div<{ textAlign: 'start' | 'end' }>`
text-align: ${props => props.textAlign};
`
export const Link = styled.a`
color: ${props => props.theme.colors.white};
text-decoration: none;
`
export const ContentWrapper = styled.div<{bg?: string}>`
position: relative;
height: auto;
top: 50px;
margin: 20px;
padding: 20px;
background-color: ${props => props.theme.colors.background};
background-repeat: no-repeat;
background-size: cover;
background-image: ${props => props.bg ? `url(${props.bg})` : `url('/assets/search-bg.jpg')`};
opacity: 100%
`
export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 0px;
position: relative;
margin: 20px;
`
export const Card = styled.div<{ image?: string }>`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
height: 240px;
width: 400px;
border: solid;
border-width: 0px;
border-radius: 10px;
border-color: ${props => props.theme.colors.border};
/* background-color: ${props => props.theme.colors.white}; */
animation: dashboard--card 900ms ease-in;
transition: 300ms ease-in;
transition-property: bottom, box-shadow;
background-color: #cccccc; /* Used if the image is unavailable */
// height: 100%; /* You must set a specified height */
background-position: center; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */
background-size: cover; /* Resize the background image to cover the entire container */
background-image:${props => props.image ? `url(${props.image})` : '-webkit-linear-gradient(-45deg, #ffffff 0, #ffffff 58%, #f5f5f5 68%, #ddd 100%) !important'};
`
export const CardTitle = styled.div<{ color?: string }>`
text-align: center;
font-size: 1em;
color: ${props => props.color ? props.color : props.theme.colors.banner1};
font-weight: 600;
padding: 7px 0 3px 0;
`
export const CardContent = styled.div`
width: 100%;
left: 0%;
text-align: center;
/* position: relative; */
top: 0px;
`

export const CardContentGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: 5px;
width: 100%;
height: 70%;
left: 0%;
text-align: center;
/* background-color: ${props => props.theme.colors.primary}; */
/* position: relative; */
padding: 10px;
top: 0px;
/* opacity: 70%; */
`
export const CardContentGridColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 10px;
  background-color: ${props => props.theme.colors.lightGrey};
  width: 100%;
  padding: 10px;
  height: auto;
`
export const CardContentGridColumnRow = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  height: 90%;
`
export const CardImage = styled.img`
width: 200px;
height: 150px;
/* background-color: ${props => props.theme.colors.white}; */
fill: ${props => props.theme.colors.white};
`
export const CardLink = styled.a<{full?: boolean}>`
height: 100%;
width: ${props => props.full ? '100%' : '70%'};
text-decoration: none;
&:hover {
   transform: scale(1.01); 
   transition: all .2s ease-in-out;
   /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
   }
`
export const SideNavMenu = styled.div`
width: 50px;
`

export const SideNavCloseButton = styled.button`
    position: relative;
    height: 25px;
    width: 25px;
    border: 0;
    background: none;
    box-shadow: none;
    cursor: pointer;
    /* border: solid;
    border-width: 1px;
    border-color: ${props => props.theme.colors.white};
    border-radius: 6px; */
    left: 40px;
    font-size: 10px;
    color: ${props => props.theme.colors.white};
    background-color: none;
    background-image: url('/icons/gb/cancel.svg')
    /* ${props => props.theme.colors.darkGrey}; */
`
export const SideNavOpenButton = styled.button`
    height: 20px;
    width: 20px;
    border: 0;
    background: none;
    box-shadow: none;
    border-radius: 0px;
`
export const SideNavOpenButtonIcon = styled.img`
    height: 40px;
    width: 40px;
`
export const SideNav = styled.div<{ open: boolean }>`
/* The sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 80px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  background-image: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.banner2});
  overflow-x: hidden; /* Disable horizontal scroll */
  overflow-y: hidden;
  padding-top: 20px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.colors.white};
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: ${props => props.theme.colors.compliment};
}
.sidenav a:active {
  border-left:4px solid #fff;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
`

export const SideNavMenuItem = styled.a`
display: grid;
grid-template-rows: 1fr 1fr;
/* background-color: #03567C; */
box-shadow: -2px 0px 10px 0px rgba(18, 67, 99, 0.51);
&:hover {
   transform: scale(1.1); 
   transition: all .2s ease-in-out;
   }
`
export const SideNavMenuItemIcon = styled.img`
  height: 50px;
  width: 50px;
  fill: white; 
`
export const SideNavMenuItemLabel = styled.span`
  font-size: 0.5rem;
`
