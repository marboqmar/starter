import { ButtonShowcase } from "../showcases/ButtonShowcase/ButtonShowcase";
import { DefinitionListShowcase } from "../showcases/DefinitionListShowcase/DefinitionListShowcase";
import { Heading } from "../components/atoms/Heading/Heading";
import { HeadingShowcase } from "../showcases/HeadingShowcase/HeadingShowcase";
import { IconShowcase } from "../showcases/IconShowcase/IconShowcase";
import { ImageShowcase } from "../showcases/ImageShowcase/ImageShowcase";
import { InputShowcase } from "../showcases/InputShowcase/InputShowcase";

export const Components = () => {
  return (
    <div className="components container">
      <Heading level={1} className="margin-bottom-md">Components</Heading>
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
  )
}