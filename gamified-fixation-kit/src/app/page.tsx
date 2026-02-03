import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { KitContents } from "@/components/sections/KitContents";
import { Demo } from "@/components/sections/Demo";
import { Audience } from "@/components/sections/Audience";
import { Impact } from "@/components/sections/Impact";
import { SocialProof } from "@/components/sections/SocialProof";
import { Offer } from "@/components/sections/Offer";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <KitContents />
      <Demo />
      <Audience />
      <Impact />
      <SocialProof />
      <Offer />
      <LeadCapture />
      <FAQ />
      <Footer />
    </main>
  );
}
