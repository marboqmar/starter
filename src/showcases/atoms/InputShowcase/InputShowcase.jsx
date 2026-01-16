import './InputShowcase.css';
import { Input } from '../../../components/atoms/Input/Input';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Checkbox } from '../../../components/atoms/Checkbox/Checkbox';
import { Radio } from '../../../components/atoms/Radio/Radio';
import { TextArea } from '../../../components/atoms/TextArea/TextArea';

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
          className="input-showcase__example--focused"
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
          <Heading level={3}>Text areas</Heading>
          <TextArea label="Required text area" required id="showcase-text-area-required" />
          <TextArea
            label="Text area with a helper text"
            helperText="This is a helper text"
            id="showcase-text-area-helper-text"
          />
          <TextArea disabled label="Disabled text area" id="showcase-text-area-disabled" />
          <TextArea
            label="Text area with an error"
            errorHelperText="This is an error message"
            id="showcase-text-area-error"
          />
        </div>
        <div className="stack gap-sm margin-top-md">
          <Heading level={3}>Checkboxes</Heading>
          <Checkbox required label="Required checkbox" />
          <Checkbox
            label="Checkbox with long label. This is a very long label that will wrap to a second 
            line on smaller screens to test alignment"
          />
          <Checkbox label="Checkbox with helper text" helperText="This is a helper text" />
          <Checkbox defaultChecked label="Checked checkbox" />
          <Checkbox disabled label="Disabled checkbox" />
          <Checkbox disabled defaultChecked label="Checked disabled checkbox" />
          <Checkbox className="input-showcase__example--focused" label="Focused checkbox" />
          <Checkbox label="Checkbox with an error" errorHelperText="This is an error message" />
          <Checkbox
            defaultChecked
            label="Checked checkbox with an error"
            errorHelperText="This is an error message"
          />
        </div>
        <div className="stack gap-sm margin-top-md">
          <Heading level={3}>Radio</Heading>
          <Radio
            name="radio-test"
            label="Radio with long label. This is a very long label that will wrap to a second 
            line on smaller screens to test alignment"
          />
          <Radio
            name="radio-test"
            label="Radio with helper text"
            helperText="This is a helper text"
          />
          <Radio name="radio-test" defaultChecked label="Checked radio" />
          <Radio name="radio-test-2" disabled label="Disabled radio" />
          <Radio name="radio-test-2" disabled defaultChecked label="Checked disabled radio" />
          <Radio
            name="radio-test-2"
            className="input-showcase__example--focused"
            label="Focused radio"
          />
          <Radio
            name="radio-test-3"
            label="Radio with an error"
            errorHelperText="This is an error message"
          />
          <Radio
            name="radio-test-3"
            defaultChecked
            label="Checked radio with an error"
            errorHelperText="This is an error message"
          />
        </div>
      </div>
    </div>
  );
};
