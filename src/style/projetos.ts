import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { devices } from "./divices";

export const Container = styled.ul`
	height: auto;
	width: 95%;
	margin: 1.5%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	border: 0.15rem solid ${props=>props.theme.roxo};
`
export const Name = styled.div`
	height: auto;
	width: 95%;
	font-size: 2rem;
	color: ${props=>props.theme.branco};
	@media (max-width: ${devices.mobile.max}px){
		font-size: 1.5rem;
	}
`
export const HeaderContainer = styled.div`
	height: auto;
	width: 95%;
	margin-bottom: 2%;
	padding: 1%;
	border-bottom: 0.15rem solid ${props=>props.theme.roxo};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: end;
`
export const TitleContainer = styled.div`
	height: auto;
	width: 95%;
	display: flex;
	flex-direction: row;
`
export const Description = styled.div`
	height: auto;
	width: 95%;
	font-size: 1rem;
	color: ${props=>props.theme.branco};
	@media (max-width: ${devices.mobile.max}px){
		font-size: .75rem;
	}
`
export const TextContainer = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
	width: 95%;
	margin: 2%;
	padding: 2%;
	border: 0.15rem solid ${props=>props.theme.roxo};
`
export const Text = styled.p`
	font-size: 1.5rem;
	color: ${props=>props.theme.branco};
	@media (max-width: ${devices.mobile.max}px){
		font-size: .75rem;
	}
`
export const Img = styled.img`
	background-color: transparent;
	height: 20%;
	width: 20%;
	@media (max-width: ${devices.mobile.max}px){
		height: 50%;
		width: 50%;
	}
`
export const Button = styled.button`
	display: inline-block;
	margin: 1%;
	width: 40px;
	height: 30px;
	font-size: 1.5rem;
	border: 3px solid ${props=> props.theme.ciano};
	cursor: pointer;
	position: relative;
	background-color: transparent;
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
		background-color: ${props=> props.theme.ciano};
		transform: translateX(-100%);
		transition: all .3s;
		z-index: -1;
	}
	
	&:hover::before {
		transform: translateX(0);
	}
`
export const Icon = styled(FontAwesomeIcon)`
	color: ${props=> props.theme.branco};
	&:hover{
		color: ${props=> props.theme.preto};
	}
`