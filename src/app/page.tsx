import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
      [...templateImage, ...templateImage, ...templateImage].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
      ))}
    </div>
    </main>
  );
}
