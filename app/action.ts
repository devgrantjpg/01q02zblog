"use server";

import { redirect } from "next/navigation";
import { prisma } from "./utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

export async function handleSubmission(formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/api/auth/register");
    }

    // Get form data values
    const title = formData.get('title')?.toString();  // Make sure to cast to string
    const content = formData.get('content')?.toString();
    const url = formData.get('url')?.toString();

    // Check if any required field is missing
    if (!title || !content || !url) {
        return redirect("/create-post?error=MissingRequiredFields");
    }

    // Use the data properly in Prisma
    await prisma.blogPost.create({
        data: {
            title: title,
            content: content,
            imageUrl: url,
            authorId: user.id,
            authorImage: user.picture ?? "",  // Handle possible null values
            authorName: user.given_name ?? "", // Handle possible null values
        },
    });
    
    revalidatePath("/");

    return redirect("/dashboard");
}
