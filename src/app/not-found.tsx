import Link from "next/link";
export default function NotFound() {
  return <main style={{maxWidth:760,margin:"15vh auto",padding:30,fontFamily:"Arial,sans-serif"}}>
    <p>404 / MONARQUE GROUP</p>
    <h1>Page introuvable / Page not found</h1>
    <p>Cette page n'est pas disponible.</p>
    <Link href="/fr/">Retour à l'accueil</Link>
  </main>;
}
