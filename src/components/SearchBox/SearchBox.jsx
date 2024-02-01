import css from './SearchBox.module.css'

const SearchBox = ({ filterUser, setFilterUser }) => {

    return (
        <div>
            <p className={css.searchParagraph}>Find contact by names</p>
               <input
                className={css.searchInput}
                type="text"
                value={filterUser}
                onChange={(evt) =>setFilterUser(evt.target.value)
                }
                />
            </div>
    )
}

export default SearchBox