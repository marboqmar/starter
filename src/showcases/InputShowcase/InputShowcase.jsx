import "./InputShowcase.css";
import { Input } from "../../components/atoms/Input/Input";
import { Heading } from "../../components/atoms/Heading/Heading";

export const InputShowcase = () => {
  return (
    <div className="component-section">
      <Heading>Input</Heading>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Text type</Heading>
        <Input 
          id="text-showcase-input" 
          placeholder="Jon Doe" 
          name="name" 
          autocomplete="name" 
        />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Password type</Heading>
        <Input 
          type={"password"} 
          id="password-showcase-input" 
          name="password" 
          autocomplete="current-password" 
        />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Number type</Heading>
        <Input 
          type={"number"} 
          id="number-showcase-input" 
          placeholder="12345"
          name="test-number"
        />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Date type</Heading>
        <Input 
          type={"date"} 
          id="date-showcase-input"
          name="birthday" 
          autocomplete="bday"
        />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Disabled type</Heading>
        <Input 
          disabled 
          id="disabled-showcase-input" 
        />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Focused</Heading>
        <Input 
          className="input--focused" 
          id="focused-showcase-input" 
          placeholder="Jon Doe" 
          name="name" 
          autocomplete="name" 
        />
      </div>
    </div>
  )
}