import { SideImg } from './illustrations/SideImg';
import { TasksImg } from './illustrations/TasksImg';

const images = {
  tasksImg: TasksImg,
  sideImg: SideImg,
};

export const Illustration = ({ name, className, colorBase, colorAccent }) => {
  const ImageComponent = images[name];

  if (!ImageComponent)
    return console.log(`Картинка ${name} не найдена`) && null;

  return (
    <ImageComponent
      className={className}
      colorBase={colorBase}
      colorAccent={colorAccent}
    />
  );
};
