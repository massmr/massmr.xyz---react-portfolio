export const RegularList = ({
  items,
  resourceName,
  ItemComponent: ItemComponent
}) => {
  
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [resourceName]: item}} />
      ))}
    </>
  );
};
