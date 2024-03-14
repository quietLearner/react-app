import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

//interface
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// function ListGroup(props: Props) {
function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["Shanghai", "Toronto", "Kitchener"];
  //items = [];

  //each child in a list should have a unique "key" prop.

  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List Group</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  //   }

  //const noItemMessage = items.length === 0 ? <p>No item found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  const handleClick = (e: MouseEvent, item: string, index: number) => {
    console.log(item, e, index);
    setSelectedIndex(index);
  };

  //hook, this is strange
  const [selectedIndex, setSelectedIndex] = useState(-2);
  //const [name, setname] = useState("");

  return (
    <Fragment>
      <h1>{heading}</h1>
      {getMessage()}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => {
              handleClick(event, item, index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
