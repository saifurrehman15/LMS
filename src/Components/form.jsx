"use client";

import { addData } from "@/app/actions/course";

export default function FormPage() {
  const handleSubmit = (formData) => {
    const courseTitle = formData.get("courseTitle");
    const courseDuration = formData.get("courseDuration");
    addData({ courseTitle, courseDuration })
  };

  return (
    <form action={handleSubmit} className="text-black">
      <div className="flex gap-10">
        <input
          name="courseTitle"
          placeholder="Enter Course Title"
          className="rounded-sm h-8 p-2"
        />
        <input
          name="courseDuration"
          placeholder="Enter Course Duration"
          className="rounded-sm h-8 p-2"
        />
        <input
          type="submit"
          className="bg-blue-500 p-1 rounded px-6 text-white"
          value={"Submit"}
        />
      </div>
    </form>
  );
}
