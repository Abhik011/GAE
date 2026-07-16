import Link from "next/link";

const sections = [
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Services", "/services"],
      ["Industries", "/industries"],
      ["Products", "/products"],
      ["Become a Supplier", "/become-supplier"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Popular Products",
    links: [
      ["Basmati Rice", "/products/basmati-rice"],
      ["Turmeric", "/products/turmeric"],
      ["Cumin Seeds", "/products/cumin"],
      ["Red Chilli", "/products/red-chilli"],
      ["Coffee Beans", "/products/coffee"],
      ["Natural Honey", "/products/honey"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Request Quote", "/request-quote"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms"],
      ["Cookie Policy", "/cookie-policy"],
      ["Disclaimer", "/disclaimer"],
      ["FAQs", "/faq"],
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-lg font-bold text-white">
            {section.title}
          </h3>

          <ul className="mt-6 space-y-4">
            {section.links.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="
                    text-slate-400
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-primary
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}