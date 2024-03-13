import Userflow from "userflow.js";
const Flows = () => {
  return (
    <div className="flex flex-col border-2 w-1/3 h-fit m-5">
      <button
        onClick={() => {
          userflow.start("03f51f01-6f50-4e7b-8c80-25a2bd486973", {
            once: false,
          });
        }}
        className="bg-blue-500 p-3 m-3"
      >
        click to start NPS survey
      </button>
      <button
        onClick={() => {
          Userflow.endAll();
        }}
        className="bg-red-500 p-3 m-3"
      >
        Click to end all flows
      </button>
    </div>
  );
};

export default Flows;
