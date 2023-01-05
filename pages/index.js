import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { getUsers } from "./api/users";
import Image from "next/image";
import Link from "next/link";


// import { useRecoilState } from "recoil";
// import "minifaker/locales/en";
// import minifaker from "minifaker";
// import Story from "../components/Story"

// export async function getServerSideProps() {
//   const res = await fetch("https://i.pravatar.cc/150?img");

//   return {
//     props: {
//       img: await res.json(),
//     },
//   };
// }

{
  /* Separate Last */
}

// export async function getStaticProps() {
//   const users = await getUsers();
//   return { props: { initialUsers: users } };
// }

{
  /* Separate */
}

export default function Home({ initialUsers }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const resp = await fetch("https://fakestoreapi.com/products");
      setProduct(await resp.json());
    }
    getProduct();
  }, []);

  // console.log(product.image)

  {
    /* Separate Last */
  }
  // const [users] = useState(initialUsers);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Next app</title>
        </Head>

        <div>
          <h1>Product Lists</h1>
          <div className={styles.grid}>
            {/* {JSON.stringify(product)} */}
            {product.map((product) => (
              <div key={product.id}>
                <Link href={`/product/${product.id}`}>
                  {product.id}*{product.price}*{product.title}
                
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Separate Last */}

      {/* <Page users={users} />;  */}

      {/* Separate */}

      {/* <div>
        //{" "}
        {users.map((todo) => (
          <div key={todo.id}>
            <p>
              {todo.id}: {todo.title}
            </p>
          </div>
        ))}
      </div> */}
    </>
  );
}

{
  /* Separate */
}

// Udemy Instagram
// const [storyUsers, setSoryUsers] = useState([]);
// // const [currentUser] = useRecoilState(userState);
// useEffect(() => {
//   const storyUsers = minifaker.array(20, (i) => ({
//     username: minifaker.username({ locale: "en" }),
//     img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
//     id: i,
//   }));
//   setSoryUsers(storyUsers);
//   // console.log(storyUsers);
// }, []);
// return (
//   <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
//   <h1>jjj</h1>
// {storyUsers.map(user => (
//   <Story key={user.id} username={user.username} img={user.img}/>
// ))}

{
  /* {currentUser && (
      <Story
        img={currentUser?.userImg}
        username={currentUser?.username}
        isUser="true"
      />
    )}
    {storyUsers.map((user) => (
      <Story key={user.id} username={user.username} img={user.img} />
    ))} */
}
{
  /* </div> */
}
// );

{
  /* ********* -1- Raw data */
}
{
  /* <div>{JSON.stringify(todos)}</div>  */
}
{
  /* ******* -2- List of data */
}

{
  /* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */
}

// https://www.youtube.com/watch?v=kdXKz1UWc3E

// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const {data} = await res.json();

//   return {
//     props:data
//     {
//       todos: data,
//     },
//   };
// }

// B. The HTML is generated on each request.
// For SSR, the component should be outside of th main component.  runs on server-side and never runs on the browser.

// getServerSideProps can only be exported from a page. You can’t export it from non-page files.

// If you do not need to render the data during the request, then you should consider fetching data on the client side or getStaticProps.

// C. SWR: It is highly recommended if you are fetching data on the client-side. It handles caching, revalidation, focus tracking, refetching on intervals, and more. Using the same example as above, we can now use SWR to fetch the profile data. SWR will automatically cache the data for us and will revalidate the data if it becomes stale.

// D. SSG:
// *** getStaticProps: The HTML is generated at build time and will be reused on each request. Both of which can be cached by a CDN at build time.

// getServerSideProps -->  getStaticProps;

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");

//   return{
//     props:{
//       todos: await res.json(),
//     },
//     revalidate: 5,
//     // updates data every 5 seconds

//   }
// }
