import React from "react";
import { Bell, MessageCircle, ChevronDown } from "lucide-react";

const Explore = () => {
  const cards = [
    {
      title: "Easy office outfits",
      subtitle: "Warm weather work-wear",
      image:
        "https://plus.unsplash.com/premium_photo-1699466748006-f8a8d7011c2c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "London summer aesthetic",
      subtitle: "Sunshine in the city",
      image:
        "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TG9uZG9uJTIwc3VtbWVyJTIwYWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      title: "Celebrating creators with disabilities",
      subtitle: "Belong on Pinterest",
      image:
        "https://plus.unsplash.com/premium_photo-1681491660929-3ec9960f565c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2VsZWJyYXRpbmclMjBjcmVhdG9ycyUyMHdpdGglMjBkaXNhYmlsaXRpZXN8ZW58MHwwfDB8fHww",
    },
    {
      title: "Vintage baseball style",
      subtitle: "Ready set go",
      image:
        "https://plus.unsplash.com/premium_photo-1664392328377-4d16db047f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmludGFnZSUyMGJhc2ViYWxsJTIwc3R5bGV8ZW58MHwwfDB8fHww",
    },
    {
      title: "Fourth of July appetizers",
      subtitle: "Happy Fourth",
      image:
        "https://images.unsplash.com/photo-1541401154946-62f8d84bd284?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fEZvdXJ0aCUyMG9mJTIwSnVseSUyMGFwcGV0aXplcnN8ZW58MHwwfDB8fHww",
    },
    {
      title: "Chocolate brown nails",
      subtitle: "Sweet inspiration",
      image:
        "https://media.istockphoto.com/id/1438607369/photo/green-brown-manicure-on-short-nails.webp?b=1&s=170667a&w=0&k=20&c=_IYa43bW_qLYdwdqHBgwVt_AuxGzL0xxkSLcz7B88O8=",
    },
  ];

  return (
    <div className="bg-white min-h-screen mt-24">
      <main className="p-4">
        <h4 className="text-xl font-normal text-center mb-3">July 4, 1776</h4>
        <h1 className="text-3xl font-bold text-center mb-6">Stay Inspired</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 h-full flex flex-col justify-end">
                <h2 className="text-lg font-bold">{card.title}</h2>
                <p className="text-sm">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Explore;
