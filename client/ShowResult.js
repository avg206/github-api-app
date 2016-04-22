import React from 'react';
import renderLanguage from './utils/renderLanguage';

const formatLink = (link) => (
  <a href={link}>{link}</a>
);

const ShowResult = (props) => {
  if (props.repo === null) {
    return null;
  }
  
  const data = [
    { label: 'Full Name:', value: props.repo.full_name },
    { label: 'Description:', value: props.repo.description },
    { label: 'Language:', value: renderLanguage(props.repo.language) },
    { label: 'Link:', value: formatLink(props.repo.url) },
  ];
  
  const rows = data.map((value) => (
    <tr key={Math.random()}>
      <td className="label right aligned">{value.label}</td>
      <td>{value.value}</td>
    </tr>
  ));
  
  return (
    <table className="result-table ui celled table">
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

ShowResult.propTypes = {
  repo: React.PropTypes.object,
};

export default ShowResult;
