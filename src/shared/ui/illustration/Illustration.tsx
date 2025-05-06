import { FC, SVGProps } from 'react';

import { SideImg } from './illustrations/SideImg';
import { TasksImg } from './illustrations/TasksImg';

type ImageName = 'tasksImg' | 'sideImg';

interface ImageProps extends SVGProps<SVGSVGElement> {
  name: ImageName;
  className?: string;
  colorBase?: string;
  colorAccent?: string;
}

const images = {
  tasksImg: TasksImg,
  sideImg: SideImg,
};

export const Illustration: FC<ImageProps> = ({
  name,
  className,
  colorBase,
  colorAccent,
}) => {
  const ImageComponent = images[name];

  if (!ImageComponent) console.log(`Картинка ${name} не найдена`);

  return (
    <ImageComponent
      className={className}
      colorBase={colorBase}
      colorAccent={colorAccent}
    />
  );
};
