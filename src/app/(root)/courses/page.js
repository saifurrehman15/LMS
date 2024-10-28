import FormPage from "@/Components/form";

async function Courses() {
  const url = await fetch("http://localhost:3000/api/courses");
  const get = await url.json();
  console.log(get);
  return (
    <div  className="flex flex-col items-center">
      <FormPage />
      <div className="mt-20 flex w-full gap-20 justify-center">
        {get.courses.map((res) => (
          <div className="bg-gray-700  w-[300px] h-[250px] rounded-md text-center flex items-center flex-col justify-center gap-5 hover:scale-105 transition-transform border-4 border-red-500">
            <div>
              <h1>{res.course}</h1>
            </div>
            <div>
              <p>{res.duration}</p>
            </div>
            <div>
              <button className="bg-blue-400 p-2 px-4 rounded text-white">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
