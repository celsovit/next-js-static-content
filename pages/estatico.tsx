import Link from "next/link"
import Layout from "../components/Layout"
 
export function getStaticProps() {
    return {
        props: {
            number: Math.random(),
        },
        revalidate: 10 // 10 seconds
    }
}
 
export default function Estatico(props: any) {
    return (
        <>
            <Layout title="Dinamic Content">
                <div>Dinamic Random Number: { props.number }</div>
            </Layout>
            <div>
                <Link href="/">Voltar</Link>
            </div>
        </>
    )
}