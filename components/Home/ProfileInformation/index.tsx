import UserAvatar from "./UserAvatar";
import UserAvatarFlagContainer from "./UserAvatarFlagContainer";
import UserInformation from "./UserInformation";

const ProfileInformation = () => {
  return (
    <section className="w-full border-y">
      <div className="container border-x flex">
        <UserAvatarFlagContainer />
        <UserInformation />
      </div>
    </section>
  );
};

export default ProfileInformation;
