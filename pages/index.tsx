import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { Navbar } from "@components";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-9xl text-powder">Depok Kita</div>
      <Button colorScheme={"mustard"}>TESSSSS</Button>
    </div>
  );
};

export default Home;
