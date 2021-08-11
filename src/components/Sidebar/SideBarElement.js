import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  display: none;

  @media screen and (max-width: 760px) {
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top:${({ isOpen }) => (isOpen ? "0" : "-100%")};
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.3rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;


export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;


export const SidebarLink = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #fff;
    
    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarBtnWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    position: fixed;
    transform: translate(0%,-100%);
    background: #01bf71;
    white-space: nowrap;
    padding: 14px 45px;
    color:#010606;
    font-size: 1.2rem;
    outline: none;
    border: none;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    
    text-decoration: none;

    &:hover {
        transition: 0.2s all ease-in-out;
        color: #010606;
        background: #01bf71;
    }
`;