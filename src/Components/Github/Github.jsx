// import { useEffect, useState } from "react";


// OPTIMAL WAY----------------------------------------------->
import { useLoaderData } from "react-router-dom";


const Github = () => {
  // THIS IS ONE METHOD OF FETCHING THE API AND LOADING THE DATA-------------------------------------->

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/code-rishabh")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  // OPTIMAL WAY------------------------------------->
  const data = useLoaderData()

  return (
    <div className="flex min-h-screen flex-col bg-neutral-800 rounded text-white text-4xl font-bold self-center items-center justify-center w-full gap-5 p-5">
      Github Followers: {data.followers}
      <img
        className="rounded"
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
      />
    </div>
  );
};

export default Github;


// THERE IS AN ANOTHER WAY TO OPTIMIZE THIS USING LOADER FROM REACT-ROUTER-DOM
export const githubinfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/code-rishabh");
  console.log(response)
  return response.json();
};
