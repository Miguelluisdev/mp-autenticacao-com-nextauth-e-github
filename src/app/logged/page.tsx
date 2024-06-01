import Image from "next/image";
import detail1 from "@/app/assets/detail.png"
import { ItemButton } from "../components/ItemButton";
import LogoutButton from "../components/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";


export default async function LoggedPage() {
  const session = await getServerSession(authOptions)
  console.log(session);
  if (!session){
    return redirect("/")
  }
 
  
  const user = session.user

  const repoCount = session.user.githubProfile.public_repos + 
  (session.user.githubProfile.total_private_repos ?? 0)
  const reposUrl = session?.user.githubProfile.repos_url;

  const gistCount = session.user.githubProfile.public_gists +
  (session.user.githubProfile.private_gists ?? 0)
  const gistsUrl = `https://api.github.com/users/${session.user.githubProfile.login}/gists`;

  const followerCount = session.user.githubProfile.followers;
  const followersUrl = `https://api.github.com/users/${session.user.githubProfile.login}/following`;

  return (
    <main className="md:px-28 px-8 relative min-h-screen container mx-auto " >
        <Image
        src={detail1}
        alt={"Imagem detalhe"} 
        className="absolute invisible xl:visible -right-20 bottom-10"   
        />
     <header className="text-center py-12 md:pb-24" >
       <Image
          src={user?.image ?? ""}
          width={100}
          height={100}
          alt={"Imagem Avatar"}
          className="rounded-full mx-auto"
          />
          <h1 className="md:text-6xl text-4xl mt-6" >  
            Boas Vindas,<span className="font-bold">{user?.name} </span>
          </h1>
          <h3 className="md:text-3xl text-lg font-extralight mt-6 text-neutral-600 " >Que tal analisarmos seu GitHub?</h3>
     </header>
      <section className="max-w-xl mb-6" > 
          <ItemButton URL={reposUrl}  >Meus Repositorios ({repoCount})</ItemButton>
          <ItemButton URL={gistsUrl} >Meus Gist ({gistCount})</ItemButton>
          <ItemButton URL={followersUrl} >Meus Seguidores ({followerCount})</ItemButton>
      </section>
      <LogoutButton/>
    </main>
  )
}