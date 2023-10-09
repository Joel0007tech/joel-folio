
import gpt from "../assets/gpt3.png";
import dashboard from "../assets/adminDashboard.png";
import Ace from "../assets/ace project.png";
import movie from "../assets/hoobank project.png";
import youtube from "../assets/youtube clone.png";
import ctMaid from "../assets/ctmaid project.png";
import gptLink from "https://gpt-3-pied.vercel.app/"



export const NavLinks = [
    {destination: '/', text: "Home"},
    {destination: 'about', text: "About Me"},
    {destination: 'services', text: "My services"},
    {destination: 'projects', text: "My projects"},
    {destination: 'testimonial', text: "what our client says"},
    {destination: 'contact', text:"Contact Me"}
];

export const projectDetails =[
    {image: gpt, text: "chatGPT-3 Project", link:gptLink},
    {image: dashboard, text: "Dashboard Project", link:"https://admin-dashboard-yrub.vercel.app/"},
    {image: youtube, text: "Youtube Clone", link:"https://you-tube-clone-beta-nine.vercel.app/"},
    {image: Ace, text: "Ace Project", link:"https://practice-project-chi.vercel.app/"},
    {image: movie, text: "Hoobank Project", link:"https://bank-app-ten-mu.vercel.app/"},
    {image: ctMaid, text: "CTMaid website", link:"https://ct-maid-synergy.vercel.app/"},
]