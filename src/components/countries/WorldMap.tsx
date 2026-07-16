import {
  Factory,
  ClipboardCheck,
  PackageCheck,
  Ship,
  Globe2,
} from "lucide-react";

const steps = [
  {
    title: "Manufacturing",
    icon: Factory,
  },
  {
    title: "Quality Check",
    icon: ClipboardCheck,
  },
  {
    title: "Packaging",
    icon: PackageCheck,
  },
  {
    title: "Export",
    icon: Ship,
  },
  {
    title: "Global Delivery",
    icon: Globe2,
  },
];

export default function WorldMap() {
  return (
    <div
      className="
        relative
        flex
        h-[420px]
        items-center
        justify-center
        overflow-hidden
        rounded-[32px]
        border
        border-border
        bg-gradient-to-br
        from-primary/5
        via-white
        to-emerald-500/5
      "
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,.08)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Journey */}

      <div className="relative z-10 flex items-center gap-4">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="flex items-center"
            >
              <div className="flex flex-col items-center">

                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-lg
                    ring-8
                    ring-primary/5
                  "
                >
                  <Icon className="size-9 text-primary" />
                </div>

                <span className="mt-4 text-sm font-semibold text-center">
                  {step.title}
                </span>

              </div>

              {index !== steps.length - 1 && (
                <div
                  className="
                    mx-4
                    h-1
                    w-16
                    rounded-full
                    bg-gradient-to-r
                    from-primary
                    to-emerald-500
                  "
                />
              )}
            </div>
          );
        })}

      </div>

      {/* Caption */}

      <div className="absolute bottom-8 text-center">

        <h3 className="text-xl font-bold">
          From Indian Manufacturers to Global Markets
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          End-to-end export sourcing, quality assurance and worldwide logistics.
        </p>

      </div>

    </div>
  );
}