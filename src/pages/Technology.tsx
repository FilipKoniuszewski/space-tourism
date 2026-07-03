import { useState } from 'react';
import TabImages from '../components/TabImages';
import { technology } from '../data';
import { activeTabId, useTabs } from '../hooks/useTabs';

const Technology = () => {
  const [selected, setSelected] = useState(0);
  const tabProps = useTabs(technology.length, selected, setSelected, 'technology');
  const tech = technology[selected];

  return (
    <main className="page__main technology" id="main">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span>Space launch 101
      </h1>

      <div className="technology__content">
        <TabImages
          className="technology__image"
          selected={selected}
          items={technology.map(({ name, images }) => ({ name, ...images }))}
        />

        <div className="technology__body">
          <div className="technology__numbers" role="tablist" aria-label="Technologies">
            {technology.map((item, index) => (
              <button
                key={item.name}
                aria-controls="technology-panel"
                className={index === selected ? 'is-active' : ''}
                {...tabProps(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div
            className="technology__details"
            id="technology-panel"
            role="tabpanel"
            aria-labelledby={activeTabId('technology', selected)}
          >
            <h2 className="technology__heading">
              <span>The terminology…</span>
              {tech.name}
            </h2>
            <p className="technology__description">{tech.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
