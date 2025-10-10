"use client";

interface WhyChooseCard {
  title: string;
  description: string;
  icon?: React.ReactNode; // optional icon
}

interface WhyChooseSectionProps {
  cards: WhyChooseCard[];
}

export const WhyChooseSection = ({ cards }: WhyChooseSectionProps) => {
  return (
    <section className="py-16 bg-white border border-primary rounded-md">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-4">
          Why Choose Kaki Herbals for Distribution
        </h2>
        <p className="text-gray-600 mb-12">
          Here are a few reasons why our customers love us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center justify-start gap-2">
                 {card.icon && (
                <div className="text-primary hover:shadow-xl border border-gray-200 rounded-md p-1 mb-4">{card.icon}</div>
              )}
              <h3 className="text-lg text-gray-800 font-semibold mb-2">{card.title}</h3>
              </div>
             
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
