import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import SplitText from "./components/SplitText/SplitText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Waves from "./components/Waves/Waves";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <Waves
      lineColor="#243D42"
      backgroundColor="rgba(0, 0, 0, 0.2)"
      waveSpeedX={0.02}
      waveSpeedY={0.01}
      waveAmpX={40}
      waveAmpY={20}
      friction={0.9}
      tension={0.01}
      maxCursorMove={500}
      xGap={12}
      yGap={36}  
      />
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
            <div className="flex flex-col gap-5">
              <AnimatedContent 
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className="flex items-center gap-2">
                <h1 className="text-3xl text-white font-bold">I'm Ready For Internship</h1>
                <RotatingText 
                  texts={['Game Development', 'Web Development', 'Web Programming', 'Cyber Security']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
                </div>
              </AnimatedContent>
                  <div className="flex flex-col items-start">
                <BlurText 
                  text="I'm Demas Darrel Putra Andhyna"
                  delay={40}
                  animateBy="letters"
                  direction="top"
                  className="text-3xl font-semibold text-start"
                />
                <BlurText 
                  text="Fullstack Developer"
                  delay={90}
                  animateBy="letters"
                  direction="top"
                  className="text-2xl font-semibold text-start text-[#C6F10E]"
                  />
              </div>
              <div>
                <SplitText 
                text="I am an Information Systems student at Universitas Singaperbangsa Karawang (UNSIKA) with a passion for coding since high school. I specialize as a Fullstack Developer, with skills in Web Development, Web Engineering, and Cybersecurity, and a strong interest in Game Development. I enjoy creating fast, secure, and interactive web applications while exploring creative solutions through technology."
                className="text-1xl font-semibold text-center"
                delay={10}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
                />
              </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}