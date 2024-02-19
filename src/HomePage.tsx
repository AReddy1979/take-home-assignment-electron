import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import { SERVER_URL } from "./constants";
export const HomePage = () => {
  const [needInput, setNeedInput] = useState(true);

  const testMessage = useQuery({
    queryKey: ["testMessage"],
    queryFn: () =>
      axios.get(`${SERVER_URL}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
  });

  if (needInput && testMessage && testMessage.data && testMessage.data.data) {
    setNeedInput(false);
    const listContainer = document.getElementById("server-output");
    for (const key in testMessage.data.data) {
      const listItem = document.createElement("li");
      listItem.textContent = `${testMessage.data.data[key]}`;
      listContainer
        ? listContainer.appendChild(listItem)
        : console.log("Error in writing HTML code");
    }
  }

  return (
    <div>
      <h2>Hello from Home Page!</h2>
      <br />
      <br />
      <br />
      <p>Test message from server:</p>
      <br />
      <ul id="server-output"></ul>
      <br />
      <br />
      <br />
    </div>
  );
};
