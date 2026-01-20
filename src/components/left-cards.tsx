import { useBlogs } from "../hooks/UseBlogs" //custom hook to fetch blogs
import { Card, CardContent } from "../components/ui/card" //shadcn library card component
import { Badge } from "../components/ui/badge" //shadcn library badge component


export default function Leftcard() {
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
      {data?.map((blog) => (
        <Card
          key={blog.id}
          className="cursor-pointer hover:shadow-md transition"
        >
          <CardContent className="space-y-2">

            {/* TITLE */}
            <h3 className="font-semibold text-lg">
              {blog.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-muted-foreground line-clamp-2">
              {blog.description}
            </p>

            {/* CATEGORY */}
            <div className="flex gap-2 flex-wrap">
              {blog.category.map((cat) => (
                <Badge key={cat} variant="secondary">
                  {cat}
                </Badge>
              ))}
            </div>

            {/* DATE */}
            <p className="text-xs text-muted-foreground">
              {new Date(blog.date).toDateString()}
            </p>

          </CardContent>
        </Card>
      ))}
    </div>
  )
}
