import { recipies } from './recipies';
import { Component } from './Component';

export const ComponentsAll = () => {
  return (
    <>
      <h1>Receptai</h1>
      {recipies.map((item) => (
        <Component key={item.id} receptas={item} />
        // <Component key={item.id} sort={item.name} receptas={item} />
        // <Component key={item.id} sort={item.name} inside={item.ingredients} />
      ))}
    </>
  );
};
