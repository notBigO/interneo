import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import CardSection from "../components/CardSection";
import InternshipsView from "../components/InternshipsView";
import Navbar from "../components/Navbar";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col">
      <Navbar/>
      <CardSection/>
      <InternshipsView/>
    </div>
  );
}
