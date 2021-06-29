export const mapperNotice = (values: any) => {
  console.log(values);
  if (!values) {
    return {};
  }
  const bannerMap = values.banner;
  let firstSectionMap = values.firstSection.map((item: any) => ({
    ...item,
    author: item.author.username,
    image: item.image.url,
  }));
  let twoSectionMap = values.firstSection.map((item: any) => ({
    ...item,
    author: item.author.username,
    image: item.image.url,
  }));

  bannerMap[0].principal = true;
  console.log(bannerMap);
  return {
    banner: bannerMap,
    firstSection: firstSectionMap,
    twoSection: twoSectionMap,
  };
};
