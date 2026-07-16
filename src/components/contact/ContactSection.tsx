import {
    Building2,
    Clock3,
    Globe2,
    Mail,
    Phone,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

export default function ContactSection() {
    return (
        <section className="py-28">

            <Container>

                <div className="grid gap-12 lg:grid-cols-[420px_1fr]">

                    {/* Contact Info */}

                    <div className="rounded-[32px] border border-border bg-slate-50 p-10">

                        <h2 className="text-3xl font-bold">
                            Contact Information
                        </h2>

                        <p className="mt-5 leading-8 text-muted-foreground">
                            Have a sourcing requirement or looking for a trusted export partner?
                            Reach out to our team and we'll get back to you within one business day.
                        </p>

                        <div className="mt-10 space-y-8">

                            {/* Email */}

                            <div className="flex gap-5">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Mail className="size-6" />
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Email
                                    </h3>

                                    <a
                                        href="mailto:info@GlobalAtlas Exim.in"
                                        className="mt-2 block text-muted-foreground transition hover:text-primary"
                                    >
                                        info@GlobalAtlas Exim.in
                                    </a>

                                </div>

                            </div>

                            {/* Phone */}

                            <div className="flex gap-5">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Phone className="size-6" />
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Phone
                                    </h3>

                                    <a
                                        href="tel:+919022468441"
                                        className="mt-2 block text-muted-foreground transition hover:text-primary"
                                    >
                                        +91 9022464841
                                    </a>

                                </div>

                            </div>

                            {/* Address */}

                            <div className="flex gap-5">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Building2 className="size-6" />
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Business Address
                                    </h3>

                                    <address className="mt-2 not-italic leading-7 text-muted-foreground">
                                        D2 Tulip, Unit 808
                                        <br />
                                        Wadhwa Wise City
                                        <br />
                                        Panvel, Navi Mumbai
                                        <br />
                                        Maharashtra 410206
                                        <br />
                                        India
                                    </address>

                                </div>

                            </div>

                            {/* Business Hours */}

                            <div className="flex gap-5">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Clock3 className="size-6" />
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Business Hours
                                    </h3>

                                    <p className="mt-2 leading-7 text-muted-foreground">
                                        Monday – Saturday
                                        <br />
                                        9:00 AM – 6:00 PM (IST)
                                    </p>

                                </div>

                            </div>

                            {/* Markets */}

                            <div className="flex gap-5">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Globe2 className="size-6" />
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Markets We Serve
                                    </h3>

                                    <p className="mt-2 leading-7 text-muted-foreground">
                                        North America • Europe • Middle East
                                        <br />
                                        Asia • Africa • Oceania
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}

                    <div className="rounded-[32px] border border-border bg-white p-10 shadow-sm">

                        <h2 className="text-3xl font-bold">
                            Send an Inquiry
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            Complete the form below and our team will respond within 24–48
                            business hours.
                        </p>

                        <form className="mt-10 space-y-6">

                            <div className="grid gap-6 md:grid-cols-2">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="h-14 rounded-xl border border-border px-5 outline-none focus:border-primary"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="h-14 rounded-xl border border-border px-5 outline-none focus:border-primary"
                                />

                            </div>

                            <div className="grid gap-6 md:grid-cols-2">

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="h-14 rounded-xl border border-border px-5 outline-none focus:border-primary"
                                />

                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="h-14 rounded-xl border border-border px-5 outline-none focus:border-primary"
                                />

                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="h-14 w-full rounded-xl border border-border px-5 outline-none focus:border-primary"
                            />

                            <textarea
                                rows={6}
                                placeholder="Tell us about your requirements..."
                                className="w-full rounded-xl border border-border p-5 outline-none focus:border-primary"
                            />

                            <Button
                                size="lg"
                                className="h-14 rounded-xl px-8"
                            >
                                Send Message
                            </Button>

                        </form>

                    </div>

                </div>

            </Container>

        </section>
    );
}