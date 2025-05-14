export async function getVans(id) {
  const link = id ? `/api/vans/${id}` : "/api/vans";
  const res = await fetch(link);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}
