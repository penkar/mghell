import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions';
import { Dialog, Title } from '../components/game_script';
import { jsonChapterTransform } from '../utilities/onload';
import { getVisibleLines } from '../utilities/renderLines';

import MGS from '../../script/mgs.json';

const RENDER_LINES = 50;

const App = () => {
  const dispatch = useDispatch();
  const offset = useSelector((state) => state.utilityReducer);
  const startLine = useSelector((state) => state.lineReducer);
  const settings = useSelector((state) => state.settingReducer);
  const chapters = useSelector((state) => state.chapterReducer);
  const filterReducer = useSelector((state) => state.filterReducer);
  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          changeSetting: actionCreators.changeSetting,
          filter: actionCreators.filterTerm,
          filterCharacter: actionCreators.filterCharacter,
          resizeAction: actionCreators.resizeAction,
          setChapters: actionCreators.setChapters,
          settingSizeAction: actionCreators.settingSizeAction,
          toggleFilterFind: actionCreators.toggleFilterFind,
        },
        dispatch,
      ),
    [dispatch],
  );
  const { oneLine } = offset;
  const [total, setTotal] = useState(0);
  const { resizeAction } = actions;

  const bodyStyle = {
    paddingTop: `${Math.min(offset.offset + 70, total * offset.oneLine)}px`,
    paddingBottom: `${Math.min(total - offset.lineCount, 500) * offset.oneLine}px`,
  };

  const visibleLines = useMemo(
    () =>
      getVisibleLines(
        MGS,
        startLine,
        filterReducer,
        settings.filter,
        RENDER_LINES,
      ),
    [filterReducer, settings.filter, startLine],
  );

  useEffect(() => {
    window.addEventListener('resize', resizeAction);
    window.addEventListener('scroll', resizeAction);
    resizeAction();

    return () => {
      window.removeEventListener('resize', resizeAction);
      window.removeEventListener('scroll', resizeAction);
    };
  }, [resizeAction]);

  useEffect(() => {
    if (!MGS.length) return;
    const transformedChapters = jsonChapterTransform(MGS);
    actions.setChapters(transformedChapters);
    setTotal(transformedChapters.at(-1)?.end ?? 0);
  }, [actions]);

  return (
    <div>
      <Title
        filter={settings.filter}
        actions={actions}
        chapters={chapters}
        oneLine={oneLine}
        settings={settings}
      />
      <div style={{ fontSize: `${100 / settings.fontSize}vh` }}>
        <div className="dialog" style={bodyStyle}>
          {visibleLines.map((line) =>
            line.type === 'chapter' ? (
              <span key={line.key}>
                Chapter {line.index}:{' '}
                <span className="chapter-title-span">{line.title}</span>
              </span>
            ) : (
              <Dialog
                character={line.character}
                filterCharacter={actions.filterCharacter}
                key={line.key}
                line={line.line}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
