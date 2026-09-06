import { User } from "@/src/types/User";
import Image from "next/image";
import PizzaIcon from "@/src/components/PizzaIcon";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UserProfileDetailsProps {
  user: User;
}

export function UserProfileDetails({ user }: UserProfileDetailsProps) {
  const { name, role, likesPizza, avatarUrl, description } = user;

  return (
    <Card className="@container relative min-h-64 pt-0 gap-0">
      <div className="relative w-full h-32 @lg:h-48">
        <div className="absolute inset-0 z-1 bg-blue-300" />

        <div className="rounded-full size-16 @lg:size-24 absolute bg-white z-2 bottom-0 left-4 translate-y-1/2 border overflow-hidden shadow-md">
          <Image src={avatarUrl} alt="avatar" className="w-full h-full object-cover" fill loading="eager" />
        </div>
      </div>

      <CardHeader className="pt-12 @lg:pt-16">
        {likesPizza && (
          <CardAction className="size-10 grid place-items-center rounded-full">
            <PizzaIcon />
          </CardAction>
        )}

        <CardTitle className="font-semibold text-xl @md:text-2xl">{name}</CardTitle>
        <CardDescription className="text-base">{role}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="mt-2 text-base text-muted-foreground @lg:max-w-md">{description}</p>
      </CardContent>
    </Card>
  )
}
