import "./ImageShowcase.css"
import { Image } from "../../components/atoms/Image/Image"
import { Heading } from "../../components/atoms/Heading/Heading";

export const ImageShowcase = () => {
  return (
    <div className="component-section">
      <Heading>Image</Heading>
      <div className="image-example stack gap-sm">
        <Heading level={3}>Image with descriptive <code>alt</code></Heading>
        <p>The following image contains a descriptive alternative text.</p>
        <Image 
          src="/assets/images/test-image.png" 
          alt={
            "Test image displaying an adult smiling on the background and the word test displayed " +
            "centred"
          }
        />
      </div>
      <div className="image-example stack gap-sm">
        <Heading level={3}>Image with an empty <code>alt</code></Heading>
        <p>
          The image component has a default empty{" "}
          <code>alt</code> to avoid accessibility issues, and also a default lazy loading.
        </p>
        <Image src="/assets/images/test-image.png" />  
      </div>
      <div className="image-example stack gap-sm">
        <Heading level={3}>Image with eager loading</Heading>
        <p>
          When an image is set to be eager loaded,{" "} 
          <code>decoding="sync"</code> is also applied automatically.
        </p>
        <Image src="/assets/images/test-image.png" loading="eager" />  
      </div>
    </div>
  )
}