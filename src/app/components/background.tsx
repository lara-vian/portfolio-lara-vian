'use client'
import { PropsWithChildren, useEffect} from "react"
import * as S from "../../style/components/background"
import { usePathname, useRouter } from "next/navigation"

export default function Background({children}:PropsWithChildren){
	let routeNames = {
		home: false,
		blog: false,
		projetos: false,
		contatos: false,
	}
	const pathName = usePathname()
	const router =useRouter()
	const VerifyRoute = () =>{
		switch (pathName) {
			case "/":
				routeNames.home = true;
			break
			case "/blog":
				routeNames.blog = true;
			break
			case "/projetos":
				routeNames.projetos = true;
			break
			case "/contatos":
				routeNames.contatos = true;
			break
		}
	}
	VerifyRoute()
	
	return(
		<S.Background>
			<S.NavBar>
				<S.Button 
					$active = {routeNames.home}
					onClick={()=> router.push("/")}
				>
					Home
				</S.Button>
				<S.Button
					$active = {routeNames.blog}
					onClick={()=> router.push("/blog")}
				>
					Blog
				</S.Button>
				<S.Button
					$active = {routeNames.projetos}
					onClick={()=> router.push("/projetos")}
				>
					Projetos
				</S.Button>
				<S.Button
					$active = {routeNames.contatos}
					onClick={()=> router.push("/contatos")}
				>
					Contatos
				</S.Button>
			</S.NavBar>
			{children}
		</S.Background>
	)
}