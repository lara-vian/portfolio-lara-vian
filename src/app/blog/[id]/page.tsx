'use client'
import { useEffect, useState } from "react"
import * as S from "../../../style/post"
import Background from "@/app/components/background"

interface IPost{
	id:number,
	sobre: string,
	data:string,
	title:string,
	content:[
		{
			img:boolean,
			text: string
		}
	]
}

export default function Post({ params }: { params: { id: number } }){
	const [post, setPost] = useState<IPost>()
	useEffect(()=>{
		fetch("https://lara-vian.github.io/data/posts.json")
		.then(response=>response.json())
		.then(json=>FilterData(json))
	})
	const FilterData = (data: IPost[]) =>{
		data?.map((item)=>{
			if(item.id == params.id){
				setPost(item)
			}
		})
	}
	
	return(
		<>
			<title>{post?.title}</title>
			<Background>
				<S.Container>
					<S.TextContainer>
						<S.TitleContainer>
							<S.Title>{post?.title}</S.Title>
							<S.Data>{post?.data}</S.Data>
						</S.TitleContainer>
							{post?.content.map((text, index)=>{
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