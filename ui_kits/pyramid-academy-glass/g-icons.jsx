// Glass icons — Lucide-style, 2px stroke, currentColor.
function GIcon({ children, size = 24, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         {...rest}>{children}</svg>
  );
}

const G_Cap        = (p) => <GIcon {...p}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></GIcon>;
const G_Globe      = (p) => <GIcon {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></GIcon>;
const G_FileCheck  = (p) => <GIcon {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></GIcon>;
const G_Calc       = (p) => <GIcon {...p}><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="18" x2="16" y2="18"/></GIcon>;
const G_Brain      = (p) => <GIcon {...p}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/></GIcon>;
const G_Languages  = (p) => <GIcon {...p}><path d="M5 8h14"/><path d="M5 8a3 3 0 0 1 6 0"/><path d="M3 12h6"/><path d="M21 18l-5-10-5 10"/><path d="M13 14h6"/></GIcon>;
const G_Book       = (p) => <GIcon {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></GIcon>;
const G_Arrow      = (p) => <GIcon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></GIcon>;
const G_Pin        = (p) => <GIcon {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></GIcon>;
const G_Phone      = (p) => <GIcon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></GIcon>;
const G_Clock      = (p) => <GIcon {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></GIcon>;
const G_Award      = (p) => <GIcon {...p}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></GIcon>;
const G_Sparkle    = (p) => <GIcon {...p}><path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z"/></GIcon>;
const G_Users      = (p) => <GIcon {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></GIcon>;
const G_Instagram  = (p) => <GIcon {...p}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></GIcon>;
const G_Telegram   = (p) => <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M21.7 3.3a1 1 0 0 0-1.05-.15L2.6 10.6a1 1 0 0 0 .06 1.86l4.55 1.55 2.06 6.46a1 1 0 0 0 1.65.41l3.04-2.79 4.52 3.32a1 1 0 0 0 1.57-.57l3.5-15.7a1 1 0 0 0-.35-1.02zM9.6 14.92l-.93 4.04-1.5-4.7 9.27-7.05-6.84 7.7z"/></svg>;
const G_Menu       = (p) => <GIcon {...p}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></GIcon>;
const G_Mic        = (p) => <GIcon {...p}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></GIcon>;
const G_Atom       = (p) => <GIcon {...p}><circle cx="12" cy="12" r="1.6"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9C11.18 3.8 5.84 1.78 3.8 3.8c-2.03 2.04-.02 7.36 4.5 11.9 4.52 4.52 9.85 6.54 11.9 4.5z"/><path d="M3.8 20.2c-2.04-2.03-.02-7.36 4.5-11.9C12.82 3.8 18.16 1.78 20.2 3.8c2.03 2.04.02 7.36-4.5 11.9-4.52 4.52-9.85 6.54-11.9 4.5z"/></GIcon>;
const G_Flask      = (p) => <GIcon {...p}><path d="M9 3h6"/><path d="M10 3v6.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3"/><path d="M7 14h10"/></GIcon>;
const G_Leaf       = (p) => <GIcon {...p}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></GIcon>;
const G_Sigma      = (p) => <GIcon {...p}><path d="M18 7V5H6l6 7-6 7h12v-2"/></GIcon>;

Object.assign(window, {
  GIcon, G_Cap, G_Globe, G_FileCheck, G_Calc, G_Brain, G_Languages,
  G_Book, G_Arrow, G_Pin, G_Phone, G_Clock, G_Award, G_Sparkle, G_Users,
  G_Instagram, G_Telegram, G_Menu, G_Mic, G_Atom, G_Flask, G_Leaf, G_Sigma,
});
