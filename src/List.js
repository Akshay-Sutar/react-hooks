import { useEffect, useState } from "react";

const List = (props) => {
  const [items, setItems] = useState([]);
  const { getItems } = props;

  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
