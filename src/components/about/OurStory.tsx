import Container from "@/components/ui/container/Container";

import StoryContent from "./StoryContent";
import StoryImage from "./StoryImage";

export default function OurStory() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <StoryImage />

          <StoryContent />

        </div>

      </Container>

    </section>
  );
}