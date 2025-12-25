import { PUBLIC_IMAGES } from "@/assets/images";
import Image from "next/image";

const UserAvatar = () => {
  return (
    <div className="w-40 h-40 rounded-full overflow-hidden relative">
      <Image
        src={PUBLIC_IMAGES.PROFILE_IMAGE}
        alt="SUBHADEEP IMAGE"
        fill
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default UserAvatar;
