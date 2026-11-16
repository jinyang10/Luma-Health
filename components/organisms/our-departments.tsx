import DepartmentCard from "@/components/molecules/departmentcard";
import allDummyData from "@/db/dummydata";

interface DepartmentData {
  id: string;
  name: string;
  iconName: string;
}

export default function DepartmentsSection() {
  const { departments } = allDummyData;

  return (
    <section className="w-full">
      <h2 className="text-center text-text-title mb-8">Our Departments</h2>

      {departments.length === 0 ? (
        <div className="text-grey-500 py-4 text-center">
          No departments found
        </div>
      ) : (
        /* One column on mobile; from md upward, fit as many columns as
           possible, each at least 176px wide and sharing remaining space. */
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(176px,1fr))] gap-8 justify-center">
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.id}
              id={dept.id}
              name={dept.name}
              iconName={dept.iconName}
            />
          ))}
        </div>
      )}
    </section>
  );
}