import { FC } from "react";
import { RotatingTriangles } from "react-loader-spinner";

import scss from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={scss.overlay}>
      <RotatingTriangles
        visible={true}
        height="100"
        width="100"
        ariaLabel="rotating-triangles-loading"
      />
    </div>
  );
};

export default Loader;
