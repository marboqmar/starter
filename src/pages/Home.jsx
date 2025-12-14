import { Button } from "../components/atoms/Button/Button"

export const Home = () => {
  return (
    <div className="container">
      <h1>Components</h1>
      <h2>Button</h2>
      <Button
          colour={"primary"}
          withoutHover
          paddingSize={"small"}
          borderType={"squareBlack"}
          to={"/"}
        >
          This is my amazing button
        </Button>
    </div>
  )
}