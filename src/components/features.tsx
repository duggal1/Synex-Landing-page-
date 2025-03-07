import { FEATURES } from '@/constants';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const Features = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-6 mb-20">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Platform Features" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight !leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/20 dark:from-white dark:via-white/80 dark:to-blue-500/50">
                 Agentic Automated 
                        <span className="block bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                        Invoice  Handling
                        </span>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto font-medium">
                    Stop chasing payments. Synex AI auto-generates, tracks, and follows up on invoices—so you get paid on time without lifting a finger.
                    </p>
                </AnimationContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {FEATURES.map((feature, index) => (
                    <AnimationContainer
                        key={index}
                        animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                        delay={0.5 + index * 0.1}
                    >
                        <div className="group relative rounded-3xl bg-black/40 border border-white/5 backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:bg-black/60 hover:border-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/10">
                            <div className="flex flex-col h-full p-8 justify-between gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-neutral-400 max-w-md font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                                
                                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/5">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    );
};

export default Features;