import { PERKS } from '@/constants';
import { cn } from "@/lib";
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const Perks = () => {
    return (
        <Wrapper className="py-24 lg:py-40 relative">
            <div className="flex flex-col items-center text-center gap-6">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Features" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight !leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40">
                        Use our platform
                        <span className="block bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                            with powerful tools
                        </span>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto font-medium tracking-wide">
                        Seamlessly integrated tools for effortless property management.
                    </p>
                </AnimationContainer>
            </div>

            <div className="relative pt-20">
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-10 opacity-40">
                    <AnimationContainer animation="scaleUp" delay={0.5}>
                        <Image
                            src="/images/grid-lines.svg"
                            alt="Grid Pattern"
                            width={32}
                            height={32}
                            className="size-full mix-blend-overlay"
                        />
                    </AnimationContainer>
                </div>

                <div className="grid grid-cols-2 relative z-20">
                    {PERKS.map((perk, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex items-center p-4 md:p-16",
                                index % 2 === 0 ? "justify-end" : "justify-start"
                            )}
                        >
 <AnimationContainer
                                animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                                delay={0.2 * (index + 1)}
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="size-12 lg:size-16 rounded-lg lg:rounded-2xl bg-neutral-900 flex items-center justify-center">
                                      
                                        <perk.icon className="size-8 lg:size-10 text-blue-400/90 transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-lg md:text-xl font-black bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                                            {perk.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-muted-foreground/70 max-w-[250px] font-medium">
                                            {perk.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimationContainer>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Perks;