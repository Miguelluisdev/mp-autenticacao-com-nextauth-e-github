import Image from "next/image";
import detail1 from "@/app/assets/detail.png"
import { ItemButton } from "../components/ItemButton";


export default function LoggedPage() {
  return (
    <main className="md:px-28 px-8 relative min-h-screen container mx-auto " >
        <Image
        src={detail1}
        alt={"Imagem detalhe"} 
        className="absolute invisible xl:visible -right-20 bottom-10"   
        />
     <header className="text-center py-12 md:pb-24" >
       <Image
          src={"https://i.pravatar.cc/100"}
          width={100}
          height={100}
          alt={"Imagem Avatar"}
          className="rounded-full mx-auto"
          />
          <h1 className="md:text-6xl text-4xl mt-6" >  
            Boas Vindas,<span className="font-bold">Fulano </span>
          </h1>
          <h3 className="md:text-3xl text-lg font-extralight mt-6 text-neutral-600 " >Que tal analisarmos seu GitHub?</h3>
     </header>
      <section className="max-w-xl mb-6" > 
          <ItemButton>Meus Repositorios (x)</ItemButton>
          <ItemButton>Meus Gist (x)</ItemButton>
          <ItemButton>Meus Seguidores (x)</ItemButton>
      </section>
        <button className=" bg-black text-white px-6 py-3 rounded-lg mx-auto"  >Logout</button>
    </main>
  )
}