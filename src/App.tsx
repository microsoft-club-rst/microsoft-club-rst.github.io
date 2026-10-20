import { useState, useEffect } from "react";
import { 
  ExternalLink, 
  GraduationCap, 
  Terminal, 
  Layers, 
  Award, 
  CalendarDays
} from "lucide-react";
import { 
  FacebookIcon as Facebook, 
  WhatsAppIcon as WhatsApp,
  LinkedInIcon as Linkedin, 
  InstagramIcon as Instagram 
} from "./components/BrandIcons";

interface OpportunityItem {
  id: string;
  icon: string;
  gradient?: string;
  shadowColor?: string;
  url: string;
  ar: { title: string; description: string };
  en: { title: string; description: string };
}

interface ClubData {
  featuredCommunity: {
    url: string;
    ar: { badge: string; title: string; description: string };
    en: { badge: string; title: string; description: string };
  };
  registrationTitle: {
    ar: string;
    en: string;
  };
  opportunities: OpportunityItem[];
  stayUpdated: {
    url: string;
    ar: { title: string; description: string; button: string };
    en: { title: string; description: string; button: string };
  };
  followJourney: {
    ar: { title: string; subtitle: string };
    en: { title: string; subtitle: string };
  };
  socialLinks: {
    facebook: string;
    whatsapp: string;
    linkedin: string;
    instagram: string;
    tiktok?: string;
  };
}

export default function App() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [data, setData] = useState<ClubData | null>(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "links.json?v=" + Date.now())
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json: ClubData) => {
        if (json && json.featuredCommunity) {
          setData(json);
        }
      })
      .catch((err) => console.error("Error loading links:", err));
  }, []);

  const isAr = lang === "ar";

  const renderBadgeIcon = (iconName: string) => {
    const iconClass = "w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]";
    switch (iconName?.toLowerCase()) {
      case "student":
      case "student-apply":
      case "user":
        return <GraduationCap className={iconClass} />;
      case "technical":
      case "core-team-tech":
      case "code2":
      case "terminal":
        return <Terminal className={iconClass} />;
      case "managerial":
      case "core-team-mgmt":
      case "briefcase":
      case "layers":
        return <Layers className={iconClass} />;
      case "leads":
      case "track-leads":
      case "star":
      case "award":
        return <Award className={iconClass} />;
      case "info-session":
      case "calendar":
      case "calendardays":
        return <CalendarDays className={iconClass} />;
      default:
        return <GraduationCap className={iconClass} />;
    }
  };

  const getBadgeStyle = (item: OpportunityItem) => {
    if (item.gradient && item.shadowColor) {
      return { gradient: item.gradient, shadowColor: item.shadowColor };
    }
    const key = `${item.icon} ${item.id}`.toLowerCase();
    if (key.includes("student") || key.includes("user")) {
      return { gradient: "from-[#0078D4] to-[#00A4EF]", shadowColor: "shadow-[#0078D4]/25" };
    }
    if (key.includes("tech") || key.includes("code") || key.includes("terminal")) {
      return { gradient: "from-[#0F6CBD] to-[#115EA3]", shadowColor: "shadow-[#0F6CBD]/25" };
    }
    if (key.includes("mgmt") || key.includes("managerial") || key.includes("briefcase") || key.includes("layers")) {
      return { gradient: "from-[#FF8C00] to-[#E83B00]", shadowColor: "shadow-[#FF8C00]/25" };
    }
    if (key.includes("lead") || key.includes("star") || key.includes("award")) {
      return { gradient: "from-[#FFB900] to-[#D83B01]", shadowColor: "shadow-[#FFB900]/25" };
    }
    if (key.includes("info") || key.includes("calendar")) {
      return { gradient: "from-[#6264A7] to-[#464775]", shadowColor: "shadow-[#6264A7]/25" };
    }
    return { gradient: "from-[#0078D4] to-[#00A4EF]", shadowColor: "shadow-[#0078D4]/25" };
  };

  const defaultOpportunities: OpportunityItem[] = [
    {
      id: "student",
      icon: "student",
      gradient: "from-[#0078D4] to-[#00A4EF]",
      shadowColor: "shadow-[#0078D4]/25",
      url: "https://forms.office.com/r/default-join",
      ar: {
        title: "الانضمام كطالب / عضو",
        description: "سجل عضويتك لحضور الورش التقنية، معسكرات البرمجة، والأنشطة المعتمدة مجاناً."
      },
      en: {
        title: "Apply as a Student Member",
        description: "Register your membership to attend free technical workshops, bootcamps, and certified programs."
      }
    },
    {
      id: "technical",
      icon: "technical",
      gradient: "from-[#0F6CBD] to-[#115EA3]",
      shadowColor: "shadow-[#0F6CBD]/25",
      url: "https://forms.office.com/r/default-workshop",
      ar: {
        title: "فريق العمل الفني (Core Team Technical)",
        description: "شارك في قيادة الورش التقنية ومساعدة زملائك في مجالات AI و Cloud و .NET و Cybersecurity."
      },
      en: {
        title: "Core Team Technical",
        description: "Help lead hands-on workshops and mentor peers in AI, Cloud, .NET, and Cybersecurity."
      }
    },
    {
      id: "managerial",
      icon: "managerial",
      gradient: "from-[#FF8C00] to-[#E83B00]",
      shadowColor: "shadow-[#FF8C00]/25",
      url: "https://forms.office.com/r/default-join",
      ar: {
        title: "فريق العمل الإداري والتنظيمي (Management & PR)",
        description: "انضم لإدارة وتنظيم المؤتمرات والفعاليات، العلاقات العامة، وتغطية الوسائط والتصميم."
      },
      en: {
        title: "Core Team Managerial & PR",
        description: "Join event production, on-campus summit logistics, public relations, and media management."
      }
    },
    {
      id: "leads",
      icon: "leads",
      gradient: "from-[#FFB900] to-[#D83B01]",
      shadowColor: "shadow-[#FFB900]/25",
      url: "https://forms.office.com/r/default-workshop",
      ar: {
        title: "التسجيل لقيادة التراكات (Track Leads)",
        description: "قد أحد المسارات التعليمية كـ Track Lead بالتعاون المباشر مع سفراء مايكروسوفت (MLSA)."
      },
      en: {
        title: "Track Leads Registration",
        description: "Direct student learning paths as a Track Lead in partnership with Microsoft Learn Student Ambassadors."
      }
    },
    {
      id: "info-session",
      icon: "info-session",
      gradient: "from-[#6264A7] to-[#464775]",
      shadowColor: "shadow-[#6264A7]/25",
      url: "https://forms.office.com/r/default-join",
      ar: {
        title: "التسجيل في السيشن التعريفي (Info Session)",
        description: "احجز مقعدك في الجلسة الافتتاحية الكبرى بحضور سفراء مايكروسوفت وخبراء الصناعة بالجامعة."
      },
      en: {
        title: "Info Session Registration",
        description: "Reserve your seat for the grand season opening featuring MLSA mentors and university leadership."
      }
    }
  ];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#0078D4] border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-sm font-bold text-slate-600">Loading / جاري التحميل...</p>
      </div>
    );
  }

  const opportunitiesList = data?.opportunities?.length ? data.opportunities : defaultOpportunities;

  return (
    <div 
      dir={isAr ? "rtl" : "ltr"} 
      className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans antialiased py-6 sm:py-10 px-3.5 sm:px-6 selection:bg-[#0078D4] selection:text-white"
    >
      <main className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto space-y-4 sm:space-y-5">
        
        {/* Language Switcher */}
        <header className="flex justify-between items-center px-1">
          <div className="inline-flex rounded-full bg-slate-200/80 p-1 border border-slate-300/60 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-3.5 py-1 rounded-full transition-all ${
                !isAr ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ar")}
              className={`px-3.5 py-1 rounded-full transition-all ${
                isAr ? "bg-[#0078D4] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              عربي
            </button>
          </div>
        </header>

        {/* Brand Header with Crisp High-Res Logo */}
        <section className="text-center pt-1 pb-3">
          <img 
            src="./logo.svg" 
            alt="Microsoft Club - RST University" 
            className="h-24 sm:h-28 w-auto max-w-[240px] mx-auto mb-2 object-contain select-none drop-shadow-sm"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-1">
            Microsoft Club
          </h1>
          <p className="text-xs sm:text-sm font-bold text-[#0078D4] mb-1.5">
            {isAr ? "جامعة الريادة للعلوم والتكنولوجيا (RST)" : "Al Ryada University for Science and Technology (RST)"}
          </p>
          <p className="text-xs sm:text-sm text-slate-500">
            {isAr ? "اتعلم، تواصل، وابني مع مجتمعنا." : "Learn, connect, and build with our community."}
          </p>
        </section>

        {/* Featured WhatsApp Community Card */}
        <a
          href={data?.featuredCommunity?.url || "https://chat.whatsapp.com/default-invite"}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-4 sm:p-5 transition-all hover:border-[#86EFAC] hover:shadow-md"
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] text-[11px] sm:text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse"></span>
              {data?.featuredCommunity?.[lang]?.badge || (isAr ? "المجتمع الرئيسي" : "MAIN COMMUNITY")}
            </span>
            <ExternalLink className="w-4 h-4 text-[#16A34A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-md shadow-[#25D366]/20 flex items-center justify-center shrink-0">
              <WhatsApp className="w-7 h-7" fill="white" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#128C7E] transition-colors">
                {data?.featuredCommunity?.[lang]?.title || (isAr ? "مجتمع WhatsApp" : "WhatsApp Community")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-snug">
                {data?.featuredCommunity?.[lang]?.description || (isAr ? "المعسكرات، الفعاليات، ورش العمل، الفرص وأحدث التحديثات." : "Camps, events, workshops, opportunities & updates.")}
              </p>
            </div>
          </div>
        </a>

        {/* Section Heading */}
        <div className="pt-2 pb-0.5">
          <h2 className="text-base sm:text-lg font-bold text-slate-900">
            {data ? data.registrationTitle[lang] : (isAr ? "التسجيل والفرص" : "Registration & Opportunities")}
          </h2>
        </div>

        {/* Upgraded Opportunities List */}
        <section className="space-y-3">
          {opportunitiesList.map((item) => {
            const badgeStyle = getBadgeStyle(item);
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-sm hover:border-[#0078D4]/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-1">
                  {/* Modern Fluent Gradient Badge */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${badgeStyle.gradient} shadow-md ${badgeStyle.shadowColor} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}>
                    {renderBadgeIcon(item.icon)}
                  </div>
                  
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0078D4] transition-colors truncate">
                      {item[lang].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-snug line-clamp-2">
                      {item[lang].description}
                    </p>
                  </div>
                </div>
                
                {/* Animated External Link Indicator */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-400 group-hover:text-[#0078D4] group-hover:border-[#0078D4]/30 group-hover:bg-[#0078D4]/5 flex items-center justify-center shrink-0 ms-2 transition-all">
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </section>

        {/* Facebook Stay Updated Card */}
        <section className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 pt-4">
          <div className="flex items-center gap-2.5">
            <Facebook className="w-6 h-6 shrink-0" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              {data?.stayUpdated?.[lang]?.title || (isAr ? "خليك على اطلاع دائم" : "Stay Updated")}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {data?.stayUpdated?.[lang]?.description || (isAr ? "تابع صفحتنا الرسمية على Facebook لمعرفة مواعيد الفعاليات القادمة، التغطيات المصورة، والإعلانات الهامة أولاً بأول." : "Follow our official Facebook page for the latest announcements, workshop recordings, and event photo galleries.")}
          </p>
          <a
            href={data?.stayUpdated?.url || "https://www.facebook.com/ms.club.rst"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span>{data?.stayUpdated?.[lang]?.button || (isAr ? "تابعنا على Facebook ←" : "Follow us on Facebook →")}</span>
          </a>
        </section>

        {/* Social Footer */}
        <footer className="text-center pt-6 pb-10 space-y-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              {data?.followJourney?.[lang]?.title || (isAr ? "تابع رحلتنا" : "Follow Our Journey")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {data?.followJourney?.[lang]?.subtitle || (isAr ? "خليك قريب من أنشطتنا ومحتوانا وتواصل مع مجتمعنا." : "Stay connected with our activities, content, and community.")}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            <a href={data?.socialLinks?.facebook || "https://www.facebook.com/ms.club.rst"} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#1877F2] hover:border-slate-300 transition-all shadow-sm hover:scale-105">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href={data?.socialLinks?.whatsapp || "https://chat.whatsapp.com/default-invite"} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#16A34A] hover:border-slate-300 transition-all shadow-sm hover:scale-105">
              <WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href={data?.socialLinks?.linkedin || "https://www.linkedin.com/company/microsoft-club-rst"} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0078D4] hover:border-slate-300 transition-all shadow-sm hover:scale-105">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href={data?.socialLinks?.instagram || "https://www.instagram.com/microsoft.club.rst"} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#E4405F] hover:border-slate-300 transition-all shadow-sm hover:scale-105">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          <div className="pt-2 text-xs font-medium text-slate-400">
            Microsoft Club – RST University 2026/2027
          </div>
        </footer>

      </main>
    </div>
  );
}
