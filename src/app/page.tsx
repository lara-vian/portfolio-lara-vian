'use client'
import Background from "./components/background"
import * as S from "../style/home"

export default function Home(){
	return(
		<>
			<title>Home</title>
			<Background>
				<S.Container>
					<S.Title>
						Olá, meu nome é Lara
					</S.Title>
					<S.TextContainer>
						<S.Text>
							Sou uma desenvolvedora front-end e estou no caminho para me tornar full-stack. Este portfólio é de uma apresentação dos projetos que eu mais gosto, e é também um diário da minha evolução nesse caminho.
						</S.Text>
						<br/>
						<S.Text>
							Na page <S.Anchor href="/blog">Blog</S.Anchor> você pode encontrar posts contando sobre minha evolução como desenvolvedora, meus aprendizados, meus erros e principalmente minha linha de raciocínio sobre eles.
						</S.Text>
						<br/>
						<S.Text>
							Na page <S.Anchor href="/projetos">Projetos</S.Anchor> você pode encontrar meus principais projetos pessoais, alguns selecionei por ter o meu carinho, outros apenas para demonstrar habilidades específicas, mas garanto que são todos interessantes de algum jeito.
						</S.Text>
						<br/>
						<S.Text>
							Caso queira me contatar pode ir para page <S.Anchor href="/contatos">Contatos</S.Anchor> e poderá achar o meio mais conveniente de falar comigo.
						</S.Text>
					</S.TextContainer>
					<S.Title>
						Um pouco sobre mim
					</S.Title>
					<S.TextContainer>
						<S.Text>
							Comecei meus estudos em 2016 no IFPR, estudei principalmente Java, mas com o passar do tempo passei a me interessar mais por front-end, iniciei com JavaScript e logo passei ao TypeScript, tendo foco maior em React Js.
						</S.Text>
						<br/>
						<S.Text>
							Meu grande foco em Front-end nos últimos anos deriva da minha alegria em criar interfaces bonitas, responsivas e intuitivas. Nesse ano porém, venho estudando para criar também sistemas eficientes, voltei a estudar C# com foco em .NET tendo o objetivo de desenvolver mais que apenas interfaces.
						</S.Text>
					</S.TextContainer>
				</S.Container>
			</Background>
		</>
		
	)
}