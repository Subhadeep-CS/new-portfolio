"use client";

import { CONTACT_INFO, DESIGNATIONS } from "@/utils/app_constant";
import DesignationContainer from "./DesignationContainer";
import LiveClock from "./LiveClock";

const DesignationContactInfo = () => {
  return (
    <section className="border-y border-zinc-200 dark:border-zinc-800">
      <div className="container border-x border-zinc-200 dark:border-zinc-800 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
          {/* Left Column Block (Items stacking) */}
          <div className="space-y-1 flex flex-col justify-center">
            {DESIGNATIONS.map((item, index) => (
              <DesignationContainer
                key={index}
                Icon={item.Icon}
                infoText={item.infoText}
              />
            ))}
          </div>

          {/* Right Column Block intentionally left empty or populated if needed, adjusting to flow for the rest */}
          <div className="hidden md:block"></div>

          {/* The rest of the items in true 2 column mode */}
          {CONTACT_INFO.map((item, index) => {
            if (item.isClock) {
              return <LiveClock key={index} />;
            }
            return (
              <DesignationContainer
                key={index}
                Icon={item.Icon!}
                infoText={item.infoText!}
                href={item.href}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignationContactInfo;
