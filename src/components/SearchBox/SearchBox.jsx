import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchWrape}>
      <p className={css.searchParagraph}>Find contact by names</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
