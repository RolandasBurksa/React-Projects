export const ListItem = ({ productName, isBought }) => {
  //   if (isBought) {
  //     return (
  //       <>
  //         <li>{productName} Nupirktas</li>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <li>{productName} - Pirkti</li>
  //       </>
  //     );
  //   }
  // };

  // return <>{isBought ? <li>{productName} Nupirktas</li> : <li>{productName} - Pirkti</li>}</>;

  return (
    <>
      <li>
        {productName} {isBought && 'Nupirktas'}
        {(productName === 'Pienas' || productName === 'Sviestas') && <p>pieno produktai</p>}
      </li>
    </>
  );
};
