// Proper AI Website
// Next.js + React + Tailwind CSS
// One-page layout, dark mode, single UK price, enhanced features, AI call + professional demo forms, showcase link, updated CTA buttons

import React, { useEffect, useRef, useState } from "react";

function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function ProperAIWebsite() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans text-[18px] md:text-[19px]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">Proper AI</div>
          <nav className="hidden md:flex items-center space-x-8 text-base">
            <a href="#showcase" className="hover:text-neutral-300 transition">Showcase</a>
            <a href="#pricing" className="hover:text-neutral-300 transition">Pricing</a>
            <a href="#faq" className="hover:text-neutral-300 transition">FAQ</a>
            <a href="#demo" className="hover:text-neutral-300 transition">Contact</a>
            <a href="#demo" className="hover:text-neutral-300 transition">Book a Demo</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <FadeSection className="pt-32 pb-36 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          AI receptionists that
          <span className="block">answer every call.</span>
        </h1>
        <p className="mt-8 text-xl text-neutral-400 max-w-2xl mx-auto">
          Human-sounding AI receptionists for UK businesses with high call volumes.
          It pays for itself within days.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href="#showcase"
            className="rounded-full bg-neutral-100 text-neutral-900 px-10 py-4 text-base font-medium hover:bg-neutral-300 transition"
          >
            Get started
          </a>

          <a
            href="#demo"
            className="rounded-full bg-transparent border border-neutral-100 text-neutral-100 px-10 py-4 text-base font-medium hover:bg-neutral-700 transition"
          >
            Book a Demo
          </a>
        </div>

        <p className="mt-6 text-sm text-neutral-500 font-medium uppercase tracking-wide">
          AI done Proper
        </p>
      </FadeSection>

      {/* Use Cases */}
      <FadeSection className="py-24 border-y border-neutral-700">
        <div className="grid md:grid-cols-3 gap-14 text-center max-w-6xl mx-auto px-6">
          <UseCase title="Restaurants" text="Handle reservations and calls efficiently without tying up staff." />
          <UseCase title="Trades" text="Capture every inbound lead while on the job or after hours." />
          <UseCase title="Local Services" text="Professional call handling without hiring receptionists." />
        </div>
      </FadeSection>

      {/* Built so you never pick up the phone */}
      <FadeSection className="py-32">
        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto px-6 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Built so you never
              <span className="block">pick up the phone.</span>
            </h2>
            <p className="mt-8 text-neutral-400">
              Proper AI removes repetitive inbound calls from your day.
              Our AI receptionists answer instantly, provide information,
              link customers to booking sites, and capture all relevant details.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-700 bg-neutral-800 p-14">
            <ul className="space-y-6 text-neutral-300">
              <li>• Works 24/7 so you never lose another enquiry</li>
              <li>• Turns missed calls into booked tables</li>
              <li>• No extra staff, no extra wages, just more bookings</li>
              <li>• Starts paying for itself within days</li>
            </ul>
          </div>
        </div>
      </FadeSection>

      {/* Showcase */}
      <FadeSection id="showcase" className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Instantly get a call from your AI
          </h2>

          <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
            Enter your information and receive a call immediately from your AI —
            instantly, automatically, and professionally handling your business calls.
          </p>

          <form
            className="mt-16 grid gap-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;

              try {
                const res = await fetch("/api/call", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: form.name.value,
                    phone: form.phone.value,
                    business: form.business.value,
                    email: form.email.value,
                  }),
                });

                if (!res.ok) {
                  const err = await res.json();
                  alert("Something went wrong — please try again. (" + (err.error || res.status) + ")");
                  return;
                }

                form.reset();
                alert("Your AI is calling you now.");
              } catch {
                alert("Could not connect — please check your internet and try again.");
              }
            }}
          >
            <input name="name" required placeholder="Your name" className="input-dark" />
            <input name="phone" required placeholder="Phone number" className="input-dark" />
            <input name="business" placeholder="Business name" className="input-dark" />
            <input name="email" type="email" required placeholder="Email address" className="input-dark" />

            <button
              type="submit"
              className="rounded-full bg-neutral-100 text-neutral-900 px-10 py-4 text-base font-medium"
            >
              Get a call
            </button>
          </form>
        </div>
      </FadeSection>

      {/* Pricing */}
      <FadeSection id="pricing" className="py-32 border-y border-neutral-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Pricing (UK)
          </h2>

          <div className="mt-20 max-w-md mx-auto">
            <PriceCard
              title="Proper AI"
              price="£399/mo"
              setupFee="£300 one-off setup fee"
              items={[
                "Includes 600 minutes per month",
                "Answers calls and provides info/links",
                "Optional CRM integration for direct booking",
                "Pays for itself within a few days",
              ]}
            />

            <p className="mt-6 text-sm text-neutral-400">
              No contract — cancel anytime
            </p>

            <a
              href="#demo"
              className="inline-block mt-8 rounded-full bg-neutral-100 text-neutral-900 px-10 py-4 text-base font-medium"
            >
              Continue
            </a>
          </div>
        </div>
      </FadeSection>

      {/* FAQ */}
      <FadeSection id="faq" className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center">
            FAQ
          </h2>

          <div className="mt-16 space-y-10">
            <FAQ q="Does it sound robotic?" a="No. The voice is natural and conversational." />
            <FAQ q="Can it book appointments?" a="Optional CRM integration allows direct booking." />
            <FAQ q="What if call volume grows?" a="Minutes scale with your business." />
            <FAQ q="How fast can I go live?" a="Most UK clients are live within days." />
          </div>
        </div>
      </FadeSection>

      {/* Demo */}
      <FadeSection id="demo" className="py-32 bg-neutral-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Book a Professional Demo
            </h2>
            <p className="mt-6 text-neutral-300">
              We will build an AI specific to your needs and accurate to your business and present it to you.
            </p>
          </div>

          <div className="bg-neutral-900 p-10 rounded-3xl">
            <form className="grid gap-5">
              <input placeholder="Your name" className="input-dark" />
              <input placeholder="Phone number" className="input-dark" />
              <input placeholder="Business name" className="input-dark" />
              <input placeholder="Email address" className="input-dark" />
              <textarea placeholder="Notes" rows={4} className="input-dark rounded-none" />
              <button className="rounded-full bg-neutral-100 text-neutral-900 px-10 py-4 text-base font-medium">
                Schedule Demo
              </button>
            </form>
          </div>
        </div>
      </FadeSection>

      {/* Footer */}
      <footer className="border-t border-neutral-700 py-10 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Proper AI</p>
        <p className="mt-2">
          <a href="tel:07412939339" className="hover:text-neutral-300 transition">07412939339</a>
          {" · "}
          <a href="mailto:diego@properai.co.uk" className="hover:text-neutral-300 transition">diego@properai.co.uk</a>
        </p>
      </footer>
    </div>
  );
}

function FadeSection({ children, className = "", id }) {
  const [ref, visible] = useFadeIn();
  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </section>
  );
}

const UseCase = ({ title, text }) => (
  <div>
    <h3 className="text-xl font-medium">{title}</h3>
    <p className="mt-3 text-neutral-400">{text}</p>
  </div>
);

const PriceCard = ({ title, price, setupFee, items }) => (
  <div className="rounded-3xl p-12 bg-neutral-100 text-neutral-900">
    <h3 className="text-xl font-medium">{title}</h3>
    {setupFee && <p className="mt-4 text-sm text-neutral-500">{setupFee}</p>}
    <div className="mt-2 text-4xl font-semibold">{price}</div>
    <ul className="mt-8 space-y-3">
      {items.map((i) => (
        <li key={i}>• {i}</li>
      ))}
    </ul>
  </div>
);

const FAQ = ({ q, a }) => (
  <div>
    <h4 className="text-lg font-medium">{q}</h4>
    <p className="mt-3 text-neutral-400">{a}</p>
  </div>
);
