import "../stylesheets/Search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Search = () => {
    // Invoke useTranslation and destructure `t` for translation
    const { t } = useTranslation();

  return (
    <div className='search'>
      <div className="secContainer container">
        <h3 className="title">
          {t("search.title")}
        </h3>

        <div className="searchDiv grid">
          <input type="text" placeholder={t("search.type")}/>
          <input type="text" placeholder={t("search.year")}/>
          <input type="text" placeholder={t("search.model")}/>
          <input type="text" placeholder={t("search.price")}/>
          <button className="btn primaryBtn flex">
            <AiOutlineSearch className="icon"/>
            <span>
              {t("search.search")}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search
