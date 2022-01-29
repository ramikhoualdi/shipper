import React from "react";
import { Link } from "react-router-dom";
import HeaderModel from "../HeaderModel";
import Profile from "./Profile/Profile";
import Payments from "./Payment/Payments";
import History from "./History/History";
import Addresses from "./Addresses/Addresses";
import PromoCode from "./PromoCode/PromoCode";
import Settings from "./Settings/Settings";
import OnlineSupport from "./OnlineSupport/OnlineSupport";
import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// function Home() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         alignItems: "center",
//         padding: "10px",
//       }}
//     >
//       <Tabs>
//         <TabList>
//           <Tab>
//             <p>Home</p>
//           </Tab>
//           <Tab>
//             <p>Profile</p>
//           </Tab>
//           <Tab>
//             <p>Payments Methods</p>
//           </Tab>
//           <Tab>
//             <p>History</p>
//           </Tab>
//           <Tab>
//             <p>My Addresses</p>
//           </Tab>
//           <Tab>
//             <p>Apply Promo Code</p>
//           </Tab>
//           <Tab>
//             <p>Settings</p>
//           </Tab>
//           <Tab>
//             <p>Online Support</p>
//           </Tab>
//           <Tab>
//             <p>Log Out</p>
//           </Tab>
//         </TabList>
//         <TabPanel>
//           <div className="panel-content">
//             <h2>Home</h2>
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <HeaderModel title="Profile" />
//           <Profile />
//         </TabPanel>
//         <TabPanel>
//           <div className="panel-content">
//             <h2>Payments Methods</h2>
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div className="panel-content">
//             <h2>History</h2>
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div className="panel-content">
//             <h2>Any content 5</h2>
//           </div>
//         </TabPanel>
//       </Tabs>
//       {/* <Link className="sidebar_link" to="/">
//         Home
//       </Link>
//       <Link className="sidebar_link" to="/profile">
//         Profile
//       </Link>
//       <Link className="sidebar_link" to="/payments">
//         Payments Methods
//       </Link>
//       <Link className="sidebar_link" to="/history">
//         History
//       </Link>
//       <Link className="sidebar_link" to="/addresses">
//         My Addresses
//       </Link>
//       <Link className="sidebar_link" to="/promo">
//         Apply Promo Code
//       </Link>
//       <Link className="sidebar_link" to="/settings">
//         Settings
//       </Link>
//       <Link className="sidebar_link" to="/support">
//         Online Support
//       </Link>
//       <br />
//       <Link className="sidebar_link" to="/logout">
//         Log Out
//       </Link> */}
//     </div>
//   );
// }
const Home = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <p>Home</p>
        </Tab>
        <Tab>
          <p>Profile</p>
        </Tab>
        <Tab>
          <p>Payments Methods</p>
        </Tab>
        <Tab>
          <p>History</p>
        </Tab>
        <Tab>
          <p>My Addresses</p>
        </Tab>
        <Tab>
          <p>Apply Promo Code</p>
        </Tab>
        <Tab>
          <p>settings</p>
        </Tab>
        <Tab>
          <p>Online Support</p>
        </Tab>
        <Tab>
          <p>Logout</p>
        </Tab>
      </TabList>

      <TabPanel>
        <div className="panel-content">
          <h2>Home</h2>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <HeaderModel title="Profile" />
          <Profile />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <HeaderModel title="Payment Methods" />
          <Payments />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <HeaderModel title="History" />
          <History />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <HeaderModel title="My Addresses" />
          <Addresses />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <HeaderModel title="Apply Promo Code" />
          <PromoCode />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <HeaderModel title="Settings" />
          <Settings />
        </div>
      </TabPanel>
      <TabPanel>
        <div className="panel-content">
          <HeaderModel title="Online Support" />
          <OnlineSupport />
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Home;
