'use client'
import { useEffect, useState } from "react"
import Background from "../components/background"
import * as S from "../../style/blog"
import { useRouter } from "next/navigation"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

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

export default function Blog(){
	const router = useRouter()
	const [data, setData] = useState<IPost[]>()
	useEffect(()=>{
		fetch("https://lara-vian.github.io/data/posts.json")
		.then(response=>response.json())
		.then(json=>setData(json))
	})
	return(
		<Background>
			<S.Container>
				{data?.map((post, index)=>Post(post, index, router))}
			</S.Container>
		</Background>
	)
}
const Post = (post:IPost, id:number, router:AppRouterInstance) =>{
	return(
			<S.TextContainer key={id}>
				<S.TitleContainer key={id}>
					<S.Title key={id}>{post.title}</S.Title>
					<S.Data key={id}>{post.data}</S.Data>
					<S.Button
							key={id}
							onClick={()=>{
								router.push(`/blog/${id}`)
							}}
						>
							<S.Icon 
							key={id}
							icon={faArrowRight}/>
						</S.Button>
				</S.TitleContainer>
				{post.content.map((text)=>{
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