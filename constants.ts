import { FaShippingFast, FaShieldAlt, FaThumbsUp, FaBroom } from 'react-icons/fa';
import { IconType } from 'react-icons';

export type CardData = {
  icon: IconType;
  title: string;
};

export const cardData: CardData[] = [
  
  {
    icon: FaShieldAlt,
    title: 'Quality Products',
  
  },
  {
    icon: FaThumbsUp,
    title: 'Qualified',
    
  },
  {
    icon: FaShippingFast,
    title: 'High Standars',
    
  },
  {
    icon: FaBroom,
    title: 'Clean & Hygienic',
    
  },
];


// constants.ts

export interface Testimonial {
  name: string;
  username: string;
  testimonial: string;
  imageUrl: string; // Added to manage different profile images
}

export const testimonials: Testimonial[] = [
  {
    name: 'Tom Hardy',
    username: '@thom.hardy',
    testimonial: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    imageUrl: '/images/person/1.jpg', // Add image URL
  },
  {
    name: 'Jane Doe',
    username: '@jane.doe',
    testimonial: 'Great service! Will definitely recommend to others.',
    imageUrl: '/images/person/2.jpg', // Add image URL
  },
  {
    name: 'John Smith',
    username: '@john.smith',
    testimonial: 'A fantastic experience from start to finish!',
    imageUrl: '/images/person/3.jpg', // Add image URL
  },
];

export const servicesData = [
  {
    id: 1,
    name: 'Nails',
    imageUrl:
      '/assets/images/ai32.jpg',
  },
  {
    id: 2,
    name: 'Bleach',
    imageUrl:
      '/assets/images/ai32.jpg',
  },
  {
    id: 2,
    name: 'Nails Art',
    imageUrl:
      '/assets/images/ai32.jpg',
  },
  {
    id: 2,
    name: 'Nails',
    imageUrl:
      '/assets/images/ai32.jpg',
  },
  {
    id: 2,
    name: 'Nails',
    imageUrl:
      '/assets/images/ai32.jpg',
  },
  {
    id: 2,
    name: 'Nails',
    imageUrl:
      '/assets/images/ai32.jpg',
  },
  {
    id: 2,
    name: 'Nails',
    imageUrl:
      '/assets/images/ai32.jpg',
  },
];




export const VillaFeaturesData = [
  {
    heading: "Unparalleled Design",
    para: "Immerse yourself in ultra-luxury with our meticulously designed villas, featuring exquisite architecture author HBA Architects.",
  },
  {
    heading: "Spacious Layouts",
    para: "Choose from spacious 4, 5 and 6 bedroom layouts, designed to accommodate your lifestyle and preferences.",
  },
  {
    heading: "Premium Amenities",
    para: "Indulge in the finest amenities and finishes, curated to elevate your living experience to new heights.",
  },
  {
    heading: "Prime Location",
    para: "Enjoy the convenience of living just a 15-minute drive away from Downtown Dubai, surrounded author the vibrant energy of the city.",
  },
];

export const FeaturedVillaData = [
  {
    image: "/assets/images/HiltonHuzhouNanxun.jpg",
    hotelName: "Hilton Huzhou Nanxun, Huzhou",
    hotelPlace: "Hotel / China / 2023",
  },
  {
    image: "/assets/images/IndigoHangzhou.jpg",
    hotelName: "Indigo Tianmushan, Hangzhou",
    hotelPlace: "Hotel / China / 2023",
  },
  {
    image: "/assets/images/HyattRegencyHIA.jpg",
    hotelName: "Hyatt Regency HIA, Hangzhou",
    hotelPlace: "Hotel / China / 2023",
  },
  {
    image: "/assets/images/FourSeasonsGym.jpg",
    hotelName: "Four Seasons Gym, Singapore",
    hotelPlace: "Health & Wellness / Singapore / 2022",
  },
  {
    image: "/assets/images/JwMarriotXian.jpg",
    hotelName: "JW Marriott Hotel, Xi’an",
    hotelPlace: "Hotel / China / 2023",
  },
  {
    image: "/assets/images/vVillasThailand.jpg",
    hotelName: "V Villas Hua Hin, Thailand",
    hotelPlace: "Resort / Beach / Waterside",
  },
  {
    image: "/assets/images/ConradBaliIndonesia.jpg",
    hotelName: "Conrad Bali, Indonesia",
    hotelPlace: "Resort / Beach/ Waterside / Cultural",
  },
];

export const MultiBoxData = [
  {
    heading: "Limited Availability",
    para: "Seize this exclusive opportunity to own a prestigious villa in Meydan. Express your interest now tosecure your place before the official launch, as availability is extremely limited.",
  },
  {
    heading: "Launch Date",
    para: "Be part of this extraordinary journey as we unveil our luxury villa development in mid of February 2024.",
  },
  {
    heading: "Initial Launch Prices",
    para: "Starting from AED 13.5 million onwards, our villas offer unparalleled value for the discerning few who seek only the best.",
  },
];

export const PointSectionData = [
  {
    heading: "Schedule Your Private Walkthrough",
    para: " Dive into the world of luxury living with aprivate walkthrough of our premium villas. Contact us today to schedule your exclusive tour and experience the epitome of elegance and refinement.",
  },
  {
    heading: "Discover Luxury Redefined",
    para: "Elevate your lifestyle with our unparalleled villa development, where every aspect is designed to surpass your expectations. From exquisite architecture to unmatched amenities, indulge in a life of luxury like never before.",
  },
  {
    heading: "Invest in Distinction",
    para: "Owning a villa in ourprestigious development isn't just about acquiring property; it's about investing in a lifestyle of distinction and refinement. Join an elite community of individuals who appreciate the finer things in life and make Meydan their home.",
  },
  {
    heading: "Secure Your Future",
    para: "With limited availability and high demand, now is the time to secure your future in Meydan's most sought-after address. Don't miss out on this once-in-a-lifetime opportunity to own a piece of luxury real estate in one of Dubai's most prestigious locations.",
  },
];

export const FormSectionData = [
  { bedroom: "4 Bedroom", bua: "6,572 BUA" },
  { bedroom: "5 Bedroom", bua: "8,036 BUA" },
  { bedroom: "6 Bedroom", bua: "15,392 BUA" },
];

export const FooterData = [
  {
    heading: "About Company",
    line1: "we are the one of the renoweed and weell know name in the industry over the past years",
    // line2: " know name in the industry over the past years",
  },
  {
    heading: "Contact",
    line1: "adore123@gmail.com",
    line2: "+91 7006123456",
  },
  {
    heading: "Navigation",
    line1: "Home",
    line2: "About",
  },
  {
    heading: "Location",
    line1: "District 11, jawahar Nagar, Srinagar",
    line2: "jammmu And Kashmir, India",
  },
];

export const ArticleTestData = [
  {
    image: "/assets/images/ConradBaliIndonesia.jpg",
    heading: "Hello, this is the article card heading of minimum 10 words.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo eu urna bibendum ornare. Duis eu arcu id ligula ultrices commodo. Sed vel justo ac purus accumsan commodo. Nunc aliquam arcu non risus consequat, sit amet fringilla velit fermentum. In hac habitasse platea dictumst.",
    href: "/",
    author: "suhaib",
  },
  {
    image: "/assets/images/HiltonHuzhouNanxun.jpg",
    heading: "Hello, this is the article card heading of minimum 10 words.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo eu urna bibendum ornare. Duis eu arcu id ligula ultrices commodo. Sed vel justo ac purus accumsan commodo. Nunc aliquam arcu non risus consequat, sit amet fringilla velit fermentum. In hac habitasse platea dictumst.",
    href: "/",
    author: "wajahat",
  },
  {
    image: "/assets/images/HyattRegencyHIA.jpg",
    heading: "Hello, this is the article card heading of minimum 10 words.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo eu urna bibendum ornare. Duis eu arcu id ligula ultrices commodo. Sed vel justo ac purus accumsan commodo. Nunc aliquam arcu non risus consequat, sit amet fringilla velit fermentum. In hac habitasse platea dictumst.",
    href: "/",
    author: "iqram",
  },
  {
    image: "/assets/images/FourSeasonsGym.jpg",
    heading: "Hello, this is the article card heading of minimum 10 words.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo eu urna bibendum ornare. Duis eu arcu id ligula ultrices commodo. Sed vel justo ac purus accumsan commodo. Nunc aliquam arcu non risus consequat, sit amet fringilla velit fermentum. In hac habitasse platea dictumst.",
    href: "/",
    author: "shahbaz",
  },
  {
    image: "/assets/images/JwMarriotXian.jpg",
    heading: "Hello, this is the article card heading of minimum 10 words.",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo eu urna bibendum ornare. Duis eu arcu id ligula ultrices commodo. Sed vel justo ac purus accumsan commodo. Nunc aliquam arcu non risus consequat, sit amet fringilla velit fermentum. In hac habitasse platea dictumst.",
    href: "/",
    author: "imran",
  },
];
