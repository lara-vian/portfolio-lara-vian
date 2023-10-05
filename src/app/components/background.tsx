'use client'
import { PropsWithChildren} from "react"
import * as S from "../../style/components/background"
import { useRouter } from "next/navigation"

export default function Background({children}:PropsWithChildren){
	const router =useRouter()
	return(
		<S.Background>
			<S.NavBar>
				<S.Button
					onClick={()=> router.push("/")}
				>
					Home
				</S.Button>
				<S.Button
					onClick={()=> router.push("/blog")}
				>
					Blog
				</S.Button>
				<S.Button
					onClick={()=> router.push("/projetos")}
				>
					Projetos
				</S.Button>
				<S.Button
					onClick={()=> router.push("/contatos")}
				>
					Contato
				</S.Button>
			</S.NavBar>
			{children}
		</S.Background>
	)
}