import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { User } from "../types/User";
import { buttonVariants} from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import PizzaIcon from "@/src/components/PizzaIcon";

interface UserProfileCardProps {
  user: User;
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  const { id, name, avatarUrl, role, likesPizza } = user;
  const fallbackAvatar: string = name.split(' ')[0][0] + name.split(' ')[1][0];
  const profileUrl: string = `/users/${id}`;

  return (
    // Nadanie elementowi klasy @container w celu obserwacji zmiany jego rozmiaru
    <Card className="@container group relative mx-auto max-w-none w-full pt-4">
      <Avatar className="size-24 mx-auto @md:ml-(--card-spacing)">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback className="uppercase">{fallbackAvatar}</AvatarFallback>
      </Avatar>

      {/* Stylizacja children na podstawie szerokości rodzica @ */}
      <CardHeader className="grid-cols-1! text-center @md:text-left @md:grid-cols-[1fr_auto]">
        <CardAction className="absolute right-3 top-3 @md:static">
          {likesPizza && <div className="size-10 grid place-items-center rounded-full">
            <PizzaIcon />
          </div>}
        </CardAction>

        <CardTitle className="font-semibold text-xl">{name}</CardTitle>
        <CardDescription>
          {role}
        </CardDescription>
      </CardHeader>

      {/* Pokaż przycisk dopiero po najechaniu na Card, dodaj animację */}
      <CardFooter>
        <Link
          className={buttonVariants({
            size: 'lg',
            className: `
              w-full @md:w-fit
              opacity-0 scale-60
              group-hover:opacity-100 group-hover:scale-100
              transition-all duration-400
              `
          })}
          href={profileUrl}
        >
          See profile
        </Link>
      </CardFooter>
    </Card>
  )
}
