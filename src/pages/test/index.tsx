import { getHelloWorld } from "commonReq/requestHelloWorld";
import { GetHelloWorldQuery } from "graphql/lib/generated/client";
import { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";

const Test = () => {
  const [data, setData] = useState<GetHelloWorldQuery>();
  useEffect(() => {
    const exec = async () => {
      const data = await getHelloWorld(new GraphQLClient("/graphql"));
      setData(data);
    };
    exec();
  }, []);

  return (
    <>
      <div>GraphQL取得</div>
      <div>{data?.helloworld?.first}</div>
    </>
  );
};

export default Test;
