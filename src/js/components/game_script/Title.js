import { TitleMenu } from './TitleMenu';

export const Title = ({ filter, actions, chapters, oneLine, settings }) => {
  const toggleChapterList = (event) => {
    event.preventDefault();
    actions.changeSetting({ key: 'navigate', value: !settings.navigate });
  };
  const updateFilter = ({ target }) => actions.filter(target.value);
  const toggleFilterFind = () => actions.toggleFilterFind(!filter);

  const filterButtonText = (filter && 'Filter') || 'Find Next';

  return (
    <header id="title-component">
      <section className="section">
        <div className="game-title">METAL GEAR HELL</div>
        <span>
          <input
            placeholder="Find..."
            className="filter-component-input"
            onChange={updateFilter}
          />
          <span className="filter-button" onClick={toggleFilterFind}>
            {filterButtonText}
          </span>
        </span>
      </section>
      <section className="section chapter-list">
        <button className="menu-title" onClick={toggleChapterList}>
          Chapter List
        </button>
        {settings.navigate && chapters && (
          <TitleMenu
            actions={actions}
            chapters={chapters}
            oneLine={oneLine}
            settings={settings}
          />
        )}
      </section>
    </header>
  );
};
