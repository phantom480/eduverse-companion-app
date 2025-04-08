
import { User } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  user: Pick<User, "name" | "profileImage">;
  className?: string;
}

export function UserAvatar({ user, className }: UserAvatarProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <Avatar className={cn("border border-slate-200", className)}>
      {user.profileImage ? (
        <AvatarImage src={user.profileImage} alt={user.name} />
      ) : null}
      <AvatarFallback className="bg-college-light text-college-primary font-medium">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
