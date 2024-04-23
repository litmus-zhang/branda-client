import { CustomButton } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-secondary w-full min-h-screen">
    <Header />
<main className="px-14 flex gap-4 my-10">
  <div className="max-w-screen lg:w-3/5">
    <h1 className="font-black text-5xl my-6">Need to Start a company?<br/> Just branda it.</h1>
    <p>Running a business is stressful, <br/>
getting your business brand assets should not be on your to-do list.
<br/>
<br/>
Get your brand assets in a couple of minutes. </p>
<CustomButton text="Get Started for free"/>

  </div>
  <div className="">
    <Image src="/heroImg.png" alt="Hero" width={600} height={500}/>
  </div>
</main>
    <Footer />
  </div>
  );
}
