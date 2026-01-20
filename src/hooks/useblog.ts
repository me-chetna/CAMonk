import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "../api/blogs"

export const useBlog = (id: number) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  })
}
