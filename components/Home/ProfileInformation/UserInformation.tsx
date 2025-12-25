import { Icons } from "@/assets/icons";

const UserInformation = () => {
  return (
    <div className="border-l">
      <div className="flex gap-2 items-center">
        <h3 className="text-3xl text-zinc-950 font-medium">Subhadeep Das</h3>
        <Icons.BadgeCheck size={24} className="text-blue-500" />
      </div>
    </div>
  );
};

export default UserInformation;
