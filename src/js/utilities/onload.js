export const jsonChapterLoad = (jsonData) => {
  let chapterData = [], count = 0;
  jsonData.map((data, index) => {
    chapterData.push({
      index: index + 1,
      line: count,
      title:data.title,
      end: count + data.dialog.length + 1,
    });
    count += 1 + data.dialog.length;
  });
  return chapterData;
}
