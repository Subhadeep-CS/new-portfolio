"use client";
import {
  CodeXml,
  Lightbulb,
  MapPin,
  Phone,
  Link as LinkIcon,
  Mail,
  User,
} from "lucide-react";
import DesignationContainer from "./DesignationContainer";
import LiveClock from "./LiveClock";

const DesignationContactInfo = () => {
  return (
    <section className="border-y border-zinc-200">
      <div className="container border-x border-zinc-200 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {/* Left Column Block (Items stacking) */}
          <div className="space-y-4 flex flex-col justify-center">
            <DesignationContainer
              Icon={CodeXml}
              infoText="Frontend Engineer @Subhadeep"
            />
            <DesignationContainer
              Icon={Lightbulb}
              infoText="Founder @SomeIdea"
            />
          </div>

          {/* Right Column Block intentionally left empty or populated if needed, adjusting to flow for the rest */}
          <div className="hidden md:block"></div>

          {/* The rest of the items in true 2 column mode */}
          <DesignationContainer
            Icon={MapPin}
            infoText="India"
          />
          <LiveClock />

          <DesignationContainer
            Icon={Phone}
            infoText="+91 12345 67890"
            href="tel:+911234567890"
          />
          <DesignationContainer
            Icon={Mail}
            infoText="contact@subhadeep.com"
            href="mailto:contact@subhadeep.com"
          />

          <DesignationContainer
            Icon={LinkIcon}
            infoText="subhadeep.com"
            href="https://subhadeep.com"
          />
          <DesignationContainer
            Icon={User}
            infoText="he/him"
          />
        </div>
      </div>
    </section>
  );
};

export default DesignationContactInfo;
