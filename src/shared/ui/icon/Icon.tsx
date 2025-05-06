import { FC, SVGProps } from 'react';

import { LoadingIcon } from './icons/LoadingIcon';
import { MoonIcon } from './icons/MoonIcon';
import { PlusIcon } from './icons/PlusIcon';
import { SunIcon } from './icons/SunIcon';
import { InboxIcon } from './icons/InboxIcon';
import { ResetIcon } from './icons/ResetIcon';
import { MinusIcon } from './icons/MinusIcon';
import { ChevronTopIcon } from './icons/ChevronTopIcon';
import { ArrowTwoIcon } from './icons/ArrowTwoIcon';

type IconName =
  | 'plus'
  | 'inbox'
  | 'loading'
  | 'sun'
  | 'moon'
  | 'reset'
  | 'minus'
  | 'chevronTop'
  | 'arrowTwo';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  plus: PlusIcon,
  inbox: InboxIcon,
  loading: LoadingIcon,
  sun: SunIcon,
  moon: MoonIcon,
  reset: ResetIcon,
  minus: MinusIcon,
  chevronTop: ChevronTopIcon,
  arrowTwo: ArrowTwoIcon,
};

export const Icon: FC<IconProps> = ({ name, className }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.log(`Иконка ${name} не найдена`);
  }

  return (
    <span className={className}>
      <IconComponent role='img' aria-label={`${name} icon`} />
    </span>
  );
};
