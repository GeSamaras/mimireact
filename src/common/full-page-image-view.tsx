import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";
import { Textarea } from "~/components/ui/textarea";

export async function FullPageImageView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex justify-center text-white border-16">
      <div className=" justify-center">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="p-16">
          <div>Uploaded By:</div>
          <div>{userInfo.fullName}</div>
        </div>


        <div className="p-16 justify-center">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>


        <div className="flex p-8 w-auto">
          <Textarea/> 
        </div>

        <div className="p-8">
          <form
            action={async () => {
              "use server";
              // TODO comment button calls
            }}
          > 
          <Button type="submit" variant="destructive">
            Comment
          </Button>
          </form>
        </div>

        <div className=" p-8">
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
