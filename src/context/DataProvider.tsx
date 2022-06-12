import { createContext,  Dispatch,  SetStateAction,  useState } from 'react';


export const DataContext = createContext<IContext | null>({
  shoppingCart: {
    total: 0,
    cart: [],
  }
});

export interface IContext {
  shoppingCart: IShoppingCart;
  setShoppingCart?: Dispatch<SetStateAction<IShoppingCart>>;
}

export interface IShoppingCart {
    total: number;
    cart: Array<any>;
}

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

export default function DataProvider({ children }: IProps) {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCart>({
    total: 0,
    cart: [],
  });
  return <DataContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
  </DataContext.Provider>;
}