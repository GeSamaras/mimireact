import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export async function FullPageImageView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex p-16 justify-center text-white">
      <div className="flex-shrink justify-evenly">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>
      <div className="flex flex-shrink-0 flex-col">
        <div className="p-16">
          <div>Uploaded By:</div>
          <div>{userInfo.fullName}</div>
        </div>

        <div className="p-16">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>

        <div className="p-16">
          <form
            action={async () => {
              "use server";

              await deleteImage(idAsNumber);
            }}
          > 
          <Button type="submit" variant="destructive">
            Delete
          </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
