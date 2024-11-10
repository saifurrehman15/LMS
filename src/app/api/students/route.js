let students = [];

export async function POST(request) {
  let obj = await request.json();
  obj.id = students.length + 1;
  students.unshift(obj);
  console.log(students);

  return Response.json({
    students: students,
    msg: "Course Added Successfully",
  });
}

export async function GET() {
  return Response.json({
    students: students,
    msg: "Successfully Fetched",
  });
}
