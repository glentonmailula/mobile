// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { ALL_COURSES, SIX_MONTH_COURSES, SIX_WEEK_COURSES, TESTIMONIALS, FAQS, formatZAR, getDiscount } from './data'
import image from "./image.jpeg";

type Screen = 'splash' | 'home' | 'about' | 'why-us' | 'courses-overview' | 'professional' | 'practical' | 'course-detail' | 'fees' | 'my-quote' | 'faq' | 'contact'

const SCREEN_TITLES: Record<Screen, string> = {
  'splash': '', 'home': 'Home', 'about': 'About Us', 'why-us': 'Why Choose Us',
  'courses-overview': 'Courses', 'professional': '6-Month Courses', 'practical': '6-Week Courses',
  'course-detail': 'Course Details', 'fees': 'Calculate Fees', 'my-quote': 'My Quote',
  'faq': 'FAQ', 'contact': 'Contact Us',
}

// ─── Screen 1: Splash ────────────────────────────────────────
function SplashScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 2200); return () => clearTimeout(t) }, [onDone])
  return ( 
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(160deg, #1E4D3A, #142e23)', padding: '2rem' }}>
      <img src={image} alt="Pawsitive Pet Academy" style={{ width: '140px', height: '140px', objectFit: 'contain', animation: 'fadeIn 0.8s ease' }} />
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, color: '#FBF8F1', textAlign: 'center', margin: '1.25rem 0 0.4rem', lineHeight: 1.2 }}>Pawsitive<br />Pet Academy</h1>
      <p style={{ fontSize: '0.75rem', color: 'rgba(251,248,241,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>Durban · Est. 2023</p>
      <div style={{ marginTop: '3rem', display: 'flex', gap: '6px' }}>
        {[0,1,2].map(i => (
          <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === 0 ? '#F5A940' : 'rgba(251,248,241,0.3)', animation: `pulse ${0.6 + i * 0.2}s ease infinite alternate` }} />
        ))}
      </div>
    </div>
  )
}

// ─── Screen 2: Home ──────────────────────────────────────────
function HomeScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#1E4D3A' }}>
        <img src="https://images.unsplash.com/photo-1596278852720-141ba859bbbf?w=400&h=280&fit=crop&auto=format" alt="Dog training" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(20,46,35,0.4), rgba(20,46,35,0.88))' }} />
        <div style={{ position: 'absolute', inset: 0, padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <img src="/src/imports/image.png" alt="logo" style={{ width: '52px', height: '52px', objectFit: 'contain', marginBottom: '0.5rem' }} />
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: '#FBF8F1', margin: 0, lineHeight: 1.1 }}>Where every pet<br /><em style={{ color: '#F5A940' }}>thrives</em> with care.</h1>
          <p style={{ fontSize: '0.68rem', color: 'rgba(251,248,241,0.7)', margin: '0.3rem 0 0' }}>Durban · Est. 2023 · 500+ Graduates</p>
        </div>
      </div>
      <div style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '0.25rem' }}>
        {[{ n: '500+', l: 'Graduates' }, { n: '7', l: 'Courses' }, { n: '2023', l: 'Est.' }, { n: '15%', l: 'Max Discount' }].map(s => (
          <div key={s.l} style={{ background: '#fff', borderRadius: '0.75rem', padding: '0.875rem', textAlign: 'center', border: '1px solid rgba(30,77,58,0.08)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: '#1E4D3A' }}>{s.n}</div>
            <div style={{ fontSize: '0.65rem', color: '#8BAF8A' }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {[
          { l: 'Browse Courses', sub: 'All 7 programmes', s: 'courses-overview' as Screen, bg: '#1E4D3A' },
          { l: 'Professional Development', sub: '6-month · R1 500 each', s: 'professional' as Screen, bg: '#2d7a5c' },
          { l: 'Practical Skills', sub: '6-week · R750 each', s: 'practical' as Screen, bg: '#C97D1A' },
          { l: 'Calculate Fees', sub: 'Discounts up to 15%', s: 'fees' as Screen, bg: '#142e23' },
          { l: 'FAQ', sub: 'Common questions answered', s: 'faq' as Screen, bg: '#D6E8D5', light: true },
          { l: 'Contact Us', sub: 'Enquire or enrol today', s: 'contact' as Screen, bg: '#FBF8F1', light: true, border: true },
        ].map(a => (
          <button key={a.l} onClick={() => go(a.s)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1rem', borderRadius: '0.875rem', background: a.bg, border: a.border ? '1.5px solid rgba(30,77,58,0.15)' : 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: a.light ? '#1E4D3A' : '#FBF8F1' }}>{a.l}</div>
              <div style={{ fontSize: '0.65rem', color: a.light ? '#5a7a5e' : 'rgba(251,248,241,0.65)', marginTop: '0.1rem' }}>{a.sub}</div>
            </div>
            <span style={{ color: a.light ? '#1E4D3A' : 'rgba(251,248,241,0.6)', fontSize: '1.1rem' }}>›</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Screen 3: About Us ──────────────────────────────────────
function AboutScreen({ go }: { go: (s: Screen) => void }) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ position: 'relative', height: '160px', background: '#2d7a5c', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1640652663796-764e4eb5bc59?w=400&h=220&fit=crop&auto=format" alt="Puppy training" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,46,35,0.85) 30%, transparent)' }} />
        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#FBF8F1', margin: 0 }}>Our Story</h2>
        </div>
      </div>
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        <div style={{ background: '#fff', borderRadius: '0.875rem', padding: '1rem', border: '1px solid rgba(30,77,58,0.08)' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#D6E8D5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>👩</div>
            <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: '#1E4D3A' }}>Sarah Smith</div><div style={{ fontSize: '0.68rem', color: '#8BAF8A' }}>Founder & Director</div></div>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#3d5240', lineHeight: 1.6, margin: 0 }}>Sarah founded Pawsitive Pet Academy in 2023 after noticing that many pet owners lacked knowledge of proper care, training, nutrition, and emergency response.</p>
        </div>
        <div style={{ background: '#1E4D3A', borderRadius: '0.875rem', padding: '1rem' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5A940', margin: '0 0 0.4rem' }}>Mission</p>
          <p style={{ fontSize: '0.82rem', color: 'rgba(251,248,241,0.85)', lineHeight: 1.6, margin: 0 }}>To improve animal wellbeing and create employment opportunities through practical, accessible pet education across Durban.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
          {[{ n: '500+', l: 'Graduates' }, { n: '7', l: 'Courses' }, { n: '2023', l: 'Est.' }].map(s => (
            <div key={s.l} style={{ background: '#D6E8D5', borderRadius: '0.75rem', padding: '0.75rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, color: '#1E4D3A' }}>{s.n}</div>
              <div style={{ fontSize: '0.62rem', color: '#5a7a5e' }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', borderRadius: '0.875rem', padding: '1rem', border: '1px solid rgba(30,77,58,0.08)' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C97D1A', margin: '0 0 0.6rem' }}>Who Should Enrol</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {['Pet Owners', 'Families', 'Pet Sitters', 'Kennel Staff', 'Vet Assistants', 'Entrepreneurs'].map(t => (
              <span key={t} style={{ padding: '0.25rem 0.6rem', borderRadius: '99px', fontSize: '0.68rem', fontWeight: 600, background: '#D6E8D5', color: '#1E4D3A' }}>{t}</span>
            ))}
          </div>
        </div>
        <button onClick={() => go('why-us')} style={{ padding: '0.875rem', borderRadius: '0.875rem', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Why Choose Us →</button>
      </div>
    </div>
  )
}

// ─── Screen 4: Why Choose Us ─────────────────────────────────
function WhyUsScreen() {
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ background: '#1E4D3A', padding: '1.25rem 1rem' }}>
        <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5A940', margin: '0 0 0.2rem' }}>Our Difference</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#FBF8F1', margin: 0 }}>Why Choose Pawsitive?</h2>
      </div>
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {[
          { n: '01', title: 'Hands-on learning', body: 'Real animals, real scenarios, skills you apply from day one.' },
          { n: '02', title: 'Expert instructors', body: 'Experienced professionals passionate about animal welfare and your success.' },
          { n: '03', title: 'Bundle discounts', body: 'Select multiple courses and save up to 15% automatically.' },
          { n: '04', title: 'Career outcomes', body: 'Graduates go on to employment, freelance work, and business ownership.' },
          { n: '05', title: 'Small class sizes', body: 'Intimate groups mean personalised attention from every instructor.' },
          { n: '06', title: 'Based in Durban', body: 'Central KZN location, accessible to the broader community.' },
        ].map(f => (
          <div key={f.n} style={{ background: '#fff', borderRadius: '0.875rem', padding: '1rem', border: '1px solid rgba(30,77,58,0.08)', display: 'flex', gap: '0.875rem' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'rgba(30,77,58,0.2)', lineHeight: 1, flexShrink: 0 }}>{f.n}</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '0.25rem' }}>{f.title}</div>
              <div style={{ fontSize: '0.78rem', color: '#5a7a5e', lineHeight: 1.55 }}>{f.body}</div>
            </div>
          </div>
        ))}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginTop: '0.25rem' }}>
          {[{ n: '500+', l: 'Graduates' }, { n: '95%', l: 'Satisfaction' }, { n: '3', l: 'Years Running' }, { n: '7', l: 'Courses' }].map(s => (
            <div key={s.l} style={{ background: '#D6E8D5', borderRadius: '0.75rem', padding: '0.875rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 900, color: '#C97D1A' }}>{s.n}</div>
              <div style={{ fontSize: '0.65rem', color: '#1E4D3A', fontWeight: 600 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Screen 5: Courses Overview ──────────────────────────────
function CoursesOverviewScreen({ go, onSelect }: { go: (s: Screen) => void; onSelect: (id: string) => void }) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ background: '#1E4D3A', padding: '1.25rem 1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#FBF8F1', margin: 0 }}>All 7 Courses</h2>
      </div>
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        <button onClick={() => go('professional')} style={{ background: '#1E4D3A', borderRadius: '1rem', padding: '1rem', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F5A940', marginBottom: '0.25rem' }}>Professional Development</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#FBF8F1', marginBottom: '0.35rem' }}>6-Month Programmes</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(251,248,241,0.65)', marginBottom: '0.75rem' }}>4 courses · 12 weeks each · R1 500 per course</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {SIX_MONTH_COURSES.map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'rgba(251,248,241,0.8)' }}>
                <span>{c.title}</span><span style={{ color: '#F5A940' }}>{formatZAR(c.fee)}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#F5A940', fontWeight: 600 }}>View all →</div>
        </button>
        <button onClick={() => go('practical')} style={{ background: '#C97D1A', borderRadius: '1rem', padding: '1rem', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(251,248,241,0.75)', marginBottom: '0.25rem' }}>Practical Skills</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#FBF8F1', marginBottom: '0.35rem' }}>6-Week Short Courses</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(251,248,241,0.7)', marginBottom: '0.75rem' }}>3 courses · 6 weeks each · R750 per course</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {SIX_WEEK_COURSES.map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'rgba(251,248,241,0.9)' }}>
                <span>{c.title}</span><span>{formatZAR(c.fee)}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'rgba(251,248,241,0.85)', fontWeight: 600 }}>View all →</div>
        </button>
        <div style={{ background: '#D6E8D5', borderRadius: '1rem', padding: '1rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#1E4D3A', marginBottom: '0.25rem' }}>Bundle & Save!</div>
          <div style={{ fontSize: '0.75rem', color: '#3d5240', lineHeight: 1.5 }}>2 courses = 5% · 3 courses = 10% · 4+ = 15% off your total fees</div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen 6: Professional Development ──────────────────────
function ProfessionalScreen({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ background: '#1E4D3A', padding: '1.25rem 1rem' }}>
        <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5A940', margin: '0 0 0.2rem' }}>6-Month · 12 Weeks</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#FBF8F1', margin: 0 }}>Professional Development</h2>
      </div>
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        {SIX_MONTH_COURSES.map(c => (
          <button key={c.id} onClick={() => onSelect(c.id)}
            style={{ borderRadius: '1rem', overflow: 'hidden', background: '#fff', border: '1px solid rgba(30,77,58,0.1)', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: 'var(--font-body)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ position: 'relative', height: '110px', background: '#2d7a5c', overflow: 'hidden' }}>
              <img src={c.image} alt={c.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.82 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(20,46,35,0.5), transparent)' }} />
            </div>
            <div style={{ padding: '0.875rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#1E4D3A', lineHeight: 1.25 }}>{c.title}</div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#C97D1A', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{formatZAR(c.fee)}</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#8BAF8A', margin: 0 }}>{c.duration} · Tap to view details</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Screen 7: Practical Skills ──────────────────────────────
function PracticalScreen({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ background: '#C97D1A', padding: '1.25rem 1rem' }}>
        <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(251,248,241,0.75)', margin: '0 0 0.2rem' }}>6-Week Courses</p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#FBF8F1', margin: 0 }}>Practical Skills</h2>
      </div>
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        {SIX_WEEK_COURSES.map(c => (
          <button key={c.id} onClick={() => onSelect(c.id)}
            style={{ borderRadius: '1rem', overflow: 'hidden', background: '#fff', border: '1.5px solid rgba(201,125,26,0.15)', cursor: 'pointer', textAlign: 'left', padding: 0, fontFamily: 'var(--font-body)' }}>
            <div style={{ position: 'relative', height: '110px', background: '#2d7a5c', overflow: 'hidden' }}>
              <img src={c.image} alt={c.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.82 }} />
              <span style={{ position: 'absolute', top: '0.6rem', left: '0.6rem', padding: '0.2rem 0.55rem', borderRadius: '99px', fontSize: '0.6rem', fontWeight: 700, background: '#C97D1A', color: '#FBF8F1' }}>Practical Skills</span>
            </div>
            <div style={{ padding: '0.875rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#1E4D3A', lineHeight: 1.25 }}>{c.title}</div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: '#C97D1A', whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{formatZAR(c.fee)}</span>
              </div>
              <p style={{ fontSize: '0.72rem', color: '#8BAF8A', margin: 0 }}>{c.duration} · Tap to view details</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Screen 8: Course Detail ─────────────────────────────────
function CourseDetailScreen({ courseId, selectedIds, onToggle, go }: {
  courseId: string; selectedIds: string[]; onToggle: (id: string) => void; go: (s: Screen) => void
}) {
  const course = ALL_COURSES.find(c => c.id === courseId) ?? ALL_COURSES[0]
  const sel = selectedIds.includes(course.id)
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ position: 'relative', height: '190px', background: '#2d7a5c' }}>
        <img src={course.image} alt={course.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,46,35,0.88) 30%, rgba(20,46,35,0.2))' }} />
        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
          <span style={{ padding: '0.2rem 0.6rem', borderRadius: '99px', fontSize: '0.6rem', fontWeight: 700, background: course.tag === 'Practical Skills' ? '#C97D1A' : '#1E4D3A', color: '#FBF8F1' }}>{course.tag}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#FBF8F1', margin: '0.3rem 0 0', lineHeight: 1.2 }}>{course.title}</h2>
        </div>
      </div>
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
          <div style={{ background: '#D6E8D5', borderRadius: '0.75rem', padding: '0.875rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5a7a5e', marginBottom: '0.2rem' }}>Fee</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 900, color: '#C97D1A' }}>{formatZAR(course.fee)}</div>
          </div>
          <div style={{ background: '#D6E8D5', borderRadius: '0.75rem', padding: '0.875rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#5a7a5e', marginBottom: '0.2rem' }}>Duration</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700, color: '#1E4D3A', lineHeight: 1.3 }}>{course.duration}</div>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: '0.875rem', padding: '1rem', border: '1px solid rgba(30,77,58,0.08)' }}>
          <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C97D1A', margin: '0 0 0.4rem' }}>Purpose</p>
          <p style={{ fontSize: '0.82rem', color: '#3d5240', lineHeight: 1.6, margin: 0 }}>{course.purpose}</p>
        </div>
        <div style={{ background: '#1E4D3A', borderRadius: '0.875rem', padding: '1rem' }}>
          <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F5A940', margin: '0 0 0.75rem' }}>Course Content</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {course.topics.map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(245,169,64,0.2)', border: '1px solid rgba(245,169,64,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', color: '#F5A940', flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(251,248,241,0.85)' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => onToggle(course.id)}
          style={{ padding: '0.875rem', borderRadius: '0.875rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.875rem', fontFamily: 'var(--font-body)', background: sel ? '#D6E8D5' : '#C97D1A', color: sel ? '#1E4D3A' : '#FBF8F1', marginBottom: '0.25rem' }}>
          {sel ? '✓ Added to Quote — Tap to Remove' : '+ Add to My Quote'}
        </button>
        <button onClick={() => go('contact')} style={{ padding: '0.875rem', borderRadius: '0.875rem', border: '1.5px solid rgba(30,77,58,0.2)', background: 'transparent', color: '#1E4D3A', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
          Enquire About This Course
        </button>
      </div>
    </div>
  )
}

// ─── Screen 9: Calculate Fees ────────────────────────────────
function FeesScreen({ selectedIds, onToggle, go }: { selectedIds: string[]; onToggle: (id: string) => void; go: (s: Screen) => void }) {
  const selected = ALL_COURSES.filter(c => selectedIds.includes(c.id))
  const subtotal = selected.reduce((s, c) => s + c.fee, 0)
  const disc = getDiscount(selected.length)
  const saved = subtotal * disc
  const total = subtotal - saved
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ background: '#C97D1A', padding: '1.25rem 1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#FBF8F1', margin: 0 }}>Calculate Fees</h2>
      </div>
      <div style={{ padding: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.1rem' }}>
          {[{ r: '1 Course', l: 'No discount', a: selected.length === 1 }, { r: '2 Courses', l: '5% off', a: selected.length === 2 }, { r: '3 Courses', l: '10% off', a: selected.length === 3 }, { r: '4+ Courses', l: '15% off', a: selected.length >= 4 }].map(t => (
            <div key={t.r} style={{ borderRadius: '0.75rem', padding: '0.75rem', textAlign: 'center', background: t.a ? '#1E4D3A' : '#D6E8D5' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: t.a ? 'rgba(251,248,241,0.65)' : '#5a7a5e', marginBottom: '0.2rem' }}>{t.r}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 900, color: t.a ? '#F5A940' : '#1E4D3A' }}>{t.l}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C97D1A', marginBottom: '0.6rem' }}>Select Courses</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          {ALL_COURSES.map(c => {
            const s = selectedIds.includes(c.id)
            return (
              <button key={c.id} onClick={() => onToggle(c.id)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 0.875rem', borderRadius: '0.75rem', background: s ? '#D6E8D5' : '#fff', border: s ? '1.5px solid #1E4D3A' : '1.5px solid rgba(30,77,58,0.12)', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid', borderColor: s ? '#1E4D3A' : 'rgba(30,77,58,0.3)', background: s ? '#1E4D3A' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', color: '#FBF8F1', flexShrink: 0 }}>{s && '✓'}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1C2B1E' }}>{c.title}</div>
                  <div style={{ fontSize: '0.62rem', color: '#8BAF8A' }}>{c.tag}</div>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: '#C97D1A', whiteSpace: 'nowrap' }}>{formatZAR(c.fee)}</span>
              </button>
            )
          })}
        </div>
        {selected.length > 0 && (
          <button onClick={() => go('my-quote')} style={{ width: '100%', padding: '0.9rem', borderRadius: '0.875rem', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
            View My Quote ({selected.length} course{selected.length > 1 ? 's' : ''} · {formatZAR(total)}) →
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Screen 10: My Quote ─────────────────────────────────────
function MyQuoteScreen({ selectedIds, onToggle, go }: { selectedIds: string[]; onToggle: (id: string) => void; go: (s: Screen) => void }) {
  const selected = ALL_COURSES.filter(c => selectedIds.includes(c.id))
  const subtotal = selected.reduce((s, c) => s + c.fee, 0)
  const disc = getDiscount(selected.length)
  const saved = subtotal * disc
  const total = subtotal - saved
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ background: '#142e23', padding: '1.25rem 1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#FBF8F1', margin: 0 }}>My Quote</h2>
      </div>
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        {selected.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#fff', borderRadius: '1rem', border: '1px solid rgba(30,77,58,0.08)' }}>
            <img src="/src/imports/image.png" alt="logo" style={{ width: '64px', objectFit: 'contain', margin: '0 auto 0.75rem', display: 'block' }} />
            <p style={{ fontSize: '0.875rem', color: '#8BAF8A', margin: '0 0 1rem' }}>No courses added yet.</p>
            <button onClick={() => go('courses-overview')} style={{ padding: '0.7rem 1.5rem', borderRadius: '99px', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Browse Courses →</button>
          </div>
        ) : (
          <>
            <div style={{ background: '#fff', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(30,77,58,0.1)' }}>
              <div style={{ padding: '0.875rem 1rem', background: '#1E4D3A', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: '#FBF8F1' }}>Selected Courses ({selected.length})</span>
                <button onClick={() => selected.forEach(c => onToggle(c.id))} style={{ fontSize: '0.7rem', color: 'rgba(251,248,241,0.5)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Clear all</button>
              </div>
              <div style={{ padding: '0.875rem 1rem' }}>
                {selected.map((c, i) => (
                  <div key={c.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: i < selected.length - 1 ? '1px solid rgba(30,77,58,0.07)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.tag === 'Practical Skills' ? '#C97D1A' : '#1E4D3A', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1C2B1E' }}>{c.title}</div>
                        <div style={{ fontSize: '0.62rem', color: '#8BAF8A' }}>{c.duration}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1C2B1E' }}>{formatZAR(c.fee)}</span>
                      <button onClick={() => onToggle(c.id)} style={{ fontSize: '0.6rem', width: '18px', height: '18px', borderRadius: '50%', border: 'none', background: 'rgba(201,125,26,0.15)', color: '#C97D1A', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✕</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#1E4D3A', borderRadius: '1rem', padding: '1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(251,248,241,0.6)', marginBottom: '0.3rem' }}><span>Subtotal</span><span>{formatZAR(subtotal)}</span></div>
              {disc > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#8BAF8A', marginBottom: '0.3rem' }}><span>Discount ({(disc * 100).toFixed(0)}%)</span><span>−{formatZAR(saved)}</span></div>}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 900, color: '#FBF8F1', borderTop: '1px solid rgba(251,248,241,0.1)', paddingTop: '0.6rem', marginTop: '0.25rem' }}><span>Total</span><span>{formatZAR(total)}</span></div>
              {disc > 0 && <p style={{ fontSize: '0.68rem', color: '#8BAF8A', textAlign: 'center', margin: '0.35rem 0 0' }}>You save {formatZAR(saved)}! 🎉</p>}
            </div>
            <button onClick={() => go('contact')} style={{ padding: '0.9rem', borderRadius: '0.875rem', background: '#C97D1A', color: '#FBF8F1', border: 'none', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
              Send Enquiry with This Quote →
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Screen 11: FAQ ──────────────────────────────────────────
function FAQScreen() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ background: '#1E4D3A', padding: '1.25rem 1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#FBF8F1', margin: 0 }}>FAQ</h2>
      </div>
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {FAQS.map((f, i) => (
          <div key={i} style={{ borderRadius: '0.875rem', background: '#fff', border: `1.5px solid ${open === i ? '#1E4D3A' : 'rgba(30,77,58,0.1)'}`, overflow: 'hidden' }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 1rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E4D3A', paddingRight: '0.75rem', lineHeight: 1.4 }}>{f.q}</span>
              <span style={{ fontSize: '1rem', color: '#1E4D3A', flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.15s', display: 'inline-block' }}>+</span>
            </button>
            {open === i && <div style={{ padding: '0 1rem 0.875rem', fontSize: '0.78rem', color: '#5a7a5e', lineHeight: 1.65 }}>{f.a}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Screen 12: Contact Us ───────────────────────────────────
function ContactScreen({ selectedIds }: { selectedIds: string[] }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [done, setDone] = useState(false)
  const selected = ALL_COURSES.filter(c => selectedIds.includes(c.id))
  const disc = getDiscount(selected.length)
  const total = selected.reduce((s, c) => s + c.fee, 0) * (1 - disc)

  if (done) return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: '#FBF8F1', textAlign: 'center' }}>
      <img src="/src/imports/image.png" alt="logo" style={{ width: '80px', objectFit: 'contain', marginBottom: '1rem' }} />
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#1E4D3A', margin: '0 0 0.5rem' }}>Thank you, {form.name}!</h3>
      <p style={{ fontSize: '0.8rem', color: '#5a7a5e', lineHeight: 1.65, maxWidth: '280px' }}>We'll respond within one business day with details and your personalised quote.</p>
      <button onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', message: '' }) }} style={{ marginTop: '1.25rem', fontSize: '0.8rem', fontWeight: 600, color: '#C97D1A', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Submit another →</button>
    </div>
  )

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: '#FBF8F1' }}>
      <div style={{ background: '#142e23', padding: '1.25rem 1rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: '#FBF8F1', margin: 0 }}>Contact Us</h2>
      </div>
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem' }}>
        {[{ icon: '📍', l: 'Location', v: 'Durban, KwaZulu-Natal' }, { icon: '📧', l: 'Email', v: 'info@pawsitivepetacademy.co.za' }, { icon: '📞', l: 'Phone', v: '+27 31 000 0000' }, { icon: '🕐', l: 'Hours', v: 'Mon–Fri, 08:00–17:00' }].map(i => (
          <div key={i.l} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#fff', borderRadius: '0.75rem', padding: '0.75rem', border: '1px solid rgba(30,77,58,0.08)' }}>
            <span style={{ fontSize: '0.95rem' }}>{i.icon}</span>
            <div>
              <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8BAF8A' }}>{i.l}</div>
              <div style={{ fontSize: '0.75rem', color: '#1C2B1E' }}>{i.v}</div>
            </div>
          </div>
        ))}
      </div>
      {selected.length > 0 && (
        <div style={{ margin: '0 1rem 0.75rem', background: '#D6E8D5', borderRadius: '0.875rem', padding: '0.875rem' }}>
          <p style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1E4D3A', margin: '0 0 0.4rem' }}>Your quote</p>
          {selected.map(c => <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#3d5240', padding: '0.1rem 0' }}><span>{c.title}</span><span>{formatZAR(c.fee)}</span></div>)}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: '#1E4D3A', borderTop: '1px solid rgba(30,77,58,0.15)', marginTop: '0.4rem', paddingTop: '0.4rem' }}><span>Total</span><span>{formatZAR(total)}</span></div>
        </div>
      )}
      <div style={{ margin: '0 1rem 1.5rem' }}>
        <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C97D1A', marginBottom: '0.75rem' }}>Send an Enquiry</p>
        <form onSubmit={e => { e.preventDefault(); setDone(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[{ l: 'Full Name *', k: 'name', t: 'text', p: 'Sarah Dlamini', r: true }, { l: 'Email *', k: 'email', t: 'email', p: 'sarah@email.com', r: true }, { l: 'Phone', k: 'phone', t: 'tel', p: '+27 82 000 0000', r: false }].map(f => (
            <div key={f.k}>
              <label style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E4D3A', marginBottom: '0.3rem' }}>{f.l}</label>
              <input required={f.r} type={f.t} placeholder={f.p} value={form[f.k as keyof typeof form]} onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))}
                style={{ width: '100%', padding: '0.65rem 0.875rem', borderRadius: '0.625rem', border: '1.5px solid rgba(30,77,58,0.18)', background: '#fff', color: '#1C2B1E', fontSize: '0.82rem', fontFamily: 'var(--font-body)', boxSizing: 'border-box' }} />
            </div>
          ))}
          <div>
            <label style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E4D3A', marginBottom: '0.3rem' }}>Message</label>
            <textarea rows={3} placeholder="Tell us about yourself..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              style={{ width: '100%', padding: '0.65rem 0.875rem', borderRadius: '0.625rem', border: '1.5px solid rgba(30,77,58,0.18)', background: '#fff', color: '#1C2B1E', fontSize: '0.82rem', fontFamily: 'var(--font-body)', resize: 'none', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ padding: '0.875rem', borderRadius: '0.75rem', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Send Enquiry →</button>
        </form>
      </div>
    </div>
  )
}

// ─── Bottom Nav ───────────────────────────────────────────────
const BOTTOM_TABS = [
  { screen: 'home' as Screen, label: 'Home', icon: '⌂' },
  { screen: 'about' as Screen, label: 'About', icon: '◎' },
  { screen: 'courses-overview' as Screen, label: 'Courses', icon: '☰' },
  { screen: 'fees' as Screen, label: 'Fees', icon: '₵' },
  { screen: 'contact' as Screen, label: 'Contact', icon: '✉' },
]

const SCREEN_ORDER: Screen[] = ['splash','home','about','why-us','courses-overview','professional','practical','course-detail','fees','my-quote','faq','contact']

// ─── Phone Shell ──────────────────────────────────────────────
export default function MobileApp({ onViewWebsite }: { onViewWebsite?: () => void }) {
  const [screen, setScreen] = useState<Screen>('splash')
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [courseId, setCourseId] = useState<string>(ALL_COURSES[0].id)
  const [history, setHistory] = useState<Screen[]>([])

  const toggleId = (id: string) => setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const go = (s: Screen) => {
    setHistory(h => [...h, screen])
    setScreen(s)
  }
  const goBack = () => {
    const prev = history[history.length - 1]
    if (prev) { setHistory(h => h.slice(0, -1)); setScreen(prev) }
  }
  const selectCourse = (id: string) => { setCourseId(id); go('course-detail') }

  const screenNum = SCREEN_ORDER.indexOf(screen) + 1
  const showBack = history.length > 0 && screen !== 'home' && screen !== 'splash'

  return (
    <div className="mobile-app-root" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #D6E8D5 0%, #FBF8F1 50%, #D6E8D5 100%)', padding: '2rem 1rem' }}>
      {/* Screen map */}
      <div className="mobile-screen-map" style={{ marginRight: '2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a7a5e', marginBottom: '0.4rem' }}>12 Screens</div>
        {SCREEN_ORDER.filter(s => s !== 'splash').map((s, i) => (
          <button key={s} onClick={() => go(s)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.6rem', borderRadius: '0.4rem', border: 'none', cursor: 'pointer', background: screen === s ? '#1E4D3A' : 'transparent', fontFamily: 'var(--font-body)', transition: 'background 0.15s' }}>
            <span style={{ fontSize: '0.6rem', fontWeight: 700, color: screen === s ? '#F5A940' : '#8BAF8A', width: '16px' }}>{i + 2}</span>
            <span style={{ fontSize: '0.72rem', fontWeight: screen === s ? 700 : 400, color: screen === s ? '#FBF8F1' : '#5a7a5e', whiteSpace: 'nowrap' }}>{SCREEN_TITLES[s]}</span>
          </button>
        ))}
      </div>

      {/* Back to website */}
      <div className="mobile-website-switch" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
        <button onClick={onViewWebsite ?? (() => window.location.href = '/')} style={{ padding: '0.4rem 0.875rem', borderRadius: '99px', background: '#1E4D3A', color: '#FBF8F1', border: 'none', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>Website</button>
      </div>

      {/* iPhone 14 Pro — physical shell */}
      <div className="mobile-device-shell" style={{ position: 'relative', flexShrink: 0 }}>

        {/* ── Left side buttons ── */}
        {/* Silent switch */}
        <div className="mobile-device-control" style={{ position: 'absolute', left: '-13px', top: '118px', width: '13px', height: '32px', background: 'linear-gradient(to right, #2a2a2a, #3a3a3a)', borderRadius: '4px 0 0 4px', boxShadow: '-2px 0 4px rgba(0,0,0,0.5)' }} />
        {/* Volume up */}
        <div className="mobile-device-control" style={{ position: 'absolute', left: '-13px', top: '178px', width: '13px', height: '62px', background: 'linear-gradient(to right, #2a2a2a, #3a3a3a)', borderRadius: '4px 0 0 4px', boxShadow: '-2px 0 4px rgba(0,0,0,0.5)' }} />
        {/* Volume down */}
        <div className="mobile-device-control" style={{ position: 'absolute', left: '-13px', top: '256px', width: '13px', height: '62px', background: 'linear-gradient(to right, #2a2a2a, #3a3a3a)', borderRadius: '4px 0 0 4px', boxShadow: '-2px 0 4px rgba(0,0,0,0.5)' }} />

        {/* ── Right side button (power) ── */}
        <div className="mobile-device-control" style={{ position: 'absolute', right: '-13px', top: '196px', width: '13px', height: '90px', background: 'linear-gradient(to left, #2a2a2a, #3a3a3a)', borderRadius: '0 4px 4px 0', boxShadow: '2px 0 4px rgba(0,0,0,0.5)' }} />

        {/* ── Outer chassis ── */}
        <div className="mobile-device-chassis" style={{
          width: '393px', height: '852px', borderRadius: '54px',
          background: 'linear-gradient(160deg, #2c2c2e 0%, #1c1c1e 40%, #111 100%)',
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.18),
            0 0 0 2px rgba(0,0,0,0.9),
            0 0 0 3px rgba(255,255,255,0.07),
            0 50px 120px rgba(0,0,0,0.6),
            0 20px 40px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.12)
          `,
          padding: '14px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* ── Inner screen bezel ── */}
          <div className="mobile-device-bezel" style={{
            flex: 1, borderRadius: '44px', overflow: 'hidden',
            background: '#000',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
            display: 'flex', flexDirection: 'column',
            position: 'relative',
          }}>
            {/* Status bar */}
            <div className="mobile-status-bar" style={{ height: '54px', background: screen === 'splash' ? '#1E4D3A' : '#111', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 1.5rem 0.5rem', flexShrink: 0, position: 'relative' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FBF8F1', fontFamily: 'var(--font-body)' }}>9:41</span>
              {/* Dynamic Island */}
              <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '126px', height: '34px', background: '#000', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#1a1a1a', border: '1.5px solid #2a2a2a' }} />
                <div style={{ width: '44px', height: '11px', borderRadius: '6px', background: '#1a1a1a', border: '1.5px solid #2a2a2a' }} />
              </div>
              <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><rect x="0" y="3" width="3" height="9" rx="0.5" fill="white" fillOpacity="0.4"/><rect x="4" y="2" width="3" height="10" rx="0.5" fill="white" fillOpacity="0.6"/><rect x="8" y="0" width="3" height="12" rx="0.5" fill="white" fillOpacity="0.8"/><rect x="12" y="0" width="3" height="12" rx="0.5" fill="white"/></svg>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M8 2C10.5 2 12.7 3.1 14.2 4.8L15.5 3.4C13.6 1.3 11 0 8 0C5 0 2.4 1.3 0.5 3.4L1.8 4.8C3.3 3.1 5.5 2 8 2Z" fillOpacity="0.5"/><path d="M8 5C9.7 5 11.2 5.7 12.3 6.9L13.6 5.5C12.1 3.9 10.2 3 8 3C5.8 3 3.9 3.9 2.4 5.5L3.7 6.9C4.8 5.7 6.3 5 8 5Z" fillOpacity="0.7"/><path d="M8 8C9 8 9.9 8.4 10.5 9.1L11.8 7.7C10.8 6.7 9.5 6 8 6C6.5 6 5.2 6.7 4.2 7.7L5.5 9.1C6.1 8.4 7 8 8 8Z" fillOpacity="0.9"/><circle cx="8" cy="11" r="1.5"/></svg>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <div style={{ width: '22px', height: '11px', border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: '3px', padding: '1.5px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '75%', height: '100%', background: '#4cd964', borderRadius: '1.5px' }} />
                  </div>
                  <div style={{ width: '2px', height: '5px', background: 'rgba(255,255,255,0.4)', borderRadius: '1px' }} />
                </div>
              </div>
            </div>

            {/* App area */}
            <div className="mobile-app-surface" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#FBF8F1' }}>
              {/* Top bar */}
              {screen !== 'splash' && (
                <div style={{ height: '48px', background: '#FBF8F1', borderBottom: '1px solid rgba(30,77,58,0.08)', display: 'flex', alignItems: 'center', padding: '0 0.875rem', gap: '0.5rem', flexShrink: 0 }}>
                  {showBack ? (
                    <button onClick={goBack} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#1E4D3A', padding: '0 0.25rem', lineHeight: 1 }}>‹</button>
                  ) : null}
                  <img src="/src/imports/image.png" alt="logo" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 700, color: '#1E4D3A' }}>{SCREEN_TITLES[screen]}</div>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {selectedIds.length > 0 && (
                      <button onClick={() => go('my-quote')} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#C97D1A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.58rem', fontWeight: 700, color: '#FBF8F1' }}>{selectedIds.length}</div>
                      </button>
                    )}
                    <span style={{ fontSize: '0.58rem', color: '#8BAF8A' }}>{screenNum}/12</span>
                  </div>
                </div>
              )}

              {/* Screen content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                {screen === 'splash' && <SplashScreen onDone={() => go('home')} />}
                {screen === 'home' && <HomeScreen go={go} />}
                {screen === 'about' && <AboutScreen go={go} />}
                {screen === 'why-us' && <WhyUsScreen />}
                {screen === 'courses-overview' && <CoursesOverviewScreen go={go} onSelect={selectCourse} />}
                {screen === 'professional' && <ProfessionalScreen onSelect={selectCourse} />}
                {screen === 'practical' && <PracticalScreen onSelect={selectCourse} />}
                {screen === 'course-detail' && <CourseDetailScreen courseId={courseId} selectedIds={selectedIds} onToggle={toggleId} go={go} />}
                {screen === 'fees' && <FeesScreen selectedIds={selectedIds} onToggle={toggleId} go={go} />}
                {screen === 'my-quote' && <MyQuoteScreen selectedIds={selectedIds} onToggle={toggleId} go={go} />}
                {screen === 'faq' && <FAQScreen />}
                {screen === 'contact' && <ContactScreen selectedIds={selectedIds} />}
              </div>

              {/* Bottom nav */}
              {screen !== 'splash' && (
                <div style={{ height: '64px', background: '#FBF8F1', borderTop: '1px solid rgba(30,77,58,0.1)', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {BOTTOM_TABS.map(tab => {
                    const active = screen === tab.screen || (tab.screen === 'courses-overview' && ['professional','practical','course-detail'].includes(screen)) || (tab.screen === 'fees' && screen === 'my-quote')
                    return (
                      <button key={tab.screen} onClick={() => go(tab.screen)}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem', background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem 0', fontFamily: 'var(--font-body)' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? '#1E4D3A' : 'transparent', transition: 'background 0.15s' }}>
                          <span style={{ fontSize: '0.85rem', filter: active ? 'brightness(10)' : 'none' }}>{tab.icon}</span>
                        </div>
                        <span style={{ fontSize: '0.52rem', fontWeight: active ? 700 : 500, color: active ? '#1E4D3A' : '#8BAF8A' }}>{tab.label}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Home indicator */}
            <div className="mobile-home-indicator" style={{ height: '30px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ width: '134px', height: '5px', background: 'rgba(255,255,255,0.28)', borderRadius: '3px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 export default MobileApp;

