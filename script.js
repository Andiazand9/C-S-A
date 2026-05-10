*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#07091a;
  --bg2:#0d1230;
  --bg3:#111840;
  --blue:#2563eb;
  --blue-light:#3b82f6;
  --blue-glow:rgba(37,99,235,0.35);
  --white:#ffffff;
  --grey:#b4bcd0;
  --grey2:#6b7a99;
  --border:rgba(255,255,255,0.07);
  --border2:rgba(37,99,235,0.3);
  --font:'DM Sans',sans-serif;
  --font-serif:'DM Serif Display',serif;
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--white);font-family:var(--font);font-size:16px;line-height:1.7;overflow-x:hidden}

/* NAV */
nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 6%;height:68px;
  background:rgba(7,9,26,0.82);
  backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
  border-bottom:1px solid var(--border);
  transition:background .3s;
}
.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
.nav-logo svg{width:34px;height:34px}
.nav-logo-text{font-weight:700;font-size:1.15rem;letter-spacing:.01em;color:var(--white)}
.nav-logo-text em{font-style:normal;color:var(--blue-light)}
.nav-links{display:flex;align-items:center;gap:2rem;list-style:none}
.nav-links a{color:var(--grey);text-decoration:none;font-size:.93rem;font-weight:500;letter-spacing:.01em;transition:color .2s}
.nav-links a:hover,.nav-links a.active{color:var(--white)}
.nav-links a.active{color:var(--blue-light)}

/* HAMBURGER */
.nav-toggle{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}
.nav-toggle span{display:block;width:22px;height:2px;background:var(--grey);border-radius:2px;transition:all .3s}
.nav-toggle.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
.nav-toggle.open span:nth-child(2){opacity:0}
.nav-toggle.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}

/* BUTTONS */
.btn-primary{
  background:var(--blue);color:#fff;
  padding:14px 32px;border-radius:8px;
  font-family:var(--font);font-weight:600;font-size:.95rem;
  text-decoration:none;border:none;cursor:pointer;
  transition:background .2s,transform .15s,box-shadow .2s;
  display:inline-flex;align-items:center;gap:8px;
}
.btn-primary:hover{background:var(--blue-light);transform:translateY(-2px);box-shadow:0 8px 32px var(--blue-glow)}
.btn-outline{
  background:transparent;color:var(--white);
  padding:14px 32px;border-radius:8px;
  font-family:var(--font);font-weight:600;font-size:.95rem;
  text-decoration:none;border:1.5px solid rgba(255,255,255,0.25);cursor:pointer;
  transition:border-color .2s,transform .15s,background .2s;
  display:inline-flex;align-items:center;gap:8px;
}
.btn-outline:hover{border-color:rgba(255,255,255,0.6);background:rgba(255,255,255,0.05);transform:translateY(-2px)}

/* HERO */
.hero-section{
  min-height:100vh;
  display:flex;align-items:center;justify-content:center;
  text-align:center;
  padding:120px 6% 80px;
  position:relative;overflow:hidden;
}
.hero-canvas{position:absolute;inset:0;z-index:0;width:100%;height:100%}
.hero-inner{position:relative;z-index:1;max-width:820px;margin:0 auto}
.hero-badge{
  display:inline-flex;align-items:center;gap:8px;
  background:rgba(37,99,235,0.12);
  border:1px solid rgba(37,99,235,0.35);
  border-radius:100px;padding:6px 18px;
  font-size:.8rem;font-weight:600;letter-spacing:.08em;
  text-transform:uppercase;color:var(--blue-light);margin-bottom:2rem;
}
.hero-badge-dot{width:6px;height:6px;border-radius:50%;background:var(--blue-light);animation:pulse 2s infinite}
.hero-title{
  font-family:var(--font-serif);
  font-size:clamp(2.8rem,6vw,5rem);
  line-height:1.12;letter-spacing:-.02em;
  color:var(--white);margin-bottom:1.4rem;
}
.hero-title em{font-style:italic;color:var(--blue-light)}
.hero-sub{
  font-size:clamp(1rem,2vw,1.2rem);color:var(--grey);
  max-width:620px;margin:0 auto 2.5rem;
  font-weight:300;line-height:1.75;
}
.hero-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}

/* PAGE HERO (shorter, for inner pages) */
.page-hero{
  padding:140px 6% 80px;
  text-align:center;
  position:relative;overflow:hidden;
  background:var(--bg);
  border-bottom:1px solid var(--border);
}
.page-hero::before{
  content:'';position:absolute;top:-200px;left:50%;transform:translateX(-50%);
  width:700px;height:700px;border-radius:50%;
  background:radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 65%);
  pointer-events:none;
}
.page-hero-inner{position:relative;z-index:1;max-width:680px;margin:0 auto}

/* MISSION STRIP */
.mission-strip{background:var(--blue);padding:28px 6%;text-align:center}
.mission-strip p{font-size:clamp(.95rem,2vw,1.15rem);font-weight:500;color:rgba(255,255,255,0.95);max-width:780px;margin:0 auto;letter-spacing:.01em}

/* SECTION COMMONS */
section{padding:96px 6%}
.section-label{font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--blue-light);margin-bottom:.8rem}
.section-title{font-family:var(--font-serif);font-size:clamp(2rem,4vw,2.9rem);line-height:1.18;letter-spacing:-.02em;color:var(--white);margin-bottom:1rem}
.section-sub{color:var(--grey);font-size:1.05rem;max-width:560px;font-weight:300}

/* EVENTS GRID */
.events-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;margin-top:3rem}
.event-card{
  background:var(--bg2);border:1px solid var(--border);border-radius:14px;padding:28px 24px;
  transition:border-color .25s,transform .25s,box-shadow .25s;cursor:default;
}
.event-card:hover{border-color:var(--border2);transform:translateY(-4px);box-shadow:0 12px 40px rgba(37,99,235,0.18)}
.event-icon{width:48px;height:48px;border-radius:12px;background:rgba(37,99,235,0.12);display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:1rem;border:1px solid rgba(37,99,235,0.2)}
.event-card h3{font-size:1.1rem;font-weight:600;margin-bottom:.5rem;color:var(--white)}
.event-card p{font-size:.9rem;color:var(--grey);line-height:1.6}
.event-card .event-meta{margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border);display:flex;gap:12px;flex-wrap:wrap}
.event-tag{font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:100px;letter-spacing:.04em}
.event-tag.open{background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.3);color:#4ade80}
.event-tag.coming{background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.25);color:#fbbf24}
.event-tag.closed{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.25);color:#f87171}
.event-card .btn-sm{font-size:.8rem;padding:8px 18px;border-radius:6px;margin-top:1rem;display:inline-block;text-decoration:none;background:var(--blue);color:#fff;font-weight:600;transition:background .2s}
.event-card .btn-sm:hover{background:var(--blue-light)}

/* STATS */
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1px;background:var(--border);border:1px solid var(--border);border-radius:16px;overflow:hidden;margin-top:3rem}
.stat-item{background:var(--bg2);padding:40px 28px;text-align:center}
.stat-num{font-family:var(--font-serif);font-size:clamp(2.2rem,4vw,3.2rem);color:var(--white);line-height:1;margin-bottom:.5rem}
.stat-num .accent{color:var(--blue-light)}
.stat-label{font-size:.85rem;color:var(--grey);font-weight:500;letter-spacing:.03em;text-transform:uppercase}

/* TEAM */
.team-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:24px;margin-top:3rem}
.team-card{background:var(--bg2);border:1px solid var(--border);border-radius:16px;padding:28px 20px 24px;text-align:center;transition:border-color .25s,transform .3s;position:relative;overflow:hidden}
.team-card-bar{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--blue-light));opacity:0;transition:opacity .25s}
.team-card:hover{border-color:var(--border2)}
.team-card:hover .team-card-bar{opacity:1}
.team-card:nth-child(odd):hover{transform:rotate(-1.2deg) translateY(-4px)}
.team-card:nth-child(even):hover{transform:rotate(1deg) translateY(-4px)}
.team-avatar{width:72px;height:72px;border-radius:50%;background:rgba(37,99,235,0.15);border:2px solid rgba(37,99,235,0.3);display:flex;align-items:center;justify-content:center;font-family:var(--font-serif);font-size:1.6rem;color:var(--blue-light);margin:0 auto 1rem;font-weight:400}
.team-card h3{font-size:1.05rem;font-weight:600;color:var(--white);margin-bottom:.25rem}
.team-role{font-size:.82rem;color:var(--blue-light);font-weight:500;margin-bottom:1rem;letter-spacing:.02em}
.team-tags{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.tag{font-size:.72rem;font-weight:500;background:rgba(255,255,255,0.06);border:1px solid var(--border);border-radius:100px;padding:3px 10px;color:var(--grey);letter-spacing:.02em}

/* FAQ */
.faq-list{margin-top:3rem;max-width:760px}
.faq-item{border-bottom:1px solid var(--border)}
.faq-q{width:100%;background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:22px 0;font-family:var(--font);font-size:1rem;font-weight:500;color:var(--white);text-align:left;gap:12px;transition:color .2s}
.faq-q:hover{color:var(--blue-light)}
.faq-icon{width:26px;height:26px;min-width:26px;border-radius:50%;border:1.5px solid var(--border2);display:flex;align-items:center;justify-content:center;font-size:1rem;color:var(--blue-light);transition:transform .3s,background .2s}
.faq-item.open .faq-icon{transform:rotate(45deg);background:rgba(37,99,235,0.12)}
.faq-body{max-height:0;overflow:hidden;transition:max-height .4s ease}
.faq-body p{color:var(--grey);font-size:.95rem;line-height:1.75;padding-bottom:20px}

/* FORMS */
.form-section{background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:40px 36px;max-width:760px;margin:3rem auto 0}
.form-group{display:flex;flex-direction:column;gap:7px;margin-bottom:18px}
.form-group label{font-size:.8rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--grey2)}
.form-group input,.form-group select,.form-group textarea{background:var(--bg3);border:1px solid var(--border);border-radius:9px;padding:12px 14px;font-family:var(--font);font-size:.93rem;color:var(--white);outline:none;transition:border-color .2s,box-shadow .2s;width:100%}
.form-group input::placeholder,.form-group textarea::placeholder{color:var(--grey2)}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(37,99,235,0.18)}
.form-group select option{background:var(--bg2);color:var(--white)}
.form-group textarea{resize:vertical;min-height:110px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.form-submit{width:100%;padding:15px;background:var(--blue);color:#fff;border:none;border-radius:9px;font-family:var(--font);font-size:.95rem;font-weight:600;cursor:pointer;transition:background .2s,transform .15s,box-shadow .2s;letter-spacing:.01em}
.form-submit:hover{background:var(--blue-light);transform:translateY(-2px);box-shadow:0 8px 32px var(--blue-glow)}
.form-toast{display:none;margin-top:1.2rem;padding:14px 18px;border-radius:10px;font-size:.9rem;font-weight:500;text-align:center}
.form-toast.success{background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.3);color:#4ade80}
.form-toast.error{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);color:#f87171}
.upload-area{border:2px dashed var(--border2);border-radius:12px;padding:32px;text-align:center;cursor:pointer;transition:border-color .2s,background .2s;background:var(--bg3)}
.upload-area:hover{border-color:var(--blue-light);background:rgba(37,99,235,0.06)}
.upload-area p{color:var(--grey2);font-size:.9rem;margin-top:.5rem}
.upload-area .upload-icon{font-size:2rem;margin-bottom:.5rem}
.upload-area input[type="file"]{display:none}
.file-list{margin-top:1rem;display:flex;flex-direction:column;gap:8px}
.file-item{display:flex;align-items:center;justify-content:space-between;background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:10px 14px;font-size:.85rem;color:var(--grey)}
.file-item button{background:none;border:none;color:var(--grey2);cursor:pointer;font-size:1rem;transition:color .2s}
.file-item button:hover{color:#f87171}

/* FOOTER */
footer{background:var(--bg2);border-top:1px solid var(--border);padding:48px 6% 36px}
.footer-inner{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:2rem;margin-bottom:2.5rem}
.footer-brand{max-width:280px}
.footer-brand p{font-size:.88rem;color:var(--grey2);line-height:1.65;margin-top:.75rem}
.footer-links h4{font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--grey2);margin-bottom:1rem}
.footer-links ul{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.footer-links a{font-size:.9rem;color:var(--grey);text-decoration:none;transition:color .2s}
.footer-links a:hover{color:var(--blue-light)}
.footer-socials{display:flex;gap:12px;margin-top:1rem}
.social-btn{width:38px;height:38px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;transition:background .2s,border-color .2s;text-decoration:none}
.social-btn:hover{background:rgba(37,99,235,0.15);border-color:var(--border2)}
.social-btn svg{width:16px;height:16px;fill:var(--grey)}
.footer-bottom{border-top:1px solid var(--border);padding-top:1.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem}
.footer-bottom p{font-size:.83rem;color:var(--grey2)}
.footer-bottom .accent{color:var(--blue-light)}

/* INFO CARDS */
.info-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;margin-top:3rem}
.info-card{background:var(--bg2);border:1px solid var(--border);border-radius:14px;padding:28px 24px}
.info-card h3{font-size:1rem;font-weight:600;color:var(--white);margin-bottom:.5rem}
.info-card p{font-size:.9rem;color:var(--grey);line-height:1.65}
.info-card .info-icon{font-size:1.6rem;margin-bottom:.75rem}

@keyframes pulse{0%,100%{opacity:.5;transform:scale(.9)}50%{opacity:1;transform:scale(1.1)}}

/* RESPONSIVE */
@media(max-width:700px){
  .nav-links{display:none;position:absolute;top:68px;left:0;right:0;background:rgba(7,9,26,0.98);flex-direction:column;align-items:flex-start;padding:1.5rem 6%;gap:1.2rem;border-bottom:1px solid var(--border)}
  .nav-links.open{display:flex}
  .nav-toggle{display:flex}
  .events-grid,.team-grid,.info-grid{grid-template-columns:1fr}
  .stats-grid{grid-template-columns:1fr 1fr}
  section{padding:70px 5%}
  .form-row{grid-template-columns:1fr}
  .form-section{padding:24px 20px}
}
@media(max-width:480px){
  .stats-grid{grid-template-columns:1fr 1fr}
  .hero-ctas{flex-direction:column;align-items:center}
}
