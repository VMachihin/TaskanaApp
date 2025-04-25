import { LoadingIcon } from './icons/LoadingIcon';
import { MoonIcon } from './icons/MoonIcon';
import { PlusIcon } from './icons/PlusIcon';
import { SunIcon } from './icons/SunIcon';
import { InboxIcon } from './icons/InboxIcon';
import { ResetIcon } from './icons/ResetIcon';
import { MinusIcon } from './icons/MinusIcon';
import { ChevronTopIcon } from './icons/ChevronTopIcon';
import { ArrowTwoIcon } from './icons/ArrowTwoIcon';

const icons = {
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

export const Icon = ({ name, className }) => {
  const IconComponent = icons[name];

  if (!IconComponent) return console.log(`Иконка ${name} не найдена`) && null;

  return <IconComponent className={className} />;
};
