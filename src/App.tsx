import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  let items = ["Shanghai", "Toronto", "Kitchener"];

  const handleSeleteItem = (item: string) => {
    console.log(item);
  };

  const handleBtnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(event.target, event.timeStamp, event);
    setAlertVisibility(true);
  };

  const handleBtnCloseClick = () => {
    setAlertVisibility(false);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSeleteItem}
        ></ListGroup>
      </div>
      <div>
        {alertVisible && (
          <Alert onClick={handleBtnCloseClick}>
            A simple primary <span>alert</span>—check it out!
          </Alert>
        )}
      </div>
      <div>
        <Button color="danger" onClick={handleBtnClick}>
          Primary Button
        </Button>
      </div>
    </>
  );
}

export default App;
