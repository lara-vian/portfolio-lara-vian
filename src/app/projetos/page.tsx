'use client'
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Background from "../components/background"
import * as S from "../../style/projetos"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

interface IProject{
	id: number,
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
	const router = useRouter()
	const [data, setData] = useState<IProject[]>()
	useEffect(()=>{
		fetch("https://lara-vian.github.io/data/projects.json")
		.then(response=>response.json())
		.then(json=>setData(json))
	})
	return(
		<Background>
			<S.Container>
				{data?.map((project, index)=>Post(project, index, router))}
			</S.Container>
		</Background>
	)
}
const Post = (
	project: IProject, 
	id:number, 
	router: AppRouterInstance) =>{
	return(
			<S.TextContainer key={id}>
				<S.HeaderContainer key={id}>
					<S.TitleContainer key={id}>
						<S.Name key={id}>{project.name}</S.Name>
						<S.Button
							key={id}
							onClick={()=>{
								router.push(`/projetos/${id}`)
							}}
						>
							<S.Icon 
							key={id}
							icon={faArrowRight}/>
						</S.Button>
					</S.TitleContainer>
					<S.Description key={id}>{project.description}</S.Description>
				</S.HeaderContainer>
				{project.content.map((text)=>{
					return(
					text.img 
					? 
					<>
						<S.Img key={id} src={text.text}/>
						<br/>
					</>
					
					:
					<>
						<S.Text key={id}>{text.text}</S.Text>
						<br/>
					</>
					
					)
				})}
			</S.TextContainer>
	)
}