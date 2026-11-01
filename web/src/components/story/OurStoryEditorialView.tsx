import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function OurStoryEditorialView() {
  return (
    <div className="flex flex-col w-full bg-white text-ink overflow-x-clip selection:bg-marigold/20">

      {/* ========================================================================= */}
      {/* SECTION 01 — HERO: A thought beyond what we wear */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center text-xs text-muted-foreground font-light">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-border" />
          <span className="text-ink font-medium">Our Story</span>
        </nav>

        {/* Hero Narrative Header */}
        <div className="max-w-[880px] mb-12 md:mb-16">
          <span className="text-xs font-inter font-bold uppercase tracking-[0.25em] text-marigold block mb-4">
            OUR STORY
          </span>
          
          <h1 className="font-editorial italic font-semibold text-ink text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-tight mb-8">
            The things we make matter. So does what goes into making them.
          </h1>

          <div className="space-y-4 max-w-[720px] text-ink/80 font-sans text-base sm:text-lg font-light leading-relaxed">
            <p>
              Good Karma began with a simple thought: the things we use every day are connected to a world much larger than the product itself.
            </p>
            <p>
              Behind every garment are people, materials, resources, decisions and processes. Each of these has an impact, even when we cannot see it.
            </p>
            <p>
              We believe that care should extend beyond the finished product. It should be present in the choices behind it, the people involved in making it and the world those choices leave behind.
            </p>
            <p className="text-ink font-normal pt-1">
              This is the thought that guides Good Karma.
            </p>
          </div>
        </div>

        {/* 
          HERO IMAGE SLOT (Easy manual replacement):
          To replace this hero photograph later, swap: /images/story/story-hero.jpg
          Subject: Authentic human, working environment, or meaningful setting connected to brand purpose.
        */}
        <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden border border-border/60 bg-paper shadow-sm aspect-[16/9] sm:aspect-[21/9] max-h-[580px]">
          <img 
            src="/images/story/story-hero.jpg" 
            alt="The thoughtful choices, materials, and people behind Good Karma" 
            className="w-full h-full object-cover object-center block"
            loading="eager"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — THE BIGGER PICTURE: Every product has a world behind it */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-paper py-20 md:py-32 px-6 lg:px-12 border-y border-border/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Text Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-sage block mb-4">
                The Bigger Picture
              </span>

              <h2 className="font-editorial italic font-semibold text-ink text-2xl sm:text-3xl md:text-[40px] leading-[1.15] tracking-tight mb-8">
                There is always more to a product than meets the eye.
              </h2>

              <div className="space-y-5 text-ink/80 font-sans text-base sm:text-lg font-light leading-relaxed max-w-[580px]">
                <p>
                  A product has a life long before it reaches someone’s home.
                </p>
                <p>
                  It begins with resources from the earth. It moves through farms, workshops, factories, supply chains and the hands of many people. Along the way, it uses water, energy, materials and time.
                </p>
                <p className="font-medium text-ink">
                  These connections deserve more attention.
                </p>
                <p>
                  For us, understanding a product also means understanding the systems around it. Where does it come from? Who is involved? What resources does it use? What happens after it is made?
                </p>
                <p>
                  We want these questions to become a more natural part of how products are created, understood and chosen.
                </p>
              </div>
            </div>

            {/* 
              DOCUMENTARY IMAGE SLOT (Easy manual replacement):
              To replace this image, swap: /images/story/the-bigger-picture.jpg
              Subject: Natural resources, agricultural landscape, hands, or workshop setting.
            */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-border/60 bg-white shadow-sm aspect-[4/3] sm:aspect-[16/11]">
                <img 
                  src="/images/story/the-bigger-picture.jpg" 
                  alt="Understanding the wider systems and resources connected to everyday products" 
                  className="w-full h-full object-cover object-center block"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — OUR RESPONSIBILITY: What we are working towards */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-white py-20 md:py-32 px-6 lg:px-12 border-b border-border/50">
        <div className="max-w-[1440px] mx-auto w-full">
          
          {/* Section Header */}
          <div className="max-w-[800px] mb-14 md:mb-20">
            <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-marigold block mb-4">
              Our Responsibility
            </span>
            <h2 className="font-editorial italic font-semibold text-ink text-2xl sm:text-3xl md:text-[40px] leading-[1.15] tracking-tight">
              Responsibility belongs in the everyday decisions.
            </h2>
          </div>

          {/* 
            Asymmetric 4-Part Editorial Grid (varied proportions & subtle background depths)
            Images can be replaced individually in: /images/story/responsibility-*.jpg
          */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Area 01: Materials */}
            <div className="md:col-span-7 bg-paper rounded-2xl md:rounded-3xl p-8 lg:p-10 border border-border/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-inter font-bold tracking-widest text-marigold uppercase">
                    Area 01
                  </span>
                  <span className="text-[11px] font-sans font-medium text-muted-foreground uppercase tracking-wider">
                    Origins & Sourcing
                  </span>
                </div>
                <h3 className="font-editorial italic font-semibold text-ink text-xl sm:text-2xl md:text-[26px] leading-snug mb-4">
                  01. Materials with a clearer origin
                </h3>
                <p className="font-sans text-base sm:text-lg text-ink/80 font-light leading-relaxed max-w-[560px] mb-8">
                  Understanding where our materials come from and choosing them with greater care. We want the story of a material to be as clear as the product it becomes.
                </p>
              </div>
              <div className="w-full rounded-xl overflow-hidden aspect-[16/9] border border-border/40 bg-white">
                <img 
                  src="/images/story/responsibility-materials.jpg" 
                  alt="Raw natural materials and thoughtful agricultural sourcing"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Area 02: Production */}
            <div className="md:col-span-5 bg-paper rounded-2xl md:rounded-3xl p-8 lg:p-10 border border-border/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-inter font-bold tracking-widest text-sage uppercase">
                    Area 02
                  </span>
                  <span className="text-[11px] font-sans font-medium text-muted-foreground uppercase tracking-wider">
                    Manufacturing Process
                  </span>
                </div>
                <h3 className="font-editorial italic font-semibold text-ink text-xl sm:text-2xl md:text-[26px] leading-snug mb-4">
                  02. More considered production
                </h3>
                <p className="font-sans text-base sm:text-lg text-ink/80 font-light leading-relaxed mb-8">
                  Paying attention to the processes, resources and inputs involved in making our products. Responsible production requires attention at every stage, including the parts a customer may never see.
                </p>
              </div>
              <div className="w-full rounded-xl overflow-hidden aspect-[4/3] border border-border/40 bg-white">
                <img 
                  src="/images/story/responsibility-production.jpg" 
                  alt="Considered workshop processes and mindful production"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Area 03: Transparency */}
            <div className="md:col-span-5 bg-paper rounded-2xl md:rounded-3xl p-8 lg:p-10 border border-border/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-inter font-bold tracking-widest text-mauve uppercase">
                    Area 03
                  </span>
                  <span className="text-[11px] font-sans font-medium text-muted-foreground uppercase tracking-wider">
                    Open Information
                  </span>
                </div>
                <h3 className="font-editorial italic font-semibold text-ink text-xl sm:text-2xl md:text-[26px] leading-snug mb-4">
                  03. Transparency in our choices
                </h3>
                <p className="font-sans text-base sm:text-lg text-ink/80 font-light leading-relaxed mb-8">
                  Being open about what goes into our products, what we know about our processes and where we still need to improve. We believe people should be able to make informed choices.
                </p>
              </div>
              <div className="w-full rounded-xl overflow-hidden aspect-[4/3] border border-border/40 bg-white">
                <img 
                  src="/images/story/responsibility-transparency.jpg" 
                  alt="Clear ingredient disclosure and process transparency"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Area 04: Progress */}
            <div className="md:col-span-7 bg-paper rounded-2xl md:rounded-3xl p-8 lg:p-10 border border-border/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-inter font-bold tracking-widest text-ink uppercase">
                    Area 04
                  </span>
                  <span className="text-[11px] font-sans font-medium text-muted-foreground uppercase tracking-wider">
                    Continuous Documentation
                  </span>
                </div>
                <h3 className="font-editorial italic font-semibold text-ink text-xl sm:text-2xl md:text-[26px] leading-snug mb-4">
                  04. Progress that can be measured
                </h3>
                <p className="font-sans text-base sm:text-lg text-ink/80 font-light leading-relaxed max-w-[560px] mb-8">
                  Moving towards clearer documentation of our environmental and social impact. We want our progress to be supported by information that can be understood, checked and improved upon.
                </p>
              </div>
              <div className="w-full rounded-xl overflow-hidden aspect-[16/9] border border-border/40 bg-white">
                <img 
                  src="/images/story/responsibility-progress.jpg" 
                  alt="Careful verification and ongoing documentation"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — PEOPLE AND COMMUNITIES: The people behind the work */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-paper py-20 md:py-32 px-6 lg:px-12 border-b border-border/50">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* 
              DOCUMENTARY PHOTOGRAPH (Easy manual replacement):
              To replace this image, swap: /images/story/people-and-communities.jpg
              Subject: Real people at work, artisan dyers, makers, or agricultural partners.
            */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-border/60 bg-white shadow-sm aspect-[4/3] sm:aspect-[16/11]">
                <img 
                  src="/images/story/people-and-communities.jpg" 
                  alt="Artisans, farmers, and makers bringing care and knowledge to production" 
                  className="w-full h-full object-cover object-center block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Emotional Narrative Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
              <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-marigold block mb-4">
                People and Communities
              </span>

              <h2 className="font-editorial italic font-semibold text-ink text-2xl sm:text-3xl md:text-[40px] leading-[1.15] tracking-tight mb-8">
                Every product carries the work of many hands.
              </h2>

              <div className="space-y-5 text-ink/80 font-sans text-base sm:text-lg font-light leading-relaxed max-w-[540px]">
                <p>
                  The story of a product is also the story of the people who help bring it to life.
                </p>
                <p>
                  Farmers, material suppliers, processors, dyers, makers and many others contribute knowledge and effort at different stages of production. Their work is often invisible by the time a product reaches the customer.
                </p>
                <p className="font-medium text-ink">
                  We believe their contribution deserves recognition.
                </p>
                <p>
                  Our responsibility is to understand the relationships behind our supply chain, value the people involved and keep working towards practices that respect their work and livelihoods.
                </p>
                <p className="text-ink font-normal pt-1">
                  Because the impact of a product should include the people who make it possible.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — BEYOND THE PRODUCT: Knowledge should travel further */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-white py-20 md:py-32 px-6 lg:px-12 border-b border-border/50">
        <div className="max-w-[1440px] mx-auto w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Text Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-sage block mb-4">
                Beyond The Product
              </span>

              <h2 className="font-editorial italic font-semibold text-ink text-2xl sm:text-3xl md:text-[40px] leading-[1.15] tracking-tight mb-8">
                Good choices begin with better understanding.
              </h2>

              <div className="space-y-5 text-ink/80 font-sans text-base sm:text-lg font-light leading-relaxed max-w-[520px]">
                <p>
                  Our interest in responsibility does not end with what we make.
                </p>
                <p>
                  The world around us is connected in ways that are easy to overlook. The air we breathe, the water we depend on, the land that supports us and the materials we use are all part of the same larger picture.
                </p>
                <p className="font-medium text-ink">
                  We believe useful knowledge should be accessible to more people.
                </p>
                <p>
                  Through education, research-led conversations and stories about the environment and everyday life, we want to make complex subjects easier to understand and encourage more thoughtful decisions.
                </p>
                <p className="text-ink font-normal pt-1">
                  We are still learning, and we believe that learning should be shared.
                </p>
              </div>
            </div>

            {/* 
              ASYMMETRIC COLLAGE (Easy manual replacement):
              Main image: /images/story/beyond-product-main.jpg
              Detail 1: /images/story/beyond-product-detail-1.jpg
              Detail 2: /images/story/beyond-product-detail-2.jpg
              Subject: Environmental learning, nature, community conversations, everyday life.
            */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4 sm:gap-6 items-stretch">
              {/* Main Documentary Visual */}
              <div className="col-span-12 sm:col-span-8 rounded-2xl md:rounded-3xl overflow-hidden border border-border/60 bg-paper aspect-[4/3] sm:aspect-[4/5] shadow-sm">
                <img 
                  src="/images/story/beyond-product-main.jpg" 
                  alt="Everyday environments, nature, and community life" 
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>

              {/* Supporting Details Column */}
              <div className="col-span-12 sm:col-span-4 flex flex-row sm:flex-col gap-4 sm:gap-6">
                <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden border border-border/60 bg-paper aspect-square sm:aspect-auto sm:h-full">
                  <img 
                    src="/images/story/beyond-product-detail-1.jpg" 
                    alt="Atmospheric light and environmental learning" 
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden border border-border/60 bg-paper aspect-square sm:aspect-auto sm:h-full">
                  <img 
                    src="/images/story/beyond-product-detail-2.jpg" 
                    alt="Natural plant dyes and materials from the earth" 
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — ACCOUNTABILITY: Impact should be visible */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-paper py-20 md:py-32 px-6 lg:px-12 border-b border-border/50">
        <div className="max-w-[1440px] mx-auto w-full">
          
          <div className="max-w-[780px] mb-12 md:mb-16">
            <span className="text-xs font-inter font-bold uppercase tracking-[0.2em] text-ink/70 block mb-4">
              Accountability
            </span>

            <h2 className="font-editorial italic font-semibold text-ink text-2xl sm:text-3xl md:text-[40px] leading-[1.15] tracking-tight mb-8">
              Good intentions deserve accountability.
            </h2>

            <div className="space-y-5 text-ink/80 font-sans text-base sm:text-lg font-light leading-relaxed">
              <p>
                We do not believe impact should be measured by words alone.
              </p>
              <p>
                It should be visible in the choices a business makes, the information it shares and the progress it is willing to account for.
              </p>
              <p>
                As our work develops, we want to make more of this information available: the origins of our materials, the resources used in production, the people and partners involved, and the improvements we make over time.
              </p>
              <p>
                We will share what we can substantiate, be clear about what is still being measured and remain open about the work ahead.
              </p>
              <p className="text-ink font-normal pt-1">
                For us, responsibility is an ongoing practice. It requires attention, honesty and the willingness to keep improving.
              </p>
            </div>
          </div>

          {/* Structured Thematic Focus Areas (Areas of ongoing practice, NOT fabricated achievement metrics) */}
          <div className="pt-8 border-t border-border/60">
            <span className="text-[11px] font-inter font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-6">
              Areas of Ongoing Focus & Transparency
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Materials and sourcing", note: "Tracing raw fiber provenance and origin documentation." },
                { title: "Production resources", note: "Accounting for water, natural inputs, and cleaner energy." },
                { title: "People and partnerships", note: "Audited standards respecting artisan safety and livelihoods." },
                { title: "Environmental responsibility", note: "Clean bio-effluent filtration and biodegradable circularity." },
                { title: "Progress and transparency", note: "Publishing verifiable updates and acknowledging ongoing work." }
              ].map((area, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-border/60 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-marigold uppercase tracking-wider block mb-2">
                      Focus 0{idx + 1}
                    </span>
                    <h3 className="font-sans font-semibold text-ink text-base mb-2">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed mt-2 pt-3 border-t border-border/40">
                    {area.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07 — CLOSING: A little more good, every day */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-white py-24 md:py-36 px-6 lg:px-12 text-center">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          
          {/* Tagline Headline */}
          <h2 className="font-editorial italic font-semibold text-ink text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] tracking-tight mb-8">
            Be Good. Wear Good.
          </h2>

          {/* Closing Narrative Copy */}
          <div className="space-y-4 text-ink/80 font-sans text-base sm:text-lg font-light leading-relaxed mb-12 max-w-[640px]">
            <p>
              We are building Good Karma around a simple belief: everyday choices can be made with greater care.
            </p>
            <p>
              For the people who make things. For the people who use them. And for the world we all share.
            </p>
            <p>
              There is always more to learn, more to understand and more we can do.
            </p>
            <p className="text-ink font-normal pt-1">
              We hope to keep moving in that direction, one thoughtful decision at a time.
            </p>
          </div>

          {/* Warm Brand Signature Lockup */}
          <div className="pt-8 border-t border-border/50 w-full max-w-[360px] flex flex-col items-center justify-center">
            <span className="font-display font-extrabold text-3xl text-marigold tracking-tight block lowercase">
              good karma
            </span>
            <span className="text-xs font-inter font-bold uppercase tracking-[0.25em] text-sage mt-2">
              Be Good. Wear Good.
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
