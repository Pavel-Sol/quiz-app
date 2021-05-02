import { FC } from 'react';

import loader from './../assets/images/loader.gif';

const Loader: FC = () => {
  return (
    <div className="loader">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
