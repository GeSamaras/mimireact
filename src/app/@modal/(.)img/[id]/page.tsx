import { Modal } from "./modal";
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
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
