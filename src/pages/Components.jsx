import { Button } from "../components/atoms/Button/Button"
import { Link } from "react-router-dom";
import { DefinitionList } from "../components/atoms/DefinitionList/DefinitionList";
import { Heading } from "../components/atoms/Heading/Heading";
import { Icon } from "../components/atoms/Icon/Icon"

const descriptions = [
  { id: 1, term: 'Colour', description: 'blue' },
  { id: 2, term: 'Material', description: 'cotton' },
  { id: 3, term: 'Size', description: 'small' }
]

export const Components = () => {
  return (
    <div className="container">
      <Heading level={1}>Components</Heading>
      {/* Buttons */}
      <div className="component-section">
        <Heading>Buttons</Heading>
        <div className="button-components">
          {/* Buttons - Colours / States */}
          <div className="button-examples">
            <Heading level={3}>Colours / States</Heading>
            <div className="button-group">
              <Button
              >
                Primary
              </Button>
              <Button
                colour={"secondary"}
              >
                Secondary
              </Button>
              <Button
                disabled
              >
                Disabled
              </Button>
            </div>
          </div>

          {/* Buttons - Padding */}
          <div className="button-examples">
            <Heading level={3}>Padding</Heading>
            <div className="button-group">
              <Button
              >
                Small padding
              </Button>
              <Button
                paddingSize={"large"}
              >
                Large padding
              </Button>
            </div>
          </div>

          {/* Buttons - Border radius */}
          <div className="button-examples">
            <Heading level={3}>Border radius</Heading>
            <div className="button-group">
              <Button
                borderRadius={"none"}
              >
                No border radius
              </Button>
              <Button
                borderRadius={"small"}
              >
                Small border radius
              </Button>
              <Button
                borderRadius={"large"}
              >
                Large border radius
              </Button>
            </div>
          </div>
        </div>

        {/* Buttons - Link */}
        <Heading level={3}>Link</Heading>
        <p>Lorem ipsum dolor sit amet, {" "}
          <Button
            component={Link}
            isLink
            to={"/"}
          >
            This is a link.
          </Button>
          {" "} consectetur adipiscing elit.
        </p>
      </div>


      {/* Definition list */}
      <div className="component-section">
        <Heading>Definition list</Heading>
        <DefinitionList items={descriptions} />
      </div>

      {/* Headings */}
      <div className="component-section">
        <Heading>Headings</Heading>
        <div className="heading-examples">
          <Heading level={1}>The quick brown fox jumps over the lazy dog</Heading>
          <Heading>The quick brown fox jumps over the lazy dog</Heading>
          <Heading level={3}>The quick brown fox jumps over the lazy dog</Heading>
          <Heading level={4}>The quick brown fox jumps over the lazy dog</Heading>
          <Heading level={5}>The quick brown fox jumps over the lazy dog</Heading>
          <Heading level={6}>The quick brown fox jumps over the lazy dog</Heading>
        </div>
      </div>

      {/* Icon */}
      <div className="component-section">
        <Heading>Icon</Heading>
        <Heading level={3}>Decorative icon</Heading>
        <p>The following icon contains the HTML attributes aria-hidden="true", tabindex="-1", and focusable="false".</p>
        <Icon isDecorative>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </Icon>
        <Heading level={3}>Non decorative icon</Heading>
        <p>The following icon contains the HTML attributes role="img" and aria-label.</p>
        <Icon ariaLabel={"check mark"}>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </Icon>
        <Heading level={3}>Different colours and sizes</Heading>
        <p>The previous icons are inheritting the colour of the text, but the colour and size can be modified using CSS.</p>
        <Icon isDecorative className="large-coloured">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </Icon>
      </div>
    </div>
  )
}