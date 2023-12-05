
import gpt from "../assets/gpt3.png";
import dashboard from "../assets/adminDashboard.png";
import Ace from "../assets/ace project.png";
import hoobank from "../assets/hoobank project.png";
import youtube from "../assets/youtube clone.png";
import ctMaid from "../assets/ctmaid project.png";


export const NavLinks = [
    {destination: '/', text: "Home"},
    {destination: 'about', text: "About Me"},
    {destination: 'services', text: "My services"},
    {destination: 'projects', text: "My projects"},
    {destination: 'testimonial', text: "what our client says"},
    {destination: 'contact', text:"Contact Me"}
];

export const projectDetails =[
    {image: gpt, text: "ChatGPT-3 Project",
     link:"https://gpt-3-pied.vercel.app/", linkText:"CLICK HERE"},
    {image: dashboard, text: "Dashboard Project",
     link:"https://admin-dashboard-yrub.vercel.app/", linkText:"CLICK HERE"},
    {image: youtube, text: "Youtube Clone",
     link:"https://you-tube-clone-beta-nine.vercel.app/", linkText:"CLICK HERE"},
    {image: Ace, text: "Ace Project",
     link:"https://practice-project-chi.vercel.app/", linkText:"CLICK HERE"},
    {image: hoobank, text: "Hoobank Project",
     link:"https://bank-app-ten-mu.vercel.app/", linkText:"CLICK HERE"},
    {image: ctMaid, text: "CTMaid website",
     link:"https://ct-maid-synergy.vercel.app/", linkText:"CLICK HERE"},
]