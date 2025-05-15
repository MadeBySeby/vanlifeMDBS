import React, { useEffect, useState } from "react";
import { getHostVans } from "../../api";
import { Link } from "react-router-dom";
export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function loadHostVans() {
      setIsLoading(true);
      try {
        const data = await getHostVans();
        setVans(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadHostVans();
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>There was an error: {error}</h1>;
  }
  const hostVansEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    </section>
  );
}
