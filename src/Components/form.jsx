"use client";

import { addCourse, addData } from "@/app/actions/course";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

export default function FormPage() {
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
console.log(formData);


    const obj = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      education: formData.get("education"),
      cnic: formData.get("cnic"),
      email: formData.get("email"),
      profilePicture: formData.get("profilePicture"),
      address: formData.get("address"),
      gender,
      role,
    };
    console.log(obj);

    await addCourse(obj); // Assuming addData handles the submission
  };

  return (
    <form onSubmit={handleSubmit} className={"grid gap-3"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="grid gap-2">
          <label htmlFor="firstName" className="text-sm">
            First Name
          </label>
          <Input required type="text" id="firstName" name="firstName" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="lastName" className="text-sm">
            Last Name
          </label>
          <Input required type="text" id="lastName" name="lastName" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="grid gap-2">
          <label htmlFor="education" className="text-sm">
            Education
          </label>
          <Input required type="text" id="education" name="education" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="cnic" className="text-sm">
            CNIC
          </label>
          <Input required type="text" id="cnic" name="cnic" />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <Input required type="email" id="email" name="email" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="profilePicture" className="text-sm">
          Profile Picture
        </label>
        <Input required type="file" id="profilePicture" name="profilePicture" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="address" className="text-sm">
          Address
        </label>
        <Input required type="text" id="address" name="address" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="grid gap-2">
          <label htmlFor="gender" className="text-sm">
            Gender
          </label>
          <Select onValueChange={setGender} required>
            <SelectTrigger>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <label htmlFor="role" className="text-sm">
            Role
          </label>
          <Select onValueChange={setRole} required>
            <SelectTrigger>
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trainer">Trainer</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        className="bg-blue-500 font-semibold tracking-wider"
      >
        Add User/Trainer
      </Button>
    </form>
  );
}
