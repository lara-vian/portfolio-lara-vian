import styled from "styled-components";

export const Background = styled.div`
	background-color: ${props=>props.theme.preto};
	height: 100vh;
	width: 100vw;
`
export const NavBar = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	height: 12.5%;
	width: 100%;
	background-color: ${props=>props.theme.preto};
	border-bottom: 0.15rem solid ${props=>props.theme.roxo};
`
export const Button = styled.button`
	margin: 0.5em;
	padding: 0.5rem;
	font-size: 2em;
	color: ${props=>props.theme.branco};
	border: 0.15rem solid ${props=>props.theme.roxo};
	background: transparent;
	text-decoration: none;
	&:hover{
		color: ${props=>props.theme.preto};
		background-color: ${props=>props.theme.roxo};
		transition: all .5s;
		}

`