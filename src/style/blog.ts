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
export const Title = styled.div`
	height: auto;
	width: 95%;
	margin-bottom: 1%;
	font-size: 2rem;
	color: ${props=>props.theme.branco};
	@media (max-width: ${devices.mobile.max}px){
		font-size: 1rem;
	}
`
export const TitleContainer = styled.div`
	height: auto;
	width: 95%;
	margin-bottom: 1%;
	padding: 0.5%;
	border-bottom: 0.15rem solid ${props=>props.theme.roxo};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: end;
`
export const Data = styled.div`
	height: auto;
	width: 95%;
	margin-bottom: 1%;
	font-size: 1rem;
	color: ${props=>props.theme.ciano};
	@media (max-width: ${devices.mobile.max}px){
		font-size: .75rem;
	}
`
export const TextContainer = styled.li`
	height: auto;
	width: 95%;
	margin: 2%;
	padding: 2%;
	border: 0.15rem solid ${props=>props.theme.roxo};
`
export const Text = styled.p`
	font-size: 1.5rem;
	color: ${props=>props.theme.branco};
	@media (max-width: ${devices.mobile.max}px) {
		font-size: 0.75rem;
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
	width: 70px;
	height: 40px;
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
	@media (max-width: ${devices.mobile.max}px){
		width: 60px;
		height: 30px;
	}
`
export const Icon = styled(FontAwesomeIcon)`
	color: ${props=> props.theme.branco};
	&:hover{
		color: ${props=> props.theme.preto};
	}
`
export const Select = styled.select`
	height: auto;
	width: 30%;
  border: 0;
  outline: 0;
	margin: 1%;
	padding: 1%;
	font-size: 1.5rem;
	color: ${props=> props.theme.ciano};
	background-color: transparent;
	border: 5px solid ${props=> props.theme.ciano};
`
export const Option = styled.option`
	font-size: 1.5rem;
	padding: 1%;
	color: ${props=> props.theme.ciano};
	background-color: ${props=> props.theme.preto};
`