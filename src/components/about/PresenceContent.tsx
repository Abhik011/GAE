import PresenceStats from "./PresenceStats";

export default function PresenceContent() {
  return (
    <div>

      <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        Global Presence
      </span>

      <h2 className="mt-6 font-heading text-5xl font-black leading-tight">

        Connecting
        <span className="block text-primary">
          India to the World.
        </span>

      </h2>

      <p className="mt-8 text-lg leading-8 text-muted-foreground">

        We help international buyers source premium products from
        trusted Indian manufacturers while managing supplier
        verification, quality assurance, export documentation,
        logistics, and delivery.

      </p>

      <PresenceStats />

    </div>
  );
}