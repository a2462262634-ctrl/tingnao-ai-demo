import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { AnimatePresence, motion as fm } from "framer-motion";
import clsx from "clsx";
import svgPaths from "./svg-0iqufmq4sg";
import { HoverCard, Video3D } from "../components/animations";
import { MindMappingIcon, DataArrivalIcon, FormIcon, MessageSuccessIcon, PeopleSpeakIcon, EarthIcon, DataArrivalIcon2, WalletIcon, FeatureCheckIcon, DownloadIcon, ScanIcon } from "../app/components/icons";
import imgImage99 from "figma:asset/4dde9044c371aef63f51c1b77f36e25f8321c0b6.png";
import imgEllipse5567 from "figma:asset/8b9b10595cadc9f4f69d31afb5b0127b73ef6efd.png";
import imgImage135 from "../assets/样机new.png";
import img from "figma:asset/3377c2a869fa6716391d4f24ede0493f7837a5c7.png";
import img1 from "figma:asset/c7942b818b5ed9f5a950dcb1bff2eec125b6a11d.png";
import img2 from "figma:asset/778a0d694c704f74848c09b01ae9f34c07306345.png";
import img3 from "figma:asset/acc3348aeecaffa88a7df12fbad6945ca27a3ad6.png";
import img4 from "figma:asset/686ca0795e96f80058bf0bdc3985b67e20b4fd18.png";
import img5 from "figma:asset/27358daec38e46f90f81785b3f16c2d210f359a7.png";
import imgImage112 from "../assets/辅助学习.png";
import imgMeeting from "../assets/会议记录.png";
import imgSales from "../assets/销售通话.png";
import imgMultiDevice from "../assets/多端1.png";
import imgImage20 from "figma:asset/a04f4a80310edd6b390f3eda949ed410d8e38b8f.png";
import imgImage43 from "figma:asset/d61b776c7a548b6aa297e5c783354db157834759.png";
import imgMiniProgram from "../assets/小程序.png";
import imgAndroidQr from "../assets/安卓端.png";
import imgIos from "../assets/ios.png";
import imgImage119 from "figma:asset/20acfa273bdbbbcdff1b2151c26bb8384452a4ac.png";
import img88Ffa0Bdd326E11398186A292Fef34A71 from "figma:asset/b3e20b54ab3d82805eff22408cf88d412f2b0a28.png";
import imgImage136 from "figma:asset/d8c3d8df2337fa0c01da30b422b3f54ab5ebd476.png";
import imgImage45 from "figma:asset/eaf857922a37f5fa0901126672ef6d3b3b4120d7.png";
import imgImage46 from "figma:asset/f266a447fc86466c02a3550b1bfc38f1a18e50f2.png";
import imgImage47 from "figma:asset/ac3eefcfa5a3049d8ed9230860d9c21735c52590.png";
import imgContentCreation from "../assets/内容创作.png";
import imgImage48 from "figma:asset/11eba6f21d8dc97aa4c1daa89bb862d4d81aeb82.png";
import imgAiQa from "../assets/AI问答.png";
import imgAiSummary from "../assets/AI智能总结.png";
import imgMindMap from "../assets/思维导图.png";
type BackgroundImage2Props = {
  text: string;
  additionalClassNames?: string;
  buttonClassNames?: string;
  textClassNames?: string;
};

function BackgroundImage2({ children, text, additionalClassNames = "", buttonClassNames = "", textClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  const handleClick = () => {
    if (text === "免费使用" || text === "立即使用") {
      window.location.href = "https://itingnao.com/home";
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={clsx("h-[40px] relative rounded-[8px] shrink-0 overflow-visible bg-transparent", buttonClassNames)}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      variants={{
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.9, transition: { duration: 0.1 } }
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-[8px] z-[1] pointer-events-none"
        style={{ background: "rgba(44, 111, 251, 0.5)" }}
        variants={{
          initial: { scale: 0.8, opacity: 0 },
          tap: { 
            scale: 1.8, 
            opacity: 0,
            transition: { duration: 0.25, ease: "easeOut" }
          }
        }}
        transition={{ duration: 0 }}
      />
      <motion.div 
        className={clsx("relative rounded-[8px] h-full flex items-center justify-center px-[20px] py-[5px] z-10 overflow-hidden", additionalClassNames)}
        style={{ backgroundColor: "#242424" }}
        variants={{
          hover: { backgroundColor: "#000000" },
          tap: { backgroundColor: "#0f67fe" }
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 rounded-[8px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
        />
        <p className={clsx("font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[#f8f8f8] text-[16px] text-center z-10", textClassNames)}>{text}</p>
      </motion.div>
    </motion.button>
  );
}
type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage11Props>) {
  return (
    <div className={clsx("pointer-events-none relative rounded-[8px] shrink-0 size-[68px] flex flex-col justify-center items-center p-[4px] gap-[10px] border border-[#d3e4ff] bg-white group-hover:z-50 transition-transform duration-300 group-hover:scale-[4] origin-center", additionalClassNames)}>
      <div className="relative size-full overflow-hidden rounded-[4px]">{children}</div>
    </div>
  );
}
type BackgroundImage10Props = {
  additionalClassNames?: string;
};

function BackgroundImage10({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage10Props>) {
  return (
    <div className={clsx("flex flex-row items-center justify-center size-full", additionalClassNames)}>
      <div className="content-stretch flex gap-[16px] items-center justify-center p-[26.9px] relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage9Props = {
  additionalClassNames?: string;
};

function BackgroundImage9({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage9Props>) {
  return (
    <HoverCard className={clsx("bg-white col-1 justify-self-stretch relative rounded-[12px] self-stretch shrink-0 overflow-visible hover:z-10 shadow-[0px_3px_32px_0px_rgba(0,0,0,0.05)]", additionalClassNames)} hoverY={-4}>
      <BackgroundImage10 additionalClassNames="overflow-clip rounded-[inherit]">{children}</BackgroundImage10>
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </HoverCard>
  );
}
type BackgroundImage8Props = {
  additionalClassNames?: string;
};

function BackgroundImage8({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage8Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-85.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.16667 3.16667">
          {children}
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <HoverCard className="group bg-white flex-[1_0_0] h-[201px] min-h-[201px] min-w-px relative rounded-[12px] shadow-[0px_2px_44px_0px_rgba(0,0,0,0.05)]" hoverY={-6}>
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[26.9px] relative size-full">{children}</div>
      </div>
    </HoverCard>
  );
}
type VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function VectorBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorBackgroundImageProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.58333 7.58333">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Frame1940699514BackgroundImage() {
  return (
    <div className="h-[18.547px] relative shrink-0 w-0">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 18.5469">
          <path d="M0.5 0V18.5469" id="Vector 18" stroke="var(--stroke-0, white)" strokeOpacity="0.2" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ additionalClassNames = "" }: BackgroundImage6Props) {
  return (
    <div className={clsx("absolute inset-0 overflow-hidden", additionalClassNames)}>
      <img alt="" className="absolute h-[100.34%] left-0 max-w-none top-[-0.34%] w-full" src={imgImage119} />
    </div>
  );
}

function ScanCodeBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <VectorBackgroundImage additionalClassNames="inset-[12.5%_68.75%_68.75%_12.5%]">
        <path d={svgPaths.p1223f600} id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="round" strokeWidth="2" />
      </VectorBackgroundImage>
      <VectorBackgroundImage additionalClassNames="inset-[68.75%_68.75%_12.5%_12.5%]">
        <path d={svgPaths.ped5c880} id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="round" strokeWidth="2" />
      </VectorBackgroundImage>
      <VectorBackgroundImage additionalClassNames="inset-[68.75%_12.5%_12.5%_68.75%]">
        <path d={svgPaths.p166dd000} id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="round" strokeWidth="2" />
      </VectorBackgroundImage>
      <VectorBackgroundImage additionalClassNames="inset-[12.5%_12.5%_68.75%_68.75%]">
        <path d={svgPaths.p124955c0} id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="round" strokeWidth="2" />
      </VectorBackgroundImage>
      <div className="absolute bottom-1/2 left-[20.84%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.17px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 2.33333">
            <path d="M1.16667 1.16667H17.5" id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ImageBackgroundImage1({ additionalClassNames = "" }: { additionalClassNames?: string }) {
  return (
    <BackgroundImage11 additionalClassNames={additionalClassNames}>
      <img alt="" className="block w-full h-full object-contain" src={imgIos} />
    </BackgroundImage11>
  );
}
type BackgroundImageAndText7Props = {
  text: string;
};

function BackgroundImageAndText7({ text }: BackgroundImageAndText7Props) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.5] not-italic relative shrink-0">
      <p className="font-harmony font-medium relative shrink-0 text-[#191f33] text-[20px] text-center">{text}</p>
      <div className="content-stretch flex font-harmony font-normal gap-[11.208px] items-center relative shrink-0 text-[17.933px] text-white">
        <p className="relative shrink-0">{"🌟"}</p>
        <p className="relative shrink-0">{"🌟"}</p>
        <p className="relative shrink-0">{"🌟"}</p>
        <p className="relative shrink-0">{"🌟"}</p>
        <p className="relative shrink-0">{"🌟"}</p>
      </div>
    </div>
  );
}
function ImageBackgroundImage({ src }: { src: string }) {
  return (
    <div className="relative rounded-[112.084px] shrink-0 size-[36px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={src} />
    </div>
  );
}
type BackgroundImage5Props = {
  text: string;
  text1: string;
  title: string;
  avatar: string;
};

function BackgroundImage5({ text, text1, title, avatar }: BackgroundImage5Props) {
  return (
    <BackgroundImage7>
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.5] not-italic relative shrink-0">
        <p className="font-harmony font-medium relative shrink-0 text-[#191f33] text-[16px] text-center">{title}</p>
        <div className="content-stretch flex font-harmony font-normal gap-[11.208px] items-center relative shrink-0 text-[17.933px] text-white">
          <p className="relative shrink-0">{"🌟"}</p>
          <p className="relative shrink-0">{"🌟"}</p>
          <p className="relative shrink-0">{"🌟"}</p>
          <p className="relative shrink-0">{"🌟"}</p>
          <p className="relative shrink-0">{"🌟"}</p>
        </div>
      </div>
      <p className="font-harmony font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#4A4A4A] text-[14px] w-[min-content] whitespace-pre-wrap">{text}</p>
      <div className="flex items-center gap-[12px]">
        <ImageBackgroundImage src={avatar} />
        <p className="font-harmony font-normal leading-[1.5] not-italic relative shrink-0 text-[15.692px] text-[#B2B2B2]">{text1}</p>
      </div>
    </BackgroundImage7>
  );
}

type BackgroundImageAndText6Props = {
  text: string;
};

function BackgroundImageAndText6({ text }: BackgroundImageAndText6Props) {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[100px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[42px] py-[4px] relative size-full">
          <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[#242424] text-[16px] text-center">{text}</p>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndText5Props = {
  text: string;
};

function BackgroundImageAndText5({ text }: BackgroundImageAndText5Props) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <BackgroundImageAndText3 text="教学笔记" />
      <p className="font-pingfang font-normal leading-[normal] not-italic relative shrink-0 text-[#939393] text-[14px] w-full whitespace-pre-wrap">{text}</p>
    </div>
  );
}

function BackgroundImage4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[22px]" data-name="💼">
        <img alt="" className="absolute block max-w-none size-full" height="22" src={img4} width="22" />
      </div>
      <BackgroundImageAndText text="常务会议" />
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <BackgroundImageAndText3 text="教学笔记" />
      <p className="font-pingfang font-normal leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] w-full whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[22px]" data-name="✏">
        <img alt="" className="absolute block max-w-none size-full" height="22" src={img3} width="22" />
      </div>
      <p className="font-pingfang font-medium leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] w-[64px] whitespace-pre-wrap">{text}</p>
    </div>
  );
}

function BackgroundImage3() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <img alt="" className="absolute block max-w-none size-full" height="22" src={img2} width="22" />
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[22px]" data-name="💻">
          <img alt="" className="absolute block max-w-none size-full" height="22" src={img1} width="22" />
        </div>
        <p className="font-pingfang font-medium leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] w-[64px] whitespace-pre-wrap">{"工作例会"}</p>
      </div>
      <p className="font-pingfang font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[22px]" data-name="📝">
          <img alt="" className="absolute block max-w-none size-full" height="22" src={img} width="22" />
        </div>
        <BackgroundImageAndText text="课堂笔记" />
      </div>
      <p className="font-pingfang font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-pingfang font-medium leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] w-full whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type Frame1940699700VectorBackgroundImage2Props = {
  additionalClassNames?: string;
};

function Frame1940699700VectorBackgroundImage2({ additionalClassNames = "" }: Frame1940699700VectorBackgroundImage2Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-8.16%_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.125">
          <path d="M0.5 6.625V0.5" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" strokeLinecap="square" />
        </svg>
      </div>
    </div>
  );
}
type Frame1940699700VectorBackgroundImage1Props = {
  additionalClassNames?: string;
};

function Frame1940699700VectorBackgroundImage1({ additionalClassNames = "" }: Frame1940699700VectorBackgroundImage1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_-4.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 1">
          <path d="M0.5 0.5H12.1667" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" strokeLinecap="square" />
        </svg>
      </div>
    </div>
  );
}
type Frame1940699700VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Frame1940699700VectorBackgroundImage({ additionalClassNames = "" }: Frame1940699700VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector" />
      </svg>
    </div>
  );
}
type Frame1940699698VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Frame1940699698VectorBackgroundImage({ additionalClassNames = "" }: Frame1940699698VectorBackgroundImageProps) {
  return (
    <BackgroundImage8 additionalClassNames={additionalClassNames}>
      <path d={svgPaths.pcbda00} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
    </BackgroundImage8>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage1({ text, text1, additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <p className={clsx("font-harmony font-normal leading-[0] not-italic relative text-[#242424] text-[0px] text-[14px] md:text-[18px] flex-1 min-w-0 w-full", additionalClassNames)}>
      <span className="font-harmony font-bold font-[500] leading-[1.5] text-[#242424]">{text}</span>
      <span className="leading-[1.5]">{text1}</span>
    </p>
  );
}

function BackgroundImage() {
  return (
    <motion.button
      type="button"
      onClick={() => window.location.href = "https://itingnao.com/home"}
      className="h-[54px] relative rounded-[12px] shrink-0 overflow-visible bg-transparent"
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      variants={{
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.9, transition: { duration: 0.1 } }
      }}
    >
      <motion.div
        className="absolute inset-x-[6px] inset-y-[2px] rounded-[12px] z-0 translate-y-[10px]"
        style={{
          background: "linear-gradient(90deg, #0f67fe 0%, #2ad1f8 25%, #667eea 50%, #4facfe 75%, #0f67fe 100%)",
          backgroundSize: "200% 100%",
          filter: "blur(12px)",
          boxShadow: "0 12px 36px rgba(15, 103, 254, 0.12), 0 24px 70px rgba(42, 209, 248, 0.08), 0 36px 110px rgba(102, 126, 234, 0.06)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-[12px] z-[1] pointer-events-none"
        style={{ background: "rgba(44, 111, 251, 0.5)" }}
        variants={{
          initial: { scale: 0.8, opacity: 0 },
          tap: { 
            scale: 1.8, 
            opacity: 0,
            transition: { duration: 0.25, ease: "easeOut" }
          }
        }}
        transition={{ duration: 0 }}
      />
      <motion.div 
        className="relative rounded-[12px] h-full flex items-center justify-center px-[32px] py-[7px] z-10 overflow-hidden"
        style={{ backgroundColor: "#242424" }}
        variants={{
          hover: { backgroundColor: "#000000" },
          tap: { backgroundColor: "#0f67fe" }
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 rounded-[12px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] z-20 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(90deg, transparent 0%, #2ad1f8 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "0% 0%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "200% 0%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[#f8f8f8] text-[24px] text-center z-10">{"免费使用"}</p>
      </motion.div>
    </motion.button>
  );
}

function ScrollReveal({ children, className, delay = 0, direction = "up" }: { children: React.ReactNode; className?: string; delay?: number; direction?: "up" | "down" | "left" | "right" }) {
  const dirMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: dirMap[direction].y, x: dirMap[direction].x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function LazyVideo({ src, className, ...props }: React.VideoHTMLAttributes<HTMLVideoElement>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const videoNode = videoRef.current;
    if (!videoNode) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          setIsInView(true);
        } else {
          setIsInView(false);
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1, rootMargin: "1200px 0px" },
    );

    observer.observe(videoNode);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !isInView) return;
    const videoNode = videoRef.current;
    if (!videoNode) return;

    videoNode.play().catch(() => {});
  }, [shouldLoad, isInView]);

  useEffect(() => {
    if (!shouldLoad) return;
    const videoNode = videoRef.current;
    if (!videoNode) return;

    const handleCanPlay = () => {
      if (!isInView) return;
      videoNode.play().catch(() => {});
    };

    videoNode.addEventListener("canplay", handleCanPlay);
    return () => {
      videoNode.removeEventListener("canplay", handleCanPlay);
    };
  }, [shouldLoad, isInView]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload={shouldLoad ? "auto" : "none"}
      {...props}
    />
  );
}

function HeroVideo({ src, className, ...props }: React.VideoHTMLAttributes<HTMLVideoElement>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoNode = videoRef.current;
    if (!videoNode) return;
    videoNode.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      {...props}
    />
  );
}

const reviewsData = [
  {
    review: "\u201c会议记录从2小时缩短到5分钟，关键信息一目了然，团队协作效率提升了3倍\u201d",
    user: "产品经理·张明",
    title: "会议效率翻倍",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    review: "\u201c上课再也不用手忙脚乱记笔记了，课后复习有AI总结的重点，学习效率提高太多了\u201d",
    user: "大学生·李悦",
    title: "学习更轻松",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    review: "\u201c客户沟通内容自动整理，跟进提醒及时，成单率提升了40%，真的太好用了\u201d",
    user: "销售总监·王强",
    title: "每周节省10小时",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    review: "\u201c灵感随时记录，AI帮我整理成文章大纲，创作效率提升5倍，再也不怕灵感溜走\u201d",
    user: "自媒体博主·陈思",
    title: "灵感不错过",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    review: "\u201c多人会议也能准确识别每个人的发言，会后整理纪要只需3分钟，太省心了\u201d",
    user: "行政主管·刘芳",
    title: "多人会议无忧",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    review: "\u201c专业术语识别很准确，方言也能转写，团队成员都在用，强烈推荐\u201d",
    user: "技术总监·赵伟",
    title: "准确率高达98%",
    avatar: "https://i.pravatar.cc/150?img=6"
  },
  {
    review: "\u201c培训课程自动转写和总结，新员工学习资料整理效率提升了10倍\u201d",
    user: "培训经理·周敏",
    title: "培训资料速成",
    avatar: "https://i.pravatar.cc/150?img=7"
  },
  {
    review: "\u201c采访录音一键转文字，AI提炼核心观点，稿件产出速度快了一倍\u201d",
    user: "记者·林浩",
    title: "稿件产出提速",
    avatar: "https://i.pravatar.cc/150?img=8"
  },
  {
    review: "\u201c手机录音，电脑查看，云端同步，随时随地都能访问，工作流程太顺畅了\u201d",
    user: "咨询顾问·孙丽",
    title: "多端同步超方便",
    avatar: "https://i.pravatar.cc/150?img=9"
  },
  {
    review: "\u201c研讨会内容自动归档成知识库，随时可以搜索查阅，知识管理太高效了\u201d",
    user: "研究员·吴刚",
    title: "知识管理高效",
    avatar: "https://i.pravatar.cc/150?img=10"
  },
  {
    review: "\u201c电话会议实时转写，异地团队协作更顺畅，沟通成本降低了50%\u201d",
    user: "项目经理·郑洁",
    title: "远程协作顺畅",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    review: "\u201c对着录音直接提问，AI秒回答，查找信息比翻记录快太多了\u201d",
    user: "律师·黄磊",
    title: "AI问答太智能",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
];

const ReviewRowContent = () => (
  <>
    {reviewsData.map((item, index) => (
      <BackgroundImage5
        key={index}
        text={item.review}
        text1={item.user}
        title={item.title}
        avatar={item.avatar}
      />
    ))}
  </>
);

export default function Component() {
  const [isSceneOpen, setIsSceneOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const templateSectionRef = useRef<HTMLDivElement | null>(null);
  const [isTemplateInView, setIsTemplateInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const node = templateSectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTemplateInView(true);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // 视频配置 - 请将视频文件放在 public/videos/ 目录下
  const heroVideoUrl = "/videos/hero.mp4"; // 首页主视频
  const transcribeVideoUrl = "/videos/transcribe.mp4"; // 实时转写视频
  const transcribeVideoPoster = imgMeeting;
  const [activeScenario, setActiveScenario] = useState(0);
  const [summaryCarouselIndex, setSummaryCarouselIndex] = useState(0);
  const summaryCarouselImages = [imgAiSummary, imgMindMap];
  const summaryCarouselDurations = [7000, 5000];
  const scenarios = [
    {
      label: "会议记录",
      title: "会议记录",
      description: "实时记录会议内容并自动转写，快速生成会议纪要和待办事项",
      features: ["实时转写", "自动纪要", "团队协作", "知识管理"],
      image: imgMeeting,
    },
    {
      label: "学习辅助",
      title: "学习辅助",
      description: "课堂与自学内容自动转写与总结，重点清晰，复习更高效",
      features: ["课堂转写", "重点提炼", "知识回顾", "资料整理"],
      image: imgImage112,
    },
    {
      label: "销售通话",
      title: "销售通话",
      description: "通话内容自动沉淀，关键信息可追溯，提升跟进效率",
      features: ["通话转写", "客户要点", "机会跟进", "话术复盘"],
      image: imgSales,
    },
    {
      label: "内容创作",
      title: "内容创作",
      description: "灵感与素材自动整理，快速生成大纲，创作更顺畅",
      features: ["灵感记录", "结构大纲", "素材归档", "内容整理"],
      image: imgContentCreation,
    },
  ];
  const currentScenario = scenarios[activeScenario];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSummaryCarouselIndex((prev) => (prev + 1) % summaryCarouselImages.length);
    }, summaryCarouselDurations[summaryCarouselIndex]);

    return () => window.clearTimeout(timer);
  }, [summaryCarouselDurations, summaryCarouselImages.length, summaryCarouselIndex]);

  useEffect(() => {
    summaryCarouselImages.forEach((imageSrc) => {
      const image = new Image();
      image.src = imageSrc;
    });
  }, [summaryCarouselImages]);

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="首页-第四版-最新">
      <div className="bg-white content-stretch flex flex-col gap-[40px] md:gap-[80px] items-center pb-[40px] md:pb-[72px] pt-[72px] relative shrink-0 w-full">
        <div className="absolute contents top-[-154.61px]">
          <div className="absolute h-[294.663px] left-1/2 top-[-154.61px] w-[1351.436px] -translate-x-1/2">
            <div className="absolute inset-[-40.72%_-8.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1591.44 534.663">
                <g id="Group 1940698527">
                  <g filter="url(#filter0_f_1_820)" id="Ellipse 40">
                    <ellipse cx="362.223" cy="267.332" fill="url(#paint0_linear_1_820)" rx="242.223" ry="147.332" />
                  </g>
                  <g filter="url(#filter1_f_1_820)" id="Ellipse 41">
                    <ellipse cx="1173.91" cy="244.118" fill="var(--fill-0, #BBF1FF)" rx="297.521" ry="114.803" />
                  </g>
                  <g filter="url(#filter2_f_1_820)" id="Ellipse 42">
                    <ellipse cx="767.879" cy="275.125" fill="var(--fill-0, #C9E3FF)" rx="220.76" ry="116.692" />
                  </g>
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="534.663" id="filter0_f_1_820" width="724.445" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_820" stdDeviation="60" />
                  </filter>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="469.606" id="filter1_f_1_820" width="835.043" x="756.393" y="9.31479">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_820" stdDeviation="60" />
                  </filter>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="473.385" id="filter2_f_1_820" width="681.52" x="427.119" y="38.4327">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_820" stdDeviation="60" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_820" x1="362.936" x2="361.821" y1="309.819" y2="414.659">
                    <stop stopColor="#D9EAFF" />
                    <stop offset="0.412203" stopColor="#F0F8FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "backdrop-blur-md" : ""}`}
          style={{
            background: isScrolled
              ? "linear-gradient(270deg, rgba(255, 255, 255, 0.00) -0.77%, rgba(255, 255, 255, 0.50) 49.59%, rgba(255, 255, 255, 0.00) 99.95%)"
              : "transparent",
            backdropFilter: isScrolled ? "blur(20px)" : "none",
          }}
        >
          <div className="content-stretch flex h-[64px] md:h-[72px] flex-col md:flex-row gap-4 md:gap-0 items-center justify-between relative shrink-0 w-full max-w-full md:max-w-[1280px] mx-auto px-[20px] md:px-[20px] py-4 md:py-0">
          <div className="content-stretch flex flex-[1_0_0] gap-0 items-center min-h-px min-w-px relative w-full md:w-auto justify-between md:justify-start">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[32px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="url(#paint0_linear_28133_153)" />
                  <path d="M12.2822 6.40039C13.9889 6.40039 15.3721 7.78359 15.3721 9.49023V16.332C15.3676 16.6966 15.0717 16.9911 14.7061 16.9912C14.3403 16.9912 14.0436 16.6967 14.0391 16.332V13.335C14.0391 12.9664 13.7397 12.667 13.3711 12.667C13.0027 12.6671 12.7041 12.9665 12.7041 13.335V15.1914C12.7041 15.5599 12.4056 15.8593 12.0371 15.8594C11.6685 15.8594 11.3701 15.56 11.3701 15.1914V17.0195C11.3703 16.6511 11.6686 16.3525 12.0371 16.3525C12.4055 16.3526 12.704 16.6511 12.7041 17.0195V20.7051C12.7043 21.0734 13.0028 21.3719 13.3711 21.3721C13.7396 21.3721 14.0389 21.0735 14.0391 20.7051V18.1416C14.0444 17.7776 14.3408 17.4844 14.7061 17.4844C15.0712 17.4845 15.3667 17.7777 15.3721 18.1416V22.3203C15.3723 22.3377 15.373 22.3556 15.373 22.373C15.373 24.304 13.7293 25.8691 11.7021 25.8691C10.0219 25.8691 8.60552 24.7939 8.16992 23.3262C6.24961 22.8683 4.81055 20.9848 4.81055 18.7314C4.81059 17.3492 5.35195 16.1061 6.21387 15.2461C6.01949 14.7133 5.9131 14.1319 5.91309 13.5234C5.91309 11.306 7.33241 9.44984 9.2334 8.98047C9.47636 7.51633 10.7492 6.40041 12.2822 6.40039ZM19.7393 6.40039C21.2721 6.4006 22.5441 7.5165 22.7871 8.98047C24.6883 9.4497 26.1084 11.3058 26.1084 13.5234C26.1084 14.1319 26.001 14.7133 25.8066 15.2461C26.6687 16.1061 27.2109 17.349 27.2109 18.7314C27.2109 20.9848 25.7719 22.8683 23.8516 23.3262C23.416 24.7939 21.9995 25.869 20.3193 25.8691C18.2922 25.8691 16.6484 24.304 16.6484 22.373V9.5625H16.6494C16.6489 9.53848 16.6484 9.51439 16.6484 9.49023C16.6484 7.78359 18.0326 6.40039 19.7393 6.40039ZM16.8447 21.1191C16.8961 21.1705 16.9575 21.2107 17.0234 21.2432C16.9576 21.2107 16.8961 21.1705 16.8447 21.1191ZM17.7666 21.1396V21.1406V21.1396ZM16.6562 9.72754C16.6517 9.75903 16.6494 9.79146 16.6494 9.82422V20.6465H16.6504V16.1494C16.6504 15.7808 16.9488 15.4814 17.3174 15.4814C17.6784 15.4815 17.9726 15.7687 17.9844 16.127V19.3125C17.9846 19.6809 18.2839 19.9795 18.6523 19.9795C19.0206 19.9793 19.3191 19.6807 19.3193 19.3125V17.252C19.3194 16.8834 19.6178 16.585 19.9863 16.585C20.3549 16.585 20.6533 16.8834 20.6533 17.252V15.4238C20.6533 15.7924 20.3549 16.0918 19.9863 16.0918C19.6178 16.0918 19.3193 15.7924 19.3193 15.4238V11.9424C19.3193 11.5739 19.0208 11.2746 18.6523 11.2744C18.2838 11.2744 17.9844 11.5738 17.9844 11.9424V14.3438C17.9725 14.7019 17.6784 14.9882 17.3174 14.9883C16.9488 14.9883 16.6504 14.6898 16.6504 14.3213V9.82422C16.6504 9.79141 16.6527 9.75908 16.6572 9.72754H16.6562ZM21.3223 13.6543C20.9537 13.6543 20.6543 13.9527 20.6543 14.3213V18.8184C20.6543 19.1869 20.9537 19.4863 21.3223 19.4863C21.6906 19.4861 21.9893 19.1868 21.9893 18.8184V14.3213C21.9892 13.9529 21.6906 13.6545 21.3223 13.6543ZM10.7012 12.9287C10.3329 12.9289 10.0343 13.2274 10.0342 13.5957V18.0938C10.0344 18.462 10.3329 18.7605 10.7012 18.7607C11.0696 18.7607 11.3689 18.4621 11.3691 18.0938V13.5957C11.369 13.2272 11.0697 12.9287 10.7012 12.9287ZM17.7891 9.35254C17.8192 9.38267 17.8462 9.41576 17.8701 9.45117C17.9079 9.50705 17.9346 9.56956 17.9541 9.63574C17.947 9.61177 17.9422 9.58722 17.9326 9.56445C17.882 9.4445 17.7971 9.34256 17.6904 9.27051L17.7891 9.35254ZM17.0889 9.19629C17.107 9.18969 17.1257 9.18472 17.1445 9.17969C17.1257 9.18471 17.107 9.18971 17.0889 9.19629ZM17.4512 9.16992H17.4521L17.3174 9.15625L17.4512 9.16992ZM17.2383 9.16113C17.2062 9.16489 17.175 9.17155 17.1445 9.17969C17.175 9.17153 17.2062 9.16491 17.2383 9.16113Z" fill="white" style={{ fill: "white", fillOpacity: 1 }} />
                  <defs>
                    <linearGradient id="paint0_linear_28133_153" x1="32" y1="16" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                      <stop offset="0.0017" stopColor="#37A9FF" />
                      <stop offset="0.999" stopColor="#0F67FE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <p className="font-harmony font-bold font-[700] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[22px] text-center">听脑AI</p>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="flex items-center justify-center size-[36px] rounded-[8px] border border-[#e9e9e9] bg-white/70"
              >
                {isMobileMenuOpen ? (
                  <svg className="size-[18px]" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#191F33" strokeLinecap="round" strokeWidth="2" />
                    <path d="M6 6L18 18" stroke="#191F33" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                ) : (
                  <svg className="size-[18px]" viewBox="0 0 24 24" fill="none">
                    <path d="M4 7H20" stroke="#191F33" strokeLinecap="round" strokeWidth="2" />
                    <path d="M4 12H20" stroke="#191F33" strokeLinecap="round" strokeWidth="2" />
                    <path d="M4 17H20" stroke="#191F33" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden md:flex flex-[1_0_0] min-h-px min-w-px relative">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[20px] lg:gap-[40px] items-center justify-center px-[32px] relative w-full">
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      className="content-stretch flex gap-[6px] items-center justify-center relative"
                      onClick={() => setIsSceneOpen((prev) => !prev)}
                    >
                      <p className="font-harmony font-normal font-[400] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[14px] text-center">使用场景</p>
                      <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 12 12">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#191F33" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                      </svg>
                    </button>
                    <div
                      className={clsx(
                        "absolute left-1/2 mt-[10px] -translate-x-1/2 w-[140px] rounded-[10px] bg-white shadow-[0px_6px_24px_0px_rgba(0,0,0,0.08)] border border-[#e9e9e9] flex flex-col gap-[8px] py-[10px] px-[12px] transition-all duration-200 z-[50]",
                        isSceneOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none",
                      )}
                    >
                      <p className="font-harmony font-normal text-[14px] text-[#191f33] cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/official"}>办公</p>
                      <p className="font-harmony font-normal text-[14px] text-[#191f33] cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/education"}>教育</p>
                      <p className="font-harmony font-normal text-[14px] text-[#191f33] cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/sale"}>销售</p>
                      <p className="font-harmony font-normal text-[14px] text-[#191f33] cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/media"}>自媒体</p>
                    </div>
                  </div>
                  <p className="font-harmony font-normal font-[400] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[14px] text-center cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/activity"}>定价</p>
                  <p className="font-harmony font-normal leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[14px] text-center cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/open.html"}>企业解决方案</p>
                  <p className="font-harmony font-normal leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[14px] text-center cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/tincard"}>TinCard录音卡</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
             <BackgroundImage2 text="免费使用" additionalClassNames="px-[24px] py-[6px]" />
          </div>
        </div>
        <div
          className={clsx(
            "md:hidden w-full max-w-[1280px] mx-auto overflow-hidden transition-all duration-200",
            isMobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
          )}
        >
          <div className="w-full rounded-[12px] border border-[#e9e9e9] bg-white/90 backdrop-blur-md px-[16px] py-[12px] flex flex-col gap-[12px] text-[#242424]">
            <div className="flex flex-col gap-[8px] items-start">
              <p className="font-harmony font-bold font-[700] text-[14px] text-left">使用场景</p>
              <div className="flex flex-col gap-[6px]">
                <p className="font-harmony font-normal text-[14px] cursor-pointer text-left" onClick={() => { window.location.href = "https://itingnao.com/official"; setIsMobileMenuOpen(false); }}>办公</p>
                <p className="font-harmony font-normal text-[14px] cursor-pointer text-left" onClick={() => { window.location.href = "https://itingnao.com/education"; setIsMobileMenuOpen(false); }}>教育</p>
                <p className="font-harmony font-normal text-[14px] cursor-pointer text-left" onClick={() => { window.location.href = "https://itingnao.com/sale"; setIsMobileMenuOpen(false); }}>销售</p>
                <p className="font-harmony font-normal text-[14px] cursor-pointer text-left" onClick={() => { window.location.href = "https://itingnao.com/media"; setIsMobileMenuOpen(false); }}>自媒体</p>
              </div>
            </div>
            <div className="h-px bg-[#e9e9e9]" />
            <p className="font-harmony font-normal text-[14px] cursor-pointer" onClick={() => { window.location.href = "https://itingnao.com/activity"; setIsMobileMenuOpen(false); }}>定价</p>
            <p className="font-harmony font-normal text-[14px] cursor-pointer" onClick={() => { window.location.href = "https://itingnao.com/open.html"; setIsMobileMenuOpen(false); }}>企业解决方案</p>
            <p className="font-harmony font-normal text-[14px] cursor-pointer" onClick={() => { window.location.href = "https://itingnao.com/tincard"; setIsMobileMenuOpen(false); }}>TinCard录音卡</p>
          </div>
        </div>
        </div>
        <div className="content-stretch flex flex-col gap-[54px] md:gap-[100px] items-center relative shrink-0 w-full max-w-[1280px] mx-auto px-[20px] mt-[80px]">
          <div className="content-stretch flex flex-col gap-[24px] md:gap-[40px] items-center relative shrink-0 w-full max-w-[1164px]">
              <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 -space-y-[16px]">
              <ScrollReveal>
                <div className="content-stretch flex flex-wrap justify-center font-harmony font-bold gap-[8px] md:gap-[12px] items-center leading-[normal] relative text-[32px] md:text-[54px] text-center md:text-center">
                  <p className="font-harmony font-bold font-[700] relative shrink-0 text-[#191f33]">两小时录音</p>
                  <p className="bg-clip-text bg-gradient-to-b font-harmony font-bold font-[700] relative shrink-0 text-[transparent] to-[#2ad1f8] from-[#0f67fe]">3分钟</p>
                  <p className="font-harmony font-bold font-[700] relative shrink-0 text-[#191f33]">总结</p>
                  <p className="bg-clip-text bg-gradient-to-b font-harmony font-bold font-[700] relative shrink-0 text-[transparent] to-[#2ad1f8] from-[#0f67fe]">10倍</p>
                  <p className="font-harmony font-bold font-[700] relative shrink-0 text-[#191f33]">效率</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
              <p className="font-harmony font-normal leading-[1.5] relative text-[#242424] text-[16px] md:text-[18px] text-center w-full max-w-[680px] whitespace-pre-wrap mt-[32px]">我是你的AI录音助手，通过实时录音转写、AI自动总结，AI随时可问，你的工作和学习时间最多可节省 90% ！</p>
              </ScrollReveal>
            </div>
            <BackgroundImage />
          </div>
          <Video3D className="w-full aspect-video sm:aspect-[16/10] lg:aspect-[21/9] min-[1320px]:w-[1280px] min-[1320px]:h-[720px] min-[1320px]:aspect-auto relative rounded-[12px] md:rounded-[32px] shrink-0 md:aspect-video xl:aspect-video" data-name="80+ 海量智能模板，让每一次记录都更省时间">
            <HeroVideo
              className="absolute inset-0 w-full h-full object-cover rounded-[12px] md:rounded-[32px] z-[1]"
              src={heroVideoUrl}
            />
            <div aria-hidden="true" className="absolute border-[4px] md:border-8 border-solid border-white inset-[-4px] md:inset-[-8px] pointer-events-none rounded-[12px] md:rounded-[40px] shadow-[0px_6px_44px_0px_rgba(0,0,0,0.07)]" />
          </Video3D>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full py-0 md:py-0">
        <div className="flex flex-row items-center justify-center w-full h-auto md:h-full">
          <div className="content-stretch flex flex-col md:flex-row gap-[16px] items-center justify-center px-0 md:px-[20px] xl:px-0 relative w-full max-w-[1280px] mx-auto">
            <ScrollReveal direction="right">
              <p className="font-harmony font-normal leading-[1.5] not-italic relative shrink-0 text-[#242424] text-[16px] md:text-[20px] text-center whitespace-nowrap">深受顶级企业信赖</p>
            </ScrollReveal>
            <div className="h-[clamp(60px,22vw,88px)] md:h-[80px] xl:h-[88px] relative shrink-0 w-full max-w-[1120px] flex-1 min-w-0 overflow-hidden mx-auto" data-name="image 99">
              <div className="flex w-[200%] animate-[scrollLeft_28s_linear_infinite]">
            <div className="h-[clamp(60px,22vw,88px)] md:h-[80px] xl:h-[88px] relative shrink-0 w-1/2">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-full object-contain" src={imgImage99} />
                  </div>
                </div>
            <div className="h-[clamp(60px,22vw,88px)] md:h-[80px] xl:h-[88px] relative shrink-0 w-1/2">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-full object-contain" src={imgImage99} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-auto items-center justify-center pt-0 pb-[40px] md:py-[32px] xl:py-[120px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col-reverse md:flex-col xl:flex-row gap-[40px] md:gap-[72px] h-auto items-start xl:items-center relative rounded-bl-[2px] rounded-br-[2px] rounded-tl-[54px] rounded-tr-[54px] shrink-0 w-full max-w-[1280px] mx-auto px-[20px] md:py-[32px] xl:py-0">
            <div className="content-stretch flex flex-col h-auto gap-[54px] items-start relative shrink-0 w-full md:w-auto md:order-2 xl:order-1">
            <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">
              <ScrollReveal className="w-full md:w-auto">
                <p className="font-harmony font-bold font-[700] leading-[1.5] not-italic relative text-[#242424] text-[20px] md:text-[32px] text-left md:text-left w-full">
                  实时录音转写，
                  <span className="relative inline-block z-10">
                    沟通即记录
                    <svg className="absolute left-0 w-full h-[18px] bottom-0 pointer-events-none -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 150 18">
                      <motion.path
                        d="M3.63748 12.938C6.62628 12.1706 26.0628 9.03958 53.9264 4.8356C63.8677 3.33568 65.3874 3.24936 66.9353 3.11163C68.4833 2.97391 70.0397 2.81999 69.6869 3.59023C66.8544 9.77381 56.304 12.1982 54.6981 13.7985C54.1662 14.3286 55.7459 14.4972 66.781 13.3124C77.8161 12.1276 98.6518 9.63809 110.346 8.30684C123.962 6.87803 128.746 6.69784 135.041 6.57181C138.53 6.52545 142.618 6.51483 146.829 6.50388"
                        fill="none"
                        stroke="url(#paint0_linear_record)"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                        strokeWidth="6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        viewport={{ once: true, amount: 0.6 }}
                      />
                      <defs>
                        <linearGradient id="paint0_linear_record" x1="3.79092" y1="7.41775" x2="146.694" y2="11.3898" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#108BFE" />
                          <stop offset="1" stopColor="#B1F2FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </p>
              </ScrollReveal>
              <div className="content-stretch flex flex-col gap-[12px] md:gap-[18px] items-start relative shrink-0 w-full md:w-[524px]">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full md:w-[525px]">
                  <div className="bg-[#F3F3F3] content-stretch flex items-center justify-center px-[3px] py-[4px] relative rounded-[83.333px] shrink-0 size-[30px]">
                    <MessageSuccessIcon className="relative shrink-0 size-[14px] text-[#242424]" />
                  </div>
                  <BackgroundImage1 text="准确率最高达 98%：" text1="多人会议、专业词语也能稳稳识别" additionalClassNames="text-left md:text-left" />
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full md:w-[478px]">
                  <div className="bg-[#F3F3F3] content-stretch flex items-center justify-center px-[2px] py-[3px] relative rounded-[83.333px] shrink-0 size-[30px]">
                    <PeopleSpeakIcon className="relative shrink-0 size-[14px] text-[#242424]" />
                  </div>
                  <BackgroundImage1 text="自动区分发言人：" text1="智能声文识别，让每段话可追溯" additionalClassNames="text-left md:text-left" />
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full md:w-[455px]">
                  <div className="bg-[#F3F3F3] content-stretch flex flex-col items-center justify-center p-[8.333px] relative rounded-[83.333px] shrink-0 size-[30px]">
                    <EarthIcon className="relative shrink-0 size-[14px] text-[#242424]" />
                  </div>
                  <BackgroundImage1 text="多语言翻译与16+方言：" text1="复杂沟通也能准确转写" additionalClassNames="text-left md:text-left" />
                </div>
              </div>
            </div>
            <BackgroundImage2 text="立即使用" additionalClassNames="px-[24px] py-[6px]" buttonClassNames="self-start" />
          </div>
          <Video3D className="w-full max-w-[682px] md:max-w-none xl:max-w-[682px] relative rounded-[12px] md:rounded-[23.444px] shrink-0 md:order-1 xl:order-2" data-name="80+ 海量智能模板，让每一次记录都更省时间" hoverScale={1}>
            <LazyVideo
              className="w-full h-auto object-contain rounded-[12px] md:rounded-[23.444px] z-[1]"
              poster={transcribeVideoPoster}
              src={transcribeVideoUrl}
            />
          </Video3D>
        </div>
      </div>
      <div className="relative rounded-[44px] shrink-0 w-full">
        <div className="flex flex-col items-center justify-center overflow-visible rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[20px] relative w-full">
            <div className="content-stretch flex flex-col gap-[54px] items-start md:items-center justify-end relative rounded-bl-[4px] rounded-br-[4px] rounded-tl-[54px] rounded-tr-[54px] shrink-0 w-full max-w-[1280px] mx-auto">
              <div className="content-stretch flex flex-col-reverse md:flex-col gap-[54px] md:gap-[40px] xl:gap-[54px] items-start md:items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] md:gap-[24px] items-start md:items-center relative shrink-0">
                  <ScrollReveal>
                    <p className="font-harmony font-bold font-[700] leading-[1.5] not-italic relative text-[#242424] text-[20px] md:text-[32px] text-left md:text-center w-full">
                      AI 智能总结，2小时内容，
                      <span className="relative inline-block z-10">
                        3分钟掌握
                        <svg className="absolute left-0 w-full h-[18px] bottom-0 pointer-events-none -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 150 18">
                          <motion.path
                            d="M3.63748 12.938C6.62628 12.1706 26.0628 9.03958 53.9264 4.8356C63.8677 3.33568 65.3874 3.24936 66.9353 3.11163C68.4833 2.97391 70.0397 2.81999 69.6869 3.59023C66.8544 9.77381 56.304 12.1982 54.6981 13.7985C54.1662 14.3286 55.7459 14.4972 66.781 13.3124C77.8161 12.1276 98.6518 9.63809 110.346 8.30684C123.962 6.87803 128.746 6.69784 135.041 6.57181C138.53 6.52545 142.618 6.51483 146.829 6.50388"
                            fill="none"
                            stroke="url(#paint0_linear_3min)"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                            strokeWidth="6"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            viewport={{ once: true, amount: 0.6 }}
                          />
                          <defs>
                            <linearGradient id="paint0_linear_3min" x1="3.79092" y1="7.41775" x2="146.694" y2="11.3898" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#108BFE" />
                              <stop offset="1" stopColor="#B1F2FF" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </p>
                  </ScrollReveal>
                  <div className="content-center flex flex-wrap gap-[12px] md:gap-[16px] items-center justify-start md:justify-center relative w-full max-w-[864px]">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="bg-[#F3F3F3] content-stretch flex items-center justify-center px-[2px] py-[3px] relative rounded-[83.333px] shrink-0 size-[30px]">
                        <MindMappingIcon className="relative shrink-0 size-[14px] text-[#242424]" />
                      </div>
                      <BackgroundImage1 text="自动生成思维导图：" text1="思路清晰不再混乱" additionalClassNames="text-left md:text-center" />
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="bg-[#F3F3F3] content-stretch flex items-center justify-center p-[3px] relative rounded-[83.333px] shrink-0 size-[30px]">
                        <DataArrivalIcon className="relative shrink-0 size-[14px] text-[#242424]" />
                      </div>
                      <BackgroundImage1 text="待办任务自动提取：" text1="关键行动一目了然" additionalClassNames="text-left md:text-center" />
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="bg-[#F3F3F3] content-stretch flex items-center justify-center p-[3px] relative rounded-[83.333px] shrink-0 size-[30px]">
                        <FormIcon className="relative shrink-0 size-[14px] text-[#242424]" />
                      </div>
                      <BackgroundImage1 text="自动生成表格：" text1="关键信息结构化呈现" additionalClassNames="text-left md:text-center" />
                    </div>
                  </div>
                </div>
                <Video3D className="w-full h-auto relative rounded-[12px] md:rounded-[32px] shrink-0" data-name="80+ 海量智能模板，让每一次记录都更省时间">
                  <div className="w-full h-auto relative rounded-[12px] md:rounded-[32px] overflow-hidden">
                    <img src={summaryCarouselImages[0]} alt="" aria-hidden="true" className="w-full h-auto object-contain opacity-0 pointer-events-none select-none" />
                    <AnimatePresence initial={false} mode="sync">
                      <fm.img
                        key={summaryCarouselImages[summaryCarouselIndex]}
                        src={summaryCarouselImages[summaryCarouselIndex]}
                        alt="智能总结轮播图"
                        className="absolute inset-0 w-full h-full object-contain rounded-[12px] md:rounded-[32px] z-[1]"
                        initial={{ opacity: 0, x: 28 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -28 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </AnimatePresence>
                    <div className="mt-[24px] flex items-center justify-center gap-[8px]">
                      {summaryCarouselImages.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          className={clsx(
                            "h-[8px] rounded-full transition-all duration-300",
                            summaryCarouselIndex === index ? "w-[20px] bg-[#0F67FE]" : "w-[8px] bg-[#D5DCE8]",
                          )}
                          onClick={() => setSummaryCarouselIndex(index)}
                          aria-label={`切换到第${index + 1}张`}
                        />
                      ))}
                    </div>
                  </div>
                </Video3D>
              </div>
              <BackgroundImage2 text="立即使用" additionalClassNames="h-full px-[23.704px] py-[5.185px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-auto items-center justify-between overflow-clip pt-[54px] pb-[40px] md:py-[80px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col md:flex-col xl:flex-row gap-[40px] md:gap-[72px] h-auto items-start xl:items-center relative rounded-bl-[2px] rounded-br-[2px] rounded-tl-[54px] rounded-tr-[54px] shrink-0 w-full max-w-[1280px] mx-auto px-[20px]">
          <Video3D className="w-full max-w-[682px] md:max-w-none xl:max-w-[682px] relative rounded-[12px] md:rounded-[22px] shrink-0" data-name="80+ 海量智能模板，让每一次记录都更省时间">
            <img src={imgAiQa} alt="AI问答" className="w-full h-auto object-contain rounded-[12px] md:rounded-[22px] relative z-[1]" />
          </Video3D>
          <div className="content-stretch flex flex-col h-auto items-start relative shrink-0 w-full md:w-[525px] gap-[54px]">
            <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start justify-center relative shrink-0 w-full">
              <div className="grid grid-cols-1 grid-rows-[max-content] leading-[0] place-items-start relative shrink-0 w-full">
                <ScrollReveal className="col-1 row-1 ml-0 mt-0 w-full">
                  <p className="font-harmony font-bold font-[700] leading-[1.5] not-italic relative text-[#242424] text-[20px] md:text-[32px] w-full whitespace-pre-wrap text-left md:text-left">
                    AI连接你的知识库，让知识库成为你的
                    <span className="relative inline-block z-10">
                      第二大脑
                      <svg className="absolute left-0 w-full h-[18px] bottom-0 pointer-events-none -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 150 18">
                        <motion.path
                          d="M3.63748 12.938C6.62628 12.1706 26.0628 9.03958 53.9264 4.8356C63.8677 3.33568 65.3874 3.24936 66.9353 3.11163C68.4833 2.97391 70.0397 2.81999 69.6869 3.59023C66.8544 9.77381 56.304 12.1982 54.6981 13.7985C54.1662 14.3286 55.7459 14.4972 66.781 13.3124C77.8161 12.1276 98.6518 9.63809 110.346 8.30684C123.962 6.87803 128.746 6.69784 135.041 6.57181C138.53 6.52545 142.618 6.51483 146.829 6.50388"
                          fill="none"
                          stroke="url(#paint0_linear_kb_brain)"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                          strokeWidth="6"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                          viewport={{ once: true, amount: 0.6 }}
                        />
                        <defs>
                          <linearGradient id="paint0_linear_kb_brain" x1="3.79092" y1="7.41775" x2="146.694" y2="11.3898" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#108BFE" />
                            <stop offset="1" stopColor="#B1F2FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </p>
                </ScrollReveal>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] md:gap-[18px] items-start justify-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="bg-[#F3F3F3] content-stretch flex items-center justify-center px-[3px] py-[4px] relative rounded-[91.667px] shrink-0 size-[30px]">
                    <DataArrivalIcon2 className="relative shrink-0 size-[18px] md:size-[15.4px] text-[#242424]" />
                  </div>
                  <p className="flex-[1_0_0] font-harmony font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#242424] text-[14px] md:text-[18px] whitespace-pre-wrap">总结一周待办事项，帮你回顾、判断并规划下一步</p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="bg-[#F3F3F3] content-stretch flex items-center justify-center px-[3px] py-[2px] relative rounded-[91.667px] shrink-0 size-[30px]">
                    <WalletIcon className="relative shrink-0 size-[18px] md:size-[15.4px] text-[#242424]" />
                  </div>
                  <p className="flex-[1_0_0] font-harmony font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#242424] text-[14px] md:text-[18px] whitespace-pre-wrap">把零散的会议信息，变成组织可用的数字资产</p>
                </div>
              </div>
            </div>
            <BackgroundImage2 text="立即使用" additionalClassNames="h-full px-[24px] py-[5.185px]" />
          </div>
        </div>
      </div>
      <div ref={templateSectionRef} className="bg-white content-stretch flex flex-col gap-[40px] md:gap-[64px] items-center overflow-clip relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[32px] md:gap-[80px] h-auto items-center pt-0 md:pt-[90px] relative shrink-0 w-full max-w-[1440px] mx-auto">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1500px] md:w-[2085.108px] md:h-[1880.839px] min-[1440px]:w-[3000px] min-[1440px]:h-[2400px] pointer-events-none flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="-scale-y-100 flex-none w-full h-full">
                <div className="relative size-full">
                  <img alt="" className="absolute block max-w-none size-full" height="1880.839" src={imgEllipse5567} width="2085.108" />
                </div>
              </div>
            </div>
            <div className="absolute flex items-center justify-center z-10 w-full h-full">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2185.61 1876.04">
                  <g filter="url(#filter0_f_1_755)" id="Ellipse 5564">
                    <ellipse cx="1092.8" cy="938.019" fill="var(--fill-0, white)" rx="792.805" ry="638.019" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1876.04" id="filter0_f_1_755" width="2185.61" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_1_755" stdDeviation="150" />
                    </filter>
                  </defs>
                </svg>
            </div>
          </div>


          {/* 标题和副标题 */}
          <div className="content-stretch flex flex-col gap-[12px] md:gap-[12px] items-center justify-center pt-[54px] md:pt-0 px-[20px] md:px-0 relative shrink-0 w-full max-w-[1280px]">
            <div className="grid-cols-[1fr] md:grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full justify-center">
              <ScrollReveal className="col-1 row-1 ml-0 mt-0 w-full">
                <p className="font-harmony font-bold font-[700] leading-[1.5] not-italic relative text-[#191f33] text-[20px] md:text-[32px] text-center w-full whitespace-normal">
                  <span className="relative inline-block z-10">
                    80+ 海量智能模板
                    <svg className="absolute left-0 w-full h-[18px] bottom-0 pointer-events-none -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 150 18">
                      <motion.path
                        d="M3.63748 12.938C6.62628 12.1706 26.0628 9.03958 53.9264 4.8356C63.8677 3.33568 65.3874 3.24936 66.9353 3.11163C68.4833 2.97391 70.0397 2.81999 69.6869 3.59023C66.8544 9.77381 56.304 12.1982 54.6981 13.7985C54.1662 14.3286 55.7459 14.4972 66.781 13.3124C77.8161 12.1276 98.6518 9.63809 110.346 8.30684C123.962 6.87803 128.746 6.69784 135.041 6.57181C138.53 6.52545 142.618 6.51483 146.829 6.50388"
                        fill="none"
                        stroke="url(#paint0_linear_template)"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                        strokeWidth="6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        viewport={{ once: true, amount: 0.6 }}
                      />
                      <defs>
                        <linearGradient id="paint0_linear_template" x1="3.79092" y1="7.41775" x2="146.694" y2="11.3898" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#108BFE" />
                          <stop offset="1" stopColor="#B1F2FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  ，让每一次记录都更省时间
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <p className="font-harmony font-normal leading-[1.5] not-italic relative shrink-0 text-[#242424] text-[16px] md:text-[18px] text-center max-w-[800px] mx-auto">覆盖办公、销售、教育等众多行业，智能推荐最合适你的模板，快速上手，无需纠结选择</p>
            </ScrollReveal>
          </div>
          
          {/* 主图片容器和模板卡片区域 */}
          <div className="w-full overflow-visible no-scrollbar md:mt-[54px]">
            <div className="contents md:flex md:flex-row md:items-center md:justify-center md:gap-[54px] md:relative md:w-full md:h-[600px] md:text-left md:-mt-[54px]">
              <div className="relative w-[900px] md:w-[940px] max-w-[940px] h-[560px] mx-auto flex items-center justify-center scale-[0.5] md:scale-100 origin-center -mt-[110px] md:-mt-[120px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none h-full w-auto object-contain" src={imgImage135} />
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -70, y: 60 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    viewport={{ once: true, amount: 0.45 }}
                    className="absolute left-0 md:left-[-40px] bottom-[24px] flex h-[176.376px] items-center justify-center w-[207.122px]"
                    style={{ "--transform-inner-width": "1185", "--transform-inner-height": "59" } as React.CSSProperties}
                  >
                    <div className="flex-none rotate-[-13.34deg] -translate-y-[24px] md:translate-y-0">
                      <div className="bg-white content-stretch flex flex-col gap-[12px] h-[150px] items-start p-[20px] relative rounded-[16px] w-[180px] -mt-[32px]" data-name="模版二">
                        <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[2.236px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7.153px_26.837px_0px_rgba(0,0,0,0.06)]" />
                        <div className="content-stretch flex gap-[13.418px] items-center not-italic relative shrink-0">
                          <div className="flex flex-col font-pingfang font-medium justify-end leading-[0] relative shrink-0 size-[24.6px] text-[24px] text-white">
                            <p className="leading-[normal] whitespace-pre-wrap">💻</p>
                          </div>
                          <p className="font-harmony font-bold font-[700] leading-[1.5] relative shrink-0 text-[#242424] text-[18px] text-center">工作例会</p>
                        </div>
                        <p className="font-harmony font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8B8B8B] text-[14px] w-[min-content] whitespace-pre-wrap">将复杂的长内容极简化总结</p>
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.303px_15.641px_0px_rgba(255,255,255,0.25)]" />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -60, y: -40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    viewport={{ once: true, amount: 0.45 }}
                    className="absolute left-0 md:left-[-40px] top-[56px] translate-y-[24px] md:translate-y-0 flex h-[199.671px] items-center justify-center w-[220.848px]"
                    style={{ "--transform-inner-width": "1185", "--transform-inner-height": "97" } as React.CSSProperties}
                  >
                    <div className="flex-none rotate-[10.61deg]">
                      <div className="bg-white relative rounded-[16px] h-[170px] content-stretch flex flex-col gap-[16px] items-start px-[24px] pt-[24px] pb-[24px]" data-name="模版一">
                          <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full">
                            <div className="content-stretch flex gap-[12.224px] items-center relative shrink-0 text-[#191f33]">
                              <p className="font-harmony font-normal relative shrink-0 text-[26.246px]">✨</p>
                              <p className="font-harmony font-bold font-[700] relative shrink-0 text-[#242424] text-[19.685px] text-center">极简总结</p>
                            </div>
                            <p className="font-harmony font-normal min-w-full relative shrink-0 text-[#8B8B8B] text-[14px] w-[min-content] whitespace-pre-wrap">将复杂的长内容极简化总结</p>
                          </div>
                          <div className="content-stretch flex gap-[9.962px] items-center relative shrink-0">
                            <div className="bg-white content-stretch flex h-[25.902px] items-center justify-center relative rounded-[4px] shrink-0 w-[71.728px]">
                              <div aria-hidden="true" className="absolute border-[#0f67fe] border-[0.996px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              <p className="font-harmony font-normal leading-[normal] not-italic relative shrink-0 text-[#0f67fe] text-[11.955px]">预览</p>
                            </div>
                            <div className="bg-[#0f67fe] content-stretch flex h-[25.902px] items-center justify-center relative rounded-[4px] shrink-0 w-[71.728px]">
                              <p className="font-harmony font-normal leading-[normal] not-italic relative shrink-0 text-[11.955px] text-white">使用模板</p>
                            </div>
                          </div>
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.222px_14.668px_0px_rgba(255,255,255,0.25)]" />
                        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px] shadow-[0px_6.708px_25.168px_0px_rgba(0,47,255,0.08)]" style={{ padding: "2px", background: "linear-gradient(-34deg, #0F67FE, #B0F1FF)", mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "exclude", WebkitMaskComposite: "xor" }} />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 60, y: -50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    viewport={{ once: true, amount: 0.45 }}
                    className="absolute right-0 top-[108px] md:right-[-40px] md:top-[24px] flex h-[178.472px] items-center justify-center w-[218.622px] z-10"
                    style={{ "--transform-inner-width": "1185", "--transform-inner-height": "59" } as React.CSSProperties}
                  >
                    <div className="flex-none rotate-[-15.69deg] -translate-x-[24px] -translate-y-[20px] md:translate-x-0 md:translate-y-0">
                      <div className="bg-white relative rounded-[16px] w-[190px] h-[150px]" data-name="模版四">
                        <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic overflow-clip p-[20px] relative rounded-[inherit] w-full mt-[32px]">
                          <div className="content-stretch flex gap-[13.543px] items-center relative shrink-0 text-[#191f33]">
                            <p className="font-harmony font-normal relative shrink-0 text-[25.333px]">✍️</p>
                            <p className="font-harmony font-bold font-[700] relative shrink-0 text-[#242424] text-[19px] text-center">课堂笔记</p>
                          </div>
                          <p className="font-harmony font-normal min-w-full relative shrink-0 text-[#8B8B8B] text-[14px] w-[min-content] whitespace-pre-wrap">高效整理课堂知识点便于复习。</p>
                        </div>
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.354px_16.252px_0px_rgba(255,255,255,0.25)]" />
                        <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[2.477px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7.432px_27.884px_0px_rgba(0,0,0,0.06)]" />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 70, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                    viewport={{ once: true, amount: 0.45 }}
                    className="absolute right-0 md:right-[-40px] bottom-[24px] -translate-x-[20px] -translate-y-[24px] md:translate-x-0 md:translate-y-0 flex h-[179.404px] items-center justify-center w-[207.196px]"
                    style={{ "--transform-inner-width": "1185", "--transform-inner-height": "59" } as React.CSSProperties}
                  >
                    <div className="flex-none rotate-[12.77deg]">
                      <div className="bg-white h-[150px] relative rounded-[16px] w-[180px]" data-name="模版三">
                        <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic overflow-clip p-[20px] relative rounded-[inherit] size-full -mt-[32px]">
                          <div className="content-stretch flex gap-[13.262px] items-center relative shrink-0 text-[#191f33]">
                            <p className="font-harmony font-normal relative shrink-0 text-[25.412px]">💬</p>
                            <p className="font-harmony font-bold font-[700] relative shrink-0 text-[#242424] text-[19.059px] text-center">讨论</p>
                          </div>
                          <p className="font-harmony font-normal min-w-full relative shrink-0 text-[#8B8B8B] text-[14px] w-[min-content] whitespace-pre-wrap">记录讨论要点形成共识</p>
                        </div>
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.326px_15.915px_0px_rgba(255,255,255,0.25)]" />
                        <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[2.426px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7.278px_27.306px_0px_rgba(0,0,0,0.06)]" />
                      </div>
                    </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* 底部滚动卡片区域 */}
          <div className="w-full flex flex-col gap-[16px] -mt-[126px] md:-mt-[120px] xl:-mt-[120px] pb-[54px] md:pb-[80px] relative z-10">
            {/* 第一排 - 向左滚动 */}
            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className={clsx("flex w-max hover:[animation-play-state:paused]", isTemplateInView ? "animate-[scrollLeft_30s_linear_infinite]" : "animate-none")}>
                {[
                  { icon: "📝", title: "教育工作会议", desc: "部署教育工作与协同落实" },
                  { icon: "💻", title: "课堂笔记", desc: "高效整理课堂知识点便于复习" },
                  { icon: "💼", title: "工作例会", desc: "汇总工作进展与部署任务" },
                  { icon: "👥", title: "多人项目讨论会", desc: "同步项目进度与协同解决问题" },
                  { icon: "🎓", title: "教学笔记", desc: "记录教学内容要点" },
                  { icon: "📝", title: "教育工作会议", desc: "部署教育工作与协同落实" },
                  { icon: "💻", title: "课堂笔记", desc: "高效整理课堂知识点便于复习" },
                  { icon: "💼", title: "工作例会", desc: "汇总工作进展与部署任务" },
                  { icon: "👥", title: "多人项目讨论会", desc: "同步项目进度与协同解决问题" },
                  { icon: "🎓", title: "教学笔记", desc: "记录教学内容要点" },
                  { icon: "📝", title: "教育工作会议", desc: "部署教育工作与协同落实" },
                  { icon: "💻", title: "课堂笔记", desc: "高效整理课堂知识点便于复习" },
                  { icon: "💼", title: "工作例会", desc: "汇总工作进展与部署任务" },
                  { icon: "👥", title: "多人项目讨论会", desc: "同步项目进度与协同解决问题" },
                  { icon: "🎓", title: "教学笔记", desc: "记录教学内容要点" },
                  { icon: "📝", title: "教育工作会议", desc: "部署教育工作与协同落实" },
                  { icon: "💻", title: "课堂笔记", desc: "高效整理课堂知识点便于复习" },
                  { icon: "💼", title: "工作例会", desc: "汇总工作进展与部署任务" },
                  { icon: "👥", title: "多人项目讨论会", desc: "同步项目进度与协同解决问题" },
                  { icon: "🎓", title: "教学笔记", desc: "记录教学内容要点" },
                ].map((card, i) => (
                  <div key={i} className="flex flex-col items-start gap-[14px] md:gap-[17.93px] w-[160px] h-auto md:w-[200px] px-[16px] py-[20px] md:px-[20px] md:py-[24px] bg-white border border-[#E9E9E9] shadow-[0px_4px_28px_rgba(0,0,0,0.06)] rounded-[12px] mr-[12px] md:mr-4">
                    <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2 text-[#191F33]">
                      <span className="text-[20px] md:text-2xl">{card.icon}</span>
                      <span className="font-harmony font-bold text-[#242424] text-[13px] md:text-[16px]">{card.title}</span>
                    </div>
                    <p className="font-harmony font-normal text-[#8B8B8B] text-[11px] md:text-[14px]">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 第二排 - 向右滚动 */}
            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className={clsx("flex w-max hover:[animation-play-state:paused]", isTemplateInView ? "animate-[scrollLeft_30s_linear_infinite]" : "animate-none")} style={{ animationDirection: 'reverse' }}>
                {[
                  { icon: "✨", title: "极简总结", desc: "将复杂的长内容极简化总结" },
                  { icon: "💬", title: "讨论", desc: "记录讨论要点形成共识" },
                  { icon: "🎤", title: "演讲", desc: "记录演讲精彩瞬间" },
                  { icon: "📅", title: "常务会议", desc: "审议重大事项与作出决策部署" },
                  { icon: "🧠", title: "头脑风暴", desc: "记录创意灵感与想法" },
                  { icon: "✨", title: "极简总结", desc: "将复杂的长内容极简化总结" },
                  { icon: "💬", title: "讨论", desc: "记录讨论要点形成共识" },
                  { icon: "🎤", title: "演讲", desc: "记录演讲精彩瞬间" },
                  { icon: "📅", title: "常务会议", desc: "审议重大事项与作出决策部署" },
                  { icon: "🧠", title: "头脑风暴", desc: "记录创意灵感与想法" },
                  { icon: "✨", title: "极简总结", desc: "将复杂的长内容极简化总结" },
                  { icon: "💬", title: "讨论", desc: "记录讨论要点形成共识" },
                  { icon: "🎤", title: "演讲", desc: "记录演讲精彩瞬间" },
                  { icon: "📅", title: "常务会议", desc: "审议重大事项与作出决策部署" },
                  { icon: "🧠", title: "头脑风暴", desc: "记录创意灵感与想法" },
                  { icon: "✨", title: "极简总结", desc: "将复杂的长内容极简化总结" },
                  { icon: "💬", title: "讨论", desc: "记录讨论要点形成共识" },
                  { icon: "🎤", title: "演讲", desc: "记录演讲精彩瞬间" },
                  { icon: "📅", title: "常务会议", desc: "审议重大事项与作出决策部署" },
                  { icon: "🧠", title: "头脑风暴", desc: "记录创意灵感与想法" },
                ].map((card, i) => (
                  <div key={i} className="flex flex-col items-start gap-[14px] md:gap-[17.93px] w-[160px] h-auto md:w-[200px] px-[16px] py-[20px] md:px-[20px] md:py-[24px] bg-white border border-[#E9E9E9] shadow-[0px_4px_28px_rgba(0,0,0,0.06)] rounded-[12px] mr-[12px] md:mr-4">
                    <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2 text-[#191F33]">
                      <span className="text-[20px] md:text-2xl">{card.icon}</span>
                      <span className="font-harmony font-bold text-[#242424] text-[13px] md:text-[16px]">{card.title}</span>
                    </div>
                    <p className="font-harmony font-normal text-[#8B8B8B] text-[11px] md:text-[14px]">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 立即使用按钮 */}
            <div className="flex justify-center mt-8 mb-4">
              <BackgroundImage2 text="立即使用" additionalClassNames="px-[24px] py-[6px]" />
            </div>
          </div>
          <div className="hidden">
            <div className="flex items-start shrink-0 animate-[scrollLeft_20s_linear_infinite] w-max [&>*]:flex-none [&>*]:min-w-[190px] [&>*]:max-w-[220px] [&>*]:w-[clamp(190px,15vw,220px)] [&>*]:mr-[20px]">
              <div className="bg-white content-stretch flex flex-col gap-[17.933px] items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                  <div className="flex flex-col font-pingfang font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#191f33] text-[22px] whitespace-nowrap">
                    <p className="leading-[normal]">🧑‍🏫</p>
                  </div>
                  <BackgroundImageAndText text="教育工作会议" />
                </div>
                <p className="font-pingfang font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">部署教育工作与协同落实</p>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <BackgroundImageAndText1 text="高效整理课堂知识点便于复习" additionalClassNames="gap-[14px]" />
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <BackgroundImageAndText2 text="汇总工作进展与部署任务" />
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[12px] h-[22px] items-center relative shrink-0">
                    <BackgroundImage3 />
                    <p className="font-harmony font-medium leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] whitespace-pre-wrap">多人项目讨论会</p>
                  </div>
                  <p className="font-harmony font-normal leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] whitespace-pre-wrap">同步项目进度与协同解决问问题问题</p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <BackgroundImageAndText3 text="教学笔记" />
                    <p className="font-harmony font-normal leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] whitespace-pre-wrap">记录教学内容要点</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <BackgroundImageAndText4 text="记录教学内容要点" />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <BackgroundImageAndText4 text="记录教学内容要点" />
                </div>
              </div>
              <div className="bg-white content-stretch flex items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <BackgroundImage4 />
                    <p className="font-harmony font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">审议重大事项与作出决策部署</p>
                  </div>
                </div>
              </div>
              {/* duplicate set for seamless loop */}
              <div className="bg-white content-stretch flex flex-col gap-[17.933px] items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                  <div className="flex flex-col font-pingfang font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#191f33] text-[22px] whitespace-nowrap">
                    <p className="leading-[normal]">{"\ud83e\uddd1\u200d\ud83c\udfeb"}</p>
                  </div>
                  <BackgroundImageAndText text={"\u6559\u80b2\u5de5\u4f5c\u4f1a\u8bae"} />
                </div>
                <p className="font-pingfang font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u90e8\u7f72\u6559\u80b2\u5de5\u4f5c\u4e0e\u534f\u540c\u843d\u5b9e"}</p>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <BackgroundImageAndText1 text={"\u9ad8\u6548\u6574\u7406\u8bfe\u5802\u77e5\u8bc6\u70b9\u4fbf\u4e8e\u590d\u4e60"} additionalClassNames="gap-[14px]" />
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <BackgroundImageAndText2 text={"\u6c47\u603b\u5de5\u4f5c\u8fdb\u5c55\u4e0e\u90e8\u7f72\u4efb\u52a1"} />
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[12px] h-[22px] items-center relative shrink-0">
                    <BackgroundImage3 />
                    <p className="font-pingfang font-medium leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] whitespace-pre-wrap">{"\u591a\u4eba\u9879\u76ee\u8ba8\u8bba\u4f1a"}</p>
                  </div>
                  <p className="font-pingfang font-normal leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] whitespace-pre-wrap">{"\u540c\u6b65\u9879\u76ee\u8fdb\u5ea6\u4e0e\u534f\u540c\u89e3\u51b3\u95ee\u95ee\u9898\u95ee\u9898"}</p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <BackgroundImageAndText3 text={"\u6559\u5b66\u7b14\u8bb0"} />
                    <p className="font-pingfang font-normal leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] whitespace-pre-wrap">{"\u8bb0\u5f55\u6559\u5b66\u5185\u5bb9\u8981\u70b9"}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <BackgroundImageAndText4 text={"\u8bb0\u5f55\u6559\u5b66\u5185\u5bb9\u8981\u70b9"} />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <BackgroundImageAndText4 text={"\u8bb0\u5f55\u6559\u5b66\u5185\u5bb9\u8981\u70b9"} />
                </div>
              </div>
              <div className="bg-white content-stretch flex items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <BackgroundImage4 />
                    <p className="font-pingfang font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u5ba1\u8bae\u91cd\u5927\u4e8b\u9879\u4e0e\u4f5c\u51fa\u51b3\u7b56\u90e8\u7f72"}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start shrink-0 animate-[scrollRight_25s_linear_infinite] w-max [&>*]:flex-none [&>*]:w-[200px] [&>*]:mr-[20px]">
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[22px]" data-name="🧑‍🏫">
                        <img alt="" className="absolute block max-w-none size-full" height="22" src={img5} width="22" />
                      </div>
                      <BackgroundImageAndText text="教育工作会议" />
                    </div>
                    <p className="font-pingfang font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">部署教育工作与协同落实</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <BackgroundImageAndText1 text="高效整理课堂知识点便于复习" additionalClassNames="gap-[18px]" />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <BackgroundImageAndText2 text="汇总工作进展与部署任务" />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] h-[22px] items-center relative shrink-0 w-full">
                      <BackgroundImage3 />
                      <BackgroundImageAndText text="多人项目讨论会" />
                    </div>
                    <p className="font-pingfang font-normal leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] w-full whitespace-pre-wrap">同步项目进度与协同解决问问题问题</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <BackgroundImageAndText5 text="记录教学内容要点" />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <BackgroundImageAndText5 text="记录教学内容要点" />
                </div>
              </div>
              <div className="bg-white content-stretch flex items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[192px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <BackgroundImage4 />
                    <p className="font-pingfang font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">审议重大事项与作出决策部署</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex items-start px-[20px] py-[24px] relative rounded-[16px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[172px]">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                      <div className="flex flex-col font-pingfang font-medium justify-end leading-[0] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">
                        <p className="leading-[normal]">💼</p>
                      </div>
                      <BackgroundImageAndText text="常务会议" />
                    </div>
                    <p className="font-pingfang font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">审议重大事项与作出决策部署</p>
                  </div>
                </div>
              </div>
              {/* duplicate set for seamless loop */}
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[22px]">
                        <img alt="" className="absolute block max-w-none size-full" height="22" src={img5} width="22" />
                      </div>
                      <BackgroundImageAndText text={"\u6559\u80b2\u5de5\u4f5c\u4f1a\u8bae"} />
                    </div>
                    <p className="font-pingfang font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u90e8\u7f72\u6559\u80b2\u5de5\u4f5c\u4e0e\u534f\u540c\u843d\u5b9e"}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <BackgroundImageAndText1 text={"\u9ad8\u6548\u6574\u7406\u8bfe\u5802\u77e5\u8bc6\u70b9\u4fbf\u4e8e\u590d\u4e60"} additionalClassNames="gap-[18px]" />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <BackgroundImageAndText2 text={"\u6c47\u603b\u5de5\u4f5c\u8fdb\u5c55\u4e0e\u90e8\u7f72\u4efb\u52a1"} />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] h-[22px] items-center relative shrink-0 w-full">
                      <BackgroundImage3 />
                      <BackgroundImageAndText text={"\u591a\u4eba\u9879\u76ee\u8ba8\u8bba\u4f1a"} />
                    </div>
                    <p className="font-pingfang font-normal leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] w-full whitespace-pre-wrap">{"\u540c\u6b65\u9879\u76ee\u8fdb\u5ea6\u4e0e\u534f\u540c\u89e3\u51b3\u95ee\u95ee\u9898\u95ee\u9898"}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <BackgroundImageAndText5 text={"\u8bb0\u5f55\u6559\u5b66\u5185\u5bb9\u8981\u70b9"} />
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[150.2px]">
                  <BackgroundImageAndText5 text={"\u8bb0\u5f55\u6559\u5b66\u5185\u5bb9\u8981\u70b9"} />
                </div>
              </div>
              <div className="bg-white content-stretch flex items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0 w-[192px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <BackgroundImage4 />
                    <p className="font-harmony font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u5ba1\u8bae\u91cd\u5927\u4e8b\u9879\u4e0e\u4f5c\u51fa\u51b3\u7b56\u90e8\u7f72"}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex items-start px-[20px] py-[24px] relative rounded-[16px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[172px]">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                      <div className="flex flex-col font-harmony font-medium justify-end leading-[0] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">
                        <p className="leading-[normal]">{"\ud83d\udcbc"}</p>
                      </div>
                      <BackgroundImageAndText text={"\u5e38\u52a1\u4f1a\u8bae"} />
                    </div>
                    <p className="font-harmony font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u5ba1\u8bae\u91cd\u5927\u4e8b\u9879\u4e0e\u4f5c\u51fa\u51b3\u7b56\u90e8\u7f72"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[40px] h-auto items-center justify-center py-[40px] md:py-[54px] xl:py-[64px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.5] not-italic relative shrink-0 w-full max-w-[1280px] mx-auto px-[20px]">
          <ScrollReveal>
            <p className="font-harmony font-bold font-[700] relative text-[#242424] text-[20px] md:text-[32px] text-center w-full">不管什么场景，记录都能自然跟上你的节奏</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-harmony font-normal relative text-[#242424] text-[16px] md:text-[18px] text-center w-full whitespace-pre-wrap">无论是会议讨论、电话沟通还是日常交流，记录都会在沟通过程中自动完成，不打断对话，也不增加额外操作负担</p>
          </ScrollReveal>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] h-auto items-center relative shrink-0 w-full max-w-[1280px] mx-auto px-[20px]">
          <div className="bg-white content-stretch flex gap-0 md:gap-[10px] items-center justify-between md:justify-start px-[10px] py-[8px] relative rounded-[100px] shrink-0 w-full max-w-[570px] mx-auto overflow-hidden">
            <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_4px_17px_0px_rgba(0,0,0,0.06)]" />
            {scenarios.map((scenario, index) => (
              <fm.button
                key={scenario.label}
                type="button"
                onClick={() => setActiveScenario(index)}
                className={clsx(
                  "flex-[1_0_0] h-[40px] min-h-px min-w-[80px] relative rounded-[100px] whitespace-nowrap",
                  index === activeScenario && "bg-gradient-to-b from-[#303030] to-[#1f1f1f]",
                )}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] w-full h-auto">
                  <div className="content-stretch flex items-center justify-center px-[20px] md:px-[42px] py-[5.185px] relative w-full h-auto">
                    <p
                      className={clsx(
                        "font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] md:text-[16px] text-center",
                        index === activeScenario ? "text-white" : "text-[#242424]",
                      )}
                    >
                      {scenario.label}
                    </p>
                  </div>
                </div>
                {index === activeScenario && (
                  <div
                    aria-hidden="true"
                    className="absolute border-[#393939] border-[0.741px] border-solid inset-0 pointer-events-none rounded-[100px]"
                  />
                )}
              </fm.button>
            ))}
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col xl:flex-row gap-[24px] xl:gap-0 items-start xl:items-center justify-center relative shrink-0 w-full max-w-[1280px] mx-auto h-auto md:h-auto xl:h-auto">
            <AnimatePresence mode="wait">
              <fm.div
                key={activeScenario}
                className="content-stretch flex flex-col xl:justify-center items-start px-[24px] pt-[24px] pb-[24px] md:px-[32px] md:pt-[32px] md:pb-[32px] xl:pt-0 xl:pb-0 gap-[24px] w-full xl:w-[1280px] h-auto xl:h-[348px] bg-white/80 border-2 border-solid border-[#EFEFEF] backdrop-blur-[15.871px] rounded-[12px] md:rounded-[32px] shadow-[0_3px_32px_0_rgba(0,0,0,0.06)] self-stretch xl:self-center order-1 xl:order-1 z-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                  <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-pre-wrap">
                    <p className="font-harmony font-bold relative shrink-0 text-[#242424] text-[20px] w-full">{currentScenario.title}</p>
                    <p className="font-harmony font-normal relative shrink-0 text-[#8B8B8B] text-[16px] w-full">{currentScenario.description}</p>
                  </div>
                  <div className="content-start flex flex-wrap gap-[16px_32px] items-start relative shrink-0 w-full xl:w-[373px]">
                    <div className="content-stretch flex gap-[9.523px] items-center relative shrink-0 w-[45%]">
                      <FeatureCheckIcon className="relative shrink-0 size-[16px] text-[#242424]" />
                      <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[#242424] text-[18px]">{currentScenario.features[0]}</p>
                    </div>
                    <div className="content-stretch flex gap-[9.523px] items-center relative shrink-0 w-[45%]">
                      <FeatureCheckIcon className="relative shrink-0 size-[16px] text-[#242424]" />
                      <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[#242424] text-[18px]">{currentScenario.features[1]}</p>
                    </div>
                    <div className="content-stretch flex gap-[9.523px] items-center relative shrink-0 w-[45%]">
                      <FeatureCheckIcon className="relative shrink-0 size-[16px] text-[#242424]" />
                      <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[#242424] text-[18px]">{currentScenario.features[2]}</p>
                    </div>
                    <div className="content-stretch flex gap-[9.523px] items-center relative shrink-0 w-[45%]">
                      <FeatureCheckIcon className="relative shrink-0 size-[16px] text-[#242424]" />
                      <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[#242424] text-[18px]">{currentScenario.features[3]}</p>
                    </div>
                  </div>
              </fm.div>
            </AnimatePresence>
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[12px] md:rounded-[32px] shadow-[0px_3px_44px_0px_rgba(0,0,0,0.05)] shrink-0 w-full max-w-[703px] md:max-w-none xl:max-w-[703px] aspect-[703/427] h-auto order-2 xl:order-2 bg-[#F9FAFB] z-10 xl:-ml-[80px] xl:self-center">
                <div className="size-full relative shrink-0 flex items-center justify-center" data-name="image 112">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={activeScenario}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 overflow-hidden pointer-events-none"
                    >
                      <img 
                        alt={currentScenario.title} 
                        className="absolute left-1/2 top-0 -translate-x-1/2 max-w-none size-full object-contain md:object-contain xl:object-cover transition-transform duration-300"
                        src={currentScenario.image} 
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[32px] items-center px-[20px] md:px-[64px] py-[32px] relative w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.5] not-italic relative shrink-0 text-center w-full max-w-[1312px] mx-auto px-0">
              <ScrollReveal className="w-full">
                <p className="font-harmony font-bold font-[700] min-w-full relative shrink-0 text-[#191f33] text-[20px] md:text-[32px] w-[min-content] whitespace-pre-wrap">深受 50万+ 用户的喜爱</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="font-harmony font-normal relative shrink-0 text-[#242424] text-[16px] md:text-[18px] w-full">学生、老师、销售、产品经理等用户都喜欢使用听脑AI</p>
              </ScrollReveal>
            </div>
            <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1280px] mx-auto px-[20px]">
              <div className="flex flex-col gap-0 items-center relative shrink-0 w-full -mt-[16px] md:mt-0">
                <div className="flex w-full overflow-hidden py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex items-start shrink-0 animate-[scrollLeft_25s_linear_infinite] w-max [&>*]:flex-none [&>*]:w-[401px] md:[&>*]:w-[401px] [&>*]:mr-[16px] md:[&>*]:mr-[24px]">
                    <ReviewRowContent />
                  </div>
                  <div className="flex items-start shrink-0 animate-[scrollLeft_25s_linear_infinite] w-max [&>*]:flex-none [&>*]:w-[401px] md:[&>*]:w-[401px] [&>*]:mr-[16px] md:[&>*]:mr-[24px]" aria-hidden="true">
                    <ReviewRowContent />
                  </div>
                </div>
                <div className="-mt-12 flex w-full overflow-hidden py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex items-start shrink-0 animate-[scrollRight_25s_linear_infinite] w-max [&>*]:flex-none [&>*]:w-[401px] md:[&>*]:w-[401px] [&>*]:mr-[16px] md:[&>*]:mr-[24px]">
                    <ReviewRowContent />
                  </div>
                  <div className="flex items-start shrink-0 animate-[scrollRight_25s_linear_infinite] w-max [&>*]:flex-none [&>*]:w-[401px] md:[&>*]:w-[401px] [&>*]:mr-[16px] md:[&>*]:mr-[24px]" aria-hidden="true">
                    <ReviewRowContent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-auto relative rounded-bl-[32px] rounded-br-[32px] shrink-0 w-full py-[24px] md:py-0 xl:pb-[40px]">
        <div className="flex flex-col items-center justify-center overflow-visible rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="content-stretch flex flex-col gap-[24px] md:gap-0 xl:flex-row h-auto items-center xl:items-end justify-between relative shrink-0 w-full max-w-[1280px] mx-auto px-[20px] xl:px-0 overflow-visible">
              <div className="content-stretch flex flex-col gap-[32px] md:gap-[54px] h-auto items-start justify-center relative shrink-0 w-full max-w-[1280px] xl:max-w-none xl:w-auto mx-auto">
                <div className="content-stretch flex flex-col gap-[12px] items-start justify-center leading-[1.5] not-italic relative shrink-0 w-full">
                  <ScrollReveal className="w-full">
                    <p className="font-harmony font-bold font-[700] relative shrink-0 text-[#191f33] text-[20px] md:text-[32px] text-left w-full">多端无缝协同，记录随时随地</p>
                  </ScrollReveal>
                  <ScrollReveal className="w-full" delay={0.1}>
                    <p className="font-harmony font-normal min-w-full relative shrink-0 text-[#242424] text-[16px] md:text-[18px] w-full whitespace-normal text-left">实现多端设备高效协同，数据实时同步，保障关键信息在整个工作流程中的连续与可追溯</p>
                  </ScrollReveal>
                </div>
                <div className="gap-x-[16px] gap-y-[16px] sm:gap-x-[24px] sm:gap-y-[24px] grid grid-cols-2 h-auto relative shrink-0 w-full xl:w-[607px] overflow-visible">
                  {/* Pad - Top Left */}
                  <HoverCard className="group bg-white relative rounded-[12px] shrink-0 overflow-visible hover:z-10 shadow-[0px_3px_32px_0px_rgba(0,0,0,0.05)] row-1 col-1" hoverY={-4}>
                     <div className="flex items-center justify-between w-full h-full p-[8px] md:p-[24px]">
                        <div className="flex items-center gap-[8px] md:gap-[16px]">
                           <ImageBackgroundImage1 additionalClassNames="group-hover:origin-bottom-left" />
                           <p className="font-harmony font-normal text-[#000000] text-[14px] md:text-[16px]">Pad</p>
                        </div>
<DownloadIcon />
                     </div>
                     <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </HoverCard>

                  {/* IOS - Top Right */}
                  <HoverCard className="group bg-white relative rounded-[12px] shrink-0 overflow-visible hover:z-10 shadow-[0px_3px_32px_0px_rgba(0,0,0,0.05)] col-2 row-1" hoverY={-4}>
                     <div className="flex items-center justify-between w-full h-full p-[8px] md:p-[24px]">
                        <div className="flex items-center gap-[16px]">
                           <ImageBackgroundImage1 additionalClassNames="group-hover:origin-bottom-center" />
                           <p className="font-harmony font-normal text-[#000000] text-[14px] md:text-[16px]">IOS</p>
                        </div>
<ScanIcon />
                     </div>
                     <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </HoverCard>

                  {/* 小程序 - Bottom Left */}
                  <HoverCard className="group bg-white relative rounded-[12px] shrink-0 overflow-visible hover:z-10 shadow-[0px_3px_32px_0px_rgba(0,0,0,0.05)] row-2 col-1" hoverY={-4}>
                     <div className="flex items-center justify-between w-full h-full p-[8px] md:p-[24px]">
                        <div className="flex items-center gap-[8px] md:gap-[16px]">
                           <BackgroundImage11 additionalClassNames="group-hover:origin-bottom-left">
                             <img alt="" className="block w-full h-full object-contain" src={imgMiniProgram} />
                          </BackgroundImage11>
                           <p className="font-harmony font-normal text-[#000000] text-[14px] md:text-[16px]">小程序</p>
                        </div>
<ScanIcon />
                     </div>
                     <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </HoverCard>

                  {/* 安卓 - Bottom Right */}
                  <HoverCard className="group bg-white relative rounded-[12px] shrink-0 overflow-visible hover:z-10 shadow-[0px_3px_32px_0px_rgba(0,0,0,0.05)] col-2 row-2" hoverY={-4}>
                     <div className="flex items-center justify-between w-full h-full p-[8px] md:p-[24px]">
                        <div className="flex items-center gap-[8px] md:gap-[16px]">
                           <BackgroundImage11 additionalClassNames="group-hover:origin-bottom-center">
                             <img alt="" className="block w-full h-full object-contain" src={imgAndroidQr} />
                          </BackgroundImage11>
                           <p className="font-harmony font-normal text-[#000000] text-[14px] md:text-[16px]">安卓</p>
                        </div>
<ScanIcon />
                     </div>
                     <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  </HoverCard>
                </div>
              </div>
              <div className="relative shrink-0 flex items-end justify-center w-full xl:w-auto">
                <img src={imgMultiDevice} alt="多端展示" loading="lazy" decoding="async" className="block w-full max-w-[592px] h-auto md:translate-y-[16px] xl:translate-y-[36px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[400px] md:h-[640px] relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[20px] md:py-[80px] relative size-full">
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#e1ecff] from-[34.49%] gap-[40px] md:gap-[64px] h-[300px] md:h-[460px] items-center justify-end pb-[40px] md:pb-[72px] pt-[24px] px-[10px] relative rounded-bl-[44px] rounded-br-[44px] rounded-tl-[54px] rounded-tr-[54px] shrink-0 to-[100.75%] to-white via-[#edf5fe] via-[78.665%] w-full max-w-[1280px] mx-auto overflow-visible">
              <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.5] not-italic relative shrink-0 text-center">
                <ScrollReveal>
                  <p className="font-harmony font-bold font-[700] relative shrink-0 text-[#242424] text-[24px] md:text-[36px]">立即使用听脑 AI</p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="font-harmony font-normal relative shrink-0 text-[#242424] text-[16px] md:text-[18px]">用自动化记录，替代重复整理，提高整体工作/学习效率</p>
                </ScrollReveal>
              </div>
              <BackgroundImage />
              <div className="-translate-x-1/2 absolute contents left-1/2 top-[-65.96px]">
                <div className="-translate-x-1/2 absolute h-[clamp(88px,26vw,120px)] md:h-[168.071px] left-1/2 top-[-40px] md:top-[-65.96px] w-[clamp(96px,28vw,130px)] md:w-[181.972px]" data-name="image 136">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" loading="lazy" decoding="async" className="absolute h-[109.28%] left-[-27.79%] max-w-none top-[-4.35%] w-[151.39%]" src={imgImage136} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#070707] content-stretch flex flex-col items-center overflow-clip px-[20px] pt-[40px] pb-0 md:pt-[54px] md:pb-0 relative shrink-0 w-full">
        <div className="content-stretch flex flex-col h-auto items-start justify-center relative shrink-0 w-full max-w-[1280px]">
          <div className="content-stretch flex flex-col md:flex-row items-start md:items-center justify-between relative shrink-0 w-full h-full gap-[32px] md:gap-0">
            <div className="content-stretch grid grid-cols-2 md:flex gap-[40px] md:gap-[120px] items-start relative shrink-0 w-full md:w-auto">
              <div className="content-stretch flex flex-col font-harmony font-medium gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-[64px]">
                <p className="min-w-full relative shrink-0 text-[16px] text-white w-[min-content] whitespace-pre-wrap">使用场景</p>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-left md:text-center">
                  <p className="relative shrink-0">办公</p>
                  <p className="relative shrink-0">教育</p>
                  <p className="relative shrink-0">销售</p>
                  <p className="relative shrink-0">自媒体</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-auto">
                <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-white">产品</p>
                <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-left cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/activity"}>定价</p>
                <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-left cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/open.html"}>企业解决方案</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <p className="font-harmony font-normal leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-left cursor-pointer" onClick={() => window.location.href = "https://itingnao.com/tincard"}>TinCard录音卡</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[16px] text-white">了解我们</p>
                <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-left">关于我们</p>
                <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-left">帮助中心</p>
                <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-left">商务合作：15223204512</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <p className="font-harmony font-medium leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-left">联系电话：13883334418</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 pt-[20px] md:pt-0">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 -mt-[30px]">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
                  <div className="h-[96.809px] relative rounded-[4px] shrink-0 w-[95.1px]" data-name="image 45">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                      <img alt="" className="absolute h-[99.99%] left-[-0.51%] max-w-none top-[0.01%] w-[101.78%]" src={imgImage45} />
                    </div>
                  </div>
                  <p className="font-harmony font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center w-[min-content] whitespace-pre-wrap">联系客服</p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[102.895px]">
                  <div className="h-[95.3px] relative rounded-[4px] shrink-0 w-[94px]" data-name="image 45">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage46} />
                  </div>
                  <p className="font-harmony font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center w-[min-content] whitespace-pre-wrap">公众号</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full mb-8 pt-[20px]">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.5px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
                  <path d="M0 0.5H1280" id="Vector 16" stroke="var(--stroke-0, white)" strokeOpacity="0.2" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute contents left-0 top-0">
                    <div className="absolute left-0 rounded-[6px] size-[24px] top-0" style={{ backgroundImage: "linear-gradient(-89.2764deg, rgb(55, 169, 255) 0.16684%, rgb(15, 103, 254) 99.901%)" }} />
                    <div className="absolute h-[15px] left-[3.85px] top-[4.5px] w-[16.256px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2559 15">
                        <g id="Group 47231">
                          <path d={svgPaths.p1d158290} fill="var(--fill-0, white)" id="Subtract" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-harmony font-bold leading-[1.5] not-italic relative shrink-0 text-[18px] text-center text-white">听脑AI｜你的语音助手</p>
              </div>
              <div className="content-stretch flex flex-col md:flex-row items-start md:items-center justify-between relative shrink-0 w-full gap-[12px]">
                <div className="content-stretch flex flex-wrap gap-[12px] items-start justify-start relative">
                  <p className="font-harmony font-medium leading-[1.5] not-italic relative text-[14px] text-[rgba(255,255,255,0.6)] text-left md:text-center w-full md:w-auto">中国（上海）自由贸易试验区张江路665号三层</p>
                  <Frame1940699514BackgroundImage />
                  <p className="font-harmony font-medium leading-[1.5] not-italic relative text-[14px] text-[rgba(255,255,255,0.6)] text-left md:text-center">隐私协议</p>
                  <Frame1940699514BackgroundImage />
                  <p className="font-harmony font-medium leading-[1.5] not-italic relative text-[14px] text-[rgba(255,255,255,0.6)] text-left md:text-center">用户协议</p>
                </div>
                <div className="content-stretch flex flex-wrap gap-[16px] items-start relative w-full md:w-auto">
                  <div className="font-harmony font-medium leading-[1.5] not-italic relative text-[14px] text-[rgba(255,255,255,0.6)] text-left md:text-center w-full md:w-[216.205px] whitespace-pre-wrap">
                    <p className="mb-0">{`备案号：沪ICP备2023011076号-6   `}</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-center relative">
                    <div className="relative shrink-0 size-[20px]" data-name="image 47">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage47} />
                      </div>
                    </div>
                    <p className="font-harmony font-medium leading-[1.5] not-italic relative text-[14px] text-[rgba(255,255,255,0.6)] text-left md:text-center">沪公网安备31011502402146号</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative">
                    <div className="h-[15.254px] relative shrink-0 w-[12.78px]" data-name="image 46">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage48} />
                    </div>
                    <p className="font-harmony font-medium leading-[1.5] not-italic relative text-[14px] text-[rgba(255,255,255,0.6)] text-left md:text-center">上海工商</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
