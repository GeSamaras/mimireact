import { FullPageImageView } from "~/common/full-page-image-view";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex ">
      <FullPageImageView photoId={photoId} />
    </div>
  );
}
