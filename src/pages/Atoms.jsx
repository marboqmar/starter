import { ButtonShowcase } from '../showcases/atoms/ButtonShowcase/ButtonShowcase';
import { DefinitionListShowcase } from '../showcases/atoms/DefinitionListShowcase/DefinitionListShowcase';
import { Heading } from '../components/atoms/Heading/Heading';
import { HeadingShowcase } from '../showcases/atoms/HeadingShowcase/HeadingShowcase';
import { IconShowcase } from '../showcases/atoms/IconShowcase/IconShowcase';
import { ImageShowcase } from '../showcases/atoms/ImageShowcase/ImageShowcase';
import { InputShowcase } from '../showcases/atoms/InputShowcase/InputShowcase';

export const Atoms = () => {
  return (
    <div className="components container">
      <Heading level={1} className="margin-bottom-md">
        Atoms
      </Heading>
      {/* Buttons */}
      <ButtonShowcase />

      {/* Definition list */}
      <DefinitionListShowcase />

      {/* Headings */}
      <HeadingShowcase />

      {/* Icon */}
      <IconShowcase />

      {/* Image */}
      <ImageShowcase />

      {/* Input */}
      <InputShowcase />
    </div>
  );
};
