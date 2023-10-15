import React from 'react';
import classnames from 'classnames';
import './pagination.scss';

// Custom usePagination function
function usePagination({ currentPage, totalCount, siblingCount, pageSize }) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const range = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  if (totalPages <= 1) {
    return [1];
  }

  if (totalPages <= siblingCount * 2 + 1) {
    return range(1, totalPages);
  }

  const leftSiblingCount = Math.min(siblingCount, currentPage - 1);
  const rightSiblingCount = Math.min(siblingCount, totalPages - currentPage);

  let start = currentPage - leftSiblingCount;
  let end = currentPage + rightSiblingCount;

  if (start + end < totalPages) {
    end = start + end;
  }

  if (end - start + 1 > totalPages) {
    start = end - totalPages + 1;
  }

  return range(start, end);
}

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = Math.ceil(totalCount / pageSize);

  return (
    <ul className={classnames('pagination-container', { [className]: className })}>
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li key={index} className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            key={index}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
