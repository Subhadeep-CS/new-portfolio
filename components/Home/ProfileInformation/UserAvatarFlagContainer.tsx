import Image from "next/image";
import UserAvatar from "./UserAvatar";
import { PUBLIC_IMAGES } from "@/assets/images";

const UserAvatarFlagContainer = () => {
  return (
    <div className="border rounded-full h-44 w-44 flex justify-center items-center relative">
      <UserAvatar />
      <Image
        src={PUBLIC_IMAGES.INDIA_FLAG}
        alt="India Flag"
        height={56}
        width={56}
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default UserAvatarFlagContainer;
