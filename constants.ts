import ReimagineIcon from '/public/assets/svgs/clean.svg';
import ReimagineIcon2 from '/public/assets/svgs/24.svg';
import ReimagineIcon3 from '/public/assets/svgs/customer.svg';
import { StaticImageData } from 'next/image'; 
interface ValueItem {
  icon: StaticImageData;
  title: string;
  description: string;
}

export const valuesData: ValueItem[] = [
  {
    icon: ReimagineIcon,
    title: "1. Hygiene & Cleanliness",
    description: "We ensure all tools and products meet the highest hygiene standards.",
  },
  {
    icon: ReimagineIcon2,
    title: "2. 24/7 Support",
    description: "We're here for you anytime with seamless customer support.",
  },
  {
    icon: ReimagineIcon3,
    title: "3. Customer Satisfaction",
    description: "We guarantee a smooth, satisfying experience from booking to final touch.",
  }
  
];

export const productsData = [
  {
    imageSrc: "/assets/images/1.jpg",
    altText: "Product 1",
    buttonText: "Book Now",
  },
  {
    imageSrc: "/assets/images/2.jpg",
    altText: "Product 2",
    buttonText: "Book Now",
  },
  {
    imageSrc: "/assets/images/3.jpg",
    altText: "Product 3",
    buttonText: "Book Now",
  },
  
];

export type Testimonial = {
  name: string;
  username: string;
  testimonial: string;
  imageUrl: string; 
}

export const testimonials: Testimonial[] = [
  {
    name: 'Tom Hardy',
    username: '@thom.hardy',
    testimonial: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    imageUrl: '/images/person/1.jpg',
  },
  {
    name: 'Jane Doe',
    username: '@jane.doe',
    testimonial: 'Great service! Will definitely recommend to others.',
    imageUrl: '/images/person/2.jpg',
  },
  {
    name: 'John Smith',
    username: '@john.smith',
    testimonial: 'A fantastic experience from start to finish!',
    imageUrl: '/images/person/3.jpg',
  },
];

















export const FormSectionData = [
  { bedroom: "Phone:", bua: "91 8056204630" },
  { bedroom: "Email", bua: "prasweets24@gmail.com" },
  { bedroom: "Location", bua: "street 15, chennai India" },
];

export const FooterData = [
  {
    heading: "About Company",
    line1: "we are the one of the renoweed and weell know name in the industry over the past years",
    
  },
  {
    heading: "Contact",
    line1: "prasweets24@gmail.com",
    line2: "91 8056204630",
  },
  // {
  //   heading: "Navigation",
  //   line1: "Home",
  //   line2: "About",
  // },
  {
    heading: "Location",
    line1: "District 11, Chennai, India",
    line2: "kldkljkdkjkd, India",
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

export const testimonialsData = [
  {
    name: 'Mr Krishna',
    image: '/assets/images/ai32.jpg', 
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel!',
  },
  {
    name: 'Mr Krishna',
    image: '/assets/images/ai32.jpg',
    text: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error.',
  },
  {
    name: 'Mr Krishna',
    image: '/assets/images/ai32.jpg', 
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti.',
  },
  {
    name: 'Mr Krishna',
    image: '/assets/images/ai32.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti.',
  },
  {
    name: 'Mr Krishna',
    image: '/assets/images/ai32.jpg', 
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta quibusdam sunt.',
  },
  {
    name: 'Mr Krishna',
    image: '/assets/images/ai32.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!',
  },
];



export type Product = {
  id: number;
  title: string;
  image: string;
}

export const productData: Product[] = [
  {
    id: 1,
    title: "Sweets",
    image: "/assets/images/ai32.jpg",
  },
  {
    id: 2,
    title: "Cupcakes",
    image: "/assets/images/ai32.jpg",
  },
  {
    id: 3,
    title: "Cookies",
    image: "/assets/images/ai32.jpg",
  },
  {
    id: 4,
    title: "Donuts",
    image: "/assets/images/ai32.jpg",
  },
  {
    id: 4,
    title: "Donuts",
    image: "/assets/images/ai32.jpg",
  },
  {
    id: 4,
    title: "Donuts",
    image: "/assets/images/ai32.jpg",
  },
];




