import UserAvatarFlagContainer from "./UserAvatarFlagContainer";
import UserInformation from "./UserInformation";

const ProfileInformation = () => {
  return (
    <section className="w-full border-y border-zinc-200">
      <div className="container border-x border-zinc-200 flex flex-col md:flex-row items-stretch">
        <div className="flex justify-center items-start md:items-center shrink-0">
          <UserAvatarFlagContainer />
        </div>
        <div className="flex-1 flex w-full">
          <UserInformation />
        </div>
      </div>
    </section>
  );
};

export default ProfileInformation;
