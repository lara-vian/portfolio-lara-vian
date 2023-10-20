'use client'
import { useEffect, useState } from "react"
import Background from "../components/background"
import * as S from "../../style/blog"

interface IPost{
	index:number,
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
	const [data, setData] = useState<IPost[]>()
	useEffect(()=>{
		fetch("https://lara-vian.github.io/data/posts.json")
		.then(response=>response.json())
		.then(json=>setData(json))
	})
	return(
		<Background>
			<S.Container>
				{data 
				? 
				data.map((post, index)=>Post(post, index))
				: 
				<S.Title>
					Sem Posts
				</S.Title>
				}
			</S.Container>
		</Background>
	)
}
const Post = (post:IPost, key:number) =>{
	return(
			<S.TextContainer key={key}>
				<S.TitleContainer >
					<S.Title>{post.title}</S.Title>
					<S.Data>{post.data}</S.Data>
				</S.TitleContainer>
				{post.content.map((text)=>{
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