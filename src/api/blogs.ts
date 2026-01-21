//Backend Connection

//Calling backend endpoint/ estabilishing Connection with backend 
const BASE_URL = "https://camonk-1.onrender.com"

//declaring the type for a blog post
export type Blog = {
  id: number
  title: string
  category: string[]
  description: string
  date: string
  coverImage: string
  content: string
}

//Fetching all blog posts
export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(`${BASE_URL}/blogs`)
  if (!res.ok) throw new Error("Failed to fetch blogs")
  return res.json()
}

//Fetching all blog posts by ID
export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`)
  if (!res.ok) throw new Error("Failed to fetch blog")
  return res.json()
}

//Post any blog i.e. create new blog
export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  })
  if (!res.ok) throw new Error("Failed to create blog")
  return res.json()
}
