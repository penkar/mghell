const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const createFilterLines = (chapters, startLine, filterReducer, renderLimit) => {
  let count = 0;
  const lines = [];
  const { filter: filterString, name } = filterReducer;
  const regex = new RegExp(escapeRegExp(filterString), 'i');

  for (let chapterIndex = 0; chapterIndex < chapters.length; chapterIndex++) {
    if (lines.length >= renderLimit) break;

    const chapter = chapters[chapterIndex];
    count++;
    if (count > startLine) {
      lines.push({
        type: 'chapter',
        key: `chapter_${chapterIndex}`,
        title: chapter.title,
        index: chapterIndex,
      });
    }

    for (let dialogIndex = 0; dialogIndex < chapter.dialog.length; dialogIndex++) {
      const dialog = chapter.dialog[dialogIndex];

      if (filterString && dialog.line.search(regex) === -1) continue;
      if (name && dialog.character !== name) continue;

      count++;
      if (lines.length >= renderLimit) break;
      if (count > startLine) {
        lines.push({
          type: 'dialog',
          key: `${chapterIndex}_${dialogIndex}_${count}`,
          character: dialog.character,
          line: dialog.line,
        });
      }
    }
  }

  return lines;
};

const createFindLines = (chapters, startLine, filterReducer, renderLimit) => {
  let count = 0;
  const lines = [];
  const { filter: filterString, character } = filterReducer;
  const regex = new RegExp(escapeRegExp(filterString), 'i');

  for (let chapterIndex = 0; chapterIndex < chapters.length; chapterIndex++) {
    if (lines.length >= renderLimit) break;

    const dialog = chapters[chapterIndex].dialog;
    if (startLine > count + dialog.length) {
      count += dialog.length + 1;
      continue;
    }

    for (let dialogIndex = startLine - count; dialogIndex < dialog.length; dialogIndex++) {
      count++;
      if (count < startLine) continue;
      if (lines.length >= renderLimit) break;

      const currentDialog = dialog[dialogIndex];
      if (!lines.length || currentDialog.line.search(regex) !== -1) {
        lines.push({
          type: 'dialog',
          key: `${chapterIndex}_${dialogIndex}_${count}`,
          character: currentDialog.character,
          line: currentDialog.line,
          filterCharacter: character,
        });
      }
    }
  }

  return lines;
};

export const getVisibleLines = (
  chapters,
  startLine,
  filterReducer,
  isFiltering,
  renderLimit,
) =>
  isFiltering
    ? createFilterLines(chapters, startLine, filterReducer, renderLimit)
    : createFindLines(chapters, startLine, filterReducer, renderLimit);
