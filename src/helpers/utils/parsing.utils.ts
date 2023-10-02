export const getPageFromUrl = (url: string): number | null => {
  if (!url) {
    return null;
  }
  const splitedUrl = url.split('?')[1]?.split('&');
  if (!splitedUrl) {
    return null;
  }
  const pageQuery = splitedUrl.find(item => item.includes('page'));
  if (!pageQuery) {
    return null;
  }
  const pageNumber = pageQuery.split('=')[1];
  return parseInt(pageNumber, 10);
};

export const getEpisodeFromUrl = (url: string) => {
  if (!url) {
    return '';
  }
  const id = url.split('/')[url.split('/').length - 1];
  if (isNaN(parseInt(id, 10))) {
    return '';
  }
  return id;
};
