import { buttonColors, focusVisible } from '@zenkigen-inc/component-theme';
import { clsx } from 'clsx';
import { CSSProperties, PropsWithChildren, ReactNode } from 'react';

type Size = 'small' | 'medium' | 'large';

type Variant = 'fill' | 'fillDanger' | 'outline' | 'text';

type Props = {
  size?: Size;
  width?: CSSProperties['width'];
  isDisabled?: boolean;
  variant?: Variant;
  before?: ReactNode;
  after?: ReactNode;
  borderRadius?: CSSProperties['borderRadius'];
} & (
  | {
      isAnchor: true;
      href: string;
      target?: HTMLAnchorElement['target'];
    }
  | {
      isAnchor?: false;
      onClick?: () => void;
    }
);

export function Button({ size = 'medium', variant = 'fill', ...props }: PropsWithChildren<Props>) {
  const baseClasses = clsx(
    'flex',
    'shrink-0',
    'gap-1',
    'items-center',
    'justify-center',
    buttonColors[variant].base,
    buttonColors[variant].hover,
    buttonColors[variant].active,
    buttonColors[variant].disabled,
    focusVisible.normal,
    {
      'h-6 px-2.5': size === 'small',
      'h-8 px-3': size === 'medium',
      'h-10 px-4 leading-[24px]': size === 'large',
      'inline-flex': props.isAnchor,
      'pointer-events-none': props.isDisabled,
      'rounded-button': !props.borderRadius,
      'typography-label1regular': size === 'large',
      'typography-label2regular': size !== 'large',
    },
  );

  if (props.isAnchor) {
    return (
      <a className={baseClasses} href={props.href} target={props.target} style={{ borderRadius: props.borderRadius }}>
        {props.before}
        {props.children}
        {props.after}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        className={baseClasses}
        disabled={props.isDisabled}
        onClick={props.onClick}
        style={{ width: props.width, borderRadius: props.borderRadius }}
      >
        {props.before}
        {props.children}
        {props.after}
      </button>
    );
  }
}
