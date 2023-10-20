import styled from "styled-components";

export const Background = styled.div`
	background-color: ${props=>props.theme.preto};
	height: 100vh;
	width: 100vw;
	overflow-x: hidden;
	overflow-y: scroll;
`
export const NavBar = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	height: auto;
	width: 100%;
	background-color: ${props=>props.theme.preto};
	border-bottom: 0.15rem solid ${props=>props.theme.roxo};
`
export const Button = styled.button<{$active:boolean}>`
	display: inline-block;
	margin: 1rem 0.5rem 0.5rem 1rem;
	padding: 0.9rem 1.8rem;
	font-size: 1.5rem;
	color: ${props=> props.$active ? props.theme.preto : props.theme.branco};
	border: 3px solid ${props=> props.theme.roxo};
	cursor: pointer;
	position: relative;
	background-color: ${props=> props.$active ? props.theme.roxo : "transparent"};
	text-decoration: none;
	overflow: hidden;
	z-index: 1;
	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: ${props=> props.theme.roxo};
		transform: translateX(-100%);
		transition: all .3s;
		z-index: -1;
	}
	
	&:hover::before {
		transform: translateX(0);
	}
	&:hover{
		color: ${props=> props.theme.preto};
	}
`
export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: end;
	text-align: center;
	border-top: 0.15rem solid ${props=>props.theme.roxo};
	color: ${props=>props.theme.branco};
	font-size: 1rem;
`