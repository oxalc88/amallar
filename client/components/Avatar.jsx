import React from "react";

const Avatar = ({ avatar = "https://placeimg.com/192/192/people" }) => {
  return (
    <div className="avatar my-3">
      <div className="w-20 rounded-full">
        <img src={avatar} />
      </div>
    </div>
  );
};

export default Avatar;
