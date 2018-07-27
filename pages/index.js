import { publistPost } from "./../Utils/apiHelper.js";
import { Search } from "./../components/Search.jsx";
import { List } from "./../components/List.jsx";
import fetch from "isomorphic-fetch";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      searchWord: "",
      searchedArticles: []
    };
    this.searchButtonHandleSubmit = this.searchButtonHandleSubmit.bind(this);
  }
  async componentDidMount() {
    const res = await publistPost();
    const data = await res.data;
    this.setState({ articles: data });
  }

  searchButtonHandleSubmit(event) {
    let searchedWord = event;
    let result = [];
    //add .data when using api
    //search by title
    this.state.articles.data.forEach(article => {
      let lowerCaseTitle = article.title.toLowerCase();
      if (lowerCaseTitle.search(searchedWord) !== -1) {
        result.push(article);
      }
    });
    this.setState({ searchedArticles: result });
  }

  render() {
    return (
      <div>
        <div className="mainContainer">
          <h1 className="mainTitle">Please type something to search</h1>
          <Search searchButtonHandleSubmit={this.searchButtonHandleSubmit} />
          <List searchedArticles={this.state.searchedArticles} />
        </div>
        <style jsx>
          {`
            .mainContainer {
              width: 400px;
              height: 100%;
              margin: auto;
              border: ;
            }
            .mainTitle {
              font-family: sans-serif;
              color: #1a75ff;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Index;
