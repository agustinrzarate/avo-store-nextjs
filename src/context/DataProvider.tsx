import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { IShoppingCart } from 'src/iterfaces/IShoppingCart';


export interface IContext {
  shoppingCart: IShoppingCart;
  setShoppingCart: Dispatch<SetStateAction<IShoppingCart>>;
}

export const DataContext = createContext<IContext | null>(null);

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

export default function DataProvider ({ children }: IProps) {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCart>({
    total: 0,
    cart: []
  })
  return <DataContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
  </DataContext.Provider>
}
