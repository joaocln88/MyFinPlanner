import { useEffect, useState } from "react";
import MyForm from "src/components/Form/MyForm";
import Charts from "src/components/Chart/Charts";

const Home = function () {
  const [data, setData] = useState([]);

  useEffect(() => {}, [data]);

  return (
    <>
      <MyForm setData={setData} />
      <Charts data={data} />
      {/* <Table data={data} /> */}
    </>
  );
};

export default Home;
