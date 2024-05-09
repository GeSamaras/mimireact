import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";
import { Textarea } from "~/components/ui/textarea";

/* // creating comments for users under each individual picture
const CreatePostWizard = () => {
  // dummy function that will handle whenever the "comment button gets hit"
  // should take whatever is in the text box and send it to the db
  // const { user } = userPost();

  //if (!user ) return null;

  return (
  <div>
  </div>
)

}
 */
export async function FullPageImageView(props: { photoId: string }) {
  //
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="grid  justify-center text-white border-16 p-8 ">
      <div className="flex justify-center">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex">
          <div>Uploaded By:</div>
          <div>{userInfo.fullName}</div>
        </div>


        <div className="flex justify-center">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>

        <div className="flex w-auto">
          <Textarea placeholder="your cool message here"/> 
        </div>

        <div className="flex">
          <form
            action={async () => {
              "use server";
              // TODO comment button calls
            }}
          > 
          <Button type="submit" variant="default">
            Comment
          </Button>
          </form>
        </div>

        <div className="flex">
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
