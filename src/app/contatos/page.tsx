'use client'
import Background from "../components/background"
import * as S from "../../style/contato"

export default function Contato(){
	return(
		<Background>
			<S.Container>
				<S.Title>É possível me encontrar nos meios abaixo</S.Title>
				<S.TextContainer>
					<S.Text>LinkedIn: 
						<S.Anchor 
						href="https://www.linkedin.com/in/lara-vian/">
							/in/lara-vian/
						</S.Anchor>
					</S.Text>
					<br/>
					<S.Text>GitHub: 
						<S.Anchor 
						href="https://github.com/lara-vian">
							/lara-vian
						</S.Anchor>
					</S.Text>
					<br/>
					<S.Text>E-mail: 
						<S.Anchor 
						href="mailto:lara.vsteinbach@gmail.com">
							lara.vsteinbach@gmail.com
						</S.Anchor>
					</S.Text>
				</S.TextContainer>
			</S.Container>
		</Background>
	)
}