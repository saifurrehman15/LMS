export const addData = async (obj) => {
  await fetch(`http://localhost:3001/api/courses`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
};
