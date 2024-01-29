//checks for the validity of a URL

export const checkImageURL = (url) => {
  if (!url) return false
  else {
      const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
      return pattern.test(url);
  }
};

