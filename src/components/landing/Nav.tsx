import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Free-Tools", href: "#how" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="relative w-full">
      <div className="mx-auto w-full h-32">
        {/* ADDED: pl-10 for left padding, pr-8 for right padding. You can increase these numbers (e.g., pl-16) for more padding */}
        <nav className="flex items-center justify-between bg-[#061534] mt-[-30px] pl-35 pr-42 py-3 shadow-2xl shadow-blue-950/20">
                   <Image
                     src={logo.src}
                     alt="360Airo"
                     width={230}
                     height={84}
                     className="w-[230px] object-contain"
                     style={{ height: "auto" }}
                   />

          {/* ADDED: A wrapper div for the right side elements with 'gap-8' (or 'gap-12') to create space between the links and buttons */}
          <div className="flex items-center gap-8">
  <ul className="hidden items-center gap-2 text-base font-bold text-white md:flex">
    {links.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          /* CHANGED: Added 'w-32' (wider), 'inline-block text-center' (centers text), and 'border border-white/30' (adds a subtle border) */
          className="inline-block w-30 rounded-full px-4 py-2 text-center transition hover:bg-white/10 hover:text-white/90"
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>

  <div className="flex items-center gap-4">
    {/* CHANGED: Added 'w-36 justify-center' to make the button explicitly wider and center the text. The border was already here! */}
    <a 
      href="#cta" 
      className="hidden sm:inline-flex w-36 justify-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
    >
      Sign in
    </a>
    
    {/* CHANGED: Added 'w-36 justify-center' for width, and 'border border-white' to give it a matching border */}
    <a 
      href="#cta" 
      className="inline-flex w-36 justify-center rounded-full border border-white bg-white px-5 py-2.5 text-sm font-semibold text-[#061534] transition hover:bg-white/90"
    >
      Start free
    </a>
  </div>
</div>
          
        </nav>
      </div>
    </header>
  );
}