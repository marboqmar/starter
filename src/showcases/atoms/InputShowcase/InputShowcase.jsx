import './InputShowcase.css';
import { Input } from '../../../components/atoms/Input/Input';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Checkbox } from '../../../components/atoms/Checkbox/Checkbox';

export const InputShowcase = () => {
  return (
    <div className="atom-section">
      <Heading>Inputs</Heading>
      <div className="stack gap-md">
        <Input
          label="Text type"
          id="text-showcase-input"
          placeholder="Jon Doe"
          name="name"
          autoComplete="name"
        />
        <Input
          label="Password type"
          type="password"
          id="password-showcase-input"
          name="password"
          autoComplete="current-password"
        />
        <Input
          label="Number type"
          type="number"
          id="number-showcase-input"
          placeholder="12345"
          name="test-number"
        />
        <Input
          label="Date type"
          type="date"
          id="date-showcase-input"
          name="birthday"
          autoComplete="bday"
        />
        <Input label="Required" required id="required-showcase-input" />
        <Input
          label="With helper text"
          id="helper-text-showcase-input"
          helperText="This is a helper text"
        />
        <Input
          label="Read only"
          id="read-only-showcase-input"
          value="This value can not be edited"
          readOnly
        />
        <Input
          label="Disabled"
          disabled
          id="disabled-showcase-input"
          value="This input is disabled"
        />
        <Input
          label="Focused"
          className="input--focused"
          id="focused-showcase-input"
          placeholder="Jon Doe"
          name="name"
          autoComplete="name"
        />
        <Input label="Error" id="error-showcase-input" errorHelperText="This is an error message" />
        <Input
          label="Long error message"
          id="long-error-showcase-input"
          errorHelperText="Long error message. This is a very long error message that will wrap to 
          a second line on smaller screens to test alignment"
        />
        <div className="stack gap-sm margin-top-md">
          <Heading level={3}>Checkboxes</Heading>
          <Checkbox label="Checkbox" />
          <Checkbox
            label="Checkbox with long label. This is a very long label that will wrap to a second 
            line on smaller screens to test alignment"
          />
          <Checkbox required label="Checkbox required" />
          <Checkbox label="Checkbox with helper text" helperText="This is a helper text" />
          <Checkbox disabled label="Disabled checkbox" />
          <Checkbox disabled defaultChecked label="Disabled checkbox checked" />
          <Checkbox className="focused-showcase-checkmark" label="Focused checkbox" />
          <Checkbox label="Checkbox with an error" errorHelperText="This is an error message" />
          <Checkbox
            defaultChecked
            label="Checkbox with an error and checked"
            errorHelperText="This is an error message"
          />
        </div>
      </div>
    </div>
  );
};
