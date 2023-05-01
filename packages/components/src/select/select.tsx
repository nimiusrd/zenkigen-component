import { CSSProperties, useCallback, useState } from 'react';

import { IconName } from '@zenkigen-component/icons';
import { buttonColors, focusVisible, typography } from '@zenkigen-component/theme';
import clsx from 'clsx';

import { Icon } from '../icon';

import { SelectList } from './select-list';
import type { SelectOption } from './type';

type Props = {
  size: 'small' | 'small-medium' | 'medium' | 'large';
  variant: 'text' | 'outline';
  width?: CSSProperties['width'];
  placeholder?: string;
  placeholderIcon?: IconName;
  options: SelectOption[];
  defaultOptionId?: string;
  isDisabled?: boolean;
  onChange?: (id: string, index: number) => void;
};

export function Select({
  size,
  variant,
  width,
  placeholder,
  placeholderIcon,
  options,
  defaultOptionId,
  isDisabled = false,
  onChange,
}: Props) {
  const [selectedOptionId, setSelectedOptionId] = useState(defaultOptionId ? defaultOptionId : null);
  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  const selectedOption = options.find((option) => option.id === selectedOptionId);

  const handleClickToggle = () => setIsOptionListOpen((prev) => !prev);
  const handleClickItem = useCallback(
    (id: string, index: number) => {
      setSelectedOptionId(id);
      onChange?.(id, index);
      setIsOptionListOpen(false);
    },
    [onChange],
  );
  const handleClickDeselect = useCallback(() => {
    setSelectedOptionId(null);
    setIsOptionListOpen(false);
  }, []);

  const wrapperClasses = clsx(
    'relative',
    'flex',
    'shrink-0',
    'gap-1',
    'items-center',
    'rounded',
    'bg-background-uiBackground01',
    {
      'h-6': size === 'small' || size === 'small-medium',
      'h-8': size === 'medium',
      'h-10': size === 'large',
      'cursor-not-allowed': isDisabled,
    },
  );

  const buttonClasses = clsx(
    'flex',
    'items-center',
    'w-full',
    'h-full',
    'rounded',
    buttonColors[variant].base,
    buttonColors[variant].hover,
    buttonColors[variant].active,
    buttonColors[variant].disabled,
    focusVisible,
    {
      'px-2': size === 'small' || size === 'small-medium',
      'px-4': size === 'medium' || size === 'large',
      'pointer-events-none': isDisabled,
    },
  );

  const labelClasses = clsx(
    'flex',
    'items-center',
    'ml-1',
    'mr-2',
    'text-interactive-interactive02',
    typography.label[
      size === 'small'
        ? 'label4regular'
        : size === 'small-medium' || size === 'medium'
        ? 'label3regular'
        : 'label2regular'
    ],
    {
      'mr-1': size === 'small',
      'text-disabled-disabled01': isDisabled,
    },
  );

  return (
    <div className={wrapperClasses} style={{ width }}>
      <button className={buttonClasses} type="button" onClick={handleClickToggle} disabled={isDisabled}>
        {(selectedOption?.icon || (placeholder && placeholderIcon)) && (
          <Icon
            name={selectedOption?.icon ? selectedOption.icon : placeholderIcon ? placeholderIcon : 'add'}
            size={size === 'large' ? 'medium' : 'small'}
          />
        )}
        <span className={labelClasses}>
          {selectedOption ? selectedOption.value : placeholder ? placeholder : options[0]?.value}
        </span>
        <div className="ml-auto flex items-center">
          <Icon name={isOptionListOpen ? 'angle-small-up' : 'angle-small-down'} size="small" />
        </div>
      </button>
      {isOptionListOpen && !isDisabled && (
        <SelectList
          size={size}
          variant={variant}
          options={options}
          placeholder={placeholder}
          selectedOptionId={selectedOptionId}
          onClickItem={handleClickItem}
          onClickDeselect={handleClickDeselect}
        />
      )}
    </div>
  );
}
