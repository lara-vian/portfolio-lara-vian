import styled from "styled-components";
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
		font-size: .5rem;
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
