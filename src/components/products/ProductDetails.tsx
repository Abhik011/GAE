"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    ArrowRight,
    Award,
    Globe,
    Package,
    ShieldCheck,
    Truck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

interface Product {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    href:string;
}

interface ProductDetailsData {
    overview: string;
    images: string[];
    specifications: {
        label: string;
        value: string;
    }[];
    applications: string[];
    packaging: string[];
    certifications: string[];
}

interface ProductDetailsProps {
    product: Product;
    details: ProductDetailsData;
}

export default function ProductDetails({
    product,
    details,
}: ProductDetailsProps) {
    const [selectedImage, setSelectedImage] = useState(
        details.images[0] || product.image
    );

    return (
        <section className="py-20">

            <Container>

                {/* Breadcrumb */}

                <div className="mb-12 flex items-center gap-2 text-sm text-muted-foreground">

                    <Link
                        href="/"
                        className="hover:text-primary"
                    >
                        Home
                    </Link>

                    /

                    <Link
                        href="/products"
                        className="hover:text-primary"
                    >
                        Products
                    </Link>

                    /

                    <span>{product.title}</span>

                </div>

                <div className="grid gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        {/* Main Image */}

                        <div className="relative overflow-hidden rounded-[32px] border bg-white">

                            <div className="relative aspect-square">

                                <Image
                                    src={selectedImage}
                                    alt={product.title}
                                    fill
                                    className="object-cover"
                                />

                            </div>

                        </div>

                        {/* Gallery */}

                        <div className="mt-6 grid grid-cols-4 gap-4">

                            {details.images.map((image) => (

                                <button
                                    key={image}
                                    onClick={() => setSelectedImage(image)}
                                    className={`
                    relative
                    aspect-square
                    overflow-hidden
                    rounded-2xl
                    border-2
                    ${selectedImage === image
                                            ? "border-primary"
                                            : "border-border"
                                        }
                  `}
                                >
                                    <Image
                                        src={image}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                    />
                                </button>

                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div>

                        <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                            {product.category}
                        </span>

                        <h1 className="mt-6 text-5xl font-black">
                            {product.title}
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            {product.description}
                        </p>

                        {/* Export Ready */}

                        <div className="mt-8 flex items-center gap-3 rounded-2xl bg-green-50 p-5 text-green-700">

                            <ShieldCheck className="size-6" />

                            <div>

                                <p className="font-semibold">
                                    Export Ready Product
                                </p>

                                <p className="text-sm">
                                    Verified supplier with international shipping support.
                                </p>

                            </div>

                        </div>

                        {/* Quick Info */}

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center justify-between border-b pb-4">

                                <div className="flex items-center gap-3">

                                    <Globe className="size-5 text-primary" />

                                    Origin

                                </div>

                                <span className="font-semibold">
                                    India
                                </span>

                            </div>

                            <div className="flex items-center justify-between border-b pb-4">

                                <div className="flex items-center gap-3">

                                    <Package className="size-5 text-primary" />

                                    MOQ

                                </div>

                                <span className="font-semibold">
                                    On Request
                                </span>

                            </div>

                            <div className="flex items-center justify-between border-b pb-4">

                                <div className="flex items-center gap-3">

                                    <Truck className="size-5 text-primary" />

                                    Packaging

                                </div>

                                <span className="font-semibold">
                                    Export Standard
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <Award className="size-5 text-primary" />

                                    Quality

                                </div>

                                <span className="font-semibold">
                                    Premium Grade
                                </span>

                            </div>

                        </div>

                        {/* CTA */}

                        <div className="mt-12 flex flex-wrap gap-4">

                            <Link href="/request-quote">

                                <Button
                                    size="lg"
                                    className="h-14 rounded-2xl px-8"
                                >
                                    Request Quote

                                    <ArrowRight className="ml-2 size-5" />

                                </Button>

                            </Link>

                            <Link href="/contact">

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-14 rounded-2xl px-8"
                                >
                                    Contact Supplier
                                </Button>

                            </Link>

                        </div>

                    </div>

                </div>
                {/* ===================================================== */}
                {/* Overview */}
                {/* ===================================================== */}

                <div className="mt-24">

                    <div className="rounded-[36px] border border-border bg-white p-10 shadow-sm">

                        <h2 className="text-3xl font-bold">
                            Product Overview
                        </h2>

                        <p className="mt-6 leading-9 text-muted-foreground">
                            {details.overview}
                        </p>

                    </div>

                </div>

                {/* ===================================================== */}
                {/* Specifications */}
                {/* ===================================================== */}

                <div className="mt-20">

                    <h2 className="text-3xl font-bold">
                        Technical Specifications
                    </h2>

                    <div className="mt-8 overflow-hidden rounded-[30px] border border-border bg-white">

                        <table className="w-full">

                            <tbody>

                                {details.specifications.map((spec) => (

                                    <tr
                                        key={spec.label}
                                        className="border-b last:border-b-0"
                                    >
                                        <td className="w-1/3 bg-slate-50 px-8 py-5 font-semibold">
                                            {spec.label}
                                        </td>

                                        <td className="px-8 py-5 text-muted-foreground">
                                            {spec.value}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* ===================================================== */}
                {/* Applications */}
                {/* ===================================================== */}

                <div className="mt-20">

                    <h2 className="text-3xl font-bold">
                        Applications
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {details.applications.map((item) => (

                            <div
                                key={item}
                                className="
                  rounded-3xl
                  border
                  border-border
                  bg-white
                  p-6
                  transition
                  hover:border-primary/20
                  hover:shadow-lg
                "
                            >

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                                        <ShieldCheck className="size-6" />

                                    </div>

                                    <h3 className="font-semibold">
                                        {item}
                                    </h3>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* ===================================================== */}
                {/* Packaging */}
                {/* ===================================================== */}

                <div className="mt-20">

                    <h2 className="text-3xl font-bold">
                        Packaging Options
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {details.packaging.map((item) => (

                            <div
                                key={item}
                                className="
                  rounded-3xl
                  border
                  border-border
                  bg-white
                  p-8
                  text-center
                  transition
                  hover:border-primary/20
                  hover:shadow-lg
                "
                            >

                                <Package className="mx-auto size-8 text-primary" />

                                <p className="mt-5 font-semibold">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                {/* ===================================================== */}
                {/* Certifications */}
                {/* ===================================================== */}

                <div className="mt-20">

                    <h2 className="text-3xl font-bold">
                        Certifications
                    </h2>

                    <div className="mt-8 flex flex-wrap gap-4">

                        {details.certifications.map((item) => (

                            <div
                                key={item}
                                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/5
                  px-6
                  py-3
                "
                            >

                                <Award className="size-5 text-primary" />

                                <span className="font-medium">
                                    {item}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>
            </Container>

        </section>
    );
}
