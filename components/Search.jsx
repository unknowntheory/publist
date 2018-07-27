class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ searchWord: e.target.value });
  }
  render() {
    const { searchButtonHandleSubmit } = this.props;
    return (
      <div>
        <form className="searchBar">
          <input
            className="searchLine"
            type="text"
            name="query"
            onChange={this.onChange}
          />
          <div
            className="submitBtn"
            onClick={() => searchButtonHandleSubmit(this.state.searchWord)}
          >
            submit
          </div>
        </form>

        <style jsx>{`
          .submitBtn {
            display: inline-block;
            border: solid #a4a7b2 1.5px;
            margin-left: 1rem;
            width: 5rem;
            height: 1.5rem;
            text-align: center;
            font-family: sans-serif;
          }
          .searchLine {
            border: none;
            border-bottom: 2px solid #1a75ff;
            width: 18rem;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export { Search };
