
import React, { useState } from 'react';

const EasterEgg = () => {
  const [isBooksVisible, setIsBooksVisible] = useState(false);
  const [isQuotesVisible, setIsQuotesVisible] = useState(false);
  const [isQuotesMeVisible, setIsQuotesMeVisible] = useState(false);

  return (
    <div className='easterEgg'>
      <h2>Easter Egg</h2>

      <div onMouseOver={() => setIsQuotesMeVisible(true)} onTouchStart={() => setIsQuotesMeVisible(true)}>
        <h3>Quotes from Friends About Me:</h3>
        <ul className={isQuotesMeVisible ? 'visible' : 'hiddenHover'}>
      <li>"Caring, considerate, goofy, reliable, loyal, creative, precise, collector" -Best Female Friend</li>
      <li>"Isaac is a fiend for learning new things, selfless to a fault, a great listener, and an all around bad ass mf. 10/10 would recommend"-College Roommate</li>
      </ul>
      </div>

      <div onMouseOver={() => setIsBooksVisible(true)} onMouseLeave={() => setIsBooksVisible(false)} onTouchStart={() => setIsBooksVisible(true)} onTouchEnd={() => setIsBooksVisible(false)}>
        <h3>Insightful Books I Have Read:</h3>
        <ul className={isBooksVisible ? 'visible' : 'hiddenHover'}>
          <li>"Einstein's Dreams" by: Alan Lightman</li>
      <li>"Circe" by: Madeline Miller</li>
      <li>"The Song of Achilles" by: Madeline Miller</li>
      <li>"Come As You Are" by: Emily Nagoski</li>
      <li>"Letters to a Young Poet" by: Rainer Maria Rilke</li>
      </ul>
      </div>

      <div onDoubleClick={() => setIsQuotesVisible(true)} onMouseLeave={() => setIsQuotesVisible(false)} onTouchStart={() => setIsQuotesVisible(true)} onTouchEnd={() => setIsQuotesVisible(false)}>
        <h3>Quotes I Enjoy:</h3>
        <ul className={isQuotesVisible ? 'visible' : 'hiddenHover'}>
        <li>"...sit with a pretty girl for an hour and it feels like a minute; sit on a hot stove for a minute and it feels like many hours. That's relativity"-Albert Einstein</li>
      <li>"I don't stop eatin til the jobs done" -Joey Chestnut</li>
      </ul>
      </div>

    </div>
  );
};

export default EasterEgg;
