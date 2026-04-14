'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
]

const heroStats = [
  { value: '45', label: 'Hotel Rooms' },
  { value: '2,557', label: 'Happy Guests / yr' },
  { value: '5', label: 'Restaurants' },
]

const aboutFeatures = [
  { icon: '🌿', label: 'Veg & Vegan Options' },
  { icon: '🚗', label: 'Free Parking' },
  { icon: '♿', label: 'Wheelchair Accessible' },
  { icon: '👨‍👩‍👧', label: 'Family Seating' },
  { icon: '📶', label: 'Free Wi-Fi' },
  { icon: '🍽️', label: 'Dine-in & Takeaway' },
  { icon: '🐾', label: 'Pet Friendly' },
  { icon: '🛎️', label: 'Reservations Welcome' },
]

const galleryItems = [
  { icon: '🍽️', label: 'Main Dining Hall', description: 'Main Dining Hall', tall: true },
  { icon: '🛏️', label: 'Deluxe Suite', description: 'Deluxe Suite' },
  { icon: '☕', label: 'Café Lounge', description: 'Café Lounge' },
  { icon: '🌅', label: 'Hotel Exterior', description: 'Hotel Exterior & Grounds', wide: true },
  { icon: '🍲', label: 'Kitchen Cuisine', description: 'Fresh Cuisine' },
  { icon: '🛁', label: 'Bathroom Suite', description: 'Premium Bathroom' },
]

const menuTabs = [
  { id: 'all', label: 'All' },
  { id: 'veg', label: 'Vegetarian' },
  { id: 'nonveg', label: 'Non-Veg' },
  { id: 'dessert', label: 'Desserts' },
  { id: 'breakfast', label: 'Breakfast' },
]

const menuItems = [
  {
    cat: 'nonveg',
    emoji: '🍗',
    name: 'Chicken Handi',
    desc: 'Our signature slow-cooked chicken in a rich blend of aromatic spices — the dish Nuh talks about.',
    price: '₹320',
    badge: 'Signature',
  },
  {
    cat: 'veg',
    emoji: '🥘',
    name: 'Dal Makhani',
    desc: 'Slow-simmered black lentils with cream and butter, served with fresh tandoor bread.',
    price: '₹180',
    badge: 'Veg',
  },
  {
    cat: 'veg',
    emoji: '🫓',
    name: 'Paneer Tikka',
    desc: 'Chargrilled cottage cheese marinated in yogurt and spices — a vegetarian classic done right.',
    price: '₹220',
    badge: "Chef's Pick",
  },
  {
    cat: 'breakfast',
    emoji: '🥞',
    name: 'Breakfast Thali',
    desc: 'A wholesome spread of poori, sabzi, achar, curd, and fresh chai. Start your day right.',
    price: '₹150',
    badge: 'Morning',
  },
  {
    cat: 'nonveg',
    emoji: '🐟',
    name: 'Fish Curry',
    desc: 'Fresh fish simmered in a tangy mustard and tomato gravy, served with steamed rice.',
    price: '₹280',
    badge: 'Seasonal',
  },
  {
    cat: 'dessert',
    emoji: '🍮',
    name: 'Gulab Jamun',
    desc: 'Soft khoya dumplings soaked in rose-cardamom syrup — the perfect sweet ending.',
    price: '₹90',
    badge: 'Dessert',
  },
  {
    cat: 'veg',
    emoji: '🍛',
    name: 'Veg Biryani',
    desc: 'Basmati rice layered with seasonal vegetables, saffron, and fried onions. Served with raita.',
    price: '₹200',
    badge: 'Veg',
  },
  {
    cat: 'dessert',
    emoji: '🍦',
    name: 'Kulfi Falooda',
    desc: 'Traditional Indian ice cream with rose syrup, vermicelli, and basil seeds — a dessert experience.',
    price: '₹120',
    badge: 'Dessert',
  },
  {
    cat: 'nonveg',
    emoji: '🍖',
    name: 'Mutton Rogan Josh',
    desc: 'Succulent mutton cooked Kashmiri-style with bold spices and Kashmiri chillies.',
    price: '₹380',
    badge: 'Premium',
  },
]

const roomCards = [
  {
    icon: '🛏️',
    badge: 'Best Value',
    name: 'Standard Room',
    desc: 'A comfortable retreat with essential amenities for solo travellers and couples seeking quality rest.',
    amenities: ['Free Wi-Fi', 'AC', 'TV', 'Hot Water'],
    price: '₹800',
    max: 'Max: 2 Guests',
    buttonLabel: 'Book Now',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    badge: 'Most Popular',
    name: 'Standard Family Room',
    desc: 'Spacious family room designed for groups of up to 4, with twin beds and a cozy family atmosphere.',
    amenities: ['Free Wi-Fi', 'AC', 'Smart TV', 'Mini Bar', 'Hot Water'],
    price: '₹800',
    max: 'Max: 4 Guests',
    buttonLabel: 'Book Now',
  },
  {
    icon: '👑',
    badge: 'Premium',
    badgeStyle: { background: 'linear-gradient(90deg,#8B6914,#C9A84C)' },
    name: 'Deluxe Suite',
    desc: 'Our finest accommodation featuring a king bed, premium furnishings, and panoramic room views.',
    amenities: ['Free Wi-Fi', 'AC', '55" TV', 'Mini Bar', 'Sofa Area', 'Room Service'],
    price: '₹1,400',
    max: 'Max: 2 Guests',
    buttonLabel: 'Book Now',
  },
]

const reviews = [
  {
    stars: '★★★★★',
    text: '"The food here is absolutely incredible — the Chicken Handi is unlike anything I\'ve had before. Staff is warm and rooms are clean. Highly recommend!"',
    avatar: 'AK',
    name: 'Aryan Kumar',
    date: 'March 2026 · Gurgaon',
  },
  {
    stars: '★★★★★',
    text: '"Perfect stopover on the Delhi highway. Great price, clean rooms, and the breakfast thali in the morning is so good. Will stay again!"',
    avatar: 'PS',
    name: 'Priya Singh',
    date: 'February 2026 · Delhi',
  },
  {
    stars: '★★★★☆',
    text: '"Good service quality and reasonable pricing. The family room was spacious and comfortable. The all-you-can-eat option is great value for money."',
    avatar: 'MR',
    name: 'Mohammed Raza',
    date: 'January 2026 · Nuh',
  },
]

const contactItems = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Street 4X7X+7PG, Nuh, Haryana 122107, India',
  },
  {
    icon: '⏰',
    label: 'Opening Hours',
    value: 'Daily · 9:00 AM – 12:00 Midnight',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 124 796 3797',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'deepakhouse2005@gmail.com',
  },
]

const weatherRows = [
  { day: 'Today', time: '22°C / Clear' },
  { day: 'Thursday', time: '29°C' },
  { day: 'Friday', time: '33°C' },
  { day: 'Saturday', time: '35°C' },
  { day: 'Sunday', time: '36°C' },
  { day: 'Monday', time: '37°C' },
]

const footerLinks = [
  { title: 'Quick Links', links: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Book Now', href: '#booking' },
  ] },
  { title: 'Services', links: [
    { label: 'Dine-in', href: '#' },
    { label: 'Takeaway', href: '#' },
    { label: 'Drive-through', href: '#' },
    { label: 'Room Service', href: '#' },
    { label: 'Event Catering', href: '#' },
  ] },
  { title: 'Contact', links: [
    { label: 'deepakhouse2005@gmail.com', href: 'mailto:deepakhouse2005@gmail.com' },
    { label: '+91 124 796 3797', href: 'tel:+911247963797' },
    { label: 'Nuh, Haryana 122107', href: '#' },
    { label: '9 AM – 12 Midnight', href: '#' },
    { label: 'Open Every Day', href: '#' },
  ] },
]

const socialLinks = [
  { label: 'f', href: '#' },
  { label: 'in', href: '#' },
  { label: '📸', href: '#' },
  { label: '▶', href: '#' },
]

const formatDate = (date: Date) => date.toISOString().split('T')[0]

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false)
  const [popupActive, setPopupActive] = useState(false)
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [notificationText, setNotificationText] = useState('Special Offer! Book 2+ nights & get complimentary breakfast.')
  const [navScrolled, setNavScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [guestAdults, setGuestAdults] = useState(1)
  const [guestChildren, setGuestChildren] = useState(0)
  const [roomRate, setRoomRate] = useState(800)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [bookingName, setBookingName] = useState('')
  const [bookingEmail, setBookingEmail] = useState('')
  const [bookingPhone, setBookingPhone] = useState('')
  const [bookingNotes, setBookingNotes] = useState('')
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmEmail, setConfirmEmail] = useState('')
  const [popupName, setPopupName] = useState('')
  const [popupEmail, setPopupEmail] = useState('')
  const [cursorHover, setCursorHover] = useState(false)
  const [cursorClick, setCursorClick] = useState(false)

  const cursorRef = useRef<HTMLDivElement | null>(null)
  const cursorRingRef = useRef<HTMLDivElement | null>(null)
  const mxRef = useRef(0)
  const myRef = useRef(0)
  const rxRef = useRef(0)
  const ryRef = useRef(0)

  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dayAfter = new Date(today)
    dayAfter.setDate(dayAfter.getDate() + 3)
    setCheckIn(formatDate(tomorrow))
    setCheckOut(formatDate(dayAfter))
  }, [])

  useEffect(() => {
    if (!popupOpen) return
    const timer = window.setTimeout(() => setPopupActive(true), 50)
    return () => window.clearTimeout(timer)
  }, [popupOpen])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mxRef.current = event.clientX
      myRef.current = event.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`
        cursorRef.current.style.top = `${event.clientY}px`
      }
    }

    const animateRing = () => {
      rxRef.current += (mxRef.current - rxRef.current) * 0.12
      ryRef.current += (myRef.current - ryRef.current) * 0.12
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${rxRef.current}px`
        cursorRingRef.current.style.top = `${ryRef.current}px`
      }
      requestAnimationFrame(animateRing)
    }

    const onMouseDown = () => setCursorClick(true)
    const onMouseUp = () => setCursorClick(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    animateRing()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('cursor-hover', cursorHover)
    document.body.classList.toggle('cursor-click', cursorClick)
    return () => {
      document.body.classList.remove('cursor-hover')
      document.body.classList.remove('cursor-click')
    }
  }, [cursorHover, cursorClick])

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    revealElements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Popup disabled - removed setPopupOpen timer
    const notificationTimer = window.setTimeout(() => setNotificationVisible(true), 8000)
    return () => {
      window.clearTimeout(notificationTimer)
    }
  }, [])

  useEffect(() => {
    if (!notificationVisible) return
    const timeout = window.setTimeout(() => setNotificationVisible(false), 5000)
    return () => window.clearTimeout(timeout)
  }, [notificationVisible])

  const handleMouseEnter = () => setCursorHover(true)
  const handleMouseLeave = () => setCursorHover(false)
  const handleMouseDown = () => setCursorClick(true)
  const handleMouseUp = () => setCursorClick(false)

  const interactiveProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  }

  const closePopup = () => {
    setPopupActive(false)
    window.setTimeout(() => setPopupOpen(false), 400)
    setNotificationText('Special Offer! Book 2+ nights & get complimentary breakfast.')
    setNotificationVisible(true)
  }

  const handlePopupSubmit = () => {
    if (!popupName.trim() || !popupEmail.trim()) {
      window.alert('Please fill in both fields.')
      return
    }
    closePopup()
    setTimeout(() => {
      setNotificationText(`Thank you, ${popupName.trim()}! Your exclusive offer is on its way.`)
      setNotificationVisible(true)
    }, 800)
  }

  const filteredMenu = useMemo(
    () => menuItems.filter(item => activeCategory === 'all' || item.cat === activeCategory),
    [activeCategory]
  )

  const nextCheckin = useMemo(() => new Date(checkIn), [checkIn])
  const nextCheckout = useMemo(() => new Date(checkOut), [checkOut])
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0
    return Math.max(0, Math.round((nextCheckout.valueOf() - nextCheckin.valueOf()) / 86400000))
  }, [checkIn, checkOut, nextCheckin, nextCheckout])

  const totalAmount = useMemo(() => {
    if (nights < 2) return ''
    return `₹${Math.round(nights * roomRate * 1.1).toLocaleString('en-IN')}`
  }, [nights, roomRate])

  const changeGuestCount = (type: 'adults' | 'children', delta: number) => {
    if (type === 'adults') {
      setGuestAdults(prev => Math.max(1, prev + delta))
    } else {
      setGuestChildren(prev => Math.max(0, prev + delta))
    }
  }

  const submitBooking = () => {
    if (!bookingName.trim() || !bookingEmail.trim() || !bookingPhone.trim() || !checkIn || !checkOut) {
      window.alert('Please fill in all required fields.')
      return
    }
    if (nights < 2) {
      window.alert('Minimum stay is 2 nights. Please adjust your dates.')
      return
    }
    const selectedRoom = roomRate === 1400 ? 'Deluxe Suite — ₹1,400/night' : bookingRoomLabel(roomRate)
    const total = Math.round(nights * roomRate * 1.1)
    const subject = encodeURIComponent(`New Booking: ${bookingName.trim()} · ${checkIn} to ${checkOut}`)
    const body = encodeURIComponent(
      `NEW BOOKING REQUEST\n\nName: ${bookingName.trim()}\nEmail: ${bookingEmail.trim()}\nPhone: ${bookingPhone.trim()}\nRoom: ${selectedRoom}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nNights: ${nights}\nAdults: ${guestAdults}\nChildren: ${guestChildren}\nTotal (incl. 10% service): ₹${total.toLocaleString('en-IN')}\nSpecial Requests: ${bookingNotes.trim() || 'None'}\n\nSent from City Hotel Nuh website.`
    )
    window.open(`mailto:deepakhouse2005@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setConfirmEmail(bookingEmail.trim())
    setConfirmOpen(true)
  }

  const bookingRoomLabel = (rate: number) => {
    if (rate === 1400) return 'Deluxe Suite — ₹1,400/night'
    return 'Standard / Family Room — ₹800/night'
  }

  return (
    <> 
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={cursorRingRef} />

      <div id="confirm-modal" className={confirmOpen ? 'show' : ''}>
        <div className="confirm-box">
          <div className="confirm-icon">✅</div>
          <h3>Booking Confirmed!</h3>
          <p>
            Your reservation has been received. A confirmation has been sent to{' '}
            <strong style={{ color: 'var(--gold)' }}>{confirmEmail}</strong>.
            Our team will reach out shortly.
          </p>
          <button
            className="btn-gold"
            type="button"
            onClick={() => setConfirmOpen(false)}
            {...interactiveProps}
          >
            Close
          </button>
        </div>
      </div>

      <div id="notification" className={notificationVisible ? 'show' : ''}>
        <div className="notif-icon">🎉</div>
        <div className="notif-text">
          <strong>Special Offer!</strong><br />{notificationText}
        </div>
      </div>

      <nav id="navbar" className={navScrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" {...interactiveProps}>
          City <span>Hotel</span>
        </a>
        <div className="nav-links">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} {...interactiveProps}>
              {link.label}
            </a>
          ))}
          <a href="#booking" className="btn-gold nav-cta" style={{ padding: '10px 22px', fontSize: '12px' }} {...interactiveProps}>
            Book Now
          </a>
        </div>
        <button
          id="mobile-toggle"
          type="button"
          onClick={() => setMobileOpen(prev => !prev)}
          {...interactiveProps}
        >
          ☰
        </button>
      </nav>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} {...interactiveProps}>
            {link.label}
          </a>
        ))}
        <a href="#booking" onClick={() => setMobileOpen(false)} className="btn-gold outline" style={{ width: '100%', justifyContent: 'center' }} {...interactiveProps}>
          Book Now
        </a>
      </div>

      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-pattern" />
        <div className="hero-content">
          <div className="hero-badge">
            <span />
            Nuh, Haryana · Est. 2010
            <span />
          </div>
          <h1 className="hero-title">
            City Hotel &<br />
            <em>Restaurant</em>
          </h1>
          <p className="hero-subtitle">
            Where comfort meets culinary excellence — a sanctuary of warmth, flavour, and refined hospitality in the heart of Nuh.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn-gold" {...interactiveProps}>
              Reserve a Room
            </a>
            <a href="#menu" className="btn-gold outline" {...interactiveProps}>
              View Menu
            </a>
          </div>
        </div>
        <div className="hero-stats">
          {heroStats.map(stat => (
            <div className="hero-stat" key={stat.label}>
              <div className="hero-stat-num">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>
      </section>

      <section id="about">
        <div className="about-grid">
          <div className="about-visual reveal">

  <div className="about-image-container" style={{
    width: '100%',
    height: '65vh',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative'
  }}>

    <img
      src="/images/hotel.jpeg"
      alt="City Hotel"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
        display: 'block'
      }}
    />

    {/* Overlay Text */}
    

  </div>

  {/* Badge */}
  <div className="about-badge">
    4.8 ★<small>Guest Rating</small>
  </div>

</div>
          <div className="reveal">
            <div className="section-tag">Our Story</div>
            <h2 className="section-title">
              A Legacy of<br />
              <em>Fine Hospitality</em>
            </h2>
            <p className="section-sub">
              City Hotel Restaurant & Lodge has been the premier destination in Nuh for guests seeking exceptional dining and comfortable accommodation. We pride ourselves on a family-friendly environment that is welcoming to all.
            </p>
            <p className="section-sub" style={{ marginTop: '14px' }}>
              From our signature Chicken Handi to our all-day breakfast spreads, every dish is crafted with passion. Our restaurant operates daily from 9 AM to midnight, serving breakfast, brunch, lunch, dinner, and desserts.
            </p>
            <div className="features-grid" style={{ marginTop: '32px' }}>
              {aboutFeatures.map(feature => (
                <div className="feature-pill" key={feature.label} {...interactiveProps}>
                  <span className="ico">{feature.icon}</span>
                  {feature.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="gallery-header reveal">
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Our Spaces
          </div>
          <h2 className="section-title">
            Experience the<br />
            <em>Atmosphere</em>
          </h2>
        </div>
        <div className="gold-divider reveal">
          <div className="gold-divider-diamond" />
        </div>
        <div className="gallery-grid reveal">
          {galleryItems.map((item, index) => (
            <div
              key={item.label}
              className={`gallery-item ${item.tall ? 'tall' : ''} ${item.wide ? 'wide' : ''}`}
              {...interactiveProps}
            >
              <div className="gallery-placeholder" style={item.wide ? { minHeight: '200px' } : undefined}>
                <span className="gallery-icon">{item.icon}</span>
                <span className="gallery-label">{item.label}</span>
              </div>
              <div className="gallery-overlay">
                <div className="gallery-overlay-text">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal">
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>
            Add your real photos to this gallery by replacing the placeholder elements above
          </p>
        </div>
      </section>

      <section id="menu">
        <div className="reveal" style={{ marginBottom: '40px' }}>
          <div className="section-tag">Our Kitchen</div>
          <h2 className="section-title">
            A Menu Built on<br />
            <em>Passion & Flavour</em>
          </h2>
          <p className="section-sub">From hearty breakfasts to midnight desserts — our kitchen never sleeps.</p>
        </div>
        <div className="menu-tabs reveal">
          {menuTabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              className={`menu-tab ${activeCategory === tab.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(tab.id)}
              {...interactiveProps}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="menu-grid reveal">
          {filteredMenu.map(item => (
            <div key={item.name} className="menu-card visible" data-cat={item.cat} {...interactiveProps}>
              <div className="menu-card-emoji">{item.emoji}</div>
              <div className="menu-card-name">{item.name}</div>
              <div className="menu-card-desc">{item.desc}</div>
              <div className="menu-card-footer">
                <span className="menu-price">{item.price}</span>
                <span className="menu-badge">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="rooms">
        <div className="reveal" style={{ marginBottom: '48px' }}>
          <div className="section-tag">Accommodation</div>
          <h2 className="section-title">
            Rest in <em>Comfort</em>
          </h2>
          <p className="section-sub">45 thoughtfully designed rooms — from cozy standard rooms to spacious family suites — at unbeatable prices.</p>
        </div>
        <div className="rooms-grid">
          {roomCards.map(room => (
            <div className="room-card reveal" key={room.name} {...interactiveProps}>
              <div className="room-img" style={{ position: 'relative' }}>
                <span>{room.icon}</span>
                <div className="room-badge" style={room.badgeStyle}>{room.badge}</div>
              </div>
              <div className="room-body">
                <div className="room-name">{room.name}</div>
                <div className="room-desc">{room.desc}</div>
                <div className="room-amenities">
                  {room.amenities.map(amenity => (
                    <span key={amenity} className="amenity-tag">{amenity}</span>
                  ))}
                </div>
                <div className="room-footer">
                  <div className="room-price-wrap">
                    <div className="room-price">{room.price}</div>
                    <div className="room-price-label">per night</div>
                    <div className="room-max">{room.max}</div>
                  </div>
                  <a href="#booking" className="btn-gold" style={{ padding: '12px 22px', fontSize: '13px' }} {...interactiveProps}>
                    {room.buttonLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="booking">
        <div className="booking-grid">
          <div className="booking-info-side reveal">
            <div className="section-tag">Reservations</div>
            <h2 className="section-title">
              Book Your<br />
              <em>Stay</em>
            </h2>
            <p className="section-sub">Reservations are confirmed directly to our team. Minimum 2-night stay required. All bookings confirmed via email.</p>
            <ul className="info-list">
              <li className="info-item">
                <div className="info-icon">📅</div>
                <div className="info-text">
                  <h4>Check-in / Check-out</h4>
                  <p>Check-in from 12:00 PM · Check-out by 11:00 AM</p>
                </div>
              </li>
              <li className="info-item">
                <div className="info-icon">✅</div>
                <div className="info-text">
                  <h4>Minimum Stay</h4>
                  <p>A minimum of 2 nights is required for all bookings.</p>
                </div>
              </li>
              <li className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-text">
                  <h4>Confirmation</h4>
                  <p>Booking confirmations are sent to deepakhouse2005@gmail.com and your provided email.</p>
                </div>
              </li>
              <li className="info-item">
                <div className="info-icon">💳</div>
                <div className="info-text">
                  <h4>Payment</h4>
                  <p>Cash accepted at hotel. Online payment via UPI available on request.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="booking-form-wrap reveal">
            <div className="form-title">Reserve Your Room</div>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Rahul Sharma"
                value={bookingName}
                onChange={e => setBookingName(e.target.value)}
                {...interactiveProps}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="rahul@email.com"
                  value={bookingEmail}
                  onChange={e => setBookingEmail(e.target.value)}
                  {...interactiveProps}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={bookingPhone}
                  onChange={e => setBookingPhone(e.target.value)}
                  {...interactiveProps}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Check-in Date</label>
                <input
                  className="form-input"
                  type="date"
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  {...interactiveProps}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Check-out Date</label>
                <input
                  className="form-input"
                  type="date"
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                  {...interactiveProps}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Room Type</label>
              <select
                className="form-select"
                value={roomRate}
                onChange={e => setRoomRate(Number(e.target.value))}
                {...interactiveProps}
              >
                <option value={800}>Standard Room — ₹800/night</option>
                <option value={800}>Standard Family Room — ₹800/night</option>
                <option value={1400}>Deluxe Suite — ₹1,400/night</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Guests</label>
              <div className="form-counter">
                <button className="counter-btn" type="button" onClick={() => changeGuestCount('adults', -1)} {...interactiveProps}>−</button>
                <span className="counter-val">{guestAdults}</span>
                <button className="counter-btn" type="button" onClick={() => changeGuestCount('adults', 1)} {...interactiveProps}>+</button>
                <span className="counter-label">Adults</span>
                <button className="counter-btn" type="button" onClick={() => changeGuestCount('children', -1)} style={{ marginLeft: '16px' }} {...interactiveProps}>−</button>
                <span className="counter-val">{guestChildren}</span>
                <button className="counter-btn" type="button" onClick={() => changeGuestCount('children', 1)} {...interactiveProps}>+</button>
                <span className="counter-label">Children</span>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Special Requests</label>
              <textarea
                className="form-textarea"
                placeholder="Any preferences, dietary requirements or special occasions..."
                value={bookingNotes}
                onChange={e => setBookingNotes(e.target.value)}
                {...interactiveProps}
              />
            </div>
            <div className="booking-total">
              <div className="booking-total-label">Estimated Total</div>
              <div className="booking-total-amount" style={{ color: nights < 2 ? '#E24B4A' : 'var(--gold)' }}>
                {nights < 2 ? 'Min 2 nights' : totalAmount}
              </div>
              <div className="booking-total-note">+ 10% service fee · Minimum 2 nights</div>
            </div>
            <button className="btn-gold" style={{ width: '100%', padding: '16px' }} type="button" onClick={submitBooking} {...interactiveProps}>
              Confirm Reservation →
            </button>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="testimonials-header reveal">
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Guest Reviews
          </div>
          <h2 className="section-title">
            What Our <em>Guests Say</em>
          </h2>
        </div>
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.name} className="review-card reveal" {...interactiveProps}>
              <div className="review-stars">{review.stars}</div>
              <div className="review-text">{review.text}</div>
              <div className="review-author">
                <div className="review-avatar">{review.avatar}</div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="location">
        <div className="location-grid">
          <div className="reveal">
            <div className="section-tag">Find Us</div>
            <h2 className="section-title">
              At the<br />
              <em>Heart of Nuh</em>
            </h2>
            <p className="section-sub">Conveniently located on Street 4X7X+7PG, Nuh — with free parking for all guests.</p>
            <ul className="contact-list">
              {contactItems.map(item => (
                <li key={item.label} className="contact-item" {...interactiveProps}>
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '28px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>
                Current Weather — Nuh
              </div>
              <div className="hours-grid">
                {weatherRows.map(row => (
                  <div key={row.day} className="hour-row">
                    <span className="day">{row.day}</span>
                    <span className="time">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="reveal">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523!2d76.9791!3d28.1060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d61b9e6a3d0e5%3A0x1234!2sNuh%2C+Haryana!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a href="https://maps.google.com/?q=Nuh+Haryana+122107" target="_blank" rel="noreferrer" className="btn-gold outline" style={{ marginTop: '20px', display: 'inline-flex', width: '100%', justifyContent: 'center' }} {...interactiveProps}>
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo" style={{ fontSize: '26px' }} {...interactiveProps}>
              City <span>Hotel</span>
            </a>
            <p>
              City Hotel Restaurant & Lodge — a sanctuary of flavour, comfort, and heartfelt hospitality in the heart of Nuh, Haryana since 2010.
            </p>
            <div className="social-links">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} className="social-link" {...interactiveProps}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map(section => (
            <div key={section.title} className="footer-col">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map(item => (
                  <li key={item.label}>
                    <a href={item.href} {...interactiveProps}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 City Hotel Restaurant & Lodge, Nuh. All rights reserved.</span>
          <span>Designed with ❤ for <a href="#hero">City Hotel Nuh</a></span>
        </div>
      </footer>
    </>
  )
}
