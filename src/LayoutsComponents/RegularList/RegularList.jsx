export const RegularList = ({
  items,
  resourceName,
  ItemComponent: ItemComponent,
  optionalProp1 = null,
  optionalProp2 = null,
}) => {
  
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent 
          key={index} 
          {...{ [resourceName]: item}} 
          optionalProp1={optionalProp1}
          optionalProp2={optionalProp2}/>
      ))}
    </>
  );
};
