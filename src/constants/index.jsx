import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import Densel from "../assets/profile-pictures/Densel.jpeg";
import Ashley from "../assets/profile-pictures/Ashley.jpg";
import Martin from "../assets/profile-pictures/Martin.png";
import Kevin from "../assets/profile-pictures/Kevin.jpeg";
import Kevin1 from "../assets/profile-pictures/Kevin1.jpeg";
import Densel1 from "../assets/profile-pictures/Densel1.jpeg";

export const navItems = [
  { label: "Home", href: "/" }, // Update href to "/"
  { label: "Place Order", href: "/order" },
  { label: "Features", href: "/features" }, // Update href to "/features"
  { label: "Pricing", href: "/pricing" }, // Update href to "/pricing"
  { label: "Testimonials", href: "/testimonials" }, // Update href to "/testimonials"
  { label: "About Us", href: "/AboutUs" }// Update href to "/AboutUs"
];


export const testimonials = [
  {
    user: "Densel Esekon",
    company: "Moringa School",
    image: Densel,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Ashley Precious",
    company: "Googl Inc.",
    image: Ashley,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "Martin Maina",
    company: "IBM Corp.",
    image: Martin,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone.",
  },
  {
    user: "Kevin Kiseli",
    company: "Swedish Embassy",
    image: Kevin,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
  },
  {
    user: "Densel Esekon",
    company: "Safaricom PLC",
    image: Densel1,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations by delivering outstanding results.",
  },
  {
    user: "Kevin Kiseli",
    company: "Microsoft Corporation",
    image: Kevin1,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Flexible Scheduling",
    description:
      "Users enjoy personalized delivery scheduling, overcoming rigid time constraints prevalent in traditional services, ensuring deliveries align seamlessly with their busy lifestyles, enhancing convenience.",
  },
  {
    icon: <Fingerprint />,
    text: "Customized Options",
    description:
      "Tailored delivery choices empower users to select specific preferences, such as delivery locations, timings, and special instructions, facilitating a personalized and hassle-free delivery experience tailored to individual needs.",
  },
  {
    icon: <ShieldHalf />,
    text: "Transparent Communication",
    description:
      "Open and clear communication channels between users and couriers eliminate ambiguity, fostering trust and reliability in the delivery process, ensuring users are informed and updated throughout the delivery journey for peace of mind.",
  },
  {
    icon: <BatteryCharging />,
    text: "Advanced Technological Integration",
    description:
      "Leveraging cutting-edge technology, Gig Ahooy!!! enhances user experience with innovative features like real-time tracking, AI-driven route optimization, and smart notifications, maximizing efficiency and satisfaction.",
  },
  {
    icon: <PlugZap />,
    text: "Revolutionary Platform Design",
    description:
      "Gig Ahooy!!!'s intuitive platform revolutionizes the delivery experience with a user-centric interface, simplifying the ordering process, streamlining navigation, and ensuring a seamless, enjoyable experience from start to finish.",
  },
  {
    icon: <GlobeLock />,
    text: "Dynamic Adaptability",
    description:
      "By embracing innovative technologies and user-centric design principles, Gig Ahooy!!! continually evolves to meet the evolving needs of modern consumers and businesses, ensuring the platform remains adaptable and responsive to changing market dynamics and user expectations.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "2 Delivery Routes",
      "Less Than 1kg in Weight",
      "Fast Delivery",
      "Free CBD Delivery",
    ],
  },
  {
    title: "Pro",
    price: "$60",
    features: [
      "All NRB Delivery Routes",
      "Less Than 1700kg in Weight",
      "Fast Delivery",
      "Free CBD Delivery",
    ],
  },
  {
    title: "Enterprise",
    price: "$2000",
    features: [
      "All NRB Delivery Routes",
      "More Than 1700kg in Weight",
      "Fast Delivery",
      "Free CBD Delivery",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Became a Partner" },
  { href: "#", text: "Join our Team" },
  { href: "#", text: "Downloads" },
];

export const platformLinks = [
  { href: "#", text: "Book a Demo" },
  { href: "#", text: "Delivery Routes" },
  { href: "#", text: "Support by Donation" },
  { href: "#", text: "Our Partners" },
  
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Report an Issue" },
  { href: "#", text: "Newsletter" },
  { href: "#", text: "Suggestion" },
];
