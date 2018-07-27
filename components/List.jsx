import ListEntry from "./ListEntry.jsx";
const List = ({ searchedArticles }) => {
  return (
    <div className="list">
      {searchedArticles.map((article, i) => {
        return (
          <ListEntry
            title={article.title}
            id={i}
            key={article.id}
            description={article.description}
          />
        );
      })}
    </div>
  );
};
export { List };
