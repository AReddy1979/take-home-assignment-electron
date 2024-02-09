import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { SERVER_URL } from "./constants";

export const HomePage = () => {
  const testMessage = useQuery({
    queryKey: ["testMessage"],
    queryFn: () =>
      axios.get(`${SERVER_URL}`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
  });

  return (
    <div>
      <h2>Hello from Home Page!</h2>

      <br />
      <br />
      <br />
      <p>Test message from server:</p>
      <br />
      {testMessage.data &&
        testMessage.data.data &&
        testMessage.data.data.length > 0 && (
          <ul>
            {testMessage.data.data.map((item: string[], index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

      <br />
      <br />
      <br />
    </div>
  );
};