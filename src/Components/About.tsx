import Typewriter from "typewriter-effect";
import { Info } from "../Users";
import myImage from "../assets/myimg.jpeg";
import { useMatches } from "@mantine/core";
//@ts-ignore
import Halo from "vanta/src/vanta.halo";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particle";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import React, { useEffect, useRef } from "react"; // Import React and hooks

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const imageRef = useRef<HTMLImageElement | null>(null); // Create a ref for the image

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault(); // Prevent right-click menu from showing
    };

    const handleDragStart = (event: DragEvent) => {
      event.preventDefault(); // Prevent dragging behavior
    };

    const imgElement = imageRef.current;
    if (imgElement) {
      imgElement.addEventListener('contextmenu', handleContextMenu);
      imgElement.addEventListener('dragstart', handleDragStart);
    }

    return () => {
      if (imgElement) {
        imgElement.removeEventListener('contextmenu', handleContextMenu);
        imgElement.removeEventListener('dragstart', handleDragStart);
      }
    };
  }, []);

  return (
    <>
      <Particles
        className="-z-20 absolute inset-0"
        quantity={500}
        ease={60}
        color={"#C0C0C01"}
        size={2.5}
        refresh
      />
      <div
        className="flex relative overflow-hidden font-mono px-10 sm-mx:px-4 xs-mx:py-4 xs-mx:px-2 py-10 items-center justify-around !bg-[#000000] lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse  bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6"
        style={{ height: "700px" }}
        id="bg"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <Particles
          className="-z-20 absolute inset-0"
          quantity={500}
          ease={60}
          color={"#9F6BA0"}
          size={2.5}
          refresh
        />
        <div className="bs:ml-10  bs:w-3/5 flex flex-col lg-mx:gap-3 bs-mx:items-center">
          <div className="text-3xl text-primaryColor lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">
            Hi, I'm
          </div>
          <div className="text-transparent bg-gradient-to-t from-black to-gray-300/80 bg-clip-text  dark:from-white dark:to-slate-900/10 blend-darken  text-[4.25rem] font-bold  sm-mx:text-4xl xs-mx:text-3xl lg-mx:text-center lg-mx:text-5xl">
            Avantika Deshmukh
          </div>
          <div className=" text-white text-4xl flex font-semibold xs-mx:text-xl sm-mx:text-2xl lg-mx:text-[27px] xsm-mx:text-lg">
            a passionate &nbsp;
            <span className="text-[#9F6BA0]">
              <Typewriter
                options={{ strings: Info.stack, autoStart: true, loop: true }}
              />
            </span>
          </div>
          <div className="text-textColor text-xl font-semibold my-8  lg-mx:my-0 text-justify w-[90%] sm-mx:text-sm  xs-mx:text-xs lg-mx:text-base xsm-mx:text-[27px] ">
            {Info.bio}
          </div>
          <div className="flex gap-3">
            <Button
              component="a"
              href="https://github.com/aavdisd07/All-My-Certifications-/blob/main/Avantika_Resume.pdf"
              target="_blank"
              className="focus-visible:!outline-none !text-white !w-fit xs-mx:!w-[46%]"
              size={btn}
              variant="filled"
              color="#9F6BA0"
            >
              Check Resume
            </Button>
            <Button
              component="a"
              href="Avantika_Resume.pdf"
              download="AvantikaDeshmukhResume"
              className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-[46%]"
              size={btn}
              variant="outline"
              color="#9F6BA0 "
              rightSection={<IconDownload size={20} />}
            >
              Download
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center h-fit w-fit rounded-full bs:mr-10">
          <NeonGradientCard className="w-[320px] h-[320px] lg-mx:w-64 xsm-mx:w-56 xsm-mx:h-56 lg-mx:h-64 items-center justify-center text-center">
            <img
              ref={imageRef} // Set the ref on the image
              className="object-cover rounded-full w-full h-full"
              src={myImage}
              alt="mypic"
              draggable={false} // Disable dragging
            />
          </NeonGradientCard>
        </div>
      </div>
      <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
