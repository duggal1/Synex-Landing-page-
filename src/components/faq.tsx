import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from '@/constants';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";
import SectionBadge from './ui/section-badge';

const FAQ = () => {
    return (
        <Wrapper className="py-20 lg:py-32 relative">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-50" />

            <div className="flex flex-col items-center text-center gap-6">
                <AnimationContainer animation="fadeUp" delay={0.2}>
                    <SectionBadge title="FAQ" />
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.3}>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight !leading-[1.1]">
                        <span className="bg-gradient-to-b from-white via-white/80 to-white/20 bg-clip-text text-transparent">
                            Still have questions?
                        </span>
                        <span className="block mt-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                            We&lsquo;re here to help
                        </span>
                    </h2>
                </AnimationContainer>

                <AnimationContainer animation="fadeUp" delay={0.4}>
                    <p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto font-medium tracking-wide">
                        Find answers to common questions about PropEase and discover how we can help streamline your property management
                    </p>
                </AnimationContainer>
            </div>

            <div className="max-w-3xl mx-auto pt-16">
    <Accordion type="single" collapsible className="w-full space-y-4">
        {FAQS.map((item, index) => (
            <AnimationContainer
                key={index}
                animation="fadeUp"
                delay={0.5 + (index * 0.1)}
            >
                <AccordionItem
                    value={`item-${index}`}
                    className="relative group bg-black/40 border border-white/5 rounded-2xl overflow-hidden"
                >
                    <AccordionTrigger 
                        className="w-full flex justify-between items-center px-6 py-4 text-base md:text-lg font-bold text-white/90 hover:no-underline"
                    >
                        {item.question}
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-6 pb-4">
                        <div className="text-neutral-400 text-sm md:text-base">
                            {item.answer}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </AnimationContainer>
        ))}
    </Accordion>
</div>
        </Wrapper>
    );
};
export default FAQ;