import { FullPageImageView } from "~/common/full-page-image-view";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex-col border-x-pink-600 p-12">
        <FullPageImageView photoId={photoId} />
    </div>
  );
}
