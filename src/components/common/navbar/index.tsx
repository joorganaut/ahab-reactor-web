import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Brand from "./brand";
import CollapseMenu from "./collapseMenu";
import { Button } from '../button';
import useI18n from '../../../hooks/useI18n';
import { useHistory } from 'react-router-dom';
import { NameLabel } from '../label';
import DialogNotification from '../notification/dialogNotification'




const Navbar = (props: any) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });
  const { t } = useI18n();
  const history = useHistory();
  const onLogout = (e: any): void => {

    history.push('/')
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const alert = (title: string, message: string, type: 'info' | 'success' | 'error', callback?: ()=>void) => {
    const button = [{
        label: 'Ok',
        onClick: callback ? callback : () =>{}
    }]
    return DialogNotification(title, message, button, true, type)
  }
  const confirm = (callback: (e?: any)=>void) => {
    const buttons = [
        {
            label: 'Ok',
            onClick: callback
        },
        {
            label: 'Cancel',
            onClick: ()=>{}
        }
    ]
    return DialogNotification("Confirm", 'Are you sure?', buttons, true, 'info')
  }
  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
              <NameLabel Title={`Hi, ${props.name}`} />
            <Button type={'outline'} onClick={(e: any)=>{ confirm(() => {onLogout(e)})}}>
              {t('nav.logout')}
            </Button>
            <Flag src={'/assets/Canada.svg.png'} />
          </NavLinks>
          {/* <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper> */}
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  )
}

export default Navbar
const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 50px;
  left: 0;
  /* background: #2d3436; */
  /* background-image: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.banner2}); */
  background-color: ${props => props.theme.colors.white};
  z-index: 1;
  font-size: 1rem;
`;


const Flag = styled.img`
position: relative;
top: 5px;
height: 20px;
width: 30px;
margin: 0px 10px 0 20px;
border: solid;
border-width: 1px;
border-color: ${props => props.theme.colors.compliment};
border-radius: 3px;
background-image: url('/assets/Canada.svg.png');
`
const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

// const BurgerWrapper = styled.div`
//   margin: auto 0;

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;