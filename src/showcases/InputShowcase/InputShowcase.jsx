import "./InputShowcase.css";
import { Input } from "../../components/atoms/Input/Input";
import { Heading } from "../../components/atoms/Heading/Heading";

export const InputShowcase = () => {
  return (
    <div className="component-section">
      <Heading>Input</Heading>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Text type</Heading>
        <Input id="text-input" placeholder="Jon Doe" />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Password type</Heading>
        <Input type={"password"} id="password-input" />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Number type</Heading>
        <Input type={"number"} id="number-input" placeholder="12345" />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Date type</Heading>
        <Input type={"date"} id="date-input" />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Disabled type</Heading>
        <Input disabled id="disabled-input" />
      </div>
      <div className="stack gap-sm margin-bottom-md">
        <Heading level={3}>Focused</Heading>
        <Input className="input--focused" id="text-input" placeholder="Jon Doe" />
      </div>
    </div>
  )
}