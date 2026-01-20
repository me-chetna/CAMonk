import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"

import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"

type Props = {
  open: boolean
  onClose: () => void
}

export default function CreateBlog({ open, onClose }: Props) {

  const queryClient = useQueryClient()

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    coverImage: "",
    content: "",
  })

  const createBlog = useMutation({
    mutationFn: async () => {
      const res = await fetch("http://localhost:3001/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          category: form.category.split(","),
          date: new Date().toISOString(),
        }),
      })

      return res.json()
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      onClose()
    },
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>

      <DialogContent className="max-w-xl">

        <DialogHeader>
          <DialogTitle>Create New Blog</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <Input
            placeholder="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
          />

          <Input
            placeholder="Category (comma separated)"
            name="category"
            value={form.category}
            onChange={handleChange}
          />

          <Input
            placeholder="Cover Image URL"
            name="coverImage"
            value={form.coverImage}
            onChange={handleChange}
          />

          <Textarea
            placeholder="Short Description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <Textarea
            placeholder="Blog Content"
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={6}
          />

          <Button
            className="w-full"
            onClick={() => createBlog.mutate()}
            disabled={createBlog.isPending}
          >
            {createBlog.isPending ? "Creating..." : "Create Blog"}
          </Button>

        </div>

      </DialogContent>

    </Dialog>
  )
}
