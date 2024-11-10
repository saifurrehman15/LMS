import { DataTable } from "@/Components/datatable";
import DialogBox from "@/Components/dialog-box";

export default function Students() {
  return (
    <div className="mt-24">
      <div className="flex justify-between items-center">
        <div>
          <h1>Students</h1>
        </div>
        <div>
          <DialogBox />
        </div>
      </div>
      <DataTable />
    </div>
  );
}
