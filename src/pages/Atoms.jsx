import { ButtonShowcase } from '../showcases/atoms/ButtonShowcase/ButtonShowcase';
import { Heading } from '../components/atoms/Heading/Heading';
import { HeadingShowcase } from '../showcases/atoms/HeadingShowcase/HeadingShowcase';
import { IconShowcase } from '../showcases/atoms/IconShowcase/IconShowcase';
import { ImageShowcase } from '../showcases/atoms/ImageShowcase/ImageShowcase';
import { InputShowcase } from '../showcases/atoms/InputShowcase/InputShowcase';
import { ListShowcase } from '../showcases/atoms/ListShowcase/ListShowcase';

export const Atoms = () => {
  return (
    <div className="components container">
      <Heading level={1} className="margin-bottom-md">
        Atoms
      </Heading>
      {/* Button */}
      <ButtonShowcase />

      {/* Heading */}
      <HeadingShowcase />

      {/* Icon */}
      <IconShowcase />

      {/* Image */}
      <ImageShowcase />

      {/* Input */}
      <InputShowcase />

      {/* List */}
      <ListShowcase />
    </div>
  );
};
