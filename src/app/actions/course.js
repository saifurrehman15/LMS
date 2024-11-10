export const addData = async (obj) => {
  await fetch(`http://localhost:3000/api/courses`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
};


export const addCourse = async (obj) => {
  await fetch(`http://localhost:3000/api/students`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
};
