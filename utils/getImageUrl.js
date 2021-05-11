import { buildUrl } from 'cloudinary-build-url';
export function getImageUrl(media = {}) {
  const { provider_metadata } = media;
  let imgUrl = media.url;
  if (provider_metadata) {
    imgUrl = buildUrl(provider_metadata.public_id, {
      cloud: {
        cloudName: 'bennu-madrid',
      },
      transformations: {},
    });
  }
  return imgUrl;
}
