import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";



export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="columns-3 md:columns-4 lg:columns-5 p-16">
      {images.map((image) => (
        <div key={image.id} className="relative">
          <Link href={`/img/${image.id}`}>
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-xl break-inside-avoid gap-8 m-3 transition duration-300 transform hover:scale-105 outline outline-slate-600 opacity-90">
              <img
                src={image.url}
                alt={image.name}
                className="object-cover w-full h-full hover:opacity-90 hover:shadow-sky-100 shadow-sm transition-opacity rounded-xl "
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

// posts only show to signed in users to prevent bad users
// without it getting shown on posthog
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
