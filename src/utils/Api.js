export default function composeUrl(config = {}) {
  const apiObj = {
    part: 'snippet',
    type: 'video',
    order: 'viewCount',
    maxResults: config.maxResults || 10,
    q: config.q || '',
    key: process.env.VUE_APP_YOUTUBE_API_KEY,
  };

  if (config.prevPageToken) {
    apiObj.pageToken = config.prevPageToken;
  }

  if (config.nextPageToken) {
    apiObj.pageToken = config.nextPageToken;
  }

  return `${process.env.VUE_APP_YOUTUBE_BASE_URL}${new URLSearchParams(apiObj).toString()}`;
}
