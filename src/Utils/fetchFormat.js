const getFormat = async (src) => {
  const img = new Image();
  img.src = src;

  return new Promise((resolve) => {
    img.onload = () => {

      const width = img.width;
      const height = img.height;
      const orientation = width > height ? 'landscape' : 'portrait';

      resolve({
        dimensions: { width, height },
        orientation,
      });
    };
  });
};

export const fetchDimensions = async () => {
  for (const key in imageMap) {
    const { src } = imageMap[key];
    const format = await getFormat(src);
    imageMap[key].dimensions = format.dimensions;
    imageMap[key].orientation = format.orientation;
  }
}


