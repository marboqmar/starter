import "./ButtonShowcase.css"
import { Button } from "../../components/atoms/Button/Button"
import { Link } from "react-router-dom";
import { Heading } from "../../components/atoms/Heading/Heading";

export const ButtonShowcase = () => {
  return (
    <div className="component-section">
      <Heading>Buttons</Heading>
      <div className="button-components stack gap-md">
        {/* Buttons - Colours / States */}
        <div className="button-examples stack gap-sm">
          <Heading level={3}>Colours / States</Heading>
          <div className="button-group stack gap-sm">
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
        <div className="button-examples stack gap-sm">
          <Heading level={3}>Padding</Heading>
          <div className="button-group stack gap-sm">
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
        <div className="button-examples stack gap-sm">
          <Heading level={3}>Border radius</Heading>
          <div className="button-group stack gap-sm">
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
      <div className="stack gap-sm margin-top-md">
        <Heading level={3}>Link</Heading>
        <p>Lorem ipsum dolor sit amet, {" "}
          <Button
            component={Link}
            isLink
            to={"/"}
          >
            this is a link
          </Button>
          {" "} consectetur adipiscing elit.
        </p>
      </div>
    </div>
  )
};