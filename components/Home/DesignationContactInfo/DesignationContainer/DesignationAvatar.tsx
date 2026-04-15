"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LucideIcon } from "lucide-react";

const DesignationAvatar: React.FC<{ Icon: LucideIcon }> = ({ Icon }) => {
  return (
    <Avatar className="!rounded-lg">
      <AvatarFallback>
        <Icon />
      </AvatarFallback>
    </Avatar>
  );
};

export default DesignationAvatar;
