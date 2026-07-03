import { useRef } from 'react';
import type { KeyboardEvent, Ref } from 'react';

// Roving-tabindex tab list per the WAI-ARIA APG pattern: only the active
// tab is focusable, arrow keys move selection and focus.
export const useTabs = (
  count: number,
  selected: number,
  onSelect: (index: number) => void,
  idPrefix: string,
) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabProps = (index: number) => ({
    id: `${idPrefix}-tab-${index}`,
    role: 'tab' as const,
    'aria-selected': index === selected,
    tabIndex: index === selected ? 0 : -1,
    ref: ((el: HTMLButtonElement | null) => {
      refs.current[index] = el;
    }) as Ref<HTMLButtonElement>,
    onClick: () => onSelect(index),
    onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => {
      const forward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
      const backward = event.key === 'ArrowLeft' || event.key === 'ArrowUp';
      if (!forward && !backward) return;
      event.preventDefault();
      const next = (index + (forward ? 1 : -1) + count) % count;
      onSelect(next);
      refs.current[next]?.focus();
    },
  });

  return tabProps;
};

export const activeTabId = (idPrefix: string, selected: number) => `${idPrefix}-tab-${selected}`;
