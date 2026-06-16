import { HeroCard } from "./HeroCard";
import { AboutCard } from "./AboutCard";
import { ExperienceListCard } from "./ExperienceListCard";
import { StackCard } from "./StackCard";
import { EducationCard } from "./EducationCard";
import { LanguagesCard } from "./LanguagesCard";
import { ContactCard } from "./ContactCard";

export function BentoGrid() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="grid grid-cols-12 gap-4">
        {/* Row 1: Hero | About */}
        <HeroCard />
        <AboutCard />

        {/* Row 2: Experience list | Stack */}
        <ExperienceListCard />
        <StackCard />

        {/* Row 3: Education | Languages */}
        <EducationCard />
        <LanguagesCard />

        {/* Row 4: Contact full width */}
        <ContactCard />
      </div>
    </main>
  );
}
