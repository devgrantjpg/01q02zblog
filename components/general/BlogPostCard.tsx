import Image from "next/image";
import Link from "next/link";

interface IappProps {
    data: {
        id: string;
        title: string;
        content: string;
        imageUrl: string;
        authorId: string;
        authorName: string;
        authorImage: string;
        createdAt: Date;
        updatedAt: Date;
    };
}

export function BlogPostCard({ data }: IappProps) {
    return (
        <div className="group relative overflow-hidden rounded-lg border border-grey200 bg-white shadow-md transition-all hover:shadow-lg">
            <Link href={`/post/${data.id}`} className="block w-full h-full">
             <div className="relative h-48 w-full overflow-hidden">
             <Image src={data.imageUrl} 
                    alt="Blog Image" 
                    fill 
                    className="object-cover transition-transform duration-300
                    group-hover:scale-105"
                    />    
             </div>

             <div>
                <h3 className="mb-2 text-lg font-semibold text-grey-900">{data.title}</h3>
                <p>{data.content}</p>
             </div>
            </Link>
        </div>
    );
}
