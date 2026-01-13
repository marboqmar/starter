import './InputShowcase.css';
import { Input } from '../../../components/atoms/Input/Input';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Label } from '../../../components/atoms/Label/Label';

export const InputShowcase = () => {
  return (
    <div className="atom-section">
      <Heading>Input</Heading>
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
      </div>
    </div>
  );
};
