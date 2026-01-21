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

export default function CreateBlogModal({ open, onClose }: Props) {

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
      const res = await fetch("https://camonk-1.onrender.com/blogs", {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <Dialog open={open} onOpenChange={onClose}> 

      <DialogContent
        className="
          max-w-2xl  mt-10
          p-10
          rounded-2xl 
          bg-gradient-to-br from-white via-blue-50 to-white
          border border-blue-200
          shadow-[0_0_30px_rgba(59,130,246,0.25)]
          h-full overflow-y-auto custom-scrollbar
        "
      >

        {/* HEADER */}
        <DialogHeader>
          <DialogTitle
            className="
              text-2xl 
              font-bold 
              text-blue-700
              drop-shadow-sm
              text-center
            "
          >
            Create New Blog
          </DialogTitle>

          <p className="text-sm text-blue-500 text-center">
            Fill the details below to publish your article
          </p>
        </DialogHeader>

        {/* FORM */}
        <div className="mt-6 space-y-5">

          <Input
            name="title"
            placeholder="Blog Title"
            value={form.title}
            onChange={handleChange}
            className="
              h-11 
              border-blue-300 
              focus:border-blue-500 
              focus:ring-blue-400
            "
          />

          <Input
            name="category"
            placeholder="Category (Finance, Tech)"
            value={form.category}
            onChange={handleChange}
            className="
              h-11 
              border-blue-300 
              focus:border-blue-500 
              focus:ring-blue-400
            "
          />

          <Input
            name="coverImage"
            placeholder="Cover Image URL"
            value={form.coverImage}
            onChange={handleChange}
            className="
              h-11 
              border-blue-300 
              focus:border-blue-500 
              focus:ring-blue-400
            "
          />
          {form.coverImage && (
            <img
              src={form.coverImage}
              alt="Preview"
              className="h-40 w-full object-cover rounded-lg border shadow-sm"
            />
          )}

          <Textarea
            name="description"
            placeholder="Short Description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="
              border-blue-300 
              focus:border-blue-500 
              focus:ring-blue-400
            "
          />

          <Textarea
            name="content"
            placeholder="Full Blog Content"
            value={form.content}
            onChange={handleChange}
            rows={6}
            className="
              border-blue-300 
              focus:border-blue-500 
              focus:ring-blue-400
            "
          />

          {/* SUBMIT BUTTON */}
          <Button
            onClick={() => createBlog.mutate()}
            disabled={createBlog.isPending}
            className="
              w-full 
              h-11 
              text-base 
              font-semibold
              bg-gradient-to-r from-blue-600 to-blue-500
              hover:from-blue-700 hover:to-blue-600
              shadow-lg
              shadow-blue-500/30
            "
          >
            {createBlog.isPending ? "Publishing..." : "Publish Blog"}
          </Button>

        </div>

      </DialogContent>

    </Dialog>
  )
}
