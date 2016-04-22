const data = new Map();
data.set('javascript', 'JavaScript');

const renderLanguage = (language) => {
  if (data.has(language)) {
    return data.get(language);
  }
  
  if (language === '' || language === null || language === undefined) {
    return 'Other';
  }
  
  return language;
};

export default renderLanguage;
