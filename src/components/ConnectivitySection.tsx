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
  Film,
  TreePine,
} from "lucide-react";

const connectivityData = [
  {
    icon: Hospital,
    title: "Hospital & Healthcare Facilities",
    distance: "Ozone Hitech Multispeciality Hospital, Relie Hospital Palghar, Within 10 minutes from site.",
  },
  {
    icon: School,
    title: "Schools & Educational Institutions",
    distance: "10 mins from site: St. John International School, Holy Spirit High School and Jr College Sacred Heart High School, Palghar Emmanuel International School",
  },
  {
    icon: Bus,
    title: "Transportation",
    distance: "Just 5 mins away. Proximity to railway station and bus stop, proposed infrastructure projects",
  },
  {
    icon: ShoppingCart,
    title: "Shopping & Entertainment",
    distance: "Zudio, Vijay Sales, Mr. DIY, Reliance trends, Croma, Reliance Super Market",
  },
  {
    icon: TreePine,
    title: "Green Spaces/Recreation Areas",
    distance: "Parks, Beaches, natural beauty of Palghar. Waghoba Waterfall, Kelva Beach, Shirgaon Fort, Mahin Beach",
  },
  {
    icon: Film ,
    title: "Movie Theatre",
    distance: "Gold Cinema, Palghar: 10 mins from project",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Hub",
    distance: "Within 2 km",
  },
  {
    icon: Train,
    title: "Nearest Railway Station",
    distance: "Within 1 km",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    distance: "1.0 km away",
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
                  <div className="flex items-center justify-center min-w-12 min-h-12 rounded-full bg-[#485e4c]/20 text-[#485e4c] shadow-inner transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#485e4c] text-base leading-tight">
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
