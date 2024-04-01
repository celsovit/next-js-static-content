import Link from "next/link";

export default function Inicio() {

  return (
    <>
      <div>
        <Link href="/estatico">Conteúdo Estático</Link>
      </div>
      <div>
          <Link href="/dinamico">Conteúdo Dinâmico</Link>
      </div>
    </>
  )

}

