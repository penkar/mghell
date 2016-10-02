'use strict'
export const jsonChapterLoad = (jsonData) => {
  let chapterData = [], count = 0;
  jsonData.map((data, index) => {
    chapterData.push({index: index + 1, line: count, title:data.title});
    count += 1 + data.dialog.length;
  });
  return chapterData;
}
