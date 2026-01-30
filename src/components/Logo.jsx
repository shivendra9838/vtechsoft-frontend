import logoImage from "../assets/logo.png";

export default function Logo({ className = "h-12", compact = false }) {
  return (
    <img
      src={logoImage}
      alt="VTECHSOFT Technology"
      className={`${className} ${compact ? "h-10" : ""} w-auto object-contain`}
    />
  );
}
