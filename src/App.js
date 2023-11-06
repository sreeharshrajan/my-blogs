import React, { useState, useEffect } from 'react';
import ShortenText from "./utils/ShortenText.js";
import ToText from "./utils/ToText.js";
import CategoryList from "./utils/CategoryList.js";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://dev.to/feed/sreeharshrajan')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data.items);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>JSON Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <div>
            <CategoryList categories={item.categories}/>

            </div>

            <h3>{item.title}</h3>
            {/* <p dangerouslySetInnerHTML={{ __html: item.description }} /> */}
            <p>{`${ShortenText(
              ToText(item.description),
              0,
              120
            )}...`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
