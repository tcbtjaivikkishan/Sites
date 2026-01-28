import NutrientCard from "./NutrientCard";
import { nutrients } from "./nutrientData";

export default function NutrientSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

      {/* Cards grid */}
      <div className="space-y-6">
        {nutrients.map((item, index) => (
          <NutrientCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}