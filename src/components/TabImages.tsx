type WebpTabImage = {
  name: string;
  webp: string;
  png: string;
};

type ResponsiveTabImage = {
  name: string;
  portrait: string;
  landscape: string;
};

export type TabImageItem = WebpTabImage | ResponsiveTabImage;

const isResponsive = (item: TabImageItem): item is ResponsiveTabImage => 'portrait' in item;

interface TabImagesProps {
  items: TabImageItem[];
  selected: number;
  className: string;
}

const TabImages = ({ items, selected, className }: TabImagesProps) => (
  <div className={`tab-images ${className}`}>
    {items.map((item, index) => {
      const isVisible = index === selected;

      return (
        <picture
          key={item.name}
          className={`tab-images__slide${isVisible ? ' is-visible' : ''}`}
          aria-hidden={!isVisible}
        >
          {isResponsive(item) ? (
            <>
              <source srcSet={item.portrait} media="(min-width: 64em)" />
              <img src={item.landscape} alt={item.name} />
            </>
          ) : (
            <>
              <source srcSet={item.webp} type="image/webp" />
              <img src={item.png} alt={item.name} />
            </>
          )}
        </picture>
      );
    })}
  </div>
);

export default TabImages;
