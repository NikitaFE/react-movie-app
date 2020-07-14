import React from "react";
import classNames from "classnames";

class MovieTabs extends React.Component {
  render() {
    const { sort_by, updateSortBy } = this.props;
    const handleClick = value => {
      return event => {
        updateSortBy(value);
      }
    };
  
    const getClassByValue = (value) => {
      return classNames('nav-link', {'active': (sort_by === value)});;
    };
  
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div className={getClassByValue("popularity.desc")} onClick={handleClick("popularity.desc")}>
            Popularity desc
          </div> 
        </li>
        <li className="nav-item">
          <div className={getClassByValue("revenue.desc")} onClick={handleClick("revenue.desc")}>
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div className={getClassByValue("vote_average.desc")} onClick={handleClick("vote_average.desc")}>
            Vote average desc
          </div>
        </li>
      </ul>
    );
  }
};

export default MovieTabs;