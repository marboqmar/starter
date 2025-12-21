import { Button } from "../components/atoms/Button/Button"
import { Link } from "react-router-dom";
import { DefinitionList } from "../components/atoms/DefinitionList/DefinitionList";

const descriptions = [
  { id: 1, term: 'Colour', description: 'Blue' },
  { id: 2, term: 'Material', description: 'Cotton' },
  { id: 3, term: 'Size', description: 'Small' }
]

export const Components = () => {
  return (
    <div className="container">
      <h1>Components</h1>
      {/* Buttons */}
      <h2>Buttons</h2>
      <div className="button-components">
        {/* Buttons - Colours / States */}
        <div className="button-examples">
          <h3>Colours / States</h3>
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
          <h3>Padding</h3>
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
          <h3>Border radius</h3>
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
      <h3>Link</h3>
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

      {/* Definition list */}
      <h2>Definition list</h2>
      <DefinitionList items={descriptions} />
    </div>
  )
}