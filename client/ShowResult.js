import React from 'react';

const formatLink = (link) => (
  <a href={link}>{link}</a>
);

const ShowResult = (props) => {
  if (props.repo === null) {
    return null;
  }
  
  return (
    <table className="result-table ui celled table">
      <tr>
        <td className="label right aligned">Full Name:</td>
        <td>{props.repo.full_name}</td>
      </tr>
      <tr>
        <td className="label right aligned">Description:</td>
        <td>{props.repo.description}</td>
      </tr>
      <tr>
        <td className="label right aligned">Language:</td>
        <td>{props.repo.language}</td>
      </tr>
      <tr>
        <td className="label right aligned">Link:</td>
        <td>{formatLink(props.repo.url)}</td>
      </tr>
    </table>
  );
};



ShowResult.propTypes = {
  repo: React.PropTypes.object,
};

export default ShowResult;
