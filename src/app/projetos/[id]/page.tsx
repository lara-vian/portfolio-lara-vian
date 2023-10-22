'use client'
import { useEffect, useState } from "react"
import * as S from "../../../style/projeto"
import Background from "@/app/components/background"

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

export default function Project({ params }: { params: { id: number } }){
	const [project, setProject] = useState<IProject>()
	useEffect(()=>{
		fetch("https://lara-vian.github.io/data/projects.json")
		.then(response=>response.json())
		.then(json=>FilterData(json))
	})
	const FilterData = (data: IProject[]) =>{
		data?.map((item)=>{
			if(item.id == params.id){
				setProject(item)
			}
		})
	}
	
	return(
		<>
			<title>{project?.name}</title>
			<Background>
				<S.Container>
					<S.TextContainer>
						<S.HeaderContainer>
							<S.Name>{project?.name}</S.Name>
							<S.Description>{project?.description}</S.Description>
						</S.HeaderContainer>
							{project?.content.map((text, index)=>{
								return(
									text.img 
									? 
									<>
										<S.Img src={text.text} key={index}/>
										<br/>
									</>
									
									:
									<>
										<S.Text key={index}>{text.text}</S.Text>
										<br/>
									</>
									
									)
							})}
					</S.TextContainer>
				</S.Container>
			</Background>
		</>
	)
}