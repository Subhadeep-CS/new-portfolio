import { Icons } from "@/assets/icons";
import { DESIGNATION } from "@/utils/app_constant";

const UserInformation = () => {
  return (
    <div className="border-l flex flex-col gap-1 justify-end divide-y-1 w-full *:pl-4">
      <div className="text-zinc-500">text-3xl text-zinc-950 font-medium</div>
      <div className="flex gap-2 items-center">
        <h3 className="text-3xl text-zinc-950 font-medium">Subhadeep Das</h3>
        <div className="flex gap-2 items-center">
          <Icons.BadgeCheck size={24} className="text-white" fill="" />
          <Icons.Volume2 size={24} className="text-zinc-600" />
        </div>
      </div>
      <div className="w-full flex items-center">
        {DESIGNATION?.map((item: string, index) => (
          <span key={`item-${index + 1}`}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default UserInformation;
