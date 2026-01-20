import { useBlogs } from "../hooks/UseBlogs" //custom hook to fetch blogs
import { Card, CardContent } from "../components/ui/card" //shadcn library card component
import { Badge } from "../components/ui/badge" //shadcn library badge component
import {cn} from "../lib/utils" //utility for conditional classNames


type Props = {
  selectedId: number | null
  onSelect: (id: number) => void
}

export default function Leftcard({ selectedId, onSelect }: Props) {
  const { data, isLoading, isError } = useBlogs()
  console.log(data)

  if (isLoading) {
    return <p className="text-muted-foreground">Loading blogs...</p> //if loading, show loading text
  }

  if (isError) {
    return <p className="text-red-500">Failed to load blogs</p> //if error, show error message
  }

  return (
    <div className="space-y-4">

      {data?.map((blog) => {

        const active = selectedId === blog.id

        return (
          <Card
            key={blog.id}
            onClick={() => onSelect(blog.id)}
            className={cn(
              "cursor-pointer transition",
              active
                ? "border-2 border-blue-500 bg-blue-50 shadow-md"
                : "hover:shadow"
            )}
          >
            <CardContent className="p-2">

              <h3 className={active ? "font-bold" : "font-medium"}>
                {blog.title}
              </h3>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {blog.description}
              </p>
              <div className="flex gap-2 mb-2 mt-3">
                {blog.category.map(cat => (
                  <Badge key={cat}>{cat}</Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">{blog.date}</p>

            </CardContent>
          </Card>
        )
      })}

    </div>
  )
}

