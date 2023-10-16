import styled from "styled-components";

export const Container = styled.div`
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
	margin: 1%;
	padding: 0.5%;
	border-bottom: 0.15rem solid ${props=>props.theme.roxo};
	font-size: 3rem;
	color: ${props=>props.theme.branco};
`
export const TextContainer = styled.div`
	height: auto;
	width: 95%;
	margin: 1%;
	padding: 3%;
	border: 0.15rem solid ${props=>props.theme.roxo};
`
export const Text = styled.p`
	font-size: 1.5rem;
	color: ${props=>props.theme.branco};
`
export const Anchor = styled.a`
	font-size: 1.5rem;
	color: ${props=>props.theme.ciano};
	text-decoration: underline;
`