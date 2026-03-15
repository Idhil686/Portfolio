import { Button } from "@/components/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const navlinks = [
    {href: "#about",label: "About"},
    {href: "#projects",label: "Projects"},
    {href: "#experience",label: "Experience "},

];

export const Navbar = () => {
    const[isMobileMenuOpen, setIsMobileMenuOpen]= useState(false);
    return(
    
    <header className="fixed top-0 left-0 right-0 py-5 z-50 glass-strong">
        <nav className="container mx-auto px-6 flex items-center justify-between">

            <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary">

                IH<span className="text-primary">.</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navlinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-sm
                        text-muted-foreground hover:text-foreground rounded-full
                        hover:bg-surface">
                            {link.label}
                            </a>
                    ))}

                </div>
            </div>
            {/* CTA button */}
            <div className="hidden md:block">
                <a href="#contact">
                    <Button size="sm">contact me</Button>
                    </a>
            </div>
    

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-foreground cursor-pointer"
             onClick={() =>setIsMobileMenuOpen((prev)=> !prev)}>
             {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/> }

            </button>
        </nav>
        {/* Mobile menu */} 
    
        {isMobileMenuOpen &&(
        <div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
           {navlinks.map((link, index) => (
                        <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2">
                            {link.label}
                            </a>
                    ))}

                    <a href="#contact">
                           <Button>Contact me</Button>
                         </a>             
                

        </div>
        </div>
        )}
    </header>
    );

};