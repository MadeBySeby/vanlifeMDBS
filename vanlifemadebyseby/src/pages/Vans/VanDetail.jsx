import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { getVans } from "../../api";
export default function VanDetail() {
  const [van, setVan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const search = location.state?.search || "";
  console.log(search);
  const type = location.state?.type || "all";
  useEffect(() => {
    async function loadVan() {
      setLoading(true);
      try {
        const data = await getVans(id);
        setVan(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadVan();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
        {/* &larr; <span>Back to {type} vans</span> */}
      </Link>

      {van && (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      )}
    </div>
  );
}
