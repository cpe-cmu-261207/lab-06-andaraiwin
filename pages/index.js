import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import axios from "axios";
import UserCard from "../Components/UserCard";
import UserCardDetail from "../Components/UserCardDetail";

export default function Home() {
  const [getAmount, setGenAmount] = useState(1);
  const [user, setUser] = useState([]);

  const genUsers = async () => {
    if (getAmount < 1) {
      alert("Invalid number of user");
      return;
    }

    const resp = await axios.get(
      `https://randomuser.me/api/?results=${getAmount}`
    );

    const newUsers = [];
    for (const x of resp.data.results) {
      newUsers.push({
        name: x.name.first + " " + x.name.last,
        email: x.email,
        imgUrl: x.picture.large,
        address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
      });
    }

    setUser(newUsers);
  };

  console.log(user);

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>
      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setGenAmount(event.target.value);
          }}
          value={getAmount}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {user.map((x) => (
        <UserCard
          key={x.name}
          name={x.name}
          email={x.email}
          imgUrl={x.imgUrl}
          address={x.address}
        />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Raiwin Inthasit 640610665
      </p>
    </div>
  );
}
