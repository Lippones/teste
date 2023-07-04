import Link from "next/link";

export default function Teste(){
    return(
        <div>
            <h1>Pagina de teste</h1>
            <Link href={{
                pathname:'/'
            }}>Voltar</Link>
        </div>
    )
}