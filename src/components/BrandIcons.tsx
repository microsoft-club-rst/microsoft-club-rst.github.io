import React from "react";

// Official WhatsApp (Verified Solid Green Circle)
export const WhatsAppIcon: React.FC<{ className?: string; fill?: string }> = ({ className = "w-6 h-6", fill = "#25D366" }) => (
  <svg className={className} viewBox="0 0 448 512" fill={fill}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

// Official Instagram (Solid Official Multi-stop Gradient Squircle + White Camera)
export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="ig-official-gradient" cx="30%" cy="105%" r="140%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="10%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="65%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6.5" fill="url(#ig-official-gradient)" />
    <rect x="5" y="5" width="14" height="14" rx="3.8" stroke="white" strokeWidth="1.8" fill="none" />
    <circle cx="12" cy="12" r="3.3" stroke="white" strokeWidth="1.8" fill="none" />
    <circle cx="15.8" cy="8.2" r="0.9" fill="white" />
  </svg>
);

// Official LinkedIn (Solid #0A66C2 Rounded Squircle + Bold White 'in')
export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5.5" fill="#0A66C2" />
    <path
      fill="white"
      d="M19 19h-3.13v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V19H9.23V8.91h3V10.3h.04c.42-.8 1.45-1.64 2.98-1.64 3.19 0 3.78 2.1 3.78 4.83V19zM5.34 7.53a1.82 1.82 0 1 1 0-3.64 1.82 1.82 0 0 1 0 3.64zM6.9 19H3.77V8.91H6.9V19z"
    />
  </svg>
);

// Official Facebook (Official Meta Brand Path)
export const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11.5" fill="#FFFFFF" />
    <path
      fill="#1877F2"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.704 0-1.024.062-1.22.158-.291.14-.403.426-.403 1.02v2.806h4.153l-.582 3.667h-3.571v7.98A12.004 12.004 0 0 0 24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.759 4.027 10.575 9.101 11.618Z"
    />
  </svg>
);

// Interoperability exports
export const LinkedInIcon = LinkedinIcon;
export { FacebookIcon as Facebook, WhatsAppIcon as WhatsApp, LinkedinIcon as Linkedin, InstagramIcon as Instagram };
