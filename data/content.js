// =============================================================
//  content.js — Single Source of Truth
//  The Growth of a Quiet Soul | Patricia Keana R. Roma | AdDU SIP Portfolio
// =============================================================

export const content = {

  meta: {
    name:    'Patricia Keana R. Roma',
    program: 'AB Psychology (Accelerated 3-Year Curriculum)',
    school:  'Ateneo de Davao University',
    tagline: 'A guided, reflective journey through formation, internship, and becoming.'
  },

  // ─── JOURNEY ────────────────────────────────────────────────
  journey: {
    heroImage: {
      src:         '/assets/images/EDITORIAL/threshold_door_light.png',
      alt:         'A threshold of light — a door opening into a sunlit room',
      placeholder: null
    },
    directionImage: {
      src:         '/assets/images/EDITORIAL/fork_path.png',
      alt:         'A path diverging across an open field, symbolizing direction and choice',
      placeholder: null
    },
    pauseImage: {
      src:         '/assets/images/EDITORIAL/ordinary_light_cup.png',
      alt:         'A ceramic cup in morning light, a moment of stillness',
      placeholder: null
    },
    stages: [
      {
        id:      'seed',
        year:    '2024',
        title:   'The Seed',
        theme:   'Isolation',
        period:  'Academic Survival, Finding Solitude',
        body:    'Starting an accelerated three-year psychology program meant compressing years of formation into a shorter, more intense arc. The early days were marked by quiet struggle: learning to manage the weight of expectations, navigating a rigorous curriculum, and sitting with the discomfort of not yet knowing who I was becoming.',
        milestones: [
          'Enrolled in accelerated 3-year AB Psychology program',
          'Navigated early academic pressure and identity questions',
          'Discovered solitude as a space for self-understanding'
        ],
        image: { src: '/assets/images/journey-seed.PNG', alt: 'The Seed Phase' }
      },
      {
        id:      'sprout',
        year:    '2025',
        title:   'The Sprout',
        theme:   'Connection',
        period:  'Finding Safety in Connection, Mentorship',
        body:    'Through Ignatian formation and the support of mentors in clinical and educational settings, I began to find my footing. The Discernment of Spirits gave me language for what I was feeling. Community became not a distraction but a source of genuine nourishment.',
        milestones: [
          'Began clinical and educational internship experiences',
          'Engaged deeply with Ignatian formation and retreat practices',
          'Found mentorship and community in the psychology program',
          'Presented at the Salik-Sikolohiya conference'
        ],
        image: { src: '/assets/images/journey-sprout.png', alt: 'The Sprout Phase' }
      },
      {
        id:      'bloom',
        year:    '2026',
        title:   'The Bloom',
        theme:   'Achievement',
        period:  'Quiet Persistence, Growth, Clinical Practice',
        body:    'Graduation nears not as a finish line but as a threshold. A 3.5 QPI, Dean\'s Lister standing, 40-hour RBT training, and diverse internship experiences across clinical, educational, community, and I/O settings: each credential is less a trophy and more a layer of formation, evidence of care turned into competence.',
        milestones: [
          'Maintained 3.5 QPI — consistent Dean\'s Lister',
          'Completed 40-hour RBT (Registered Behavior Technician) training',
          'Internship experiences: clinical, educational, community, I/O',
          'Preparing for IELTS and Master\'s degree pursuit in Australia'
        ],
        image: { src: '/assets/images/journey-bloom.png', alt: 'The Bloom Phase' }
      }
    ]
  },

  // ─── JOURNAL ────────────────────────────────────────────────
  journal: {
    intro: 'Six entries drawn from the interior life of an internship. Each one a small room entered, examined, and left transformed.',
    heroImage: { src: '/assets/images/journal-hero.png', alt: 'Journal Hero Image' },
    collageImages: [
      {
        src:         '/assets/images/LIFESTYLE/collage_quiet_radius.png',
        alt:         'Collage: writing, clay hands, a figure walking a path',
        placeholder: null
      },
      {
        src:         '/assets/images/LIFESTYLE/collage_still_hours.png',
        alt:         'Collage: journaling at a desk, a child with blocks, quiet interior',
        placeholder: null
      }
    ],
    entries: [
      {
        id:      'armor',
        number:  '01',
        title:   'The Armor',
        theme:   'Isolation',
        excerpt: 'I wore the armor of a polished professional, performing competence to hide my own insecurities.',
        image: {
          src:         '/assets/images/EDITORIAL/turning_wall_figure.png',
          alt:         'A figure facing a wall, leaning in, a shadow behind them',
          placeholder: null
        },
        modalImage: {
          src:         '/assets/images/journal-1.png',
          alt:         'My AdDU Pin',
          placeholder: null
        },
        body: [
          'Before his conversion, St. Ignatius was a proud soldier whose life was changed by a shattering cannonball at Pamplona. Later, he spent months in a cave at Manresa driving himself crazy with perfectionism. He treated his relationship with God like a grueling test he was constantly failing.',
          'When I started my clinical internship at the special needs intervention center, I realized I was doing the exact same thing. I wore the armor of a polished professional, trying to be the perfect intern who always knew exactly what to do. I performed competence to hide my own insecurities and my deep fear of failing the kids who relied on me.'
        ]
      },
      {
        id:      'desert',
        number:  '02',
        title:   'The Desert',
        theme:   'Silence and Waiting',
        excerpt: 'The silence in the room felt incredibly heavy. The lack of immediate progress felt like a barren desert where nothing was taking root.',
        image: {
          src:         '/assets/images/EDITORIAL/evidence_desk_study.png',
          alt:         'A study desk with notes — the labor of learning',
          placeholder: null
        },
        modalImage: {
          src:         '/assets/images/journal-2.png',
          alt:         'Organizing Envelopes',
          placeholder: null
        },
        body: [
          'In the beginning, the silence in the room felt incredibly heavy. When the kids could not even speak, the lack of immediate progress felt like a barren desert where nothing was taking root. I constantly wondered if any of the energy I was pouring out was actually making a difference.',
          'I fell into a transactional mindset, secretly believing that if I was the perfect intern and got these kids to talk, then God and my supervisors would be pleased with me.'
        ]
      },
      {
        id:      'holy-limits',
        number:  '03',
        title:   'Holy Limits',
        theme:   'The Transactional Mindset',
        excerpt: 'I secretly believed that if I was the perfect intern, then God and my supervisors would be pleased with me.',
        image: {
          src:         '/assets/images/EDITORIAL/fork_path.png',
          alt:         'A path diverging — the moment of choosing a different way forward',
          placeholder: null
        },
        modalImage: {
          src:         '/assets/images/journal-3.PNG',
          alt:         'My Pixel Art',
          placeholder: null
        },
        body: [
          'The transactional mindset is seductive because it looks like diligence. I told myself I was being disciplined, professional, committed. But underneath the effort was a quiet bargaining: if I perform well enough, I will be worthy.',
          'Ignatius recognized this pattern during his Manresa period: the exhausting labor of trying to earn what can only be received. The limits of that approach were not failures. They were the very doorway toward a different kind of service.'
        ]
      },
      {
        id:      'river',
        number:  '04',
        title:   'The River',
        theme:   'The Cardoner Moment',
        excerpt: 'A quiet moment of clarity where everything previously ordinary glowed with God\'s presence.',
        image: {
          src:         '/assets/images/EDITORIAL/still_current_river.png',
          alt:         'A still river with reeds reflected in calm water',
          placeholder: null
        },
        modalImage: {
          src:         '/assets/images/journal-4.png',
          alt:         'My Favorite Person',
          placeholder: null
        },
        body: [
          'When Ignatius sat by the River Cardoner, there were no dramatic visions or parting clouds. Instead, it was a quiet moment of clarity where he received a new lens through which to see the world. Suddenly, everything he previously saw as ordinary was glowing with God\'s presence.',
          'My own Cardoner moment did not look like a dramatic vision either. It happened when my perspective completely shifted as the children transformed from completely silent to so wonderfully noisy that we actually had to tell them "Quiet Mouth." What I used to see as an impossible, frustrating challenge now looked like a profound, unfolding miracle.'
        ]
      },
      {
        id:      'one-greater-choice',
        number:  '05',
        title:   'The One Greater Choice',
        theme:   'Serving from Gratitude',
        excerpt: 'I no longer want to serve out of a nervous desire to fulfill my basic internship duties or build my ego.',
        image: {
          src:         '/assets/images/LIFESTYLE/collage_threshold.png',
          alt:         'Collage: figures at thresholds, light through a doorway',
          placeholder: null
        },
        modalImage: {
          src:         '/assets/images/journal-5.png',
          alt:         'Australia Career Goal',
          placeholder: null
        },
        body: [
          'The word Magis does not mean "do more." It means choose the greater good, the deeper love, the more selfless path. When the choice is between serving because you fear failure and serving because you are responding to unearned grace, those two motivations produce entirely different kinds of presence.',
          'I no longer want to serve out of a nervous desire to fulfill my basic internship duties or build my ego. I want to respond to this unearned grace by serving purely out of gratitude. The difference is not in the action but in the root from which it grows.'
        ]
      },
      {
        id:      'finding-god',
        number:  '06',
        title:   'Finding God in All Things',
        theme:   'The Holy in the Noise',
        excerpt: 'Their disruptive chatter was not a classroom management problem. It was the beautiful, triumphant sound of healing.',
        image: {
          src:         '/assets/images/LIFESTYLE/collage_still_hours.png',
          alt:         'Collage: a therapist with a child, quiet domestic moments',
          placeholder: null
        },
        modalImage: {
          src:         '/assets/images/journal-6.png',
          alt:         'Writing on Notebook',
          placeholder: null
        },
        body: [
          'Seen in God\'s light, their disruptive chatter was not a classroom management problem. It was the beautiful, triumphant sound of healing and immense progress. I learned to stop looking for spiritual perfection and start noticing the holy in the messy, loud, and very ordinary moments.',
          'I am choosing to eagerly embrace the beautiful chaotic noise of my patients finding their voices as my own Cardoner moment of seeing all things new. This is what Ignatian spirituality taught me: God is not only found in the cathedral. God is in the classroom, in the noise, in the incomplete sentence that finally breaks the silence.'
        ]
      }
    ]
  },

  // ─── CONVERSION STORY ───────────────────────────────────────
  story: {
    heroImage: {
      src:         '/assets/images/EDITORIAL/still_current_river.png',
      alt:         'A still current river — calm, reflective, unhurried',
      placeholder: null
    },
    pauseImage: {
      src:         '/assets/images/STILL_LIFE/still_stones_bowl.png',
      alt:         'Three smooth river stones in a bowl — a visual pause between desert and river',
      placeholder: null
    },
    introQuote: 'From perfectionism to gratitude. From performing to receiving. From the desert to the river.',
    sections: [
      {
        id:      'armor-desert',
        heading: 'The Armor and the Desert',
        paragraphs: [
          'Before his conversion, St. Ignatius was a proud soldier whose life was changed by a shattering cannonball at Pamplona. Later, he spent months in a cave at Manresa driving himself crazy with perfectionism. He treated his relationship with God like a grueling test he was constantly failing. When I started my clinical internship at the special needs intervention center, I realized I was doing the exact same thing. I wore the armor of a polished professional, trying to be the perfect intern who always knew exactly what to do. I performed competence to hide my own insecurities and my deep fear of failing the kids who relied on me.',
          'In the beginning, the silence in the room felt incredibly heavy. When the kids could not even speak, the lack of immediate progress felt like a barren desert where nothing was taking root. I constantly wondered if any of the energy I was pouring out was actually making a difference. I fell into a transactional mindset, secretly believing that if I was the perfect intern and got these kids to talk, then God and my supervisors would be pleased with me.'
        ]
      },
      {
        id:      'cardoner',
        heading: 'The Cardoner Moment',
        paragraphs: [
          'When Ignatius sat by the River Cardoner, there were no dramatic visions or parting clouds. Instead, it was a quiet moment of clarity where he received a new lens through which to see the world. Suddenly, everything he previously saw as ordinary was glowing with God\'s presence.',
          'My own Cardoner moment did not look like a dramatic vision either. It happened when my perspective completely shifted as the children transformed from completely silent to so wonderfully noisy that we actually had to tell them "Quiet Mouth." What I used to see as an impossible, frustrating challenge now looked like a profound, unfolding miracle. Seen in God\'s light, their disruptive chatter was not a classroom management problem. It was the beautiful, triumphant sound of healing and immense progress. I learned to stop looking for spiritual perfection and start noticing the holy in the messy, loud, and very ordinary moments.'
        ]
      },
      {
        id:      'loved-first',
        heading: 'I Loved You First',
        paragraphs: [
          'The core of this entire awakening was understanding the phrase "I loved you first." Imagining God saying this brought me an overwhelming sense of relief, instantly dissolving the heavy pressure I put on myself. Just as I fiercely loved the children at my center when they were completely silent, God loves my messy, imperfect efforts long before I ever "achieve" anything.',
          'This realization humbled me, much like that cannonball humbled Ignatius. I no longer want to serve out of a nervous desire to fulfill my basic internship duties or build my ego. I want to respond to this unearned grace by serving purely out of gratitude. I am choosing to eagerly embrace the beautiful chaotic noise of my patients finding their voices as my own Cardoner moment of seeing all things new.'
        ]
      }
    ]
  },

  // ─── PASSION PLAN ───────────────────────────────────────────
  vision: {
    heroImage: {
      src:         '/assets/images/EDITORIAL/turning_wall_figure.png',
      alt:         'A figure turning toward a blank frame on the wall — identity and becoming',
      placeholder: null
    },
    groundingImage: {
      src:         '/assets/images/STILL_LIFE/still_sketchbook_ship.png',
      alt:         'A sketchbook with a ship drawing — the imagination of journeying',
      placeholder: null
    },
    ikigai: [
      {
        label: 'What I Love',
        title: 'Passion',
        body:  'Understanding human behavior and finding structured ways to help people grow. Beyond academics, I find joy in creative outlets like writing stories and designing pixel art just for fun, which keeps me grounded. I also highly value continuous learning, whether that is reading about forensic psychology or immersing myself in compelling narratives.'
      },
      {
        label: 'What I Am Good At',
        title: 'Vocation',
        body:  'Applying psychological concepts to real-world scenarios. Through my accelerated 3-year program, I have developed strong time management, research, and analytical skills, which helped me maintain a 3.5 QPI and present at the Salik-Sikolohiya conference. I am also highly disciplined in my professional training, as seen in my progress with my 40-hour RBT course and practical applications during my clinical and educational internships.'
      },
      {
        label: 'What the World Needs',
        title: 'Mission',
        body:  'The world, especially the local community and the broader healthcare system, needs compassionate and well-trained professionals in special needs intervention. There is a strong need for evidence-based behavioral therapy and practitioners who view their clients through the lens of Cura Personalis, caring for the entire person rather than just treating a diagnosis.'
      },
      {
        label: 'What I Can Be Paid For',
        title: 'Profession',
        body:  'A career as a Registered Behavior Technician and eventually a clinical psychologist. My diverse internship experiences in clinical, educational, community, and I/O settings have equipped me with the versatile skills needed to thrive in behavioral therapy centers or institutional HR departments.'
      }
    ],
    missionStatement: 'My mission is to use my foundation in psychology and Applied Behavior Analysis to empower individuals, particularly those with special needs, to achieve greater independence and quality of life. I strive to continuously expand my expertise by pursuing my Master\'s degree abroad, allowing me to bring world-class psychological practices wherever I go. Ultimately, I aim to build a successful, independent career that proves my capabilities, fulfills my drive for excellence, and serves others for the greater glory of God.',
    vision: 'I envision myself as a fully independent and highly capable clinical psychologist or ABA specialist, having successfully completed my Master\'s degree in Australia. I am positioned in a community where my specialized training directly impacts children and families navigating developmental challenges. I am someone who has proven that I can stand on my own two feet, thriving in a fast-paced environment far from my comfort zone, while remaining empathetic and deeply rooted in the Ignatian values I learned at AdDU.',

    prayer: {
      label: 'A Prayer for My Future Self',
      lines: [
        'Lord, grant me the focus and peace I need to conquer my immediate hurdles like my IELTS exam.',
        'Guide my steps as I finish this accelerated journey, helping me prove my independence and strength.',
        'May I never lose sight of Cura Personalis, using my clinical skills to truly serve those in need.',
        'Let my future career be a testament to Your grace, finding lasting joy in the work I do for others.'
      ]
    },

    arrupeJourney: {
      label: 'My Arrupe Journey',
      slides: [
        { src: '/assets/images/arrupe/slide-1.png',  alt: 'Arrupe Journey Slide 1'  },
        { src: '/assets/images/arrupe/slide-2.png',  alt: 'Arrupe Journey Slide 2'  },
        { src: '/assets/images/arrupe/slide-3.png',  alt: 'Arrupe Journey Slide 3'  },
        { src: '/assets/images/arrupe/slide-4.png',  alt: 'Arrupe Journey Slide 4'  },
        { src: '/assets/images/arrupe/slide-5.png',  alt: 'Arrupe Journey Slide 5'  },
        { src: '/assets/images/arrupe/slide-6.png',  alt: 'Arrupe Journey Slide 6'  },
        { src: '/assets/images/arrupe/slide-7.png',  alt: 'Arrupe Journey Slide 7'  },
        { src: '/assets/images/arrupe/slide-8.png',  alt: 'Arrupe Journey Slide 8'  },
        { src: '/assets/images/arrupe/slide-9.png',  alt: 'Arrupe Journey Slide 9'  },
        { src: '/assets/images/arrupe/slide-10.png', alt: 'Arrupe Journey Slide 10' },
        { src: '/assets/images/arrupe/slide-11.png', alt: 'Arrupe Journey Slide 11' },
        { src: '/assets/images/arrupe/slide-12.png', alt: 'Arrupe Journey Slide 12' },
        { src: '/assets/images/arrupe/slide-13.png', alt: 'Arrupe Journey Slide 13' },
        { src: '/assets/images/arrupe/slide-14.png', alt: 'Arrupe Journey Slide 14' },
        { src: '/assets/images/arrupe/slide-15.png', alt: 'Arrupe Journey Slide 15' },
        { src: '/assets/images/arrupe/slide-16.png', alt: 'Arrupe Journey Slide 16' },
      ]
    },

    arrupeInsights: {
      label: 'Arrupe Insights',
      cards: [
        {
          label:  '3 Discoveries',
          title:  'What I Found',
          points: [
            'Excellence is Holistic — balancing academic rigors with art and creative practice.',
            'Psychology is Service — a vocational calling, especially through ABA.',
            'The Power of Selective Connection — quality of relationship always trumps quantity.'
          ]
        },
        {
          label:  '2 Suggestions',
          title:  'What I Offer Back',
          points: [
            'Vocational Integration — stronger institutional support for RBT certifications.',
            'Wellness for Accelerated Students — dedicated structures for students in compressed timelines.'
          ]
        },
        {
          label:  '1 Ignatian Value',
          title:  'Persons for and with Others',
          points: [
            'Using quiet listening skills and deep empathy as the foundation for serving future clients with care and presence.'
          ]
        }
      ]
    }
  },

  // ─── COMMUNITY / SIP OUTPUTS ────────────────────────────────
  community: {

    heroImage: { src: '/assets/images/synthesis-hero.png', alt: 'Synthesis Hero Image' },

    sipActivity1: {
      label: '1st SIP Activity: What is Beyond Myself',
      prompts: [
        {
          question: 'What theme did you learn the most from?',
          answer:   'Persons for and with Others. The activity surfaced how deeply I had been operating in self-preservation and survival mode throughout the accelerated program. Moving toward genuine vulnerability, and choosing to be present for others even while still finding my footing, became the most quietly transformative shift of this formation.'
        },
        {
          question: 'Was there an instance where you experienced transformation?',
          answer:   'Preparing for my RBT training was that moment. I had spent so much energy trying to be invisible, to observe without being noticed, to fulfill requirements without fully inhabiting the role. The training made it clear that invisibility had to end. To be an effective practitioner meant becoming an active presence, a deep listener, someone whose attention could be felt by the people in the room.'
        },
        {
          question: 'What are you most thankful for?',
          answer:   'My small circle: a career friend and my partner. The Arrupe journey taught me that the depth of a support system matters far more than its size. I am most thankful for those two relationships and the way they have shaped my capacity to carry that same quality of presence into my OJT and, eventually, into my practice as a healer.'
        }
      ]
    },

    collageImage: {
      src:         '/assets/images/LIFESTYLE/collage_threshold.png',
      alt:         'Collage: community, learning, reflection',
      placeholder: null
    },
    soulReflections: {
      label: 'Soul — Movie Reflection',
      prompts: [
        {
          question: 'What struck you in the movie?',
          answer:   'The scene that really sticks out is right after Joe finishes his dream gig. He expects his entire life to feel magically transformed, but he just feels normal. The saxophonist Dorothea tells him a story about a young fish frantically looking for the "ocean." The older fish looks at him and says, "You\'re in water right now." It is a striking image that shows how easily we miss the life happening right in front of us.'
        },
        {
          question: 'How do you feel about it? What are your insights about your own soul?',
          answer:   'It makes me feel a lot more grounded. It is so easy to get completely consumed by the pressure of graduating early, reviewing for the IELTS, or the intense drive to prove people wrong about where I can live and succeed. This movie is a reminder that my "spark" is not defined by an exam score, a specific job title in psychology, or moving to Manila or Australia. True fulfillment is found in the everyday moments, not just the finish line.'
        },
        {
          question: 'Connect some resonances from today\'s session and the movie.',
          answer:   'Joe\'s intense obsession with his jazz career perfectly mirrors St. Ignatius\' early obsession with chivalry and military glory. Joe falling down that manhole was his exact "cannonball moment" at Pamplona: it forced everything to stop. Just like Ignatius during his recovery, Joe had to learn the Discernment of Spirits. He realized that the temporary thrill of a gig (worldly glory) left him feeling empty, but appreciating the simple, everyday beauty of life gave him a deep, lasting peace.'
        }
      ]
    },
    retreatFruits: {
      label: 'Fruits from the Seniors\' Retreat',
      image: { src: '/assets/images/retreat.png', alt: 'Seniors Retreat Memory' },
      body: [
        'The most significant grace I gained from the retreat is the understanding of the Discernment of Spirits. It is easy to get caught up in the intense pressure of graduating early, securing credentials, and wanting to prove my independence to my family. However, the retreat helped me realize that true fulfillment does not come from a place of ego or just proving others wrong.',
        'The deep, lasting peace comes from aligning my career in psychology with a genuine desire to serve others. My "cannonball moments" and the stress of my rigorous training are simply shaping me into a more resilient and empathetic professional.'
      ]
    },

    groupPresentation: {
      label: 'Solidarity in Mission — Group Presentation',
      slides: [
        { src: '/assets/images/group/group-1.png',  alt: 'Group Presentation Slide 1'  },
        { src: '/assets/images/group/group-2.png',  alt: 'Group Presentation Slide 2'  },
        { src: '/assets/images/group/group-3.png',  alt: 'Group Presentation Slide 3'  },
        { src: '/assets/images/group/group-4.png',  alt: 'Group Presentation Slide 4'  },
        { src: '/assets/images/group/group-5.png',  alt: 'Group Presentation Slide 5'  },
        { src: '/assets/images/group/group-6.png',  alt: 'Group Presentation Slide 6'  },
      ]
    }
  }

};