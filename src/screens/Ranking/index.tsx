import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { styles } from "./styles";
import RankCard from "../../components/RankCard";

export default function Ranking() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) =>
        res
          .json()
          .then((d) =>
            setUsers(
              Object.assign(
                [],
                [
                  ...d.users?.sort(({ height }, { height: height2 }) =>
                    height > height2 ? -1 : 1
                  ),
                ]
              )
            )
          )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {users?.map((user, index) => {
        return <RankCard user={user} key={index} />;
      })}
    </ScrollView>
  );
}
