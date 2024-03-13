import React from "react";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import userflow from "userflow.js";
import Resourcecenters from "./components/Resourcecenters";
import Flows from "./components/Flows";
const App = () => {
  userflow.init("ct_a6gncascdnbglllsnmtvpaekya");
  userflow.identify("0002", {
    name: "sk",
    email: "team@gmail.com",
    signed_up_at: "2024-06-14T16:25:49Z",
    tester: true,
  });
  userflow.group(
    "member_1",
    // These are the group's attributes
    {
      name: "Acme Inc.",
      plan: "Premium",
    },
    {
      // These are the membership's attributes
      membership: {
        role: "owner",
      },
    }
  );
  // ak_p33evvcxizd37kaynovqmwecwm

  return (
    <div className="bg-[#eef2f5] min-h-screen flex flex-row">
      {/* <Header /> */}
      {/* <Breadcrumbs /> */}
      <Resourcecenters />
      <Flows />
    </div>
  );
};

export default App;
