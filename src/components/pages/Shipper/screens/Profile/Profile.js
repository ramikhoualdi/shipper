import React, { useState } from "react";
import "../style.css";
const Profile = () => {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <img src="" />
      <p>Nata Vacheishvili</p>
      <p>nata_vacheishvili@gurucar.com</p>
      <br />
      <input
        className="ipnut_"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
};

export default Profile;
