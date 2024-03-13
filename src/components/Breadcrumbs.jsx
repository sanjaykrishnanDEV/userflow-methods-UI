import React from "react";
import { Breadcrumb } from "flowbite-react";
const Breadcrumbs = () => {
  return (
    <div className="m-[20px] flex  items-center">
      <Breadcrumb>
        <Breadcrumb.Item>cryptocurrencies</Breadcrumb.Item>
        <Breadcrumb.Item href="#" className="font-semibold">
          Bitcoins
        </Breadcrumb.Item>
        {/* <Breadcrumb.Item>Flowbite React</Breadcrumb.Item> */}
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
