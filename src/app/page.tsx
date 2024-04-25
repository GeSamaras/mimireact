// changing ts version to this specific workspace so all the autocomplete and such is consistent

import Link from "next/link";
import { db } from "~/server/db";

// forcing dynamic so every time a change is made in the db
// the page's content gets updated on the next reload
export const dynamic = "force-dynamic"


const templateUrls = [
  "https://utfs.io/f/416fb5d1-2e00-4858-a3d5-7043bda40b95-mep7mc.jpg",
  "https://utfs.io/f/711659d4-d127-4384-b382-c509d9fb864b-95vcpd.jpg",
  "https://utfs.io/f/82cc31eb-0cbc-4d95-a41b-53a6c7f7e51e-lxk5p0.png",
  "https://utfs.io/f/df1d3fa5-2f38-4676-b081-e26dc413c20f-udjz7z.png"
]

const templateImage = templateUrls.map((url, index) =>({
  id: index + 1,
  url,
}))

// this homepage component is running on the server only, not the client
// react server side rendering makes it so we can have server calls and SQL queries
// directly in components

// turning this func into async so all the images in the db get called properly
export default async function HomePage() {

  // when this gets deployed, the page gets cached in the server
  // making this route dynamic means that nextjs will change the page
  // for the client on every refresh or call
  const posts = await db.query.posts.findMany()
  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
      [...templateImage, ...templateImage, ...templateImage].map((image, index) => (
        // some weird error happens when this key isn't turned into a string
        // hence the "-"
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} />
        </div>
      ))}
    </div>
    </main>
  );
}
