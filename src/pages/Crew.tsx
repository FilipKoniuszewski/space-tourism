import { useState } from 'react';
import TabImages from '../components/TabImages';
import { crew } from '../data';
import { activeTabId, useTabs } from '../hooks/useTabs';

const Crew = () => {
  const [selected, setSelected] = useState(0);
  const tabProps = useTabs(crew.length, selected, setSelected, 'crew');
  const member = crew[selected];

  return (
    <main className="page__main crew" id="main">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span>Meet your crew
      </h1>

      <div className="crew__content">
        <div className="crew__details">
          <div
            className="crew__panel"
            id="crew-panel"
            role="tabpanel"
            aria-labelledby={activeTabId('crew', selected)}
          >
            <header className="crew__heading">
              <p className="crew__role">{member.role}</p>
              <h2 className="crew__name">{member.name}</h2>
            </header>
            <p className="crew__bio">{member.bio}</p>
          </div>

          <div className="crew__dots" role="tablist" aria-label="Crew members">
            {crew.map((item, index) => (
              <button
                key={item.name}
                aria-controls="crew-panel"
                className={index === selected ? 'is-active' : ''}
                {...tabProps(index)}
              >
                <span className="sr-only">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        <TabImages
          className="crew__image"
          selected={selected}
          items={crew.map(({ name, images }) => ({ name, ...images }))}
        />
      </div>
    </main>
  );
};

export default Crew;
