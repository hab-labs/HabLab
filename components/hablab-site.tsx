'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { ArrowUpRight, Check, ChevronDown, Menu, X } from 'lucide-react'

const services = [
  ['01', 'Websites & web apps', 'Landing pages, dashboards and custom applications built around real user needs.'],
  ['02', 'WhatsApp & chatbot automation', 'Support flows, lead collection, notifications and conversational experiences.'],
  ['03', 'Business process automation', 'Connect tools and remove repetitive work from everyday operations.'],
  ['04', 'Web crawling & data extraction', 'Turn public web data into structured datasets, monitoring and insight.'],
  ['05', 'Custom APIs & backend systems', 'Secure APIs, databases, integrations and background services.'],
  ['06', 'MVPs & technical prototypes', 'Make an idea real enough to test, learn and validate.'],
]

const amharicServices = [
  ['01', 'ድረ-ገጾች እና ዌብ አፕሊኬሽኖች', 'በተጠቃሚዎች እውነተኛ ፍላጎት ላይ የተመሰረቱ ድረ-ገጾች፣ ዳሽቦርዶች እና ብጁ አፕሊኬሽኖች።'],
  ['02', 'የዋትስአፕ እና ቻትቦት አውቶሜሽን', 'የድጋፍ ሂደቶች፣ የደንበኛ መረጃ ማሰባሰብ እና ማሳወቂያዎች።'],
  ['03', 'የንግድ ሂደት አውቶሜሽን', 'መሳሪያዎችን በማገናኘት የሚደጋገሙ ስራዎችን እናስወግዳለን።'],
  ['04', 'የድር መረጃ ማውጣት', 'የህዝብ ድር መረጃን ወደ የተደራጀ ዳታ እንቀይራለን።'],
  ['05', 'ብጁ APIs እና የኋላ ስርዓቶች', 'ደህንነታቸው የተጠበቁ APIs፣ ዳታቤዞች እና ውህደቶች።'],
  ['06', 'MVPs እና ቴክኒካል ፕሮቶታይፖች', 'አንድን ሀሳብ ለመሞከር እና ለማረጋገጥ ወደ እውነት እናመጣዋለን።'],
]

const steps = [
  ['Discover', 'Understand the people, pain points and desired outcome.'],
  ['Define', 'Agree on scope, priorities and what success looks like.'],
  ['Design', 'Shape the flows, interface and system before we build.'],
  ['Build', 'Ship the product in small, useful, reviewable pieces.'],
  ['Test', 'Check usability, responsiveness and reliability.'],
  ['Launch', 'Deploy, document and stay close to what happens next.'],
]

export function HabLabSite() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [dark, setDark] = useState(false)
  const [language, setLanguage] = useState<'en' | 'am'>('en')
  const [showBackTop, setShowBackTop] = useState(false)
  const isAmharic = language === 'am'
  const copy = isAmharic ? {
    services: 'አገልግሎቶች', process: 'ሂደት', team: 'ቡድኑ', contact: 'አግኙን', start: 'ፕሮጀክት ይጀምሩ',
    hero: 'ለእውነተኛ ችግሮች ዲጂታል ስርዓቶችን እንገነባለን።',
    lede: 'ድረ-ገጾች፣ ቦቶች፣ አውቶሜሽን እና ብጁ ሶፍትዌሮችን ከንግድዎ አሰራር ጋር በማጣጣም እንሰራለን።',
    tell: 'ችግሩን ይንገሩን', see: 'የምንሰራቸውን ይመልከቱ',
    footer: 'ሃብላብ ቴክ ስቱዲዮ በኢትዮጵያ፣ ጅማ የሚገኝ ገለልተኛ የቴክኖሎጂ ስቱዲዮ ነው። ለእውነተኛ ችግሮች ዲጂታል ስርዓቶችን እንነድፋለን እና እንገነባለን።', explore: 'ይመልከቱ', startHere: 'ከዚህ ይጀምሩ', back: 'ወደ ላይ ተመለስ'
  } : {
    services: 'Services', process: 'Process', team: 'The team', contact: 'Contact', start: 'Start a project', hero: 'We build digital systems for real-world problems.', lede: 'Websites, bots, automation and custom software designed around the way your business actually works.', tell: 'Tell us the problem', see: 'See what we build', footer: 'HabLab Tech Studio is an independent technology studio based in Ethiopia, Jimma. We design and build digital systems for real-world problems.', explore: 'Explore', startHere: 'Start here', back: 'Back to top'
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('hablab-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark
    setDark(initialDark)
    document.documentElement.classList.toggle('dark', initialDark)

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    const onScroll = () => setShowBackTop(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 180)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  const toggleTheme = () => {
    const nextDark = !dark
    setDark(nextDark)
    document.documentElement.classList.toggle('dark', nextDark)
    window.localStorage.setItem('hablab-theme', nextDark ? 'dark' : 'light')
  }

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#top" className="wordmark">HAB<span>LAB</span><i>®</i></a>
        <div className={open ? 'nav-links is-open' : 'nav-links'}>
          <a href="#services" onClick={() => setOpen(false)}>{copy.services}</a>
          <a href="#process" onClick={() => setOpen(false)}>{copy.process}</a>
          <a href="#team" onClick={() => setOpen(false)}>{copy.team}</a>
          <a href="#contact" onClick={() => setOpen(false)}>{copy.contact}</a>
        </div>
        <div className="nav-tools">
          <a className="nav-cta" href="#contact">{copy.start} <ArrowUpRight size={15} /></a>
          <button className="language-toggle" type="button" onClick={() => setLanguage(isAmharic ? 'en' : 'am')} aria-label={isAmharic ? 'Switch to English' : 'ወደ አማርኛ ቀይር'}>{isAmharic ? 'EN' : 'አማ'}</button>
          <button className="theme-toggle" type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleTheme}><span className={dark ? 'toggle-track is-dark' : 'toggle-track'}><span /></span><span>{dark ? 'Light' : 'Dark'}</span></button>
          <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />{isAmharic ? 'ገለልተኛ የቴክኖሎጂ ስቱዲዮ · ኢትዮጵያ፣ ጅማ' : 'Independent technology studio · Ethiopia, Jimma'}</p>
          <h1>{isAmharic ? copy.hero : <>We build digital systems for <em>real-world problems.</em></>}</h1>
          <p className="hero-lede">{copy.lede}</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">{copy.tell} <ArrowUpRight size={17} /></a><a className="text-link" href="#services">{copy.see} <span>↓</span></a></div>
        </div>
        <div className="system-visual" aria-label="An abstract diagram representing connected digital systems" role="img">
          <div className="visual-label label-top">HABLAB / SYSTEM 001</div>
          <div className="orb orb-a" /><div className="orb orb-b" /><div className="orb orb-c" />
          <div className="line line-one" /><div className="line line-two" /><div className="line line-three" />
          <div className="visual-core"><span>INPUT</span><strong>problem</strong><span>OUTPUT</span></div>
          <div className="visual-label label-bottom">DESIGN → ENGINEERING → OUTCOME</div>
        </div>
      </section>

      <section className="problem section-pad">
        <div className="section-kicker">{isAmharic ? 'የስራችን ዋና አላማ' : 'The point of the work'}</div>
        <div className="problem-grid"><h2>{isAmharic ? <>ትንሽ መሰናክል።<br /><span>ብዙ እድገት።</span></> : <>Less friction.<br /><span>More momentum.</span></>}</h2><div><p className="large-copy">{isAmharic ? 'አብዛኛዎቹ ንግዶች ብዙ ቴክኖሎጂ አይፈልጉም። በትክክል የተተገበረ ትክክለኛ ቴክኖሎጂ ይፈልጋሉ።' : "Most businesses don't need more technology. They need the right technology, thoughtfully applied."}</p><p className="muted-copy">{isAmharic ? 'የተወሳሰበውን፣ የሚደጋገመውን ወይም የቆመውን የስራዎ ክፍል እናገኝና ግልጽ፣ ጠቃሚ እና አብሮዎ የሚያድግ እናደርገዋለን።' : 'We find the messy, manual or stuck part of your work and turn it into something clear, useful and built to move with you.'}</p></div></div>
        <div className="problem-list">{(isAmharic ? ['የዘገዩ የእጅ ሂደቶች', 'የተበታተነ የንግድ ዳታ', 'የሚደጋገም የደንበኛ ግንኙነት', 'ምርት ያልሆኑ ሀሳቦች'] : ['Slow manual processes', 'Scattered business data', 'Repetitive customer communication', 'Ideas that never became products']).map((item, i) => <div key={item}><span>0{i + 1}</span>{item}<Check size={17} /></div>)}</div>
      </section>

      <section id="services" className="services section-pad"><div className="section-head"><div><div className="section-kicker">{isAmharic ? 'የምንገነባው' : 'What we build'}</div><h2>{isAmharic ? <>ተግባራዊ ስርዓቶች፣<br /><span>በጥንቃቄ የተሰሩ።</span></> : <>Practical systems,<br /><span>carefully made.</span></>}</h2></div><p>{isAmharic ? 'ከመጀመሪያው ሀሳብ እስከ መጨረሻው ማስጀመር፣ ዲዛይን፣ ፊት-ለፊት እና የኋላ ስርዓት ምህንድስናን በአንድ ሂደት እናመጣለን።' : 'From first idea to final deployment, we bring design, frontend and backend engineering into one workflow.'}</p></div><div className="service-grid">{(isAmharic ? amharicServices : services).map(([number, title, text]) => <article className="service-card" key={number}><span className="service-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="service-arrow" size={19} /></article>)}</div></section>

      <section id="process" className="process section-pad"><div className="section-kicker">{isAmharic ? 'ፕሮጀክት እንዴት ይጓዛል' : 'How a project moves'}</div><div className="process-head"><h2>{isAmharic ? <>አንድ ቡድን።<br /><span>አንድ ግልጽ መንገድ።</span></> : <>One team.<br /><span>One clear path.</span></>}</h2><p>{isAmharic ? 'በቅርበት ለመስራት ትንሽ። ሙሉውን ስርዓት ለመያዝ በቂ ልምድ ያለው።' : 'Small enough to stay close. Experienced enough to own the whole system.'}</p></div><div className="step-grid">{(isAmharic ? [['ግንዛቤ', 'ሰዎችን፣ ችግሮችን እና የሚፈለገውን ውጤት እንረዳለን።'], ['መግለጽ', 'ወሰንን፣ ቅድሚያዎችን እና ስኬትን እንስማማለን።'], ['ዲዛይን', 'ሂደቱን፣ በይነገጹን እና ስርዓቱን እንቀርጻለን።'], ['ግንባታ', 'ምርቱን በትንንሽ እና ጠቃሚ ክፍሎች እንልካለን።'], ['ሙከራ', 'አጠቃቀምን፣ ምላሽ ሰጪነትን እና አስተማማኝነትን እንፈትሻለን።'], ['ማስጀመር', 'እናስጀምራለን፣ እንመዝግባለን እና ቀጣዩን እንከታተላለን።']] : steps).map(([title, text], i) => <div className="step" key={title}><div className="step-top"><span>0{i + 1}</span><div /></div><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section id="team" className="team section-pad"><div className="section-kicker">{isAmharic ? 'ቡድኑ' : 'The team'}</div><div className="team-intro"><h2>{isAmharic ? <>ሶስት ዘርፎች።<br /><span>አንድ የምርት ግንባታ ቡድን።</span></> : <>Three disciplines.<br /><span>One product-building unit.</span></>}</h2><p>{isAmharic ? 'ዲዛይን፣ ፊት-ለፊት እና የኋላ ስርዓት የአንድ የምርት ማስረከቢያ ሂደት ክፍሎች ናቸው።' : 'Design, frontend and backend are three parts of the same delivery process.'}</p></div><div className="team-grid">{(isAmharic ? [['FM', 'Firdewos Miftah', 'UI/UX ዲዛይነር', 'ጥናት፣ የተጠቃሚ ሂደቶች፣ ጥራት ያለው UI እና የእይታ አቅጣጫ።'], ['FG', 'Fitsum Geremew', 'የኋላ ስርዓት ገንቢ', 'APIs፣ ዳታቤዞች፣ ውህደቶች፣ ቦቶች እና አውቶሜሽን።'], ['NW', 'Natanim Wondwossen', 'የፊት-ለፊት ገንቢ', 'ምላሽ ሰጪ በይነገጾች፣ ኮምፖነንት ስርዓቶች እና ፍጥነት።']] : [['FM', 'Firdewos Miftah', 'UI/UX Designer', 'Research, flows, high-fidelity UI and visual direction.'], ['FG', 'Fitsum Geremew', 'Backend Developer', 'APIs, databases, integrations, bots and automation.'], ['NW', 'Natanim Wondwossen', 'Frontend Developer', 'Responsive interfaces, component systems and performance.']]).map(([initials, name, role, bio]) => <article key={name}><div className="avatar">{initials}</div><h3>{name}</h3><p className="role">{role}</p><p>{bio}</p></article>)}</div></section>

      <section id="contact" className="contact section-pad"><div><div className="section-kicker">{isAmharic ? 'በችግሩ እንጀምር' : 'Start with the problem'}</div><h2>{isAmharic ? <>ምንን ለመፍታት<br /><span>እየሞከሩ ነው?</span></> : <>What are you trying<br />to <span>solve?</span></>}</h2></div><form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>{sent ? <div className="success"><Check size={30} /><h3>{isAmharic ? 'መልዕክቱ ደርሶናል።' : 'Message received.'}</h3><p>{isAmharic ? 'በቅርቡ እንገናኛለን።' : "We'll be in touch soon."}</p></div> : <><label>{isAmharic ? 'ስምዎ' : 'Your name'}<input required name="name" placeholder={isAmharic ? 'ሙሉ ስም' : 'Jane Smith'} /></label><label>{isAmharic ? 'እንዴት ልንረዳዎ?' : 'What can we help with?'}<textarea required name="message" placeholder={isAmharic ? 'ስለ ችግሩ ትንሽ ይንገሩን...' : 'Tell us a little about the problem...'} rows={4} /></label><button className="button button-primary" type="submit">{isAmharic ? 'ጥያቄ ላክ' : 'Send inquiry'} <ArrowUpRight size={17} /></button></>}</form></section>

      <button className={showBackTop ? 'back-to-top is-visible' : 'back-to-top'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={copy.back}><span>↑</span><small>{copy.back}</small></button>
      <footer><a href="#top" className="wordmark">HAB<span>LAB</span><i>®</i></a><p>{copy.footer}</p><div><a href="#services">{copy.services}</a><a href="#team">{copy.team}</a><a href="#contact">{copy.contact}</a></div><small>© 2026 HabLab Tech Studio</small></footer>
    </main>
  )
}

export default HabLabSite
