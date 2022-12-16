import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExpCard from "../Components/Card/ExpCard";
import HomeCard from "../Components/Card/HomeCard";
import SearchForm from "../Components/Form/SearchForm";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        setAllExp(data);
      });
  }, []);

  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px20">
      <div className="mt-4">
        <SearchForm />
      </div>
      <div className="flex-1">
        <div className="">
          <div className="flex justify-between px-4">
            <p className="text-xl font-bold">Homes</p>
            <Link to="/coming-soon">See All</Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex justify-between flex-wrap gap-5 px-4">
              {[...Array(20)].map((_, i) => (
                <HomeCard key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between px-4">
            <p className="text-xl font-bold">Experiences</p>
            <Link to="/coming-soon">See All</Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex justify-between flex-wrap gap-5 px-4">
              {allExp.slice(0, 4).map((exp) => (
                <ExpCard key={exp._id} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
