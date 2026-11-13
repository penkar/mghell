export const Dialog = ({ line, character, filterCharacter }) => (
  <>
    <div onClick={() => filterCharacter(character)} className="pointer">
      {character !== 'action' && character}
    </div>
    <div>{line}</div>
  </>
);
