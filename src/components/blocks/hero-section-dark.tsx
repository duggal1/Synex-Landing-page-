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
  ({
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

    ...props
  }, ref) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        {/* Modern gradient background */}
        <div className="absolute top-0 z-[0] h-screen w-screen bg-black/40 bg-[radial-gradient(ellipse_70%_70%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_70%_70%_at_50%_-20%,rgba(56,89,255,0.3),rgba(0,0,0,0))]" />
        
        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid 
            angle={45}
            cellSize={80}
            opacity={0.3}
            lightLineColor="rgba(56, 89, 255, 0.3)"
            darkLineColor="rgba(56, 89, 255, 0.1)"
          />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              {/* Updated badge styling */}
              <h1 className="text-sm text-blue-200 group font-black tracking-tight mx-auto px-5 py-2 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent border-[1px] border-blue-500/10 rounded-full w-fit backdrop-blur-xl">
                {title}
                <ChevronRight className="inline w-3 h-3 ml-2 group-hover:translate-x-1.5 duration-500" />
              </h1>

              {/* Modern heading with gradient */}
              <h2 className="text-5xl font-black tracking-tighter bg-clip-text text-transparent mx-auto md:text-7xl bg-gradient-to-b from-white via-blue-100 to-blue-500/50">
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">
                  {subtitle.gradient}
                </span>
              </h2>

              <p className="max-w-2xl mx-auto text-blue-100/80 text-sm tracking-wide">
                {description}
              </p>

              {/* Updated CTA button */}
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3859FF_0%,#1E40AF_50%,#3859FF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/80 text-xs font-black tracking-wide backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-blue-500/10 via-indigo-500/20 to-transparent text-white border-blue-500/20 border-[0.5px] hover:bg-gradient-to-tr hover:from-blue-400/20 hover:via-indigo-400/30 hover:to-transparent transition-all sm:w-auto py-4 px-12"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </div>
            </div>


            {/* Bottom image with shine effect */}
            <div className="relative pt-12">
              {bottomImage && (
                <div className="mt-32 mx-auto relative z-10 max-w-6xl">
                  <div className="relative overflow-hidden rounded-xl">
                  <ShineBorder shineColor={["#0f03fc", "#FF6A95", "#fc7303"]} />
                    <Image
                      src={bottomImage.dark}
                      className="hidden w-full shadow-2xl rounded-xl border border-blue-500/10 dark:block relative z-20"
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
    );
  }
); 
HeroSection.displayName = "HeroSection"

export { HeroSection }