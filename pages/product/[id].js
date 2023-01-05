import Head from "next/head";
// import styles from "../../styles/Details.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Details() {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await resp.json());
    }
    if (id) {
      getProduct();
    }
  }, [id]);

  if (!product) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{product.id}</title>
      </Head>
      <div>
        <Link href={"/"}>Back to Home</Link>
        <div>
          <h1>
            {product.title} *** {product.price} *** {product.description}
          </h1>
          {/* <table>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
              </tr>
            </thead>
            <tbody>
              {product.map(({ id, title }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}
