import React from "react";
import { useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [onClick, setOnClick] = useState(false);

  return (
    <div onClick={() => setOnClick(!onClick)}>
      {/* Example of folded UserCard */}
      <div className="border-bottom">
        {/* main section */}
        <div className="d-flex align-items-center p-3">
          <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
          <span className="text-center display-6 me-auto">{props.name}</span>
          {onClick === true ? <IconChevronUp /> : <IconChevronDown />}
        </div>
        {/* UserCardDetail is hidden */}
        {onClick === true && (
          <UserCardDetail email={props.email} address={props.address} />
        )}
      </div>
    </div>
  );
}
