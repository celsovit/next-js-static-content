import Link from "next/link"
import Layout from "../components/Layout"
 
export function getServerSideProps() {
    return {
        props: {
            number: Math.random(),
        },
    }
}
 
export default function Dinamico(props: any) {
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