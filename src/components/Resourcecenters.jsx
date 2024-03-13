import React from "react";
import Userflow from "userflow.js";
const Resourcecenters = () => {
  let state;
  return (
    <div className="flex flex-col w-1/3 border-2 h-fit m-5">
      <p>.openResourceCenter</p>
      <button
        onClick={() => {
          Userflow.openResourceCenter();
          Userflow.updateUser({
            name: "updateDEV",
          });
        }}
        className="bg-green-500 p-3 m-3"
      >
        Click to Open Resource center
      </button>
      <p>.closeResourceCenter</p>
      <button
        onClick={() => {
          Userflow.closeResourceCenter();
        }}
        className="bg-red-500 p-3 m-3"
      >
        Click to Close Resource center
      </button>
      {/* //toggle */}
      <p>.ToggleResourceCenter</p>
      <button
        onClick={() => {
          Userflow.toggleResourceCenter();
        }}
        className="bg-purple-500 p-3 m-3"
      >
        Click to Toggle Resource center
      </button>
      {/* setrs_launcher_hidden */}
      <p>.setResourceCenterLauncherHidden</p>
      <button
        onClick={() => {
          Userflow.setResourceCenterLauncherHidden(true);
        }}
        className="bg-purple-200 p-3 m-3"
      >
        Click to set Resource center launcher Hidden
      </button>
      {/* getrc_state */}
      <p>.getResourceCenterState</p>
      <button
        onClick={() => {
          state = Userflow.getResourceCenterState();
          console.log(state);
        }}
      >
        Resource center state : {state?.isOpen ? "yes" : ""}
      </button>
    </div>
  );
};

export default Resourcecenters;
