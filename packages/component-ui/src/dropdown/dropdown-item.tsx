import { focusVisible } from '@zenkigen-inc/component-theme';
import clsx from 'clsx';
import { MouseEvent, PropsWithChildren, useContext } from 'react';

import { DropdownContext } from './dropdown-context';

type Props = {
  color?: 'gray' | 'red';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function DropdownItem({ children, color = 'gray', onClick }: PropsWithChildren<Props>) {
  const { setIsVisible } = useContext(DropdownContext);
  const handleClickItem = (event: MouseEvent<HTMLButtonElement>) => {
    setIsVisible(false);
    onClick && onClick(event);
  };
  const itemClasses = clsx(
    'typography-label2regular flex h-8 w-full items-center px-3 hover:bg-hover-hover02 active:bg-active-active02',
    focusVisible.inset,
    {
      'bg-background-uiBackground01 fill-icon-icon01 text-interactive-interactive02': color === 'gray',
      'fill-support-supportDanger text-support-supportDanger': color === 'red',
    },
  );

  return (
    <li className="flex w-full items-center">
      <button className={itemClasses} type="button" onClick={handleClickItem}>
        {children}
      </button>
    </li>
  );
}
