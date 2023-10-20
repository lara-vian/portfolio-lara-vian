'use client'
import { useEffect, useState } from "react"
import Background from "../components/background"
import * as S from "../../style/projetos"

interface IProject{
	name: string,
	description: string,
	content:[
		{
			img: boolean,
			text: string
		}
	]
}
export default function Projetos(){
	const [data, setData] = useState<IProject[]>()
	useEffect(()=>{
		fetch("https://lara-vian.github.io/data/projects.json")
		.then(response=>response.json())
		.then(json=>setData(json))
	})
	return(
		<Background>
			<S.Container>
				{data 
				? 
				data.map((project, index)=>Post(project, index))
				: 
				<S.Name>
					Sem Posts
				</S.Name>
				}
			</S.Container>
		</Background>
	)
}
const Post = (project: IProject, key:number) =>{
	return(
			<S.TextContainer key={key}>
				<S.TitleContainer >
					<S.Name>{project.name}</S.Name>
					<S.Description>{project.description}</S.Description>
				</S.TitleContainer>
				{project.content.map((text)=>{
					return(
					text.img 
					? 
					<>
						<S.Img src={text.text}/>
						<br/>
					</>
					
					:
					<>
						<S.Text>{text.text}</S.Text>
						<br/>
					</>
					
					)
				})}
			</S.TextContainer>
	)
}