import { useQuery } from "@tanstack/react-query"
import { Badge } from "../components/ui/badge"

//initialize props for blogId
type Props = {
  blogId: number | null
}

export default function RightPanel({ blogId }: Props) {

    //Tanstackquery to fetch blog id from whichever blogId is active
  const { data, isLoading } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: async () => {
      const res = await fetch(`https://camonk-1.onrender.com/blogs/${blogId}`) //fetching blogId  from backend server
      return res.json() //returning data of selected blog using json
    },
    enabled: !!blogId,
  })

  //If no blogId is selected, show this message
  if (!blogId) {
    return (
      <div className="p-10 text-muted-foreground text-center mt-20 text-blue-800">
        Select an article to view details
      </div>
    )
  }

  if (isLoading) {
    return <div className="p-10 text-center mt-20 text-blue-800">Loading article...</div>
  }

  return (
    <div className="p-8 space-y-6 border-white border-2 rounded-2xl m-6 h-full overflow-y-auto hide-scrollbar">

      {/* COVER IMAGE */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-87.5 object-cover"
        />
      </div>

      {/* CATEGORY + READ TIME */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground">

        <Badge variant="secondary">
          {data.category[0]}
        </Badge>

        <span>• 5 min read</span>

      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold leading-tight">
        {data.title}
      </h1>

      {/* META INFO BOX */}
      <div className="grid grid-cols-3 gap-4 border-2 border-blue-700 rounded-lg p-4 text-center bg-blue-100">

        <div>
          <p className="text-xs text-muted-foreground">CATEGORY</p>
          <p className="font-medium">{data.category.join(", ")}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">READ TIME</p>
          <p className="font-medium">5 Mins</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground">DATE</p>
          <p className="font-medium">
            {new Date(data.date).toLocaleDateString()}
          </p>
        </div>

      </div>

      {/* CONTENT */}
      <p className="leading-relaxed text-base">
        {data.content}
      </p>

    </div>
  )
}
