import * as React from "react"
import { cn } from "@/lib"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

import { ShineBorder } from "../magicui/shine-border"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  bottomImage?: {
    light: string
    dark: string
  }
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties



  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      bottomImage = {
      
        dark: "https://farmui.vercel.app/dashboard.png",
      },
      gridOptions,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-gray-600 dark:text-gray-400 group font-black tracking-tight mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/10 via-gray-400/5 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[1px] border-black/5 dark:border-white/5 rounded-full w-fit backdrop-blur-xl">
                {title}
                <ChevronRight className="inline w-3 h-3 ml-2 group-hover:translate-x-1.5 duration-500" />
              </h1>
              <h2 className="text-5xl font-black tracking-tighter bg-clip-text text-transparent mx-auto md:text-7xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.85)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.85)_180%)]">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 dark:from-purple-200 dark:via-purple-300 dark:to-orange-100">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600/90 dark:text-gray-300/90 text-sm tracking-wide">
                {description}
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white/80 dark:bg-gray-950/80 text-xs font-black tracking-wide backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/10 via-purple-400/20 to-transparent dark:from-zinc-300/5 dark:via-purple-400/10 text-gray-900 dark:text-white border-input border-[0.5px] hover:bg-gradient-to-tr hover:from-zinc-300/20 hover:via-purple-400/30 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/20 transition-all sm:w-auto py-4 px-12"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </div>
            </div>
            <div className="relative pt-12">
            {bottomImage && (
  <div className="mt-32 mx-auto relative z-10 max-w-6xl">
    <div className="relative overflow-hidden rounded-sm">
    <ShineBorder shineColor={["#00F5A0", "#FF6A95", "#7B61FF"]} />
      <Image
        src={bottomImage.dark}
        className="hidden w-full shadow-xl rounded-lg border border-gray-800/20 dark:block relative z-20"
        alt="Dashboard preview"
        width={1200}
        height={800}
      />
      

    </div>
  </div>
)}
 </div>
         
      
          </div>
        </section>
      </div>
    )
  },
)
HeroSection.displayName = "HeroSection"

export { HeroSection }