import { getApps, initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
// import styles from "../styles/Home.module.css";

import {
  getrecentPosts,
  getScreenshot,
  getComments,
  getLinks,
  getHero,
} from "../servicees";
import {
  Contact,
  Feature,
  Footer,
  Header,
  Hero,
  Steps,
  Testimonails,
} from "../components";
import { db, firebaseConfig } from "../firebase";
// export async function getStaticProps() {
//   const propdb = !getApps().length
//     ? db
//     : getFirestore(initializeApp(firebaseConfig));

//   const res = getDocs(query(collection(propdb, "reviews")));

//   return {
//     props: {
//       data: (await res).docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       })),
//     },
//   };
// }

export default function Home({ hero, screens, gallery }) {
  console.log(hero);
  console.log(gallery);
  console.log(screens);
  return (
    <div className="">
      <Head>
        <title>GO Waste || waste collection services</title>
        <meta
          name="description"
          content="go waste is the brain child of Lac global Limited . A company based in the Uk with branches in Germany and Ghana as a means to help provide affordable waste collections services "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Hero it={hero[0]} />
      <Steps steps={screens} />
      <Feature sets={gallery} />
      {/* <Testimonails data={data} /> */}
      <Contact />
      <Footer />
    </div>
  );
}

// export async function getServerSideProps() {
//   const querySnapshot = await getDocs(collection(db, "cities"));

//   const data = querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//     return doc.data();
//   });
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

export async function getStaticProps() {
  // const posts = (await getPosts()) || [];
  const gallery = (await getrecentPosts()) || [];
  const links = (await getLinks()) || [];
  const screens = (await getScreenshot()) || [];
  // const comment = (await getComments()) || [];
  const hero = (await getHero()) || [];

  return {
    props: { hero, screens, gallery },
  };
}
