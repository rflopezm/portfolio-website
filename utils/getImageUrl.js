import { buildUrl } from 'cloudinary-build-url';
export function getImageUrl(image = {}) {
  const { provider_metadata } = image;
  let imgUrl = image.url;
  if (provider_metadata) {
    imgUrl = buildUrl(provider_metadata.public_id, {
      cloud: {
        cloudName: 'erguxabasto',
      },
      transformations: {},
    });
  }
  return imgUrl;
}
