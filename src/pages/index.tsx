import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import {getOptionsForVote} from "../utils/getRandomPokemon";

const Home: NextPage = () => {
  const {data, isLoading} = trpc.useQuery(["example.hello", {text: "world"}]);
  const [first, second] = getOptionsForVote()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Pokemon Voting</title>
        <meta name="description" content="A site where we vote for the roundest pokemon that ever existed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-2xl text-center">Which Pokemon is Roundest?</div>
        <div className="p-2"/>
        <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
          <div className="w-16 h-16 bg-red-800">{first}</div>
          <div className="p-8">VS</div>
          <div className="w-16 h-16 bg-red-800">{second}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
