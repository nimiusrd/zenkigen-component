import { ReactNode } from 'react';

import { typography } from '@zenkigen-inc/component-theme';
import clsx from 'clsx';

import { BreadcrumbItem } from './breadcrumb-item';

type Props = {
  children: ReactNode[];
};

export function Breadcrumb({ children }: Props) {
  return (
    <nav aria-label="breadcrumb">
      <ul className={clsx(typography.label.label2regular, 'flex flex-wrap gap-2 whitespace-nowrap text-text-text01')}>
        {children}
      </ul>
    </nav>
  );
}

Breadcrumb.Item = BreadcrumbItem;
