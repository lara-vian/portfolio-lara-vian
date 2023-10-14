'use client'
import Background from "./components/background"
import * as S from "../style/home"

export default function Home(){
	return(
		<Background>
			<S.Container>
				<S.Title>
					Olá, meu nome é Lara
				</S.Title>
				<S.Text>
					Apresentação
				</S.Text>
			</S.Container>
		</Background>
	)
}