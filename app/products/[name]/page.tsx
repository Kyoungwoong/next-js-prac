import {Metadata} from "next";

export default async function ProductPage() {
    return (
        <main>
            <h1 className="font-poppins">Hello</h1>
        </main>
    )
}

export async function generateMetaData(): Promise<Metadata> {
    // const product = await fetch("/products/{제품이름} or 아이디");
    // const product = await fetch("/product/{id}");

    return {
        // title: `${product.name}`,
        // description: `${product.description}`,
    };
}