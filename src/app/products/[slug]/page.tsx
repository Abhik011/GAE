import { notFound } from "next/navigation";

import ProductDetails from "@/components/products/ProductDetails";
import RelatedProducts from "@/components/products/RelatedProducts";

import { products } from "@/data/products";
import { productDetails } from "@/data/product-details";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({
    params,
}: Props) {
    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    const details = productDetails[slug];

    if (!details) {
        notFound();
    }

    return (
        <>
            <ProductDetails
                product={{
                    slug: product.slug,
                    title: product.title,
                    category: product.category,
                    description: product.description,
                    image: product.image,
                    href: product.href,
                }}
                details={details}
            />

            <RelatedProducts
                currentSlug={slug}
            />
        </>
    );
}