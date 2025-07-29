// components/ConnectivitySection.tsx
import React from "react";
import {
  Train,
  Hospital,
  School,
  Bus,
  ShoppingCart,
  UtensilsCrossed,
  BriefcaseBusiness,
  Dumbbell,
  TreePine,
} from "lucide-react";

const connectivityData = [
  {
    icon: Train,
    title: "Nearest Railway Station",
    distance: "2.5 km away",
  },
  {
    icon: Hospital,
    title: "Nearest Hospital",
    distance: "1.8 km away",
  },
  {
    icon: School,
    title: "Nearest School",
    distance: "1.2 km away",
  },
  {
    icon: Bus,
    title: "Nearest Bus Stop",
    distance: "500 m away",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Mall",
    distance: "3.5 km away",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    distance: "1.0 km away",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Hub",
    distance: "4 km away",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    distance: "2 km away",
  },
  {
    icon: TreePine,
    title: "Public Park",
    distance: "1 km away",
  },
];

const ConnectivitySection: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-24">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1484652545326-bf8ec420dc21?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Connectivity Section */}
      <section id="connectivity">
        <div className="relative bg-[#f0f0ec]/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl max-w-[1200px] mx-auto">
          <h2 className="text-4xl font-bold text-[#485e4c] mb-10 text-center drop-shadow-md">
            Connectivity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {connectivityData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-[#e4e2dc] rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#485e4c]/20 text-[#485e4c] shadow-inner transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#485e4c] text-lg leading-tight">
                      {item.title}
                    </p>
                    <p className="text-[#7d927b] text-sm mt-1">{item.distance}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectivitySection;
