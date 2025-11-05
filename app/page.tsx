"use client"

import { useEffect, useRef, useState } from "react"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Script from "next/script"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const step3Ref = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFDA00", "#009E9C"],
      ticks: 100,
    })
  }

  const handleReviewsConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#FFDA00", "#009E9C", "#007B73"],
      ticks: 120,
      startVelocity: 45,
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-up")
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowStickyCTA(true)
      } else {
        setShowStickyCTA(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const ctaUrl =
    "https://koalendar.com/e/meet-with-flannel-people-mediation?utm_source=fb&utm_medium=ad&utm_campaign=divorce795"

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFCF8] via-[#FFF9F0] to-[#FFFCF8] overflow-x-hidden max-w-screen">
      {/* Hidden SEO H1 */}
      <h1 className="sr-only">Flat Fee Virtual Divorce Mediation – $795 Each, 3-Hour Zoom, MN</h1>

      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          showStickyCTA ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="bg-gradient-to-t from-[#FFFCF8] via-[#FFFCF8]/98 to-transparent pt-8 pb-5 px-4 shadow-2xl">
          <div className="container mx-auto max-w-4xl">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FFDA00] to-[#FFE44D] hover:from-[#FFE44D] hover:to-[#FFDA00] text-[#02504F] font-sans font-black text-sm md:text-lg px-6 py-5 md:px-10 md:py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl w-full border-2 border-[#02504F]/10 hover:-translate-y-1"
            >
              <a href={ctaUrl}>BOOK FREE CONSULT NOW →</a>
            </Button>
          </div>
        </div>
      </div>

      <header className="relative bg-white/70 backdrop-blur-2xl border-b border-[#009E9C]/10 shadow-md">
        <div className="container mx-auto px-4 py-1 md:py-2">
          <a
            href="https://flannelpeoplemediation.com"
            className="inline-block group transition-all duration-300 hover:scale-105"
            aria-label="Flannel People Mediation Home"
          >
            <Image
              src="/logo.png"
              alt="Flannel People Mediation"
              width={400}
              height={160}
              className="h-12 md:h-32 w-auto"
              priority
            />
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <video autoPlay muted loop playsInline className="h-full w-auto object-cover md:w-full md:h-auto">
            <source src="/placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFCF8]/96 via-[#FFFCF8]/80 to-[#FFFCF8]/96 backdrop-blur-[3px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 text-center scroll-animate">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#02504F] uppercase tracking-tighter mb-6 md:mb-8 text-balance leading-[0.92] drop-shadow-lg">
            End Your Divorce in One Calm, Private 3-Hour Zoom — $795 each
          </h2>
          <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#02504F]/75 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
            No lawyers. No court battle. From home. Most couples finish in one session.
          </p>

          <div className="inline-flex items-center gap-2 md:gap-3 bg-white/80 backdrop-blur-2xl px-4 py-3 md:px-8 md:py-4 rounded-full mb-8 md:mb-12 border-2 border-[#009E9C]/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 max-w-full">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#009E9C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-sans text-sm md:text-base font-bold text-[#02504F]">
              Most 5-Star Google Reviews for MN Divorce Mediators
            </span>
          </div>

          <div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FFDA00] to-[#FFE44D] hover:from-[#FFE44D] hover:to-[#FFDA00] text-[#02504F] font-sans font-black text-sm md:text-xl px-6 py-6 md:px-12 md:py-8 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-xl hover:-translate-y-2 active:scale-105 w-full sm:w-auto whitespace-normal leading-tight border-2 border-[#02504F]/10"
            >
              <a href={ctaUrl}>YES — BOOK MY FREE CONSULT NOW</a>
            </Button>
          </div>

          <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <video autoPlay muted loop playsInline className="w-full h-auto md:max-h-[450px] md:object-cover">
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero111-bxIFGnnTCKDswFTthgOf7dKKm1dWs9.MP4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 scroll-animate">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C] p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] rounded-3xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#02504F] uppercase tracking-tighter mb-4 md:mb-6 leading-tight">
              Limited to 4 Couples Per Week
            </h2>
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-[#02504F]/75 mb-3 md:mb-4 leading-relaxed">
              That's fewer than 200 per year — by design.
            </p>
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-[#02504F]/75 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
              This is high-touch, deeply personal mediation. Every couple gets my undivided focus and care.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#009E9C] text-[#009E9C] hover:bg-[#009E9C] hover:text-white font-sans font-black rounded-full px-8 py-6 md:px-10 md:py-7 bg-transparent text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            >
              <a href={ctaUrl}>See If We're a Fit →</a>
            </Button>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 scroll-animate">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#02504F] uppercase tracking-tighter text-center mb-12 md:mb-20 leading-tight">
            Traditional Divorce vs. Flannel People
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-4 border-[#C54D09] p-6 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] rounded-3xl">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-[#C54D09] uppercase tracking-tight mb-6 md:mb-8">
                Traditional Divorce
              </h3>
              <ul className="space-y-4 md:space-y-5 font-serif text-base md:text-lg lg:text-xl text-[#02504F]/80 leading-relaxed">
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#C54D09] text-xl md:text-2xl mt-1 flex-shrink-0">•</span>
                  <span>6–18 months in court</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#C54D09] text-xl md:text-2xl mt-1 flex-shrink-0">•</span>
                  <span>$15,000+ in legal fees</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#C54D09] text-xl md:text-2xl mt-1 flex-shrink-0">•</span>
                  <span>Public, stressful hearings</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#C54D09] text-xl md:text-2xl mt-1 flex-shrink-0">•</span>
                  <span>You fight. Lawyers win.</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-4 border-[#009E9C] p-6 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] rounded-3xl">
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-[#009E9C] uppercase tracking-tight mb-6 md:mb-8">
                Flannel People
              </h3>
              <ul className="space-y-4 md:space-y-5 font-serif text-base md:text-lg lg:text-xl text-[#02504F]/80 leading-relaxed">
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#009E9C] text-xl md:text-2xl mt-1 flex-shrink-0">•</span>
                  <span>One 3-hour private Zoom</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#009E9C] text-xl md:text-2xl mt-1 flex-shrink-0">•</span>
                  <span>$795 each (total $1,590)</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#009E9C] text-xl md:text-2xl mt-1 flex-shrink-0">•</span>
                  <span>From home. No court battle</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#009E9C] text-xl md:text-2xl mt-1 flex-shrink-0">•</span>
                  <span>You agree. You both win.</span>
                </li>
              </ul>
            </Card>
          </div>
          <div className="text-center mt-12 md:mt-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FFDA00] to-[#FFE44D] hover:from-[#FFE44D] hover:to-[#FFDA00] text-[#02504F] font-sans font-black text-sm md:text-xl px-6 py-6 md:px-12 md:py-8 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-xl hover:-translate-y-2 active:scale-105 w-full sm:w-auto whitespace-normal leading-tight border-2 border-[#02504F]/10"
            >
              <a href={ctaUrl}>YES — BOOK MY FREE CONSULT NOW</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 scroll-animate">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#02504F] uppercase tracking-tighter text-center mb-12 md:mb-20 leading-tight">
            Your 3-Hour Path to Done
          </h2>

          <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-auto md:max-h-[450px] md:object-cover"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hi_im_ryan_916-wPPWSNDyOqVE9bopsYFkRtSvXXP5dE.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto mb-12 md:mb-16">
            <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl p-6 md:p-10 text-center border-2 border-[#009E9C]/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 rounded-3xl">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#009E9C] to-[#007B73] text-white rounded-full flex items-center justify-center font-display text-2xl md:text-3xl font-black mx-auto mb-4 md:mb-6 shadow-xl">
                1
              </div>
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-black text-[#02504F] uppercase tracking-tight mb-3 md:mb-4">
                Free 15-Min Call
              </h3>
              <p className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed">
                Confirm you're ready.
                <br />
                Zero pressure.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl p-6 md:p-10 text-center border-2 border-[#009E9C]/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 rounded-3xl">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#009E9C] to-[#007B73] text-white rounded-full flex items-center justify-center font-display text-2xl md:text-3xl font-black mx-auto mb-4 md:mb-6 shadow-xl">
                2
              </div>
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-black text-[#02504F] uppercase tracking-tight mb-3 md:mb-4">
                Your 3-Hour Session
              </h3>
              <p className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed">
                Private Zoom, any night/weekend.
              </p>
            </Card>

            <Card
              ref={step3Ref}
              className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl p-6 md:p-10 text-center border-2 border-[#009E9C]/30 shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-3 rounded-3xl"
              onMouseEnter={handleConfetti}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#009E9C] to-[#007B73] text-white rounded-full flex items-center justify-center font-display text-2xl md:text-3xl font-black mx-auto mb-4 md:mb-6 shadow-xl">
                3
              </div>
              <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-black text-[#02504F] uppercase tracking-tight mb-3 md:mb-4">
                You File
              </h3>
              <p className="font-serif text-base md:text-lg text-[#02504F]/70 leading-relaxed">Use your agreement.</p>
            </Card>
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FFDA00] to-[#FFE44D] hover:from-[#FFE44D] hover:to-[#FFDA00] text-[#02504F] font-sans font-black text-sm md:text-xl px-6 py-6 md:px-12 md:py-8 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-xl hover:-translate-y-2 active:scale-105 w-full sm:w-auto whitespace-normal leading-tight border-2 border-[#02504F]/10"
            >
              <a href={ctaUrl}>YES — BOOK MY FREE CONSULT NOW</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 scroll-animate">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#02504F] uppercase tracking-tighter text-center mb-8 md:mb-12 leading-tight">
            Questions? I've Got You.
          </h2>
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-[#02504F]/75 text-center mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
            Here's what most couples ask before booking their free 15-min call.
          </p>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
              <AccordionItem
                value="item-1"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  Is this really just one 3-hour session?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  Yes. Most MN couples finish in one private Zoom — we focus, agree, and draft your settlement in a
                  single night or weekend.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  Do I need a lawyer?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  No. I'm a neutral mediator (not your lawyer). You can consult one later if you want — but most don't
                  need to.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  What if we can't agree in one session?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  We pause and reschedule. No pressure. But 9 in 10 couples finish in one when they're ready to talk.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  Is the agreement legally binding?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  Once you file your signed agreement with the county and the court accepts it, yes — it becomes a
                  binding order. Getting to that agreement is the huge first step and often the heaviest lift. I guide
                  you through this first step.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  What if I'm nervous about talking?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  Totally normal. We start with a free 15-min call — no pressure, just talk. Most say, "I wish we'd done
                  this sooner."
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  Can we do this on a weekend or evening?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  Yes. I'm available nights and weekends — whatever fits your life.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  What do I need to prepare?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  Just come ready to talk. No paperwork required upfront. We'll guide you through everything.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  Is this confidential?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  100%. Mediation is private — unlike court. Only you, your partner, and I are in the Zoom.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  What happens after the session?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  You get a clear, written agreement. You file it with the county (simple forms). Done.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl border-2 border-[#009E9C]/30 rounded-3xl px-6 md:px-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl lg:text-2xl font-black text-[#02504F] hover:text-[#009E9C] transition-colors py-6 text-left">
                  Why only 4 couples per week?
                </AccordionTrigger>
                <AccordionContent className="font-serif text-base md:text-lg text-[#02504F]/80 leading-relaxed pb-6">
                  This is high-touch, deeply personal work. Every couple gets my full focus — no rush, no burnout.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 scroll-animate">
        <div className="container mx-auto px-4">
          <div
            ref={reviewsRef}
            className="mb-12 md:mb-16 max-w-5xl mx-auto text-center flex justify-center cursor-pointer transition-all duration-300 hover:scale-105"
            onMouseEnter={handleReviewsConfetti}
          >
            <div id="featurable-1dee51b5-4582-4e4e-820e-5555f4091582" data-featurable-async></div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#02504F] uppercase tracking-tighter text-center mb-12 md:mb-20 leading-tight">
            MN Couples I've Helped
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto mb-12 md:mb-16">
            <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl p-6 md:p-10 border-2 border-[#009E9C]/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-3xl">
              <p className="font-serif text-lg md:text-xl text-[#02504F]/80 leading-relaxed mb-4 md:mb-6 italic">
                "Ryan made the hardest day feel… normal. We laughed. We cried. We finished."
              </p>
              <p className="font-sans text-sm md:text-base font-bold text-[#009E9C]">– Sarah & Mike, St. Paul</p>
            </Card>

            <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl p-6 md:p-10 border-2 border-[#009E9C]/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-3xl">
              <p className="font-serif text-lg md:text-xl text-[#02504F]/80 leading-relaxed mb-4 md:mb-6 italic">
                "He listened like a friend, guided like a pro. No court. No stress. Just done."
              </p>
              <p className="font-sans text-sm md:text-base font-bold text-[#009E9C]">– Jen & Tom, Duluth</p>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FFDA00] to-[#FFE44D] hover:from-[#FFE44D] hover:to-[#FFDA00] text-[#02504F] font-sans font-black text-sm md:text-xl px-6 py-6 md:px-12 md:py-8 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-xl hover:-translate-y-2 active:scale-105 w-full sm:w-auto whitespace-normal leading-tight border-2 border-[#02504F]/10"
            >
              <a href={ctaUrl}>YES — BOOK MY FREE CONSULT NOW</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 scroll-animate">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto border-2 border-[#009E9C]/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] rounded-3xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#02504F] uppercase tracking-tighter mb-6 md:mb-8 leading-tight">
              Ready When You Are
            </h2>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-[#02504F]/75 mb-8 md:mb-12 leading-relaxed">
              I'm here every week — evenings and weekends included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FFDA00] to-[#FFE44D] hover:from-[#FFE44D] hover:to-[#FFDA00] text-[#02504F] font-sans font-black text-sm md:text-xl px-6 py-6 md:px-12 md:py-8 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-xl hover:-translate-y-2 active:scale-105 w-full sm:w-auto whitespace-normal leading-tight border-2 border-[#02504F]/10"
              >
                <a href={ctaUrl}>BOOK FREE CONSULT</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 md:py-16 border-t border-[#009E9C]/20 bg-white/50 backdrop-blur-2xl">
        <div className="container mx-auto px-4 text-center">
          <p className="font-serif text-xl md:text-2xl text-[#02504F]/80 mb-6 md:mb-8 italic">
            Divorce doesn't have to be hard. Let's do this in flannel.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8 font-sans text-sm md:text-base text-[#02504F]/60">
            <a
              href="https://maps.app.goo.gl/KPzc2LjPevdWYB7h8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#009E9C] transition-colors duration-300 font-medium"
            >
              Reviews
            </a>
          </div>
          <div className="mb-6 md:mb-8 font-sans text-sm md:text-base text-[#02504F]/80 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <a
              href="mailto:flannelpeoplemediation@gmail.com"
              className="hover:text-[#009E9C] transition-colors duration-300 font-medium break-all"
            >
              flannelpeoplemediation@gmail.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:7633168323" className="hover:text-[#009E9C] transition-colors duration-300 font-medium">
              (763) 316-8323
            </a>
          </div>
          <p className="font-sans text-sm font-bold text-[#009E9C] mb-3 md:mb-4">
            MN Divorce Mediator, #1 Most 5-Star Google Reviews
          </p>
          <p className="font-sans text-xs md:text-sm text-[#02504F]/60">
            © 2025 Flannel People Mediation – By appointment only
          </p>
        </div>
      </footer>

      <Script src="https://featurable.com/assets/bundle.js" strategy="lazyOnload" />
    </div>
  )
}
