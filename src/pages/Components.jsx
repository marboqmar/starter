import { Button } from "../components/atoms/Button/Button"
import { Link } from "react-router-dom";

export const Components = () => {
  return (
    <div className="container">
      <h1>Components</h1>
      {/* Buttons */}
      <h2>Buttons</h2>

      {/* Buttons - Colours / States */}
      <h3>Colours / States</h3>
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

      {/* Buttons - Padding */}
      <h3>Padding</h3>
      <Button
      >
        Small padding
      </Button>
      <Button
        paddingSize={"large"}
      >
        Large padding
      </Button>

      {/* Buttons - Border radius */}
      <h3>Border radius</h3>
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

      {/* Buttons - Link */}
      <h3>Link</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. {" "}
        <Button
          component={Link}
          isLink
          to={"/"}
        >
          This is a link.
        </Button>
        {" "} Fusce eu risus vitae
      </p>
    </div>
  )
}