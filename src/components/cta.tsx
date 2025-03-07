import { RetroGrid } from "./magicui/retro-grid";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <div className="mt-32 mx-auto relative z-10 max-w-6xl px-4">
      <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <RetroGrid
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 p-8 text-center">
          <h2 className="max-w-4xl bg-gradient-to-b from-white via-white/80 to-blue-500/80 bg-clip-text text-center text-4xl md:text-5xl lg:text-51xl font-black tracking-tight text-transparent">
            Get started with SynexAI
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              today
            </span>
          </h2>
          
          <p className="max-w-xl text-sm md:text-base text-neutral-400 font-medium">
          Join hundreds of businesses automating invoice management with Synex AI—faster processing, zero errors, lower costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold tracking-wide px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/20"
            >
              Start for free
            </Button>
            <Button
              variant="outline"
              className="border-white/10 hover:bg-white/5 text-white font-bold tracking-wide px-8 py-6 rounded-2xl transition-all duration-300"
            >
              Schedule demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;