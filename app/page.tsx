import { BlogPostCard } from "@/components/general/BlogPostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";

export const revalidate = 60;

async function getData(){
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
  select: {
  title: true,
  content: true,
  imageUrl: true,
  authorImage: true,
  authorName: true,
  id: true,
  createdAt: true,
  authorId: true,
  updatedAt: true,
}
});
  return data;
}

export default function Home() {

  return (
    <div className="py-6">
      <div className="flex items-cneter justify-bewtween">
       <h1 className="text-3xl bold text-pink-700">
        Enjoy SMVM Platforms & Services
       </h1>
      </div>
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Post</h1>
      
      <Suspense fallback={<p>Loading...</p>}>
      <BlogPosts />
      </Suspense>
    </div>

  )
}

async function BlogPosts() {
  const data = await getData()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {data.map((item) => (
     <BlogPostCard data={item} key={item.id} />
    ))}
   </div> 
  )
}
