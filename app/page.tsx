import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import NoteWorthy from "@/components/sections/NoteWorthy";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import { Suspense } from "react";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="main">
      <div className="sections container w-full flex-1 overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              Loading...
            </div>
          }
        >
          <Projects />
        </Suspense>
        <NoteWorthy />
        <Contact />
      </div>
    </main>
  );
}
