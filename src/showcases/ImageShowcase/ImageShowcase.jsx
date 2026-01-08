import "./ImageShowcase.css"
import { Image } from "../../components/atoms/Image/Image"
import { Heading } from "../../components/atoms/Heading/Heading";

export const ImageShowcase = () => {
  return (
    <div className="component-section">
      <Heading>Image</Heading>
      <p className="margin-bottom-md">
        The image component has a default empty{" "}
        <code>alt</code> to avoid accessibility issues, and also a default lazy loading.
      </p>
      <div className="image-example stack gap-sm">
        <Heading>Image with descriptive alt</Heading>
        <Image 
          src="/test-image.png" 
          alt={
            "Test image displaying an adult smiling on the background and the word test displayed " +
            "centred"
          }
        />
      </div>
      <div className="image-example stack gap-sm">
        <Heading>Image with an empty alt</Heading>
        <Image src="/test-image.png" />  
      </div>
      <div className="image-example stack gap-sm">
        <Heading>Image with eager loading</Heading>
        <Image src="/test-image.png" loading="eager" />  
      </div>
    </div>
  )
}