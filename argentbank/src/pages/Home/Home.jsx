import React, { useState, useEffect } from "react";
import bankTree from "../../assets/img/bank-tree.jpeg";
import bill from "../../assets/img/icon-money.png";
import msg from "../../assets/img/icon-chat.png";
import security from "../../assets/img/icon-security.png";
import Spinner from "../../components/Spinner/Spinner";
import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout();
    };
  }, []); // fin du spinner aprés 1s en changeant son état de true => false

  document.title = "Argent Bank - Home Page";

  return !loading ? (
    <main id="homeContainer">
      <section className="homeSection">
        <img className="home__img" src={bankTree} alt="plant" />
        <div className="home__textContainer">
          <h2>
            No fees.
            <br />
            No minimum deposit.
            <br />
            High interest rates.
          </h2>
          <p className="home__p">
            Open a savings account with <br />
            Argent Bank today!
          </p>
        </div>
      </section>
      <section className="home__features">
        <div className="home__feature">
          <img className="home__img" src={msg} alt="" />
          <h3 className="home__h3">You are our #1 priority</h3>
          <p className="home__p">
            Need to talk to a reprensentative ? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="home__feature">
          <img className="home__img" src={bill} alt="" />
          <h3 className="home__h3">More savings means higher rates</h3>
          <p className="home__p">
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="home__feature">
          <img className="home__img" src={security} alt="" />
          <h3 className="home__h3">Security you can trust</h3>
          <p className="home__p">
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  ) : (
    <Spinner />
  );
};

export default Home;
