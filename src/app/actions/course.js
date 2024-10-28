export const addData = async (obj) => {
  await fetch(`${process.env.Api_Url}/api/courses`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
};
