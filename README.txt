MARTIAL ARTS ACADEMY - WEBSITE DOCUMENTATION
===========================================

PROJECT OVERVIEW:
This is a modern, premium, fully responsive, 8-page website developed exclusively using HTML5, CSS3, and vanilla JavaScript for MARTIAL ARTS ACADEMY.
It strictly adheres to all brand identity guidelines, limitation to exactly 8 CSS-styled image placeholders, Indian Rupee (INR) membership pricing, and zero external framework or library dependencies.

FOLDER STRUCTURE:
martial-arts-academy/
│
├── index.html                  (Page 1: Home Page with Hero, Intro, Programs, Values, Categories, Gallery & CTAs)
├── about.html                  (Page 2: About Us, Philosophy, Mission & Vision, Core Values, Training Environment)
├── programs.html               (Page 3: Karate, Taekwondo, Kickboxing, Boxing, Self-Defence, MMA, Beginner & Advanced Tracks)
├── kids-teens.html             (Page 4: Youth Training, Age-Cohort Breakdown 5-8/9-12/13-17, Parent Guide & FAQs)
├── self-defence-fitness.html   (Page 5: Practical Safety, Distance Management, Escape Drills, Martial Fitness & Conditioning)
├── instructors-gallery.html    (Page 6: Coach Profiles, Teaching Philosophy, 8-Slot Interactive Training Gallery & Lightbox)
├── schedule-membership.html    (Page 7: Weekly Timetable, INR Membership Plans, Comparison Matrix, Membership FAQs)
├── contact.html                (Page 8: Demo Contact Info, Validated Free Trial Class Form, General Enquiry Form, Map)
│
├── css/
│   └── style.css               (Shared Master Stylesheet: Variables, Grid/Flexbox, Typography, 8 Approved Placeholders)
│
├── js/
│   └── script.js               (Shared Vanilla JS: Sticky Nav, Mobile Menu, Active Tab Highlighting, FAQ Accordion,
│                                Category Filters, Lightbox Modal, Form Validations, Dynamic Year, Scroll-to-Top)
│
└── README.txt                  (Documentation and Image Replacement Guide)

8 APPROVED IMAGE PLACEHOLDERS:
All pages strictly utilize the 8 designated CSS image placeholder classes:
1. martial-arts-hero            (Hero stance inside modern training dojo)
2. martial-arts-training        (Students practicing under instructor supervision)
3. martial-arts-instructor      (Instructor demonstrating technique)
4. martial-arts-kids            (Children participating in supervised class)
5. martial-arts-self-defence    (Controlled self-defence drills)
6. martial-arts-kickboxing      (Athlete practicing striking with equipment)
7. martial-arts-academy-interior (Clean dojo hall with mats and gear)
8. martial-arts-group           (Group of students in training or event)

HOW TO RUN LOCALLY:
Simply double-click or open 'index.html' in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
No web server, node.js, or build pipeline is required.

IMAGE REPLACEMENT INSTRUCTIONS:
When replacing the placeholders with images generated via Google Flow:
1. Save your generated images into an `images/` directory.
2. Locate the comments marked `<!-- IMAGE PLACEHOLDER: ... -->` in the HTML files.
3. Replace the placeholder div with an `<img>` tag, e.g.:
   <img src="images/martial-arts-hero.jpg" alt="Martial arts athlete in stance" class="aspect-4-3" style="width:100%; object-fit:cover; border-radius:8px;">
