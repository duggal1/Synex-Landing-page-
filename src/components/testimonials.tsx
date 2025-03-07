import { TESTIMONIALS } from '@/constants';
import { Star } from 'lucide-react';
import Image from 'next/image';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import Marquee from './ui/marquee';
import SectionBadge from './ui/section-badge';

const Testimonials = () => {
    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-6 mb-20">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Client Stories" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight !leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-blue-500/50">
                        Loved by industry
                        <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                            professionals
                        </span>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto font-medium tracking-wide">
                        Join thousands of satisfied users transforming their property management experience
                    </p>
                </AnimationContainer>
            </div>

            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="relative">
                    <div className="absolute -left-1 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                    <div className="absolute -right-1 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

                    <Marquee className="[--gap:2rem]" pauseOnHover>
                        {TESTIMONIALS.map((testimonial, index) => (
                            <AnimationContainer
                                key={index}
                                animation="fadeUp"
                                delay={0.6 + (index * 0.1)}
                            >
                                <div className="flex-shrink-0 w-[400px] rounded-3xl bg-black/40 border border-white/5 backdrop-blur-2xl p-8 transition-all duration-300 hover:bg-black/60 hover:border-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/10">
                                    <div className="flex flex-col gap-8">
                                        <AnimationContainer animation="fadeRight" delay={0.7 + (index * 0.1)}>
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.author}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                                                        {testimonial.author}
                                                    </h4>
                                                    <p className="text-sm text-blue-400/80 font-medium">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </AnimationContainer>

                                        <AnimationContainer animation="fadeUp" delay={0.8 + (index * 0.1)}>
                                            <p className="text-lg font-medium tracking-wide text-neutral-300/90">
                                                &quot;{testimonial.content}&#34;
                                            </p>
                                        </AnimationContainer>

                                        <AnimationContainer animation="fadeUp" delay={0.9 + (index * 0.1)}>
                                            <div className="flex gap-1.5">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 fill-blue-500 text-blue-400"
                                                    />
                                                ))}
                                            </div>
                                        </AnimationContainer>
                                    </div>
                                </div>
                            </AnimationContainer>
                        ))}
                    </Marquee>
                </div>
            </AnimationContainer>
        </Wrapper>
    );
};

export default Testimonials;