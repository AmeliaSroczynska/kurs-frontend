import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 px-12">
      {Array(3).fill(0).map((item, key) => (
        <Skeleton key={key} className="w-full h-66 rounded-xl" />
      ))}
    </div>
  )
}
