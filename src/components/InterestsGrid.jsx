import React, { useRef } from 'react';
import StoryCard from './StoryCard';

const InterestSection = ({ title, icon, iconColor, stories }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300 + 24; // Card width + gap
      scrollRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-5">
      <h2 className="text-center mb-4">
        <i className={`fas ${icon} me-2 ${iconColor}`}></i>{title}
      </h2>
      <div className="horizontal-scroll-wrapper bg-light rounded shadow-sm">
        <button className="scroll-zone scroll-zone-left" onClick={() => scroll(-1)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="horizontal-scroll" ref={scrollRef}>
          {stories.map((story, index) => (
            <StoryCard key={index} title={story.title} text={story.text} image={story.image} />
          ))}
        </div>
        <button className="scroll-zone scroll-zone-right" onClick={() => scroll(1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

const InterestsGrid = () => {
  const data = [
    {
      title: "Software Engineering Stories",
      icon: "fa-code",
      iconColor: "text-primary",
      stories: [
        { title: "The First Bug", text: "I remember spending 4 hours debugging a semicolon that was actually a greek question mark. Lesson learned: always check your encoding!", image: "https://placecats.com/300/200" },
        { title: "Cloud Migration", text: "Successfully moved a legacy monolith to a microservices architecture. The performance gains were worth the sleepless nights." },
        { title: "Open Source Contribution", text: "My first PR to a major framework was finally merged today. It's just a small fix, but it feels like a giant leap." },
        { title: "AI Integration", text: "Integrated a generative AI model into our customer support tool, reducing response times by 40%." },
        { title: "The Midnight Deploy", text: "Nothing beats the adrenaline of a midnight deployment that actually goes smoothly on the first try." },
        { title: "Refactoring Nightmare", text: "Spent the weekend refactoring a 2000-line function. It's now 20 lines and 10x more readable." },
        { title: "Hackathon Victory", text: "Won the local hackathon with a real-time collaboration tool built entirely in 24 hours." },
        { title: "New Language Mastery", text: "Finally feeling confident in Rust. The borrow checker and I are finally starting to get along." },
        { title: "Optimizing SQL", text: "Turned a 30-second query into a 50ms one by adding a single missing index. Database tuning is magic." },
        { title: "API Security", text: "Implemented OAuth2 and rate limiting to secure our public APIs. Better safe than sorry!" }
      ]
    },
    {
      title: "Numismatics Stories",
      icon: "fa-coins",
      iconColor: "text-warning",
      stories: [
        { title: "The Rare Find", text: "Found a rare 1955 doubled die penny in a jar of spare change. My heart skipped a beat!", image: "https://placecats.com/301/200" },
        { title: "Ancient Roman Silver", text: "Acquired a Denarius of Julius Caesar. Holding 2,000 years of history in my hand is humbling." },
        { title: "Auction Win", text: "Won a bidding war for a Mint State Morgan Dollar. The luster on this coin is incredible." },
        { title: "Cleaning Mistake", text: "Early in my hobby, I cleaned a rare coin and destroyed its value. Never again. Patina is beautiful!" },
        { title: "International Exchange", text: "Traded some duplicates with a collector in Japan. It's amazing how this hobby connects the world." },
        { title: "The Golden Sovereign", text: "Finally saved up enough to buy my first British Gold Sovereign. The weight of gold is unmistakable." },
        { title: "Error Coin Hunt", text: "Spent the afternoon looking for \"W\" mint marks on 2019 quarters. Found three of them!" },
        { title: "Museum Donation", text: "Donated a set of local historical tokens to the city museum. It's important to share history." },
        { title: "Paper Money Discovery", text: "Started collecting \"fancy serial numbers\" on banknotes. Found a radar note (12344321) today!" },
        { title: "The Collection Catalog", text: "Finally finished digitizing my entire collection. 500 coins, all photographed and documented." }
      ]
    },
    {
      title: "Mass Transit Stories",
      icon: "fa-train",
      iconColor: "text-info",
      stories: [
        { title: "The Bullet Train Experience", text: "Riding the Shinkansen for the first time was life-changing. 300km/h and it felt like I was standing still.", image: "https://placecats.com/302/200" },
        { title: "London Underground Adventure", text: "Navigated the entire Tube network in one day. The history of the 'Mind the Gap' announcement is fascinating." },
        { title: "New Line Opening", text: "Attended the ribbon-cutting for the new Light Rail extension. Urban mobility is the future." },
        { title: "The Lost Umbrella", text: "The transit lost and found is a treasure trove. I actually got my favorite umbrella back after 3 days!" },
        { title: "Vintage Streetcars", text: "Rode the historic streetcars in San Francisco. They are like moving museums on tracks." },
        { title: "Station Architecture", text: "Grand Central Terminal is more than just a station; it's a cathedral of transit. The ceiling is breathtaking." },
        { title: "Transit Mapping", text: "Spent my weekend designing a fantasy transit map for my hometown. If only the budget was real!" },
        { title: "The Silent Commute", text: "There's something peaceful about a quiet train ride at 6 AM, watching the city wake up through the window." },
        { title: "Intermodal Efficiency", text: "Successfully timed my bike-to-train-to-bus commute perfectly. 15 miles in 30 minutes!" },
        { title: "Driverless Metro", text: "Rode the driverless metro in Copenhagen. Sitting in the very front window makes you feel like the conductor." }
      ]
    },
    {
      title: "Electronics Stories",
      icon: "fa-microchip",
      iconColor: "text-danger",
      stories: [
        { title: "First PCB Order", text: "That feeling when your first professionally manufactured PCBs arrive in the mail. No more breadboards!", image: "https://placecats.com/303/200" },
        { title: "The Magic Smoke", text: "Accidentally connected a 12V supply to a 3.3V microcontroller. The magic smoke escaped. RIP ESP32." },
        { title: "Soldering Master", text: "Finally nailed the technique for soldering surface-mount components. Tweezers are my best friend now." },
        { title: "Oscilloscope Victory", text: "Found a noise issue in my audio circuit using my new oscilloscope. Visualization is key to understanding." },
        { title: "Retro Game Console", text: "Built a handheld retro gaming console from scratch using a Raspberry Pi Zero and a custom case." },
        { title: "Home Automation Hub", text: "Designed a custom Zigbee hub to control all the lights in my house. Total control at my fingertips." },
        { title: "The Portable Charger", text: "Built a solar-powered portable charger for my camping trips. It actually charges my phone in 2 hours!" },
        { title: "Component Sorting", text: "Spent the whole day organizing my resistors and capacitors. Now I can actually find what I need." },
        { title: "Battery Management", text: "Designed a safe BMS for a custom Li-ion battery pack. Safety first when dealing with high energy!" },
        { title: "IoT Weather Station", text: "My backyard weather station now uploads data to the cloud every 5 minutes. Science at home!" }
      ]
    }
  ];

  return (
    <section id="interest-details" className="container pb-5">
      <h2 className="text-center mb-5 fw-bold">Interest Stories</h2>
      {data.map((section, index) => (
        <InterestSection 
          key={index}
          title={section.title}
          icon={section.icon}
          iconColor={section.iconColor}
          stories={section.stories}
        />
      ))}
    </section>
  );
};

export default InterestsGrid;
