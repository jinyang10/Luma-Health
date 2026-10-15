import DepartmentCard from "@/components/molecules/departmentcard"; 
import allDummyData from "@/db/dummydata"; 

export default function DepartmentsSection() {
  const { departments } = allDummyData;
  // same thing as const deps = allDummyData.departments;

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-text-title mb-8 text-center tracking-tight">
        Our Departments
      </h2>
      
      {/* 
        Responsive grid: 
        - 2 columns on small mobile screens
        - 3 columns on tablets
        - 6 columns on large desktops to match the screenshot layout 
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        {departments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            id={dept.id}
            name={dept.name}
            iconName={dept.iconName}
          />
        ))}
      </div>
    </section>
  );
}