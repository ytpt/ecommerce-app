"use client";

import Image from "next/image";
import Product from "./Product";
import {useState} from "react";

type Props = {
    product: Product;
    fill?: boolean;
}

const ProductImage = ({ product, fill }: Props) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {fill
                ? <Image
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                        loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`
                    }
                    src={product.image}
                    alt={product.title}
                    fill
                    onLoadingComplete={() => setLoading(false)}
                    />
                : <Image
                    className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                        loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`
                    }
                    src={product.image}
                    alt={product.title}
                    onLoadingComplete={() => setLoading(false)}
                    width={400}
                    height={1000}
                    />
            }
        </>
    );
};

export default ProductImage;
