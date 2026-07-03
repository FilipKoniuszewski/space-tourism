import { useState } from 'react';
import TabImages from '../components/TabImages';
import { destinations } from '../data';
import { activeTabId, useTabs } from '../hooks/useTabs';

const Destination = () => {
  const [selected, setSelected] = useState(0);
  const tabProps = useTabs(destinations.length, selected, setSelected, 'destination');
  const destination = destinations[selected];

  return (
    <main className="page__main destination" id="main">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Pick your destination
      </h1>

      <div className="destination__content">
        <TabImages
          className="destination__image"
          selected={selected}
          items={destinations.map(({ name, images }) => ({ name, ...images }))}
        />

        <div className="destination__details">
          <div className="destination__tabs" role="tablist" aria-label="Destinations">
            {destinations.map((item, index) => (
              <button
                key={item.name}
                aria-controls="destination-panel"
                className={index === selected ? 'is-active' : ''}
                {...tabProps(index)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div
            className="destination__panel"
            id="destination-panel"
            role="tabpanel"
            aria-labelledby={activeTabId('destination', selected)}
          >
            <h2 className="destination__name">{destination.name}</h2>
            <p className="destination__description">{destination.description}</p>

            <div className="destination__meta">
              <div>
                <h3>Avg. distance</h3>
                <p>{destination.distance}</p>
              </div>
              <div>
                <h3>Est. travel time</h3>
                <p>{destination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
