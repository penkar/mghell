export const jsonChapterTransform = (jsonData) =>
  jsonData.reduce((chapters, data, index) => {
    const line = index === 0 ? 0 : chapters[index - 1].end;
    chapters.push({
      index: index + 1,
      line,
      title: data.title,
      end: line + data.dialog.length + 1,
    });
    return chapters;
  }, []);
