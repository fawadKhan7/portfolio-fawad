import { GridBackground } from "@/components/GridBackground";
import Experience from "@/layouts/Experience";
import Header from "@/layouts/Header";
import Reviews from "@/layouts/Reviews";
import Skills from "@/layouts/Skills";

export default function Home() {
  return (
    <div>
      <GridBackground>
        <div className="flex flex-col w-full">
          <Header />
          <div>
            <Skills />
          </div>
          <div>
            <Experience />
          </div>
          <div>
            <Reviews />
          </div>
          <div>REACH</div>
        </div>
      </GridBackground>
    </div>
  );
}
