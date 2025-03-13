import { FullPageImageView } from "~/common/full-page-image-view";

export default async function PhotoModal(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;

  const {
    id: photoId
  } = params;

  return (
    <div className="flex-col border-x-pink-600 p-12">
        <FullPageImageView photoId={photoId} />
    </div>
  );
}
