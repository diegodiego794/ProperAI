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
  const scrollToCall = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-900/90 backdrop-blur border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">Proper AI</div>
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <a onClick={scrollToCall} className="hover:text-neutral-300 transition cursor-pointer">Showcase</a>
            <a onClick={scrollToDemo} className="hover:text-neutral-300 transition cursor-pointer">Pricing</a>
            <a onClick={scrollToDemo} className="hover:text-neutral-300 transition cursor-pointer">FAQ</a>
            <a onClick={scrollToDemo} className="hover:text-neutral-300 transition cursor-pointer">Contact</a>
            <a onClick={scrollToDemo} className="hover:text-neutral-300 transition cursor-pointer">Book a Demo</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <FadeSection className="pt-28 pb-32 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          AI receptionists that
          <span className="block">answer every call.</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
          Human-sounding AI receptionists for UK businesses with high call volumes.
          It pays for itself within days.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a onClick={scrollToCall} className="rounded-full bg-neutral-100 text-neutral-900 px-8 py-3 text-sm font-medium hover:bg-neutral-300 transition cursor-pointer">
            Get started
          </a>
          <button onClick={scrollToDemo} className="rounded-full bg-transparent border border-neutral-100 text-neutral-100 px-8 py-3 text-sm font-medium hover:bg-neutral-700 transition">
            Book a Demo
          </button>
        </div>
        <p className="mt-4 text-sm text-neutral-500 font-medium uppercase tracking-wide">AI done Proper</p>
      </FadeSection>

      {/* Use Cases: Restaurants / Trades / Local Services */}
      <FadeSection className="py-20 border-y border-neutral-700" id="use-cases">
        <div className="grid md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto px-6">
          <UseCase title="Restaurants" text="Handle reservations and calls efficiently without tying up staff." />
          <UseCase title="Trades" text="Capture every inbound lead while on the job or after hours." />
          <UseCase title="Local Services" text="Professional call handling without hiring receptionists." />
        </div>
      </FadeSection>

      {/* Built so you never pick up the phone (Restored with updated box) */}
      <FadeSection className="py-28">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto px-6 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Built so you never
              <span className="block">pick up the phone.</span>
            </h2>
            <p className="mt-6 text-neutral-400">
              Proper AI removes repetitive inbound calls from your day.
              Our AI receptionists answer instantly, provide information, even link customers to booking sites,
              and capture all relevant details.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-700 bg-neutral-800 p-10 md:p-16">
            <ul className="space-y-4 text-sm text-neutral-300">
              <li>• Works 24/7 so you never lose another enquiry</li>
              <li>• Turns missed calls into booked tables</li>
              <li>• No extra staff, no extra wages, just more bookings</li>
              <li>• Starts paying for itself within days</li>
            </ul>
          </div>
        </div>
      </FadeSection>

      {/* Showcase / AI Call Form */}
      <FadeSection id="showcase" className="py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Instantly get a call from your AI</h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Enter your information and receive a call immediately from your AI — instantly, automatically, and professionally handling your business calls.
          </p>
          <form
            className="mt-16 grid gap-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              await fetch("https://diegofreitas.app.n8n.cloud/webhook/52d8a728-aef7-44be-2ade-014de00ffb0c", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: form.name.value,
                  phone: form.phone.value,
                  business: form.business.value,
                  email: form.email.value
                }),
              });
              form.reset();
              alert("Thanks! We'll be in touch.");
            }}
          >
            <input name="name" required placeholder="Your name" className="input-dark" />
            <input name="phone" required placeholder="Phone number" className="input-dark" />
            <input name="business" placeholder="Business name" className="input-dark" />
            <input name="email" type="email" required placeholder="Email address" className="input-dark" />
            <button type="submit" className="rounded-full bg-neutral-100 text-neutral-900 px-8 py-3 text-sm font-medium">Get a call</button>
          </form>
        </div>
      </FadeSection>

      {/* Pricing */}
      <FadeSection id="pricing" className="py-28 border-y border-neutral-700">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">Pricing (UK)</h2>
          <div className="mt-20 grid md:grid-cols-1 gap-10 max-w-md mx-auto">
            <PriceCard title="Proper AI" price="£349/mo" items={[
              "Includes 600 minutes per month",
              "Answers calls and provides info/links",
              "Optional CRM integration for direct booking",
              "Pays for itself within a few days"
            ]} featured continueAction={scrollToDemo} />
            <p className="mt-4 text-center text-sm text-neutral-400">No contract - Cancel anytime</p>
          </div>
        </div>
      </FadeSection>

      {/* FAQ */}
      <FadeSection id="faq" className="py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">FAQ</h2>
          <div className="mt-12 space-y-8">
            <FAQ q="Does it sound robotic?" a="No. The voice is natural and conversational, designed to sound human." />
            <FAQ q="Can it book appointments?" a="Provides info and links by default; optional CRM integration books directly." />
            <FAQ q="What if my call volume grows?" a="The service scales to meet higher call volumes." />
            <FAQ q="How fast can I get started?" a="Most UK clients are live within a few days." />
          </div>
        </div>
      </FadeSection>

      {/* Demo Booking Form (Bottom) */}
      <FadeSection id="demo" className="py-28 bg-neutral-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Book a Professional Demo</h2>
            <p className="mt-4 text-neutral-300">
              We will build an AI specific to your needs and accurate to your business and present it to you.
            </p>
          </div>
          <div className="md:w-1/2 bg-neutral-900 p-8 rounded-2xl shadow-lg">
            <form
              className="grid gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                console.log({
                  name: form.name.value,
                  phone: form.phone.value,
                  business: form.business.value,
                  email: form.email.value,
                  notes: form.notes.value
                });
                form.reset();
                alert("Thanks! We'll contact you to schedule your demo.");
              }}
            >
              <input name="name" required placeholder="Your name" className="input-dark" />
              <input name="phone" required placeholder="Phone number" className="input-dark" />
              <input name="business" placeholder="Business name" className="input-dark" />
              <input name="email" type="email" required placeholder="Email address" className="input-dark" />
              <textarea name="notes" placeholder="Any notes or questions" className="input-dark" rows={4} />
              <button type="submit" className="rounded-full bg-neutral-100 text-neutral-900 px-8 py-3 text-sm font-medium w-full">Schedule Demo</button>
            </form>
          </div>
        </div>
      </FadeSection>

      {/* Footer */}
      <footer className="border-t border-neutral-700 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Proper AI
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
      className={`${className} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </section>
  );
}

const UseCase = ({ title, text }) => (
  <div>
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="mt-2 text-sm text-neutral-400">{text}</p>
  </div>
);

const PriceCard = ({ title, price, items, featured, continueAction }) => (
  <div className={`rounded-3xl p-10 border ${featured ? "bg-neutral-100 text-neutral-900 border-neutral-100" : "bg-neutral-800 border-neutral-700"}`}>
    <h3 className="text-lg font-medium">{title}</h3>
    <div className="mt-6 text-3xl font-semibold">{price}</div>
    <ul className="mt-6 space-y-2 text-sm">
      {items.map((i) => <li key={i}>• {i}</li>)}
    </ul>
    {continueAction && (
      <div className="mt-6 text-center">
        <button onClick={continueAction} className="rounded-full bg-neutral-900 text-white px-6 py-2 text-sm font-medium hover:bg-neutral-700 transition">
          Continue
        </button>
      </div>
    )}
  </div>
);

const FAQ = ({ q, a }) => (
  <div>
    <h4 className="font-medium">{q}</h4>
    <p className="mt-2 text-sm text-neutral-400">{a}</p>
  </div>
);
