import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  render() {
    const { itemsCount, pageSize, handlePageChange } = this.props;
    const pageCount = itemsCount / pageSize;
    if (Math.ceil(pageCount) === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li key={page} className="page-item">
              <a className="page-link" onClick={() => handlePageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
