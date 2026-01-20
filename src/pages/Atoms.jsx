import { ButtonShowcase } from '../showcases/atoms/ButtonShowcase/ButtonShowcase';
import { Heading } from '../components/atoms/Heading/Heading';
import { IconShowcase } from '../showcases/atoms/IconShowcase/IconShowcase';
import { ImageShowcase } from '../showcases/atoms/ImageShowcase/ImageShowcase';
import { InputShowcase } from '../showcases/atoms/InputShowcase/InputShowcase';
import { ListShowcase } from '../showcases/atoms/ListShowcase/ListShowcase';
import { TextShowcase } from '../showcases/atoms/TextShowcase/TextShowcase';
import { TableShowcase } from '../showcases/atoms/TableShowcase/TableShowcase';

export const Atoms = () => {
  return (
    <div className="components container">
      <Heading level={1} className="margin-bottom-md">
        Atoms
      </Heading>
      <div className="stack gap-xl">
        {/* Button */}
        <ButtonShowcase />

        {/* Icon */}
        <IconShowcase />

        {/* Image */}
        <ImageShowcase />

        {/* Input */}
        <InputShowcase />

        {/* List */}
        <ListShowcase />

        {/* Texts */}
        <TextShowcase />

        {/* Tables */}
        <TableShowcase />
      </div>
    </div>
  );
};
