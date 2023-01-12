import { useContext } from 'react';

import { MyContext } from '../Context/ContextProvider';

const UseData = () => (
  useContext(MyContext)
);

export default UseData;
