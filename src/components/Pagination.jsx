import React from "react";

class Pagination extends React.Component {
  // componentWillUnmount() {
  //   this.props.page = 1;
  // }

  render() {
    const { page, total_pages, goToPrevPage, goToNextPage } = this.props;
    return (
      <div className="pagination">
        <button disabled={page === 1} onClick={() => goToPrevPage(page)}>Prev</button>
        <span>{page}</span>
        <button disabled={page === total_pages} onClick={() => goToNextPage(page)}>Next</button>
        <span>Total: {total_pages}</span>
      </div>
    );
  }
}


export default Pagination;