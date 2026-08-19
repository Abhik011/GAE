"use client";

import { useState } from "react";

import {
  BadgeCheck,
  Building2,
  Check,
  FileCheck2,
  FileText,
  ImageIcon,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const documents = [
  {
    number: "01",
    icon: Building2,
    title: "Company Registration",
    description: "Business registration, GST or equivalent document.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Company Profile",
    description: "Your company, capabilities and manufacturing experience.",
  },
  {
    number: "03",
    icon: ImageIcon,
    title: "Product Catalogue",
    description: "Product images, brochures or catalogues.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Certifications",
    description: "Relevant quality and industry certifications.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Factory Images",
    description: "Your facility, machinery and production capabilities.",
  },
  {
    number: "06",
    icon: FileCheck2,
    title: "Export Documents",
    description: "IEC, export records or supporting documents, if available.",
  },
];

export default function RequiredDocuments() {
  const [activeDocument, setActiveDocument] = useState(0);

  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="APPLICATION CHECKLIST"
          title="Prepare Your Documents"
          description="Select each item to understand what to keep ready before submitting your application."
        />

        <div className="mx-auto mt-14 max-w-6xl">
          {/* Progress */}

          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#132838]">
                Supplier Application
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {activeDocument + 1} of {documents.length} document categories
              </p>
            </div>

            <div className="hidden text-sm font-medium text-[#2f7d5c] sm:block">
              Document Checklist
            </div>
          </div>

          {/* Interactive layout */}

          <div className="grid overflow-hidden rounded-3xl border border-slate-200 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left: Steps */}

            <div className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r">
              {documents.map((item, index) => {
                const Icon = item.icon;
                const active = activeDocument === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveDocument(index)}
                    className={`group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 ${
                      active
                        ? "bg-white shadow-sm"
                        : "hover:bg-white/70"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold transition-colors ${
                        active
                          ? "text-[#2f7d5c]"
                          : "text-slate-400"
                      }`}
                    >
                      {item.number}
                    </span>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                        active
                          ? "bg-[#2f7d5c] text-white shadow-lg shadow-[#2f7d5c]/20"
                          : "bg-white text-slate-400"
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>

                    <span
                      className={`font-semibold transition-colors ${
                        active
                          ? "text-[#132838]"
                          : "text-slate-500"
                      }`}
                    >
                      {item.title}
                    </span>

                    {active && (
                      <Check className="ml-auto size-4 text-[#2f7d5c]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: Active Document */}

            <div className="relative flex min-h-[420px] flex-col justify-center overflow-hidden p-8 sm:p-12">
              {/* Decorative number */}

              <span className="pointer-events-none absolute right-6 top-0 font-heading text-[10rem] font-black leading-none text-[#2f7d5c]/[0.04] sm:text-[14rem]">
                {documents[activeDocument].number}
              </span>

              <div className="relative">
                {(() => {
                  const ActiveIcon = documents[activeDocument].icon;

                  return (
                    <>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2f7d5c]/10 text-[#2f7d5c]">
                        <ActiveIcon className="size-8" />
                      </div>

                      <span className="mt-8 block text-[11px] font-bold tracking-[0.22em] text-[#2f7d5c]">
                        REQUIRED DOCUMENT
                      </span>

                      <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#132838] sm:text-4xl">
                        {documents[activeDocument].title}
                      </h3>

                      <p className="mt-5 max-w-lg text-base leading-8 text-slate-500">
                        {documents[activeDocument].description}
                      </p>

                      <div className="mt-8 border-t border-slate-100 pt-6">
                        <p className="flex items-center gap-3 text-sm text-slate-500">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2f7d5c]/10">
                            <Check className="size-3.5 text-[#2f7d5c]" />
                          </span>

                          Keep this document ready before applying.
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Navigation */}

              <div className="relative mt-10 flex gap-2">
                {documents.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`View document ${index + 1}`}
                    onClick={() => setActiveDocument(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeDocument === index
                        ? "w-10 bg-[#2f7d5c]"
                        : "w-4 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Some documents may be optional depending on your industry and
            export requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}