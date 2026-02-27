import { useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence, motion as fm } from "framer-motion";
import clsx from "clsx";
import svgPaths from "./svg-0iqufmq4sg";
import { HoverCard, Video3D } from "../components/animations";
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
import imgImage119 from "figma:asset/20acfa273bdbbbcdff1b2151c26bb8384452a4ac.png";
import img88Ffa0Bdd326E11398186A292Fef34A71 from "figma:asset/b3e20b54ab3d82805eff22408cf88d412f2b0a28.png";
import imgImage136 from "figma:asset/d8c3d8df2337fa0c01da30b422b3f54ab5ebd476.png";
import imgImage45 from "figma:asset/eaf857922a37f5fa0901126672ef6d3b3b4120d7.png";
import imgImage46 from "figma:asset/f266a447fc86466c02a3550b1bfc38f1a18e50f2.png";
import imgImage47 from "figma:asset/ac3eefcfa5a3049d8ed9230860d9c21735c52590.png";
import imgContentCreation from "../assets/内容创作.png";
import imgImage48 from "figma:asset/11eba6f21d8dc97aa4c1daa89bb862d4d81aeb82.png";
type BackgroundImage2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImage2({ children, text, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <motion.button
      type="button"
      className="h-[40px] relative rounded-[8px] shrink-0 overflow-visible bg-transparent"
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      variants={{
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.9, transition: { duration: 0.1 } }
      }}
    >
      <motion.div
        className="absolute inset-[-1.5px] rounded-[8px] z-0"
        style={{
          background: "linear-gradient(90deg, #0f67fe 0%, #2ad1f8 25%, #667eea 50%, #4facfe 75%, #0f67fe 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-[-15px] rounded-[24px] z-[-1]"
        style={{
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.6), transparent 70%)",
          filter: "blur(15px)",
        }}
        variants={{
          initial: { opacity: 0, scale: 1 },
          hover: { opacity: 1, scale: 1.2, transition: { duration: 0.2 } },
          tap: { opacity: 0.8, scale: 0.95, transition: { duration: 0.1 } }
        }}
      />
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
        style={{ backgroundColor: "#191f33" }}
        variants={{
          hover: { backgroundColor: "#0f67fe" },
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
        <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f8f8f8] text-[16px] text-center z-10">{text}</p>
      </motion.div>
    </motion.button>
  );
}
type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage11Props>) {
  return (
    <div className={clsx("pointer-events-none relative rounded-[12px] shrink-0 w-[68px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden rounded-[12px]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#d3e4ff] border-solid inset-0 rounded-[12px]" />
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
    <HoverCard className={clsx("bg-white col-1 justify-self-stretch relative rounded-[12px] self-stretch shrink-0 overflow-visible hover:z-10 shadow-[0px_3px_32px_0px_rgba(0,0,0,0.05)]", additionalClassNames)} hoverY={-6}>
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
    <HoverCard className="bg-white flex-[1_0_0] h-[201.667px] min-h-px min-w-px relative rounded-[12px]" hoverY={-6}>
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_44px_0px_rgba(0,0,0,0.05)]" />
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
        <path d={svgPaths.p1223f600} id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="square" strokeWidth="1.5" />
      </VectorBackgroundImage>
      <VectorBackgroundImage additionalClassNames="inset-[68.75%_68.75%_12.5%_12.5%]">
        <path d={svgPaths.ped5c880} id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="square" strokeWidth="1.5" />
      </VectorBackgroundImage>
      <VectorBackgroundImage additionalClassNames="inset-[68.75%_12.5%_12.5%_68.75%]">
        <path d={svgPaths.p166dd000} id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="square" strokeWidth="1.5" />
      </VectorBackgroundImage>
      <VectorBackgroundImage additionalClassNames="inset-[12.5%_12.5%_68.75%_68.75%]">
        <path d={svgPaths.p124955c0} id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="square" strokeWidth="1.5" />
      </VectorBackgroundImage>
      <div className="absolute bottom-1/2 left-[20.84%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1.17px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 2.33333">
            <path d="M1.16667 1.16667H17.5" id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="square" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ImageBackgroundImage1() {
  return (
    <BackgroundImage11 additionalClassNames="h-[58px]">
      <img alt="" className="absolute h-[185.05%] left-[-175.6%] max-w-none top-[-44.95%] w-[516.46%]" src={imgImage43} />
    </BackgroundImage11>
  );
}
type BackgroundImageAndText7Props = {
  text: string;
};

function BackgroundImageAndText7({ text }: BackgroundImageAndText7Props) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.5] not-italic relative shrink-0">
      <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] relative shrink-0 text-[#191f33] text-[20px] text-center">{text}</p>
      <div className="content-stretch flex font-['HarmonyOS_Sans_SC:Regular',sans-serif] gap-[11.208px] items-center relative shrink-0 text-[17.933px] text-white">
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
    <div className="relative rounded-[112.084px] shrink-0 size-[51.559px] overflow-hidden">
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
      <div className="content-stretch flex gap-[13.45px] items-center relative shrink-0">
        <ImageBackgroundImage src={avatar} />
        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.5] not-italic relative shrink-0">
          <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] relative shrink-0 text-[#191f33] text-[20px] text-center">{title}</p>
          <div className="content-stretch flex font-['HarmonyOS_Sans_SC:Regular',sans-serif] gap-[11.208px] items-center relative shrink-0 text-[17.933px] text-white">
            <p className="relative shrink-0">{"🌟"}</p>
            <p className="relative shrink-0">{"🌟"}</p>
            <p className="relative shrink-0">{"🌟"}</p>
            <p className="relative shrink-0">{"🌟"}</p>
            <p className="relative shrink-0">{"🌟"}</p>
          </div>
        </div>
      </div>
      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#B2B2B2] text-[16px] w-[min-content] whitespace-pre-wrap">{text}</p>
      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[15.692px] text-[rgba(71,85,105,0.5)] text-center">{text1}</p>
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
          <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1d1d1d] text-[16px] text-center">{text}</p>
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
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#939393] text-[14px] w-full whitespace-pre-wrap">{text}</p>
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
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] w-full whitespace-pre-wrap">{text}</p>
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
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] w-[64px] whitespace-pre-wrap">{text}</p>
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
        <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] w-[64px] whitespace-pre-wrap">{"工作例会"}</p>
      </div>
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{text}</p>
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
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] w-full whitespace-pre-wrap">{text}</p>
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
    <p className={clsx("font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#B2B2B2] text-[0px] text-[18px]", additionalClassNames)}>
      <span className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[500] leading-[1.5] text-[#6C6C6C]">{text}</span>
      <span className="leading-[1.5]">{text1}</span>
    </p>
  );
}

function BackgroundImage() {
  return (
    <motion.button
      type="button"
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
        className="absolute inset-[-1.5px] rounded-[12px] z-0"
        style={{
          background: "linear-gradient(90deg, #0f67fe 0%, #2ad1f8 25%, #667eea 50%, #4facfe 75%, #0f67fe 100%)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-[-20px] rounded-[34px] z-[-1]"
        style={{
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.6), transparent 70%)",
          filter: "blur(20px)",
        }}
        variants={{
          initial: { opacity: 0, scale: 1 },
          hover: { opacity: 1, scale: 1.2, transition: { duration: 0.2 } },
          tap: { opacity: 0.8, scale: 0.95, transition: { duration: 0.1 } }
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
        style={{ backgroundColor: "#191f33" }}
        variants={{
          hover: { backgroundColor: "#0f67fe" },
          tap: { backgroundColor: "#0f67fe" }
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 rounded-[12px] pointer-events-none"
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
        <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f8f8f8] text-[24px] text-center z-10">{"免费使用"}</p>
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
  // 视频配置 - 请将视频文件放在 public/videos/ 目录下
  const heroVideoUrl = "/videos/hero.mp4"; // 首页主视频
  const transcribeVideoUrl = "/videos/transcribe.mp4"; // 实时转写视频
  const summaryVideoUrl = "/videos/summary.mp4"; // 智能总结视频
  const knowledgeVideoUrl = "/videos/knowledge.mp4"; // 知识库视频
  const [activeScenario, setActiveScenario] = useState(0);
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

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="首页-第四版-最新">
      <div className="bg-white content-stretch flex flex-col gap-[80px] items-center overflow-clip pb-[72px] relative shrink-0 w-full">
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
        <div className="content-stretch flex h-[72px] items-center justify-between relative shrink-0 w-full max-w-[1280px] mx-auto px-4">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[32px]">
                <div className="absolute contents left-0 top-0">
                  <div className="absolute left-0 rounded-[8px] size-[32px] top-0" style={{ backgroundImage: "linear-gradient(269.774deg, #28CAF9 30.212%, #1068FE 92.258%)" }} />
                  <div className="absolute h-[20px] left-[5.13px] top-[6px] w-[21.675px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6748 20">
                      <g id="Group 47231">
                        <path d={svgPaths.p2cddcc00} fill="var(--fill-0, white)" id="Subtract" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[22px] text-center">听脑AI</p>
            </div>
            <div className="flex-[1_0_0] min-h-px min-w-px relative">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[40px] items-center justify-center px-[32px] relative w-full">
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      className="content-stretch flex gap-[6px] items-center justify-center relative"
                      onClick={() => setIsSceneOpen((prev) => !prev)}
                    >
                      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] font-[400] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[14px] text-center">使用场景</p>
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
                      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] text-[14px] text-[#191f33]">办公</p>
                      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] text-[14px] text-[#191f33]">教育</p>
                      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] text-[14px] text-[#191f33]">销售</p>
                      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] text-[14px] text-[#191f33]">自媒体</p>
                    </div>
                  </div>
                  <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] font-[400] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[14px] text-center">定价</p>
                  <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[14px] text-center">企业解决方案</p>
                  <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[14px] text-center">TinCard录音卡</p>
                </div>
              </div>
            </div>
          </div>
          <BackgroundImage2 text="免费使用" additionalClassNames="h-full px-[20px] py-[5.185px]" />
        </div>
        <div className="content-stretch flex flex-col gap-[80px] items-center relative shrink-0 w-full max-w-[1280px] mx-auto px-4">
          <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1164px]">
            <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0">
              <ScrollReveal>
                <div className="content-stretch flex font-['HarmonyOS_Sans_SC:Bold',sans-serif] gap-[12px] items-center leading-[normal] relative shrink-0 text-[54px]">
                  <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] relative shrink-0 text-[#191f33]">听脑AI，提高了</p>
                  <p className="bg-clip-text bg-gradient-to-b font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] relative shrink-0 text-[transparent] to-[#2ad1f8] from-[#0f67fe]">10倍</p>
                  <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] relative shrink-0 text-[#191f33]">工作/学习效率</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#B2B2B2] text-[18px] text-center w-full max-w-[680px] whitespace-pre-wrap">我是你的AI录音助手，通过实时录音转写、AI自动总结，AI随时可问，你的工作和学习时间最多可节省 90% ！</p>
              </ScrollReveal>
            </div>
            <BackgroundImage />
          </div>
          <Video3D className="h-[720px] relative rounded-[32px] shrink-0 w-full" data-name="80+ 海量智能模板，让每一次记录都更省时间">
            <video
              autoPlay
              muted
              className="absolute max-w-none object-cover rounded-[32px] size-full z-[1]"
              loop
              playsInline
              src={heroVideoUrl}
            />
            <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-[-8px] pointer-events-none rounded-[40px] shadow-[0px_6px_44px_0px_rgba(0,0,0,0.07)]" />
          </Video3D>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center px-[72px] relative w-full max-w-[1280px] mx-auto">
            <ScrollReveal direction="right">
              <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#B2B2B2] text-[clamp(14px,2vw,20px)] text-center">深受顶级企业信赖</p>
            </ScrollReveal>
            <div className="h-[72px] relative shrink-0 w-full max-w-[1120px] flex-1 min-w-0 overflow-hidden mx-auto" data-name="image 99">
              <div className="flex w-[200%] animate-[scrollLeft_28s_linear_infinite]">
                <div className="h-[72px] relative shrink-0 w-1/2">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage99} />
                  </div>
                </div>
                <div className="h-[72px] relative shrink-0 w-1/2">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage99} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-[734px] items-center justify-center py-[120px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[72px] h-[384px] items-center relative rounded-bl-[2px] rounded-br-[2px] rounded-tl-[54px] rounded-tr-[54px] shrink-0 w-full max-w-[1280px] mx-auto px-4">
          <div className="content-stretch flex flex-col h-[376px] items-start justify-between relative shrink-0">
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <div className="absolute flex h-[28.785px] items-center justify-center left-[210.25px] top-[21.25px] w-[184.392px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
                <div className="flex-none rotate-[2.89deg]">
                  <div className="h-[19.554px] relative w-[183.64px]">
                    <div className="absolute inset-[-17.7%_-1.63%_-18.64%_-1.63%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189.641 26.6577">
                        <motion.path
                          d={svgPaths.p21b73900}
                          fill="var(--stroke-0, #108BFE)"
                          stroke="var(--stroke-0, #108BFE)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                          viewport={{ once: true, amount: 0.6 }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <ScrollReveal>
                <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[32px] text-center">实时录音转写，沟通即记录</p>
              </ScrollReveal>
              <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[524px]">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[525px]">
                  <div className="bg-[rgba(16,139,254,0.2)] content-stretch flex items-center justify-center px-[3px] py-[4px] relative rounded-[83.333px] shrink-0 size-[28px]">
                    <div className="relative shrink-0 size-[14px]" data-name="Message-success (信息成功)">
                      <div className="absolute inset-[12.5%_8.33%_14.58%_8.33%]" data-name="Vector">
                        <div className="absolute inset-[-4.9%_-4.29%_-1.54%_-4.29%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 10.8654">
                            <path d={svgPaths.p2f81e800} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[70.83%] left-1/4 right-[62.5%] top-[29.17%]" data-name="Vector">
                        <div className="absolute inset-[-0.5px_-28.57%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75 1">
                            <path d="M0.5 0.5H1.375H2.25" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[58.33%] left-1/4 right-1/2 top-[41.67%]" data-name="Vector">
                        <div className="absolute inset-[-0.5px_-14.29%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 1">
                            <path d="M0.5 0.5H2.25H4" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[27.08%] left-[60.41%] right-[8.34%] top-1/2" data-name="Vector">
                        <div className="absolute inset-[-21.93%_-16.08%_-22.04%_-16.1%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7828 4.61903">
                            <path d={svgPaths.p2071c400} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <BackgroundImage1 text="准确率最高达 98%：" text1="多人会议、专业词语也能稳稳识别" additionalClassNames="text-center" />
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[478px]">
                  <div className="bg-[rgba(16,139,254,0.2)] content-stretch flex items-center justify-center px-[2px] py-[3px] relative rounded-[83.333px] shrink-0 size-[28px]">
                    <div className="relative shrink-0 size-[14px]" data-name="People-speak (人员说话)">
                      <div className="absolute bottom-[58.33%] left-1/4 right-[45.84%] top-[12.5%]" data-name="Vector">
                        <div className="absolute inset-[-12.24%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.08333 5.08333">
                            <path d={svgPaths.p406dd00} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[16.67%_29.17%_62.5%_68.75%]" data-name="Vector">
                        <div className="absolute inset-[-23%_-171.42%_-22.36%_-230%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.46247 4.23958">
                            <path d={svgPaths.p223e300} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[8.33%_12.49%_54.17%_83.34%]" data-name="Vector">
                        <div className="absolute inset-[-12.95%_-85.71%_-12.61%_-116.55%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7632 6.59198">
                            <path d={svgPaths.p3d2f0800} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[58.33%_29.16%_12.5%_8.34%]" data-name="Vector">
                        <div className="absolute inset-[-12.24%_-5.71%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 5.08333">
                            <path d={svgPaths.p17b9f500} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <BackgroundImage1 text="自动区分发言人：" text1="智能声文识别，让每段话可追溯" />
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[455px]">
                  <div className="bg-[rgba(16,139,254,0.2)] content-stretch flex flex-col items-center justify-center p-[8.333px] relative rounded-[83.333px] shrink-0 size-[28px]">
                    <div className="relative shrink-0 size-[14px]" data-name="Earth (地球仪)">
                      <div className="absolute inset-[8.33%]" data-name="Vector">
                        <div className="absolute inset-[-4.29%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 12.6667">
                            <path clipRule="evenodd" d={svgPaths.p31f7cf00} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">
                        <div className="absolute inset-[-0.5px_-4.29%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 1">
                            <path d="M0.5 0.5H12.1667" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[8.33%_33.33%]" data-name="Vector">
                        <div className="absolute inset-[-4.29%_-10.71%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 12.6667">
                            <path clipRule="evenodd" d={svgPaths.p3faec900} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[21.13%_20.53%_66.67%_20.54%]" data-name="Vector">
                        <div className="absolute inset-[-41.39%_-8.57%_-29.26%_-8.57%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6638 2.91566">
                            <path d={svgPaths.p476fc00} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[66.67%_20.53%_21.13%_20.54%]" data-name="Vector">
                        <div className="absolute inset-[-29.26%_-8.57%_-41.39%_-8.57%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6638 2.91566">
                            <path d={svgPaths.p2534a880} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <BackgroundImage1 text="多语言翻译与16+方言：" text1="复杂沟通也能准确转写" additionalClassNames="text-center" />
                </div>
              </div>
            </div>
            <BackgroundImage2 text="立即使用" additionalClassNames="px-[24px] py-[6px]" />
          </div>
          <Video3D className="h-[383.625px] relative rounded-[23.444px] shrink-0 w-[682px]" data-name="80+ 海量智能模板，让每一次记录都更省时间">
            <video
              autoPlay
              muted
              className="absolute max-w-none object-cover rounded-[23.444px] size-full z-[1]"
              loop
              playsInline
              src={transcribeVideoUrl}
            />
          </Video3D>
        </div>
      </div>
      <div className="relative rounded-[44px] shrink-0 w-full">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[66px] relative w-full">
            <div className="content-stretch flex flex-col gap-[55px] items-center justify-end relative rounded-bl-[4px] rounded-br-[4px] rounded-tl-[54px] rounded-tr-[54px] shrink-0 w-full max-w-[1280px] mx-auto">
              <div className="content-stretch flex flex-col gap-[54px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
                  <div className="absolute flex h-[19.349px] items-center justify-center left-[538.23px] top-[25.76px] w-[181.987px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
                    <div className="flex-none rotate-[1.36deg]">
                      <div className="h-[15.045px] relative w-[181.681px]">
                        <div className="absolute inset-[-18.63%_-1.65%_-21.35%_-1.65%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187.682 21.0591">
                            <motion.path
                              d={svgPaths.p3e94ac00}
                              fill="var(--stroke-0, #108BFE)"
                              stroke="var(--stroke-0, #108BFE)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              initial={{ pathLength: 0, opacity: 0 }}
                              whileInView={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                              viewport={{ once: true, amount: 0.6 }}
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ScrollReveal>
                    <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] leading-[1.5] not-italic relative shrink-0 text-[#191f33] text-[32px] text-center">AI 智能总结，2小时内容，3分钟掌握</p>
                  </ScrollReveal>
                  <div className="content-center flex flex-wrap gap-[8px_16px] items-center justify-center relative shrink-0 w-full max-w-[864px]">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="bg-[rgba(16,139,254,0.2)] content-stretch flex items-center justify-center px-[2px] py-[3px] relative rounded-[83.333px] shrink-0 size-[26px]">
                        <div className="relative shrink-0 size-[14px]" data-name="Mind-mapping (脑图)">
                          <div className="absolute bottom-[41.67%] left-[8.34%] right-3/4 top-[41.67%]" data-name="Vector">
                            <div className="absolute inset-[-21.43%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                                <path d={svgPaths.p17bf6b00} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <BackgroundImage8 additionalClassNames="inset-[8.33%_8.33%_83.33%_83.34%]">
                            <path d={svgPaths.p1c918170} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                          </BackgroundImage8>
                          <Frame1940699698VectorBackgroundImage additionalClassNames="inset-[45.83%_8.33%_45.83%_83.34%]" />
                          <Frame1940699698VectorBackgroundImage additionalClassNames="inset-[83.33%_8.33%_8.33%_83.34%]" />
                          <div className="absolute inset-[12.5%_33.34%_12.5%_41.66%]" data-name="Vector">
                            <div className="absolute inset-[-4.76%_-14.29%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 11.5">
                                <path d={svgPaths.p31b4ea00} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" strokeLinecap="square" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-1/2 left-1/4 right-[33.33%] top-1/2" data-name="Vector">
                            <div className="absolute inset-[-0.5px_-8.57%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 1">
                                <path d="M0.5 0.5H6.33333" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" strokeLinecap="square" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <BackgroundImage1 text="自动生成思维导图：" text1="思路清晰不再混乱" additionalClassNames="text-center" />
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="bg-[rgba(16,139,254,0.2)] content-stretch flex items-center justify-center p-[3px] relative rounded-[83.333px] shrink-0 size-[26px]">
                        <div className="relative shrink-0 size-[14px]" data-name="Data-arrival (数据到达)">
                          <div className="absolute inset-[12.5%]" data-name="Vector">
                            <div className="absolute inset-[-4.76%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
                                <path clipRule="evenodd" d={svgPaths.p3e3c4200} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[37.5%_31.25%]" data-name="Vector">
                            <div className="absolute inset-[-20.2%_-13.47%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66421 4.91421">
                                <path d={svgPaths.p219900c0} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" strokeLinecap="square" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <BackgroundImage1 text="待办任务自动提取：" text1="关键行动一目了然" additionalClassNames="text-center" />
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="bg-[rgba(16,139,254,0.2)] content-stretch flex items-center justify-center p-[3px] relative rounded-[83.333px] shrink-0 size-[26px]">
                        <div className="relative shrink-0 size-[14px]" data-name="Form (表格)">
                          <div className="absolute inset-[16.67%_8.33%_16.67%_8.34%]" data-name="Vector">
                            <div className="absolute inset-[-5.36%_-4.29%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 10.3333">
                                <path d={svgPaths.p584b200} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>
                          <Frame1940699700VectorBackgroundImage additionalClassNames="inset-[60.42%_8.33%_39.58%_8.34%]" />
                          <Frame1940699700VectorBackgroundImage1 additionalClassNames="inset-[60.42%_8.33%_39.58%_8.34%]" />
                          <Frame1940699700VectorBackgroundImage additionalClassNames="inset-[39.58%_8.33%_60.42%_8.34%]" />
                          <Frame1940699700VectorBackgroundImage1 additionalClassNames="inset-[39.58%_8.33%_60.42%_8.34%]" />
                          <Frame1940699700VectorBackgroundImage additionalClassNames="inset-[39.58%_64.59%_16.67%_35.41%]" />
                          <Frame1940699700VectorBackgroundImage2 additionalClassNames="inset-[39.58%_64.59%_16.67%_35.41%]" />
                          <Frame1940699700VectorBackgroundImage additionalClassNames="inset-[35.42%_91.66%_20.83%_8.34%]" />
                          <Frame1940699700VectorBackgroundImage2 additionalClassNames="inset-[35.42%_91.66%_20.83%_8.34%]" />
                          <Frame1940699700VectorBackgroundImage additionalClassNames="inset-[35.42%_8.34%_20.83%_91.66%]" />
                          <Frame1940699700VectorBackgroundImage2 additionalClassNames="inset-[35.42%_8.34%_20.83%_91.66%]" />
                          <Frame1940699700VectorBackgroundImage additionalClassNames="inset-[39.58%_35.41%_16.67%_64.59%]" />
                          <Frame1940699700VectorBackgroundImage2 additionalClassNames="inset-[39.58%_35.41%_16.67%_64.59%]" />
                          <div className="absolute inset-[83.33%_18.75%_16.67%_18.75%]" data-name="Vector">
                            <div className="absolute inset-[-0.5px_-5.71%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 1">
                                <path d="M0.5 0.5H9.25" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" strokeLinecap="square" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <BackgroundImage1 text="自动生成表格：" text1="关键信息结构化呈现" additionalClassNames="text-center" />
                    </div>
                  </div>
                </div>
                <Video3D className="h-[720px] relative rounded-[32px] shrink-0 w-full" data-name="80+ 海量智能模板，让每一次记录都更省时间">
                  <video
                    autoPlay
                    muted
                    className="absolute max-w-none object-cover rounded-[32px] size-full z-[1]"
                    loop
                    playsInline
                    src={summaryVideoUrl}
                  />
                </Video3D>
              </div>
              <BackgroundImage2 text="立即使用" additionalClassNames="h-full px-[23.704px] py-[5.185px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex h-[734px] items-center justify-between overflow-clip py-[80px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[72px] h-[384px] items-center relative rounded-bl-[2px] rounded-br-[2px] rounded-tl-[54px] rounded-tr-[54px] shrink-0 w-full max-w-[1280px] mx-auto px-4">
          <Video3D className="h-[383.625px] relative rounded-[22px] shrink-0 w-[682px]" data-name="80+ 海量智能模板，让每一次记录都更省时间">
            <video
              autoPlay
              muted
              className="absolute max-w-none object-cover rounded-[22px] size-full z-[1]"
              loop
              playsInline
              src={knowledgeVideoUrl}
            />
          </Video3D>
          <div className="content-stretch flex flex-col h-[337px] items-start justify-between relative shrink-0 w-[525px]">
            <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-full">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
                <div className="col-1 flex h-[14.353px] items-center justify-center ml-[28.12px] mt-[78.1px] relative row-1 w-[143.251px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
                  <div className="flex-none rotate-[1.16deg] skew-x-[-0.43deg]">
                    <div className="h-[11.465px] relative w-[142.962px]">
                      <div className="absolute inset-[-26.72%_-2.1%_-28.62%_-2.1%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148.963 17.8088">
                          <motion.path
                            d={svgPaths.p3512c540}
                            fill="var(--stroke-0, #108BFE)"
                            stroke="var(--stroke-0, #108BFE)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            viewport={{ once: true, amount: 0.6 }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <ScrollReveal className="col-1 row-1 ml-0 mt-0">
                  <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] leading-[1.5] not-italic relative text-[#191f33] text-[32px] w-[525px] whitespace-pre-wrap">连接你的知识库，让 AI 问答成为你的第二大脑</p>
                </ScrollReveal>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="bg-[rgba(16,139,254,0.2)] content-stretch flex items-center justify-center px-[3px] py-[4px] relative rounded-[91.667px] shrink-0 size-[32px]">
                    <div className="relative shrink-0 size-[15.4px]" data-name="Data-arrival (数据到达)">
                      <div className="absolute inset-[12.5%]" data-name="Vector">
                        <div className="absolute inset-[-4.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.55 12.55">
                            <path clipRule="evenodd" d={svgPaths.p33694f00} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[37.5%_31.25%]" data-name="Vector">
                        <div className="absolute inset-[-18.37%_-12.24%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18921 5.26421">
                            <path d={svgPaths.p363af280} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#6C6C6C] text-[18px] whitespace-pre-wrap">总结一周待办事项，帮你回顾、判断并规划下一步</p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="bg-[rgba(16,139,254,0.2)] content-stretch flex items-center justify-center px-[3px] py-[2px] relative rounded-[91.667px] shrink-0 size-[32px]">
                    <div className="relative shrink-0 size-[15.4px]" data-name="Wallet (钱包)">
                      <div className="absolute inset-[8.33%_24.17%_75.02%_37.46%]" data-name="Vector">
                        <div className="absolute inset-[-26.65%_-14.67%_-19.54%_-31.52%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.63725 3.74706">
                            <path clipRule="evenodd" d={svgPaths.p281a0780} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[8.33%] left-[8.34%] right-[8.33%] top-1/4" data-name="Vector">
                        <div className="absolute inset-[-4.87%_-3.9%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8333 11.2667">
                            <path d={svgPaths.pc9eb600} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[47.92%_8.33%_31.25%_62.5%]" data-name="Vector">
                        <div className="absolute inset-[-15.58%_-11.13%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.49167 4.20833">
                            <path d={svgPaths.p1cd6da00} id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[34.38%_8.34%_15.63%_91.66%]" data-name="Vector">
                        <div className="absolute inset-[-6.49%_-0.5px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 8.7">
                            <path d="M0.5 0.5V8.2" id="Vector" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" strokeLinecap="square" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#6C6C6C] text-[18px] whitespace-pre-wrap">把零散的会议信息，变成组织可用的数字资产</p>
                </div>
              </div>
            </div>
            <BackgroundImage2 text="立即使用" additionalClassNames="h-full px-[24px] py-[5.185px]" />
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[64px] items-center overflow-clip pb-[72px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[80px] h-[1110px] items-center pt-[90px] relative shrink-0 w-[1440px]">
          <div className="absolute contents inset-[-28.38%_-24.37%_-41.07%_-20.43%]">
            <div className="absolute flex inset-[-28.38%_-24.37%_-41.07%_-20.43%] items-center justify-center">
              <div className="-scale-y-100 flex-none h-[1880.839px] w-[2085.108px]">
                <div className="relative size-full">
                  <img alt="" className="absolute block max-w-none size-full" height="1880.839" src={imgEllipse5567} width="2085.108" />
                </div>
              </div>
            </div>
            <div className="absolute inset-[0.8%_-5.38%_-15.76%_-4.73%]">
              <div className="absolute inset-[-23.51%_-18.92%]">
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
          </div>
          <div className="content-stretch flex flex-col gap-[54px] items-center justify-center px-[137px] relative shrink-0">
            <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="col-1 flex h-[24.284px] items-center justify-center ml-[0.07px] mt-[25.31px] relative row-1 w-[256.397px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
                  <div className="flex-none rotate-[1.36deg]">
                    <div className="h-[18.218px] relative w-[256.037px]">
                      <div className="absolute inset-[-18.72%_-1.2%_-18.89%_-1.17%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 262.101 25.0699">
                          <motion.path
                            d={svgPaths.pcb54900}
                            fill="var(--stroke-0, #108BFE)"
                            stroke="var(--stroke-0, #108BFE)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            viewport={{ once: true, amount: 0.6 }}
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <ScrollReveal className="col-1 row-1 ml-0 mt-0">
                  <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] leading-[1.5] not-italic relative text-[#191f33] text-[32px] text-center">80+ 海量智能模板，让每一次记录都更省时间</p>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={0.1}>
                <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#B2B2B2] text-[18px] text-center">覆盖办公、销售、教育等众多行业，智能推荐最合适你的模板，快速上手，无需纠结选择</p>
              </ScrollReveal>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[49.27px] mt-0 place-items-start relative row-1">
                <div className="col-1 h-[514.133px] ml-0 mt-0 relative row-1 w-[900.671px]" data-name="image 135">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage135} />
                  </div>
                </div>
              </div>
              <div className="bg-white col-1 h-[28.051px] ml-[202.86px] mt-[58.32px] rounded-[12.443px] row-1 w-[185.059px]" data-name="URL Fill BG" />

              <motion.div
                initial={{ opacity: 0, x: 70, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                viewport={{ once: true, amount: 0.45 }}
                className="col-1 flex h-[179.404px] items-center justify-center ml-[779.67px] mt-[245.08px] relative row-1 w-[207.196px]"
                style={{ "--transform-inner-width": "1185", "--transform-inner-height": "59" } as React.CSSProperties}
              >
                <div className="flex-none rotate-[12.77deg]">
                  <div className="bg-white h-[143.148px] relative rounded-[16px] w-[180px]" data-name="模版三">
                    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic overflow-clip p-[20px] relative rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[13.262px] items-center relative shrink-0 text-[#191f33]">
                        <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] relative shrink-0 text-[25.412px]">💬</p>
                        <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] relative shrink-0 text-[19.059px] text-center">讨论</p>
                      </div>
                      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] min-w-full relative shrink-0 text-[#a7a7a7] text-[14px] w-[min-content] whitespace-pre-wrap">记录讨论要点形成共识</p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.326px_15.915px_0px_rgba(255,255,255,0.25)]" />
                    <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[2.426px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7.278px_27.306px_0px_rgba(0,0,0,0.06)]" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 60, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                viewport={{ once: true, amount: 0.45 }}
                className="col-1 flex h-[178.472px] items-center justify-center ml-[765.54px] mt-[29px] relative row-1 w-[218.622px]"
                style={{ "--transform-inner-width": "1185", "--transform-inner-height": "59" } as React.CSSProperties}
              >
                <div className="flex-none rotate-[-15.69deg]">
                  <div className="bg-white relative rounded-[16px] w-[190px]" data-name="模版四">
                    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic overflow-clip p-[20px] relative rounded-[inherit] w-full">
                      <div className="content-stretch flex gap-[13.543px] items-center relative shrink-0 text-[#191f33]">
                        <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] relative shrink-0 text-[25.333px]">✍️</p>
                        <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] relative shrink-0 text-[19px] text-center">课堂笔记</p>
                      </div>
                      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] min-w-full relative shrink-0 text-[#a7a7a7] text-[14px] w-[min-content] whitespace-pre-wrap">高效整理课堂知识点便于复习。</p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.354px_16.252px_0px_rgba(255,255,255,0.25)]" />
                    <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[2.477px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7.432px_27.884px_0px_rgba(0,0,0,0.06)]" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -70, y: 60 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                viewport={{ once: true, amount: 0.45 }}
                className="col-1 flex h-[176.376px] items-center justify-center ml-0 mt-[284.75px] relative row-1 w-[207.122px]"
                style={{ "--transform-inner-width": "1185", "--transform-inner-height": "59" } as React.CSSProperties}
              >
                <div className="flex-none rotate-[-13.34deg]">
                  <div className="bg-white content-stretch flex flex-col gap-[12px] h-[138.575px] items-start p-[20px] relative rounded-[16px] w-[180px]" data-name="模版二">
                    <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[2.236px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7.153px_26.837px_0px_rgba(0,0,0,0.06)]" />
                    <div className="content-stretch flex gap-[13.418px] items-center not-italic relative shrink-0">
                      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-end leading-[0] relative shrink-0 size-[24.6px] text-[24px] text-white">
                        <p className="leading-[normal] whitespace-pre-wrap">💻</p>
                      </div>
                      <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] relative shrink-0 text-[#6C6C6C] text-[18px] text-center">工作例会</p>
                    </div>
                    <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#a7a7a7] text-[14px] w-[min-content] whitespace-pre-wrap">将复杂的长内容极简化总结</p>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.303px_15.641px_0px_rgba(255,255,255,0.25)]" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -60, y: -40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                viewport={{ once: true, amount: 0.45 }}
                className="col-1 flex h-[199.671px] items-center justify-center ml-[0.56px] mt-[47.75px] relative row-1 w-[220.848px]"
                style={{ "--transform-inner-width": "1185", "--transform-inner-height": "97" } as React.CSSProperties}
              >
                <div className="flex-none rotate-[10.61deg]">
                  <div className="bg-white relative rounded-[16px]" data-name="模版一">
                    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative rounded-[inherit]">
                      <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[12.224px] items-center relative shrink-0 text-[#191f33]">
                          <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] relative shrink-0 text-[26.246px]">✨</p>
                          <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] relative shrink-0 text-[19.685px] text-center">极简总结</p>
                        </div>
                        <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] min-w-full relative shrink-0 text-[#a7a7a7] text-[14px] w-[min-content] whitespace-pre-wrap">将复杂的长内容极简化总结</p>
                      </div>
                      <div className="content-stretch flex gap-[9.962px] items-center relative shrink-0">
                        <div className="bg-white content-stretch flex h-[25.902px] items-center justify-center relative rounded-[4px] shrink-0 w-[71.728px]">
                          <div aria-hidden="true" className="absolute border-[#0f67fe] border-[0.996px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0f67fe] text-[11.955px]">预览</p>
                        </div>
                        <div className="bg-[#0f67fe] content-stretch flex h-[25.902px] items-center justify-center relative rounded-[4px] shrink-0 w-[71.728px]">
                          <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11.955px] text-white">使用模板</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1.222px_14.668px_0px_rgba(255,255,255,0.25)]" />
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px] shadow-[0px_6.708px_25.168px_0px_rgba(0,47,255,0.08)]" style={{ padding: "2.236px", background: "linear-gradient(to right, #35FFF6, #0F67FE)", mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", maskComposite: "exclude", WebkitMaskComposite: "xor" }} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[18px] h-[320px] items-start relative shrink-0 overflow-visible w-full pb-[12px] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex items-start shrink-0 animate-[scrollLeft_20s_linear_infinite] w-max [&>*]:flex-none [&>*]:min-w-[190px] [&>*]:max-w-[220px] [&>*]:w-[clamp(190px,15vw,220px)] [&>*]:mr-[20px]">
              <div className="bg-white content-stretch flex flex-col gap-[17.933px] items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                  <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#191f33] text-[22px] whitespace-nowrap">
                    <p className="leading-[normal]">🧑‍🏫</p>
                  </div>
                  <BackgroundImageAndText text="教育工作会议" />
                </div>
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">部署教育工作与协同落实</p>
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
                    <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] whitespace-pre-wrap">多人项目讨论会</p>
                  </div>
                  <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] whitespace-pre-wrap">同步项目进度与协同解决问问题问题</p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <BackgroundImageAndText3 text="教学笔记" />
                    <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] whitespace-pre-wrap">记录教学内容要点</p>
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
                    <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">审议重大事项与作出决策部署</p>
                  </div>
                </div>
              </div>
              {/* duplicate set for seamless loop */}
              <div className="bg-white content-stretch flex flex-col gap-[17.933px] items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                  <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#191f33] text-[22px] whitespace-nowrap">
                    <p className="leading-[normal]">{"\ud83e\uddd1\u200d\ud83c\udfeb"}</p>
                  </div>
                  <BackgroundImageAndText text={"\u6559\u80b2\u5de5\u4f5c\u4f1a\u8bae"} />
                </div>
                <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u90e8\u7f72\u6559\u80b2\u5de5\u4f5c\u4e0e\u534f\u540c\u843d\u5b9e"}</p>
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
                    <p className="font-['PingFang_SC:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#191f33] text-[16px] whitespace-pre-wrap">{"\u591a\u4eba\u9879\u76ee\u8ba8\u8bba\u4f1a"}</p>
                  </div>
                  <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] whitespace-pre-wrap">{"\u540c\u6b65\u9879\u76ee\u8fdb\u5ea6\u4e0e\u534f\u540c\u89e3\u51b3\u95ee\u95ee\u9898\u95ee\u9898"}</p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col items-start px-[20px] py-[24px] relative rounded-[12px] self-stretch shrink-0">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_28px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <BackgroundImageAndText3 text={"\u6559\u5b66\u7b14\u8bb0"} />
                    <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] whitespace-pre-wrap">{"\u8bb0\u5f55\u6559\u5b66\u5185\u5bb9\u8981\u70b9"}</p>
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
                    <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u5ba1\u8bae\u91cd\u5927\u4e8b\u9879\u4e0e\u4f5c\u51fa\u51b3\u7b56\u90e8\u7f72"}</p>
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
                    <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">部署教育工作与协同落实</p>
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
                    <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] w-full whitespace-pre-wrap">同步项目进度与协同解决问问题问题</p>
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
                    <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">审议重大事项与作出决策部署</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex items-start px-[20px] py-[24px] relative rounded-[16px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[172px]">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                      <div className="flex flex-col font-['PingFang_SC:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">
                        <p className="leading-[normal]">💼</p>
                      </div>
                      <BackgroundImageAndText text="常务会议" />
                    </div>
                    <p className="font-['PingFang_SC:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">审议重大事项与作出决策部署</p>
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
                    <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u90e8\u7f72\u6559\u80b2\u5de5\u4f5c\u4e0e\u534f\u540c\u843d\u5b9e"}</p>
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
                    <p className="font-['PingFang_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#939393] text-[14px] w-full whitespace-pre-wrap">{"\u540c\u6b65\u9879\u76ee\u8fdb\u5ea6\u4e0e\u534f\u540c\u89e3\u51b3\u95ee\u95ee\u9898\u95ee\u9898"}</p>
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
                    <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u5ba1\u8bae\u91cd\u5927\u4e8b\u9879\u4e0e\u4f5c\u51fa\u51b3\u7b56\u90e8\u7f72"}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex items-start px-[20px] py-[24px] relative rounded-[16px] self-stretch shrink-0 w-[190px]">
                <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[172px]">
                  <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
                      <div className="flex flex-col font-['HarmonyOS_Sans_SC:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[22px] text-white whitespace-nowrap">
                        <p className="leading-[normal]">{"\ud83d\udcbc"}</p>
                      </div>
                      <BackgroundImageAndText text={"\u5e38\u52a1\u4f1a\u8bae"} />
                    </div>
                    <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#939393] text-[14px] w-[min-content] whitespace-pre-wrap">{"\u5ba1\u8bae\u91cd\u5927\u4e8b\u9879\u4e0e\u4f5c\u51fa\u51b3\u7b56\u90e8\u7f72"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[64px] h-[829px] items-center justify-center py-[64px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.5] not-italic relative shrink-0 w-full max-w-[1280px] mx-auto px-4">
          <ScrollReveal>
            <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] relative shrink-0 text-[#191f33] text-[32px]">不管什么场景，记录都能自然跟上你的节奏</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] relative shrink-0 text-[#B2B2B2] text-[18px] text-left">无论是会议讨论、电话沟通还是日常交流，记录都会在沟通过程中自动完成，不打断对话，也不增加额外操作负担</p>
          </ScrollReveal>
        </div>
        <div className="content-stretch flex flex-col gap-[72px] h-[516px] items-center relative shrink-0 w-full max-w-[1280px] mx-auto px-4">
          <div className="bg-white content-stretch flex gap-[10px] items-center px-[10px] py-[8px] relative rounded-[100px] shrink-0 w-full max-w-[570px] mx-auto">
            <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_4px_17px_0px_rgba(0,0,0,0.06)]" />
            {scenarios.map((scenario, index) => (
              <fm.button
                key={scenario.label}
                type="button"
                onClick={() => setActiveScenario(index)}
                className={clsx(
                  "flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[100px]",
                  index === activeScenario && "bg-gradient-to-b from-[#303030] to-[#1f1f1f]",
                )}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[42px] py-[5.185px] relative size-full">
                    <p
                      className={clsx(
                        "font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-center",
                        index === activeScenario ? "text-white" : "text-[#1d1d1d]",
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
          <div className="content-stretch flex items-start relative shrink-0">
            <div className="bg-white content-stretch flex h-[348px] items-center justify-between relative rounded-[19.045px] shadow-[0px_3px_44px_0px_rgba(0,0,0,0.05)] shrink-0 w-full max-w-[1280px] mx-auto">
              <div className="backdrop-blur-[15.871px] bg-[rgba(255,255,255,0.8)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-bl-[32px] rounded-tl-[32px]">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <AnimatePresence mode="wait">
                    <fm.div
                      key={activeScenario}
                      className="content-stretch flex flex-col items-start justify-between px-[40px] py-[54px] relative size-full"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full whitespace-pre-wrap">
                      <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] relative shrink-0 text-[#191f33] text-[28px] w-full">{currentScenario.title}</p>
                      <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] relative shrink-0 text-[#6C6C6C] text-[16px] w-full">{currentScenario.description}</p>
                    </div>
                    <div className="content-start flex flex-wrap gap-[24px_64px] items-start relative shrink-0 w-[373px]">
                      <div className="content-stretch flex gap-[9.523px] items-center relative shrink-0">
                        <div className="relative shrink-0 size-[15.871px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8711 15.8712">
                            <g id="Group 1940698520">
                              <circle cx="7.93553" cy="7.9357" id="Ellipse 13" r="7.60488" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                              <path d={svgPaths.p22921800} id="Vector 20" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                        <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6C6C6C] text-[18px]">{currentScenario.features[0]}</p>
                      </div>
                      <div className="content-stretch flex gap-[9.523px] items-center relative shrink-0">
                        <div className="relative shrink-0 size-[15.871px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8711 15.8712">
                            <g id="Group 1940698522">
                              <circle cx="7.93553" cy="7.9357" id="Ellipse 13" r="7.60488" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                              <path d={svgPaths.p22921800} id="Vector 20" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                        <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6C6C6C] text-[18px]">{currentScenario.features[1]}</p>
                      </div>
                      <div className="content-stretch flex gap-[9.523px] items-center relative shrink-0">
                        <div className="relative shrink-0 size-[15.871px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8711 15.8712">
                            <g id="Group 1940698521">
                              <circle cx="7.93553" cy="7.93568" id="Ellipse 13" r="7.60488" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                              <path d={svgPaths.p24ba5c80} id="Vector 20" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                        <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6C6C6C] text-[18px]">{currentScenario.features[2]}</p>
                      </div>
                      <div className="content-stretch flex gap-[9.523px] items-center relative shrink-0">
                        <div className="relative shrink-0 size-[15.871px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8711 15.8712">
                            <g id="Group 1940698523">
                              <circle cx="7.93553" cy="7.93568" id="Ellipse 13" r="7.60488" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                              <path d={svgPaths.p24ba5c80} id="Vector 20" stroke="var(--stroke-0, #4E4E4E)" strokeWidth="0.5" />
                            </g>
                          </svg>
                        </div>
                        <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6C6C6C] text-[18px]">{currentScenario.features[3]}</p>
                      </div>
                    </div>
                    </fm.div>
                  </AnimatePresence>
                </div>
                <div aria-hidden="true" className="absolute border-[#efefef] border-b-2 border-l-2 border-solid border-t-2 inset-0 pointer-events-none rounded-bl-[32px] rounded-tl-[32px]" />
              </div>
              <div className="content-stretch flex flex-col h-[427px] items-center justify-center overflow-clip relative rounded-[32px] shadow-[0px_3px_44px_0px_rgba(0,0,0,0.05)] shrink-0 w-[703px]">
                <div className="h-[604.051px] relative shrink-0 w-[1073.868px] flex items-center justify-center" data-name="image 112">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScenario}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 overflow-hidden pointer-events-none"
                    >
                      <img alt={currentScenario.title} className="absolute left-0 max-w-none size-full top-0 object-contain" src={currentScenario.image} />
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
          <div className="content-stretch flex flex-col gap-[54px] items-center px-[64px] py-[54px] relative w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.5] not-italic relative shrink-0 text-center w-[1312px]">
              <ScrollReveal className="w-full">
                <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] min-w-full relative shrink-0 text-[#191f33] text-[32px] w-[min-content] whitespace-pre-wrap">深受 50万+ 用户的喜爱</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] relative shrink-0 text-[#B2B2B2] text-[18px]">学生、老师、销售、产品经理等用户都喜欢使用听脑AI</p>
              </ScrollReveal>
            </div>
            <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1280px] mx-auto px-4">
              <div className="flex flex-col gap-[24px] items-center relative shrink-0 w-full">
                <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex items-start shrink-0 animate-[scrollLeft_25s_linear_infinite] w-max [&>*]:flex-none [&>*]:w-[411px] [&>*]:mr-[24px]">
                    <ReviewRowContent />
                  </div>
                  <div className="flex items-start shrink-0 animate-[scrollLeft_25s_linear_infinite] w-max [&>*]:flex-none [&>*]:w-[411px] [&>*]:mr-[24px]" aria-hidden="true">
                    <ReviewRowContent />
                  </div>
                </div>
                <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex items-start shrink-0 animate-[scrollRight_25s_linear_infinite] w-max [&>*]:flex-none [&>*]:w-[411px] [&>*]:mr-[24px]">
                    <ReviewRowContent />
                  </div>
                  <div className="flex items-start shrink-0 animate-[scrollRight_25s_linear_infinite] w-max [&>*]:flex-none [&>*]:w-[411px] [&>*]:mr-[24px]" aria-hidden="true">
                    <ReviewRowContent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[620px] relative rounded-bl-[32px] rounded-br-[32px] shrink-0 w-full">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[147px] py-[54px] relative size-full">
            <div className="content-stretch flex h-[441px] items-end justify-between relative shrink-0 w-full max-w-[1280px] mx-auto">
              <div className="content-stretch flex flex-col h-full items-center justify-between relative shrink-0">
                <div className="content-stretch flex flex-col gap-[12px] items-start justify-center leading-[1.5] not-italic relative shrink-0 w-full">
                  <ScrollReveal className="w-full">
                    <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] relative shrink-0 text-[#191f33] text-[32px] text-left">多端无缝协同，记录随时随地</p>
                  </ScrollReveal>
                  <ScrollReveal className="w-full" delay={0.1}>
                    <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] min-w-full relative shrink-0 text-[#B2B2B2] text-[18px] w-[min-content] whitespace-pre-wrap text-left">覆盖 iOS、Android、小程序与平板设备，录音、转写与笔记实时云端同步。无论身处何地，都能无缝切换设备，让思考与创作从不间断。</p>
                  </ScrollReveal>
                </div>
                <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[240px] relative shrink-0 w-[607px]">
                  <BackgroundImage9 additionalClassNames="col-2 row-1">
                    <ImageBackgroundImage1 />
                    <p className="flex-[1_0_0] font-['HarmonyOS_Sans_SC:Bold',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#191f33] text-[16px] whitespace-pre-wrap">IOS</p>
                    <ScanCodeBackgroundImage />
                  </BackgroundImage9>
                  <BackgroundImage9 additionalClassNames="row-2">
                    <BackgroundImage11 additionalClassNames="h-[58px]">
                      <img alt="" className="absolute h-[172.27%] left-[-375.89%] max-w-none top-[-39.06%] w-[493.23%]" src={imgImage43} />
                    </BackgroundImage11>
                    <p className="flex-[1_0_0] font-['HarmonyOS_Sans_SC:Bold',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#191f33] text-[16px] whitespace-pre-wrap">小程序</p>
                    <ScanCodeBackgroundImage />
                  </BackgroundImage9>
                  <BackgroundImage9 additionalClassNames="col-2 row-2">
                    <BackgroundImage11 additionalClassNames="h-[58px]">
                      <img alt="" className="absolute h-[183.83%] left-[-282.68%] max-w-none top-[-44.83%] w-[512.73%]" src={imgImage43} />
                    </BackgroundImage11>
                    <p className="flex-[1_0_0] font-['HarmonyOS_Sans_SC:Bold',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#191f33] text-[16px] whitespace-pre-wrap">安卓</p>
                    <ScanCodeBackgroundImage />
                  </BackgroundImage9>
                  <BackgroundImage9 additionalClassNames="row-1">
                    <ImageBackgroundImage1 />
                    <p className="flex-[1_0_0] font-['HarmonyOS_Sans_SC:Bold',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#191f33] text-[16px] whitespace-pre-wrap">Pad</p>
                    <div className="relative shrink-0 size-[28px]" data-name="To-bottom (去底部)">
                      <div className="absolute inset-[12.5%_49.99%_29.38%_50.01%]" data-name="Vector">
                        <div className="absolute inset-[-7.17%_-1.17px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33333 18.608">
                            <path d="M1.16667 17.4414V1.16667" id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="square" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[29.16%] left-1/4 right-1/4 top-[45.84%]" data-name="Vector">
                        <div className="absolute inset-[-23.57%_-11.79%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2998 10.2998">
                            <path d={svgPaths.p192bd000} id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="square" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[87.5%]" data-name="Vector">
                        <div className="absolute inset-[-1.17px_-8.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3333 2.33333">
                            <path d="M15.1667 1.16667H1.16667" id="Vector" stroke="var(--stroke-0, #75859D)" strokeLinecap="square" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage9>
                </div>
              </div>
              <div className="relative shrink-0 flex items-end">
                <img src={imgMultiDevice} alt="多端展示" className="block w-[592px] h-[320px] translate-y-[40px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[640px] relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center p-[80px] relative size-full">
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#e1ecff] from-[34.49%] gap-[64px] h-[460px] items-center justify-end pb-[72px] pt-[24px] px-[10px] relative rounded-bl-[44px] rounded-br-[44px] rounded-tl-[54px] rounded-tr-[54px] shrink-0 to-[100.75%] to-white via-[#edf5fe] via-[78.665%] w-full max-w-[1280px] mx-auto">
              <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.5] not-italic relative shrink-0 text-center">
                <ScrollReveal>
                  <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] font-[700] relative shrink-0 text-[#191f33] text-[36px]">立即使用听脑 AI</p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] relative shrink-0 text-black text-[18px]">用自动化记录，替代重复整理，提高整体工作/学习效率</p>
                </ScrollReveal>
              </div>
              <BackgroundImage />
              <div className="-translate-x-1/2 absolute contents left-1/2 top-[-65.96px]">
                <div className="-translate-x-1/2 absolute h-[168.071px] left-1/2 top-[-65.96px] w-[181.972px]" data-name="image 136">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[109.28%] left-[-27.79%] max-w-none top-[-4.35%] w-[151.39%]" src={imgImage136} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#070707] content-stretch flex flex-col items-center overflow-clip px-[80px] py-[54px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col h-[322px] items-start justify-center relative shrink-0 w-full max-w-[1280px]">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full h-full">
            <div className="content-stretch flex gap-[120px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col font-['HarmonyOS_Sans_SC:Medium',sans-serif] gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-[72px]">
                <p className="min-w-full relative shrink-0 text-[16px] text-white w-[min-content] whitespace-pre-wrap">使用场景</p>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">
                  <p className="relative shrink-0">办公</p>
                  <p className="relative shrink-0">教育</p>
                  <p className="relative shrink-0">销售</p>
                  <p className="relative shrink-0">自媒体</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white">产品</p>
                <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">定价</p>
                <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">企业解决方案</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">TinCard录音卡</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white">了解我们</p>
                <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">关于我们</p>
                <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">帮助中心</p>
                <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">商务合作：15223204512</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">联系电话：13883334418</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
                  <div className="h-[96.809px] relative rounded-[4px] shrink-0 w-[95.1px]" data-name="image 45">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                      <img alt="" className="absolute h-[99.99%] left-[-0.51%] max-w-none top-[0.01%] w-[101.78%]" src={imgImage45} />
                    </div>
                  </div>
                  <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center w-[min-content] whitespace-pre-wrap">联系客服</p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[102.895px]">
                  <div className="h-[95.3px] relative rounded-[4px] shrink-0 w-[94px]" data-name="image 45">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage46} />
                  </div>
                  <p className="font-['HarmonyOS_Sans_SC:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center w-[min-content] whitespace-pre-wrap">公众号</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 w-full">
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
                <p className="font-['HarmonyOS_Sans_SC:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-center text-white">听脑AI｜你的语音助手</p>
              </div>
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0">
                  <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">中国（上海）自由贸易试验区张江路665号三层</p>
                  <Frame1940699514BackgroundImage />
                  <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">隐私协议</p>
                  <Frame1940699514BackgroundImage />
                  <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">用户协议</p>
                </div>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                  <div className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] h-[20.801px] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center w-[216.205px] whitespace-pre-wrap">
                    <p className="mb-0">{`备案号：沪ICP备2023011076号-6   `}</p>
                    <p>&nbsp;</p>
                  </div>
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[20px]" data-name="image 47">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage47} />
                      </div>
                    </div>
                    <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">沪公网安备31011502402146号</p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div className="h-[15.254px] relative shrink-0 w-[12.78px]" data-name="image 46">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage48} />
                    </div>
                    <p className="font-['HarmonyOS_Sans_SC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center">上海工商</p>
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
