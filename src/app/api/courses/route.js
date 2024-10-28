const courses = [
  {
    id: 1,
    course: "Web and App Development",
    duration: "3 Months",
  },
  {
    id: 2,
    course: "Python",
    duration: "4 Months",
  },
  {
    id: 3,
    course: "Flutter",
    duration: "5 Months",
  },
];

export async function GET() {
  return Response.json({
    courses: courses,
    msg: "Successfully Fetched",
  });
}

export async function POST(request) {
  let obj = await request.json();
  obj.id = courses.length + 1;
  courses.unshift(obj);
  console.log(courses);
  
  return Response.json({
    courses: courses,
    msg: "Course Added Successfully",
  });
}
