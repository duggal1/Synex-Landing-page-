"use client";

import { PRICING_PLANS } from '@/constants';
import { cn } from '@/lib';
import NumberFlow from '@number-flow/react';
import { Check, X } from 'lucide-react';
import { useState } from 'react';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import { Button } from "./ui/button";
import SectionBadge from './ui/section-badge';

const Pricing = () => {

    const [isYearly, setIsYearly] = useState<boolean>(false);

    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="flex flex-col items-center text-center gap-6">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="Pricing" />
                </AnimationContainer>
    
                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight !leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-blue-500/50">
                        Simple pricing,
                        <span className="block bg-gradient-to-r from-blue-100 to-indigo-100 bg-clip-text text-transparent">
                            powerful features
                        </span>
                    </h2>
                </AnimationContainer>
    
                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto font-medium tracking-wide">
                        Choose the perfect plan for your real estate business. No hidden fees.
                    </p>
                </AnimationContainer>
            </div>
    
            <AnimationContainer animation="fadeUp" delay={0.5}>
                <div className="flex items-center justify-center gap-4 pt-12">
                    <button
                        onClick={() => setIsYearly(false)}
                        className={cn(
                            "text-sm font-bold tracking-wide transition-all duration-300",
                            !isYearly ? "text-blue-400" : "text-neutral-500"
                        )}
                    >
                        Monthly
                    </button>
                    <div
                        onClick={() => setIsYearly(!isYearly)}
                        className="h-7 w-14 rounded-full bg-black/60 p-1 cursor-pointer transition-colors duration-300 border border-white/5 hover:border-blue-500/20"
                    >
                        <div
                            className={cn(
                                "h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500",
                                isYearly ? "translate-x-7" : "translate-x-0"
                            )}
                        />
                    </div>
                    <button
                        onClick={() => setIsYearly(true)}
                        className={cn(
                            "text-sm font-bold tracking-wide transition-all duration-300",
                            isYearly ? "text-blue-400" : "text-neutral-500"
                        )}
                    >
                        Yearly
                    </button>
                </div>
            </AnimationContainer>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                {PRICING_PLANS.map((plan, index) => (
                    <AnimationContainer
                        key={index}
                        animation="fadeUp"
                        delay={0.6 + (index * 0.2)}
                    >
                        <div
                            className={cn(
                                "relative rounded-3xl p-8 flex flex-col overflow-hidden transition-all duration-300 group hover:scale-[1.02]",
                                plan.popular ? 
                                    "bg-gradient-to-b from-black/80 to-black/40 border border-blue-500/20" : 
                                    "bg-gradient-to-b from-black/60 to-black/20 border border-white/5 hover:border-blue-500/10",
                                "backdrop-blur-3xl"
                            )}
                        >
                            {plan.popular && (
                                <>
                                    <div className="absolute inset-x-0 mx-auto -top-1/8 size-40 rounded-full bg-blue-500/20 -z-10 blur-[100px]" />
                                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                                </>
                            )}
    
                            <AnimationContainer animation="fadeUp" delay={0.7 + (index * 0.2)}>
                                <div className="mb-8">
                                    <h3 className="text-xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-neutral-400 font-medium">
                                        {plan.description}
                                    </p>
                                </div>
                            </AnimationContainer>
    
                            <AnimationContainer animation="fadeUp" delay={0.8 + (index * 0.2)}>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-4xl font-black text-white/90">$</span>
                                    <span className="text-6xl font-black text-white/90">
                                        <NumberFlow
                                            value={isYearly ? plan.price.yearly : plan.price.monthly}
                                        />
                                    </span>
                                    <span className="text-neutral-400 font-medium">
                                        /{isYearly ? 'year' : 'month'}
                                    </span>
                                </div>
                            </AnimationContainer>

                            <div className="flex-1">
                                <AnimationContainer animation="fadeUp" delay={0.9 + (index * 0.2)}>
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-3">
                                                {feature.included ? (
                                                    <Check className="w-5 h-5 text-primary" />
                                                ) : (
                                                    <X className="w-5 h-5 text-muted-foreground" />
                                                )}
                                                <span className={cn(
                                                    "text-sm",
                                                    feature.included ? "text-foreground" : "text-muted-foreground"
                                                )}>
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </AnimationContainer>
                            </div>

                            <AnimationContainer animation="fadeUp" delay={1 + (index * 0.2)}>
                                <Button
                                    variant={plan.popular ? "default" : "secondary"}
                                    className="w-full"
                                >
                                    Get Started
                                </Button>
                            </AnimationContainer>
                        </div>
                    </AnimationContainer>
                ))}
            </div>
        </Wrapper>
    );
};

export default Pricing;
