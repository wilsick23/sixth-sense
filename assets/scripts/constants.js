// Array of emotions

export const RAW_EMOTIONS = [
  'joy',
  'sadness',
  'disgust',
  'fear',
  'anger'
];

export const READING_TYPES = [
  'career',
  'health',
  'love',
  'friends_and_family'
];

export const EMOTIONS = [
  'ecstasy',
  'melancholy',
  'intrigue',
  'surprise',
  'righteousness',
  'despair',
  'selfloathing',
  'anxiety',
  'betrayal',
  'prejudice',
  'revulsion',
  'loathing',
  'terror',
  'hatred',
  'rage'
];

// Object with quotes for each emotion
export const QUOTES = {
  joy: [
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    'The future belongs to those who believe in the beauty of their dreams.',
    'The best way to cheer yourself up is to try to cheer somebody else up.'
  ],
  sadness: [
    'The greater your capacity to love, the greater your capacity to feel the pain.',
    'The walls we build around us to keep out the hurt also keep out the joy.',
    "People cry not because they're weak. It's because they've been strong for too long."
  ],
  disgust: [
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    'Disgust is the one human emotion that guarantees loyalty.',
    "I'm not arguing, I'm just explaining why I'm right."
  ],
  fear: [
    'Worrying about outcomes over which I have no control is punishing myself before the universe has decided whether I ought to be punished.',
    'Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.',
    'Our anxiety does not empty tomorrow of its sorrows, but only empties today of its strengths.'
  ],
  anger: [
    'Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.',
    'Never go to bed mad. Stay up and fight.',
    "It's not about avoiding the things that make you angry; it's about learning how to control your reactions to them."
  ]
};

/**
 * The READINGS object is an object that stores the readings, with the primary key being the reading type (career, health, etc.)
 * Each reading type has an emotion, with an array of possible readings for those type and emotion.
 */
export const READINGS = {
  career: {
    ecstasy: [
      'As I tune into the energy surrounding your career path, I sense a vibrant and promising future ahead of you. Your enthusiasm and passion for the profession will be a driving force in your success. Trust your instincts and embrace the joy that comes from following your true calling.',
      'Be prepared for unexpected developments that will unleash a surge of happiness into your professional life. These unforeseen twists and turns will introduce fresh opportunities and experiences, enabling you to navigate uncharted territories with enthusiasm and delight. Embrace the element of surprise, for it holds the key to a dazzling array of career prospects that will leave you positively glowing.',
      'The culmination of your unwavering dedication and hard work is drawing near, and its fruits will manifest in your career journey. Prepare to bask in the glow of success as your efforts pay off, propelling you towards new horizons of satisfaction and accomplishment. The path ahead may not always be easy, but the joy that awaits you at the pinnacle of your career will make every hurdle and sacrifice worthwhile.',
      'Get ready to embark on a glorious phase in your career where every step you take will be met with unparalleled bliss and prosperity. The seeds of your hard work and dedication are blooming into magnificent achievements, elevating your professional journey to extraordinary levels. Embrace this golden era with gratitude and optimism, knowing that the universe is aligning to bring you abundant joy in your work.'
    ],
    melancholy: [
      'Embrace introspection, seek guidance from mentors, and explore new connections. Trust in your abilities, persevere, and let the winds of determination guide you towards a fulfilling path.',
      'The current challenges and setbacks you face in your career are merely stepping stones towards a brighter future. Remember that even amidst the gloom, seeds of resilience and growth are being planted. Embrace the lessons hidden within these difficult moments, for they will shape you into a stronger and more determined professional, ultimately leading you to a place of renewed hope and fulfillment.',
      "It's natural to feel disheartened by the twists and turns of your professional journey. However, remember that every cloud has a silver lining. Your current melancholy is a temporary state, and hidden within it lies the opportunity for self-reflection and introspection. Use this time to reassess your goals, realign your passions, and gather the strength needed to rise above the shadows, for a brighter career awaits you on the horizon.",
      'The road ahead may seem shrouded in uncertainty, evoking feelings of melancholy and doubt. Yet, it is during these moments of introspection that true clarity emerges. Embrace this period of contemplation and use it to delve deeper into your skills, passions, and aspirations. From this cocoon of melancholy, a transformative career metamorphosis awaits, revealing your true potential and leading you towards a future brimming with renewed purpose and joy.'
    ],
    intrigue: [
      'Ah, curious soul, I sense a flicker of intrigue within you. Embrace this wondrous curiosity as a compass guiding you towards new horizons. Seek mentors who will nurture your passions, explore diverse paths, and let your inquisitive spirit shape a rewarding career that dances with the stars.',
      'Amidst the mysterious whispers of your career, a world of hidden opportunities awaits your discovery. Embrace the curiosity that stirs within you, for it holds the key to unlocking new paths and uncharted territories. Trust in your intuition, follow the signs, and let the allure of the unknown guide you towards captivating ventures that will leave you spellbound.',
      'Your professional journey weaves a tapestry of secrets and surprises, captivating your imagination and beckoning you to explore unexplored realms. Embrace the thrill of the unknown and allow it to fuel your curiosity. With each step forward, you will unravel new layers of intrigue, revealing hidden talents and unlocking extraordinary achievements that will leave you awe-inspired.',
      'The twists and turns of your career path are shrouded in a captivating veil of mystery, enticing you to embark on a voyage of discovery. Embrace the enigma that surrounds you, for within it lies the potential for remarkable breakthroughs and unforeseen opportunities. Allow yourself to be drawn towards the unfamiliar, and witness how the allure of the unknown leads you to thrilling adventures and a truly fulfilling professional destiny.'
    ],
    surprise: [
      'Embrace an unexpected twist as a catalyst for change. Unveil hidden talents, venture into uncharted territories, and let the surprise pave the way for a thrilling and transformative career path that exceeds even your wildest dreams.',
      'Prepare yourself for unexpected turns in your career that will leave you amazed and exhilarated. Embrace the element of unpredictability, for it holds the power to ignite your passion and reignite your professional journey. Stay open to new possibilities and be ready to seize opportunities that will surpass even your wildest expectations.',
      'The winds of change are blowing, bringing with them delightful twists and unforeseen events in your career. Embrace the exhilaration that comes with surprises, as they have the potential to steer you towards uncharted paths filled with excitement and growth. Stay adaptable and embrace the unknown, for it is within these surprising moments that true breakthroughs and remarkable accomplishments await.',
      'Your professional journey is about to be graced with astonishing developments that will leave you in awe. Embrace the beauty of the unexpected, as it often carries hidden gifts and transformative opportunities. Stay receptive and open-minded, for the surprises that lie ahead have the potential to reshape your career trajectory and lead you towards extraordinary success and fulfillment.'
    ],
    righteousness: [
      'Ah, noble spirit,let your sense of justice be your guiding light. Seek a career that aligns with your values, where your actions can bring positive change to the world. Embrace opportunities to advocate for what is right, for in the pursuit of a righteous path, you shall find fulfillment and leave an indelible mark upon the tapestry of life.',
      'Your career path is illuminated by a guiding light that emanates from within. Embrace your strong moral compass and unwavering values as you navigate the professional landscape. Stay true to what you believe in, for it is through the pursuit of integrity and authenticity that you will find a sense of purpose and fulfillment in your work.',
      'Your actions and decisions in your career are driven by a deep sense of justice and fairness. Embrace your innate desire to make a positive impact and create a harmonious professional environment. Stay steadfast in upholding your principles, for it is through your commitment to righteousness that you will inspire others and forge a path of integrity and success.',
      'The essence of righteousness flows through your professional endeavors, guiding you towards a noble and fulfilling purpose. Embrace the moral clarity that resonates within you, as it will empower you to make ethical choices and lead with integrity. Stay true to your values and let your commitment to righteousness shape your career journey, paving the way for meaningful accomplishments and a profound impact on the world around you.'
    ],
    despair: [
      'Oh, weary soul, I sense the heavy clouds enveloping you. Fear not, for even amidst the darkest storms, a glimmer of hope remains. Take heart and envision a future where your passions and talents converge. Seek guidance from mentors who can rekindle your spirit, explore new avenues with resilience, and know that from the depths of despair, you shall rise to forge a career that ignites your soul with purpose and joy.',
      'Amidst the challenges and hardships of your career, remember that even in the darkest moments, a glimmer of hope can be found. Embrace the resilience within you, for it is during these trying times that the seeds of strength and growth are sown. Trust in your ability to overcome obstacles and believe that brighter days are on the horizon, leading you towards a renewed sense of purpose and fulfillment.',
      'The shadows that loom over your professional journey are temporary, and within them lies the potential for transformation. Embrace the lessons that despair brings, for they hold the power to ignite a spark of determination within you. Allow yourself to experience the depths of your emotions, but also remember that from the depths, you can rise. With resilience and perseverance, you will navigate through the darkness and emerge stronger, ready to embrace a future filled with renewed hope and joy.',
      'Though the weight of discouragement may bear heavily upon you, do not lose sight of the flicker of light that still resides within. Embrace the opportunity for introspection and self-reflection, for it is through these moments of despair that true growth can occur. Trust in your inner strength, resilience, and capacity to overcome. As you rise above the depths of despair, a new dawn awaits, bringing with it the potential for a revitalized career that will surpass your wildest dreams.'
    ],
    selfloathing: [
      'Release the chains that bind you, for within you lies untapped potential and boundless worth. Embrace self-compassion as your guiding star, seek mentors who illuminate your strengths, and embark on a journey of self-discovery. From the ashes of self-loathing, you shall rise, unveiling a career that honors your true essence and brings forth the light within.',
      'In the depths of introspection, remember that true self-discovery lies hidden within. Embrace the journey of self-reflection, for it is through these moments of questioning that you can unearth your inherent worth and potential. Embrace self-compassion and nurture a sense of acceptance, allowing yourself to grow and evolve beyond the shadows of doubt, leading to a profound transformation in your career and personal fulfillment.',
      'Within the realm of self-doubt, there exists an opportunity for profound growth and self-discovery. Embrace the journey of self-exploration, for it is through these moments of vulnerability that you can uncover your true strengths and unique qualities. Cultivate self-acceptance and foster a mindset of self-love, allowing yourself to break free from the chains of self-judgment and embrace the limitless possibilities that await you in your career journey.',
      'While the weight of self-criticism may feel overwhelming, remember that you are deserving of compassion and understanding. Embrace the path of self-forgiveness and let go of past mistakes, for they do not define your worth or potential. Embrace self-discovery and nurture a sense of self-empowerment, recognizing that your journey is one of growth and continuous learning. As you let go of self-loathing, you open yourself up to a world of possibilities, where you can find genuine fulfillment and embrace your true potential in your career.'
    ],
    anxiety: [
      'Oh spirit, I sense the tumultuous waves of worry crashing upon your shores. Find tranquility within the storm by grounding yourself in the present moment. Seek a career that nurtures your well-being, aligns with your passions, and allows room for growth. Embrace mindfulness, seek guidance from mentors who inspire calm, and trust that in the journey towards a fulfilling career, your anxiety shall dissipate, replaced by a sense of purpose and serenity.',
      'Within the realm of uncertainty, lies the potential for incredible growth and resilience. Embrace the fluctuations of the unknown, for they hold the seeds of opportunity and personal development. Trust in your ability to navigate through the challenges that arise, as each step forward is a testament to your strength and courage. Embrace a mindset of adaptability and self-belief, and watch as your career journey unfolds with newfound confidence and success.',
      'The waves of uncertainty that wash over your career path are a natural part of the journey. Embrace the ebb and flow, for within the depths of uncertainty lie hidden treasures of growth and self-discovery. Trust in your capabilities and harness your inner strength to face challenges head-on. As you navigate through the tides of uncertainty, you will emerge stronger, more resilient, and ready to seize the remarkable opportunities that await you.',
      'In the face of the unknown, remember that you possess the resilience and inner strength to overcome. Embrace the transformative power of uncertainty, for it is through these moments that you can redefine your relationship with fear and step into a realm of possibility. Trust in your ability to adapt and learn, and embrace the journey of self-discovery that comes with navigating through anxiety. As you embrace the challenges with courage and determination, you will witness the blossoming of your career and the realization of your true potential.'
    ],
    betrayal: [
      'Oh, wounded soul, I sense you seeking solace. Take heed, for amidst the shadows of betrayal, lies an opportunity for growth and rebirth. Guard your trust, but do not let the actions of others define your path. Seek a career that empowers your resilience, surround yourself with loyal allies and mentors who restore faith, and let the echoes of betrayal propel you towards a future brimming with success and vindication.',
      'The challenges you currently face in your career might make you question the intentions of those around you. However, stay steadfast in your goals and let your actions speak louder than any feelings of disappointment. Your determination and resilience will pave the way for success and earn the respect you deserve.',
      'Trust is a delicate thread in the tapestry of your professional life, and recent events may have strained it. But remember, every setback is an opportunity for a comeback. Focus on rebuilding your confidence and investing in your own growth. Soon, you will find new alliances and opportunities that will restore your faith in your career path.',
      'The shadows of doubt and uncertainty have cast their veil upon your professional relationships, causing unease. However, view this as a chance to reevaluate your alliances and align yourself with those who share your values. By nurturing genuine connections and focusing on your own talents, you will emerge stronger and wiser in your career.'
    ],
    prejudice: [
      'Oh, seeker of truth, I sense the weight of the world burdening your spirit, seeking enlightenment. Embrace the power of empathy, for it shall be your guiding star in forging a path that shatters barriers. Seek a career that champions diversity, equality, and inclusivity. Surround yourself with mentors who value every voice, and let your own actions be a beacon of change, illuminating a future where prejudice crumbles and your career becomes a catalyst for harmony and understanding.',
      'In your professional journey, you may encounter barriers and biases that hinder your progress. Embrace these challenges as opportunities to showcase your unique abilities and prove those who doubt you wrong. Your determination and talent will pave the way for success, breaking down the walls of narrow-mindedness.',
      'The winds of ignorance and bias may blow against you in your career, but do not let them extinguish your flame. Let your accomplishments and expertise speak for themselves, transcending the limitations others may try to impose. Your unwavering dedication and authenticity will lead you to recognition and respect.',
      'Within the realm of your career, you may face unjust judgments and discrimination that attempt to overshadow your true potential. Rise above these prejudices and focus on cultivating your skills and knowledge. Your unwavering commitment to excellence will not only silence the skeptics but also open doors to new opportunities where your talents can shine.'
    ],
    revulsion: [
      'Oh, restless soul, I sense the waves crashing against your spirit, yearning for career advice that brings solace. Embrace this inner turbulence as a catalyst for transformation. Seek a career that ignites passion within you, where your actions can shape a better world. Surround yourself with mentors who inspire you, explore fields that resonate with your true essence, and from the depths of revulsion, emerge as a beacon of change, leaving a lasting impact through a career that aligns with your values and purpose.',
      'Within the realm of your professional journey, you may experience a strong aversion towards certain aspects of your work. Take a step back and reevaluate the core values that drive you. By aligning your career choices with your true passions and purpose, you will find renewed enthusiasm and a sense of fulfillment.',
      'Feelings of repulsion towards certain aspects of your career may arise, signaling a need for change and exploration. Embrace this discomfort as an opportunity for growth and self-discovery. By venturing into new territories and embracing fresh perspectives, you will uncover hidden talents and find a path that resonates with your authentic self.',
      'The currents of revulsion towards certain aspects of your professional life are urging you to seek a different direction. Listen to your instincts and trust that there are opportunities waiting to be discovered. By embracing change and pursuing avenues aligned with your true passions, you will find a renewed sense of purpose and joy in your career.'
    ],
    loathing: [
      'Oh, tormented soul, I sense the echoes of self-loathing reverberating within you, seeking guidance. Release the chains that bind you and embrace the power of self-compassion. Seek a career that allows you to nurture your true essence, where your unique gifts can flourish. Surround yourself with mentors who inspire love and acceptance, and through the journey of self-discovery, you shall find a career that becomes a source of self-love, healing, and purpose, transforming your loathing into unshakable self-worth.',
      'Within the realm of your career, you may find yourself grappling with deep discontentment towards certain aspects of your work. Embrace this inner unrest as a catalyst for change. By exploring new avenues and pursuing opportunities that align with your values and passions, you will find a renewed sense of fulfillment and purpose.',
      'Feelings of intense dissatisfaction may linger within your professional realm, signaling a need for introspection and reassessment. Take this opportunity to delve into your core aspirations and uncover what truly ignites your passion. By making conscious choices that align with your authentic self, you will create a career path that inspires and brings you closer to your desired goals.',
      'The seeds of discontentment have taken root within your career, urging you to seek a different path. Embrace this feeling as a catalyst for transformation and personal growth. Through self-reflection and embracing opportunities that resonate with your values and talents, you will discover a renewed sense of purpose and find yourself on a fulfilling trajectory.'
    ],
    terror: [
      "Oh, frightened soul, I sense the feelings of fear rooted deep within your nerves preventing you from taking the first step. Trying anything new can be quite scary as you cannot predict what will happen, unless you are me. As such, it is important for you to take risks, no matter how intimidating they may appear. It's good to rise above the fear and take a chance.",
      'Within the realm of your career, you may be overwhelmed by a sense of overwhelming fear and uncertainty. Embrace this feeling as an invitation to step out of your comfort zone and embrace change. By facing your fears head-on, you will unlock hidden strengths and find the courage to pursue new opportunities that lead to growth and success.',
      "Feelings of intense apprehension may be casting a shadow over your professional path, clouding your judgment and holding you back. It's important to remember that fear is often a sign of growth on the horizon. Embrace the unknown with curiosity and resilience, and you will discover that taking calculated risks leads to transformative experiences and remarkable achievements.",
      'The winds of fear may be gusting through your career, leaving you feeling unsettled and hesitant. However, it is during these moments of discomfort that breakthroughs are born. Embrace the challenges with a courageous spirit, and trust that each step forward will bring you closer to realizing your true potential. Your tenacity will enable you to overcome obstacles and embark on a fulfilling and rewarding professional journey.'
    ],
    hatred: [
      "Oh, apprehensive soul, I sense the world crashing against your heart and making you feel like everything is against you. It's important to realize that this is not the case but just unfortunate coincidences one after another. Sure an interview may go bad or an apathetic rejection through email may come but that doesn't mean that it's the end of the road for you. Live out your next day with conviction and if any failures arise, rise above them and move on.",
      'Within the realm of your career, you may be harboring deep animosity towards certain aspects of your work. However, recognize that holding onto hatred only perpetuates negative energy and limits your own growth. Shift your focus towards cultivating compassion, finding fulfillment in your strengths, and seeking opportunities that align with your true passions.',
      "Feelings of intense dislike may permeate your professional life, clouding your judgment and impeding your progress. It's crucial to channel this energy into positive transformation. Let go of resentment, nurture a mindset of gratitude, and seek out environments where your talents can thrive. Through this shift in perspective, you will find renewed enthusiasm and a path towards genuine success.",
      "The flame of animosity may flicker within your career, breeding negativity and hindering your potential. It's essential to break free from this cycle by fostering forgiveness and empathy. Redirect your energy towards self-improvement and building positive relationships within your professional network. As you release the grip of hatred, you will open doors to new opportunities and unlock your true potential."
    ],
    rage: [
      'Oh, wounded soul, I sense that burning sensation in your heart like a volcano ready to burst. A career is just one of those many things that do not come easy for anyone. But your life does not need to revolve only around this career of yours. Feeling angry will not make finding a career easier for you but growing above this experience and taking the time to find and learn something new will allow you to be your better self.',
      'Within the realm of your career, you may be consumed by intense emotions that fuel your inner fire. Use this energy as a catalyst for positive change. Channel your passion and determination into productive endeavors, pushing boundaries and striving for excellence. By harnessing this fierce drive, you will unlock doors to unprecedented success.',
      'Feelings of overwhelming anger may cloud your professional path, but remember that anger can be a powerful force for transformation. Redirect your rage towards advocating for change, both within yourself and in the systems around you. As you harness this energy constructively, you will pave the way for innovation and create a lasting impact in your field.',
      'The flames of fury burn within your career, igniting a desire for radical change. Embrace this passionate intensity as an opportunity for personal and professional growth. Channel your rage into forging new paths, challenging outdated norms, and championing causes that align with your values. Through your fierce determination, you will carve out a unique space for yourself and make a profound impact.'
    ]
  },
  health: {
    ecstasy: [
      "Your joy for life is infectious and can positively impact your health. While it's important to enjoy the moment, remember to find balance in all aspects of your life, including your health. Prioritize self-care and make choices that will benefit your physical and mental well-being in the long-term. Don't forget to celebrate your successes and enjoy the journey towards a healthier you.",
      'Within the realm of your well-being, a vibrant energy radiates through you, enhancing your physical and mental vitality. Embrace this state of joy and use it as a catalyst to nurture your health. Explore activities that bring you delight and incorporate them into your wellness routine, allowing your ecstatic spirit to harmonize with your overall well-being.',
      'Feelings of immense joy and elation have permeated your being, bringing forth a profound sense of happiness. Use this positive energy to nurture your health and vitality. Engage in regular exercise that brings you joy, fuel your body with nourishing foods, and prioritize self-care practices that promote balance and inner harmony.',
      'A wave of euphoria washes over your health journey, infusing you with boundless enthusiasm. Embrace this heightened state of well-being and allow it to inspire positive lifestyle choices. Nurture your body through restful sleep, mindful movement, and nourishing nutrition. Your ecstatic mindset will serve as a driving force for maintaining a vibrant and thriving state of health.',
      'A shimmering vitality envelops your being, flowing through every cell and fiber of your body. Your health radiates a vibrant energy that invigorates your spirit and brings a profound sense of joy. Embrace the pleasure of nourishing your physical and emotional well-being, for within lies a path to ecstatic bliss.',
      'Like a harmonious symphony, your body and mind dance in perfect rhythm, effortlessly synchronizing their energies. A profound state of well-being washes over you, merging the boundaries of pleasure and health. Embrace this euphoric union, for it holds the key to unlocking profound levels of ecstasy within your being.',
      'A gentle breeze of wellness whispers through the corridors of your existence, leaving a trail of euphoria in its wake. Your body hums with a blissful vitality that transcends the ordinary, awakening a deep sense of joy within your soul. Embrace this sacred connection between health and ecstasy, for it holds the power to transform your life into a magnificent celebration of well-being.',
    ],
    melancholy: [
      "It's okay to feel sad or down at times, but remember to prioritize your health and well-being during these moments. Take some time to reflect and focus on self-care, whether it's through exercise, healthy eating, or seeking help from professionals or support systems. Remember that this feeling is temporary, and you have the power to overcome it and emerge stronger and healthier than before.",
      'Amidst the shadows of sorrow, lies the potential for healing and rejuvenation. Embrace this transformative phase as an opportunity to nourish your body, mind, and spirit. With time and self-care, you will find yourself emerging into a brighter, healthier state.',
      'Your journey to better health may seem clouded by melancholy, but remember that even the darkest night gives way to dawn. Seek solace in small victories and positive choices that contribute to your well-being. Through resilience and perseverance, you will navigate this melancholic chapter and rediscover a path of vitality.',
      'Like the seasons, your health undergoes cycles of change. Although melancholy casts its temporary veil upon you, have faith in the inherent resilience of your body and spirit. By fostering self-compassion and reaching out for support, you will find the strength to transcend melancholy and embrace a brighter, healthier future.',
      'Shadows of introspection cast fleeting moments of solemnity upon your health journey. Embrace the ebbs and flows, for within the depths of vulnerability lie seeds of growth and healing. By acknowledging the subtle melancholic undertones, you can navigate towards a profound understanding of your well-being, ultimately transforming sorrow into a catalyst for self-discovery.',
      'A tender undertone of longing accompanies your path to wellness, adding depth and introspection to your journey. Embrace the melancholic whispers that arise, for they offer a unique perspective on your health. Through this nuanced exploration, you will uncover hidden strengths and find solace in the transformative power of self-care.',
      'Within the realm of your well-being, echoes of wistful reflection gently resonate. Embrace the melancholic hues that intertwine with your health, for they hold the potential for profound self-awareness and growth. By embracing these subtle shades, you will navigate towards a deeper understanding of your journey, fostering resilience and nurturing your overall well-being.',
    ],
    intrigue: [
      "Your curiosity and willingness to explore can lead to new ways of improving your health and well-being. Experiment with different exercises, diets, or wellness practices until you find what works best for you. Don't be afraid to try new things and step outside of your comfort zone in pursuit of a healthier life. Keep an open mind and trust in the process of self-discovery.",
      'Your body is a temple, and its whispers hold great wisdom. Listen closely to the messages it sends. Pay attention to your posture, for it may reveal hidden tensions that need release. Seek balance in your diet and exercise, and your health shall flourish like a vibrant garden.',
      'The winds of change blow through the realm of your well-being. Embrace the power of rest and rejuvenation, for in the quiet moments lies the key to restoration. Let your worries be carried away by the gentle breeze, and watch as a newfound vitality fills your being.',
      'The tapestry of your health weaves together the threads of body, mind, and spirit. Embrace the power of holistic healing, for harmony lies within the integration of these elements. Nurture your inner radiance through self-care practices, and witness the blossoming of vibrant energy that will guide you on the path of wellness.',
      'With each breath, a secret strength awakens within you. Your health shall become a captivating enigma, filled with mysteries waiting to be unraveled. Embrace the unknown, for within its depths lies the key to vitality.',
      'Like a hidden labyrinth, your health journey takes unexpected turns, weaving a tale of intrigue. Pay attention to subtle signs and whispers from your body, as they hold the secrets to unlocking vibrant well-being. Trust the curious path that unfolds before you.',
      'Your health shall be a beguiling dance of balance and transformation. Embrace the art of self-care, for it holds the power to shape your body and mind like a captivating masterpiece. Unveil the secrets of vitality as you explore the intriguing realms of holistic well-being.',
    ],
    surprise: [
      "Life is full of surprises, some good and some bad. While it may be difficult to predict what's to come, remember to take care of yourself during these times. Trust that you have the strength to navigate whatever comes your way, whether it's through seeking help from professionals or leaning on your support system. Remember to prioritize your physical and mental well-being, and trust that better days are ahead.",
      "A delightful revelation awaits you on the horizon of your well-being. Your body possesses remarkable resilience and an innate ability to heal. Embrace this newfound knowledge and trust in your body's capacity to bounce back. Like a phoenix rising from the ashes, you shall experience a surprising renewal of vitality.",
      "Life's unexpected twists and turns often lead us to the most profound discoveries. In the realm of health, a surprising journey lies ahead. Open yourself to new possibilities and uncharted paths. Embrace the unknown, for it is through unexpected encounters that transformative healing and well-being may find you.",
      'The universe has a mysterious way of weaving surprises into the fabric of our lives, and your health is no exception. Pay attention to subtle shifts and synchronicities unfolding around you. A surprising revelation may come in the form of a healing modality, a new approach to self-care, or a sudden burst of energy. Embrace these surprises, for they hold the keys to unlocking your optimal health.',
      'Embrace the unexpected twists and turns on your path to wellness, for within them lies the key to vitality. Unforeseen opportunities for rejuvenation and growth shall present themselves, leaving you pleasantly amazed by the transformative power of your own choices.',
      'Your journey towards optimal health holds delightful surprises, like hidden gems waiting to be discovered. Prepare to be astonished as you unlock newfound energy and vitality, revealing a vibrant version of yourself that will leave others in awe.',
      'Your commitment to wellness will yield astonishing results, exceeding all expectations. Embrace the delightful surprises that await you on this path, as your body and mind undergo a remarkable transformation, leaving you feeling invigorated and filled with wonder.',
    ],
    righteousness: [
      "It's important to approach health with an open mind and empathy towards others. Everyone's health journey is unique, and it's important to respect and support others in their pursuit of wellness. Remember that there is no one \"right\" way to be healthy, and what works for one person may not work for another. Prioritize self-care and make choices that align with your own values and goals, while also respecting and supporting those around you.",
      'Within the realm of health, your unwavering dedication to self-care and well-being shines brightly. Trust in the wisdom of your body and honor its needs. As you nurture your physical and mental health with righteous intent, you shall witness a harmonious balance radiating from within.',
      'The path to optimal health is paved with righteous choices. Embrace the power of mindful nourishment, for the foods you consume are the building blocks of vitality. Let your plate be adorned with vibrant colors and whole, unprocessed ingredients. Through righteous nutrition, you shall embark upon a transformative journey towards vibrant well-being.',
      'Your righteous commitment to health illuminates the path towards true vitality. Harness the strength of discipline and perseverance as you engage in regular exercise and physical activity. Let your body move with purpose and grace, and witness how this righteous devotion blossoms into a fountain of energy and strength.',
      'As you nurture your body and mind, a harmonious balance shall unfold within you. Your dedication to self-care shall be rewarded with a radiant glow that emanates from your being, inspiring others to seek their own virtuous path towards health.',
      'The choices you make today shall align with the noble pursuit of well-being. Embrace the righteous path of self-care, for it shall lead you towards a state of optimal health and inner harmony, becoming a beacon of inspiration for those around you.',
      'Your commitment to health and wellness shall resonate with a sense of moral duty. By honoring your body and mind, you shall cultivate a righteous vitality that emanates from within, transforming not only yourself but also the world around you with its radiant influence.',
    ],
    despair: [
      "Feeling hopeless or overwhelmed can be difficult, but remember that there is always hope for a brighter future. Seek help from professionals or support systems to guide you towards a healthier and happier life. Don't be afraid to ask for help or reach out to those around you for support. Remember that you have the power to overcome this feeling and emerge stronger and healthier than before.",
      'In the darkest of times, a flicker of hope emerges. Your health journey, too, holds the potential for a transformative resurgence. Seek solace in self-compassion and gentle self-care practices. Know that even the tiniest steps towards wellness can kindle a flame of healing, guiding you towards a brighter, revitalized path.',
      'Amidst the shadows of despair, there lies a glimmer of resilience within you. Trust in the innate wisdom of your body to heal and rejuvenate. Embrace the power of rest and restoration, allowing yourself to recharge and replenish. From the depths of despair, an unexpected resurgence of vitality shall emerge.',
      'The ebb and flow of life bring both triumphs and tribulations. Within the realm of health, despair can give way to a renewed sense of purpose. Embrace the healing power of connection—reach out to loved ones and seek support. Through compassionate guidance and unwavering determination, your journey towards health shall witness a remarkable transformation.',
      'The path to wellness may seem shrouded in shadows, but do not lose hope, for even amidst the darkness, a flicker of light remains. Embrace the challenges that lie ahead, for within them lies the opportunity for profound transformation and a newfound appreciation for the gift of health.',
      'As you navigate the labyrinth of health, moments of uncertainty may cloud your journey, but remember that every setback carries the potential for resilience and growth. Through perseverance and self-compassion, you shall rise above the shadows, discovering a strength within you that defies despair.',
      'The road to optimal health may be lined with hardships and setbacks, casting a somber hue upon your path, but do not lose sight of the glimmers of hope that illuminate the way. Embrace the journey with courage and determination, for even in the depths of despair, there lies the potential for healing and renewal.',
    ],
    selfloathing: [
      "Feeling negative towards yourself can impact your physical and mental well-being. It's important to recognize and address these feelings, whether it's through seeking help from professionals or practicing self-care. Remember that everyone has flaws, and it's okay to make mistakes or have imperfections. Work towards accepting yourself for who you are, and make choices that benefit your physical and mental well-being. Remember that you are worthy of love and care, including from yourself.",
      'Amidst the shadows of self-doubt, a radiant ember of self-care awaits to be kindled. Embrace the power of self-compassion as a guiding light on your health journey. Nurture your body and mind with acts of kindness, for within the depths of self-love, true healing and well-being shall flourish.',
      'The road to self-discovery and vibrant health begins with a single step—forgiveness. Release the burdens of self-judgment and embrace the transformative power of self-acceptance. Like a phoenix rising from the ashes, you shall witness a remarkable resurgence of vitality and inner harmony.',
      'In the tapestry of life, every thread plays a unique role, including your own. Embrace the beauty of your individuality and the journey you are on. Each choice towards self-care is a testament to your worth and inner strength. From the depths of self-loathing, a newfound sense of self-appreciation shall blossom, guiding you towards a healthier, more fulfilling existence.',
      'Your body is a vessel of strength and vitality, capable of great accomplishments. Embrace the power within you, for your health is the key to unlocking your true potential. Nourish your body with care and kindness, and watch as it becomes a reflection of the love you have for yourself.',
      'The road to well-being may feel like a daunting journey, but remember that every step you take towards self-care is a triumph. Your body, despite its imperfections, possesses an innate resilience that can overcome any obstacle. Embrace the healing path ahead, and discover the beauty that lies within your own self-nurturing.',
      'Your health is a sacred gift that requires your tender attention. Rather than dwell on perceived flaws or shortcomings, focus on the incredible capacity your body holds for renewal and restoration. Treat yourself with the utmost care and respect, and witness how your self-esteem blossoms alongside your well-being.',
    ],
    anxiety: [
      "Feeling anxious can be overwhelming, but remember that there are ways to manage and cope with this feeling. Whether it's through seeking help from professionals, practicing self-care, or finding healthy ways to manage stress, prioritize your mental and physical well-being. Remember that anxiety is a natural response to stress, and it's okay to take steps towards managing it in a healthy way.",
      'Within the realm of your well-being, a gentle breeze of tranquility beckons you. Embrace the power of mindfulness and grounding practices to find solace amidst the whirlwinds of life. Like a calm oasis, your health shall flourish as you navigate the currents of uncertainty with grace and inner peace.',
      'Amidst the storms of the mind, your body holds the key to serenity. Listen to its whispers, for it carries the wisdom of balance and resilience. Cultivate a sanctuary of self-care, where nourishment, rest, and rejuvenation become your allies. From the depths of anxiety, a profound sense of calm and well-being shall emerge.',
      'In the vast tapestry of existence, your health journey weaves together threads of strength and harmony. Embrace the power of breathwork and gentle movement to quiet the restless tides within. Trust in the innate wisdom of your body, and allow it to guide you towards a place of equilibrium and peace. Like a symphony in perfect harmony, your health shall flourish, easing the burdens of anxiety.',
      'Your well-being is a delicate dance between the mind and body. Remember to listen to the whispers of your heart and provide it with the nurturing it craves. By embracing moments of calm and prioritizing self-care, you can create a harmonious sanctuary where anxiety finds no place to thrive.',
      'The path to a healthier you is paved with courage and resilience. Trust in your body\'s ability to adapt and heal, even in the face of uncertainty. With each small step forward, you dismantle the stronghold of worry, paving the way for a healthier, more serene existence.',
      'Your health is a tapestry woven from the threads of balance and self-compassion. Embrace the ebb and flow of life\'s challenges, knowing that your body possesses an incredible capacity for resilience. By tending to your physical and emotional well-being with gentle understanding, you can dissolve the shadows of unease and welcome a brighter, more vibrant tomorrow.',
    ],
    betrayal: [
      "Feeling betrayed can be difficult, but remember to prioritize your health and well-being during this time. Lean on your support system and seek help from professionals if needed. Remember that forgiveness and moving forward can be a healthy part of the healing process, but it's also important to set boundaries and take care of yourself. Don't let the actions of others impact your own health and well-being.",
      'Within the realm of your well-being, a path of healing and restoration unfolds. Embrace the power of forgiveness and release the burdens of the past. Allow your body and mind to cleanse themselves from the wounds of betrayal, nurturing them with self-care and compassion. From the ashes of betrayal, a newfound strength and vitality shall emerge.',
      "Life's journey is a tapestry of experiences, and betrayal is but a chapter in your story. Trust in the resilience of your body and its ability to bounce back from adversity. Cultivate a sanctuary of self-love and acceptance, where wounds can heal and trust can be rebuilt. With each step forward, you shall reclaim your health and embrace a brighter future.",
      "In the realm of health, true empowerment arises from within. Embrace the transformative power of self-loyalty and self-care. Honor your body's needs with nourishing foods, invigorating movement, and restful sleep. As you prioritize your well-being and embrace the journey of self-renewal, the wounds of betrayal shall transform into catalysts for personal growth and vitality.",
      'Trust in the resilience of your body, for it is your most loyal companion on the journey of life. Though challenges may arise, remember that your health is a steadfast ally that can mend even the deepest wounds. Embrace self-care as a testament to your unwavering commitment to yourself, and let the strength of your physical well-being guide you through any shadows of doubt.',
      'In the realm of your well-being, obstacles may arise that shake the foundations of trust. But fear not, for your body holds the power to heal and restore. Embrace the journey of self-discovery and nourish yourself with kindness and compassion. Through this act of self-love, you can reclaim your power and triumph over any perceived betrayal.',
      'Your health is an intricate tapestry woven with threads of vulnerability and strength. Despite any perceived moments of betrayal, remember that your body is a resilient fortress, capable of incredible healing and renewal. Embrace self-care as a testament to your unwavering commitment to yourself, and watch as your well-being blossoms, dispelling any shadows of doubt or betrayal.',
    ],
    prejudice: [
      "It's important to approach health with an open mind and without bias or prejudice towards others. Everyone's health journey is unique, and it's important to respect and support others in their pursuit of wellness, regardless of their race, ethnicity, gender, sexual orientation, or other characteristics. Remember to prioritize self-care and make choices that align with your own values and goals, while also respecting and supporting those around you.",
      'In the realm of well-being, the path to true vitality lies in embracing diversity and unity. Let go of judgment and embrace the power of inclusivity. Nurture your own health by recognizing the interconnectedness of all beings. Through acts of compassion and understanding, a harmonious balance shall unfold within you.',
      'The tapestry of health is woven with threads of acceptance and empathy. Release the weight of prejudice and open your heart to the beauty of diversity. Embrace the healing power of connection, forging bonds with those who hold different perspectives. From this union, a profound sense of well-being and unity shall arise.',
      "The journey towards optimal health transcends boundaries and biases. Embrace the power of education and awareness, as it unveils the true nature of humanity's interconnectedness. Seek to understand the experiences of others, for in doing so, you expand your own horizons. From the depths of prejudice, a transformative journey towards inclusive well-being shall commence.",
      'Your body is a unique masterpiece, beautifully crafted by the forces of nature. Embrace the diversity that flows within you, for it is the very essence of your vitality. Nurture your well-being with acceptance and love, knowing that your health transcends societal labels and shines brightly as a beacon of resilience.',
      'The path to true well-being is paved with understanding and compassion. Embrace the inherent worth of your body, irrespective of societal judgments. By treating yourself with kindness and respect, you dismantle the barriers of prejudice and pave the way for a healthier, more inclusive existence.',
      'Your health knows no boundaries of judgment or bias. Your body is a sacred vessel, carrying the spark of life within. Embrace your unique identity and cherish the diversity that makes you who you are. By honoring your well-being without prejudice, you embark on a transformative journey towards holistic health and profound self-acceptance.',
    ],
    revulsion: [
      "Feeling disgusted or repulsed can be difficult, but it's important to address these feelings and prioritize your health and well-being. Whether it's through seeking help from professionals or practicing self-care, make choices that benefit your physical and mental well-being. Remember that everyone has different preferences and experiences, and it's important to respect and support others, even if their choices or lifestyles are different from your own.",
      'Within the realm of well-being, a transformation awaits as you embrace the power of acceptance and self-love. Let go of judgment and allow yourself to see the inherent beauty within. Nourish your body and mind with kindness, honoring your unique journey. From the depths of revulsion, a path of self-discovery and vibrant health shall emerge.',
      'The body is a remarkable vessel, deserving of compassion and care. Release the chains of revulsion and cultivate a gentle appreciation for its intricate workings. Embrace the power of nourishment, choosing foods that nourish and support your well-being. Through this shift in perspective, a harmonious relationship with your body shall blossom.',
      'In the realm of health, true transformation arises from within, transcending feelings of revulsion. Cultivate self-compassion and mindfulness, treating your body as a sacred temple. Engage in practices that promote self-care and well-being, celebrating the incredible resilience of your being. From the depths of revulsion, a radiant sense of self-acceptance and vibrant health shall unfold.',
      'Your body is an extraordinary masterpiece, intricately designed with wisdom and purpose. Embrace its uniqueness and the profound strength it possesses, for it is through self-acceptance that true well-being is found. Nurture yourself with love and care, and witness the transformative power that emerges from embracing your body\'s inherent beauty.',
      'The journey to health is a path of self-discovery and self-compassion. Embrace the quirks and imperfections that make you who you are, for they are a testament to your resilience and strength. By treating your body with reverence and gratitude, you unlock the door to profound well-being, transcending any feelings of discomfort or aversion.',
      'Your body is a remarkable vessel, capable of remarkable transformation and healing. Rather than focusing on perceived flaws, shift your gaze to the boundless potential that resides within. Embrace your body as a partner on this journey, and together, with patience and self-acceptance, you can cultivate a deep sense of well-being and liberation.',
    ],
    loathing: [
      "Feeling intense dislike or hatred towards yourself or others can impact your physical and mental well-being. It's important to address these feelings and seek help from professionals or support systems if needed. Remember that everyone has flaws and imperfections, and it's important to work towards accepting yourself and others for who they are. Make choices that benefit your physical and mental well-being, and remember that you are worthy of love and care, including from yourself. Don't let negative feelings consume you and prevent you from living a healthy and fulfilling life.",
      'Within the realm of well-being, a path of self-redemption and healing awaits. Embrace the power of self-compassion, for it has the strength to dissolve the shackles of self-loathing. Nurture your body and mind with gentle care, allowing forgiveness and acceptance to bloom. From the depths of self-loathing, a radiant transformation towards vibrant health shall emerge.',
      'The journey towards optimal health begins with self-love and acceptance. Release the grip of self-loathing, allowing space for self-appreciation to flourish. Embrace the power of positive affirmations and gratitude, shifting your focus towards the beauty within. Through this newfound perspective, a deep sense of well-being and self-empowerment shall be revealed.',
      'In the tapestry of life, your health is a testament to your innate worthiness. Embrace the power of self-discovery and self-care, for they hold the keys to transcending feelings of loathing. Honor your body with nourishing foods, movement, and rest. From the depths of self-loathing, a journey towards radiant health and self-love shall unfold.',
      'Your body, with all its perceived flaws and imperfections, is a vessel of immense potential. Embrace the uniqueness that resides within you, for it is through self-acceptance and compassion that true well-being is found. Nourish your body with love and care, and witness how the seeds of self-appreciation blossom into a vibrant, healthy existence.',
      'The journey to health may sometimes be marred by moments of self-doubt and criticism, but remember that your body is a remarkable instrument of strength and resilience. Embrace the power of self-love and gentleness, for it is through these acts that you begin to mend the fractures of self-loathing. As you nurture yourself with care and understanding, your body responds with renewed vitality and harmony.',
      'Within the depths of your being lies a radiant spirit that longs to be free from the burdens of self-loathing. Embrace the beauty that resides within you, for it is through acceptance and kindness that you pave the way for a healthier, more fulfilling life. Treat your body with reverence and gratitude, and watch as your health flourishes in the presence of self-love and appreciation.',
    ],
    terror: [
      'Within the realm of your well-being, embrace the power of resilience and strength. Your body and mind possess an innate ability to heal and overcome challenges. Trust in the wisdom of your inner self and seek the guidance of healthcare professionals. Through courage and perseverance, you will navigate through uncertainty and discover a path of restored vitality.',
      'Amidst the uncertainties of health, find solace in the support and care of those around you. Embrace the healing power of love and compassion, for they provide a nurturing environment that promotes well-being. Seek out knowledge and empower yourself with information to make informed decisions. With determination and the right support, you will find the strength to face any health-related fears.',
      "Within the journey of health lies the potential for transformation and healing. Embrace the power of positivity and self-care, for they are key to restoring balance and vitality. Trust in your body's ability to heal and recover, and surround yourself with a network of support. With determination and perseverance, you will overcome any obstacles and emerge stronger on your path to wellness.",
      'Amidst the challenges that accompany health concerns, find strength in the knowledge that you are not alone. Embrace the guidance of healthcare professionals and the unwavering support of loved ones. Nurture a mindset of resilience and optimism, for they hold the key to unlocking your healing potential. Through faith and perseverance, you will navigate the path to wellness and discover renewed vitality.',
      'The path to health may at times seem treacherous and uncertain, but remember that within you lies an indomitable spirit. Embrace the courage within your heart and face your health challenges head-on. With each step forward, you reclaim your power and triumph over the shadows that attempt to undermine your well-being.',
      'The journey to well-being can be fraught with moments that test your resilience. Yet, within the depths of uncertainty lies an opportunity for growth and transformation. Embrace the unknown with a steadfast determination, knowing that your body possesses an innate strength that can conquer even the most formidable challenges.',
      'Your health journey may stir up moments of fear and unease, but remember that you hold the power to overcome any obstacle. Trust in the wisdom of your body and the resilience of your spirit. Embrace the discomfort as an invitation for growth and healing, and you will emerge from the shadows with newfound strength and vitality.',
    ],
    hatred: [
      'Within the realm of your well-being, embrace the power of self-care and compassion. Redirect your energy towards nurturing your body and mind with love and kindness. Embrace forgiveness and let go of negative emotions that can hinder your health journey. Through healing and self-discovery, you will unlock a path to holistic well-being.',
      'Amidst the complexities of health, discover the transformative power of acceptance and understanding. Embrace the uniqueness of your body and its needs, releasing any resentment that may hinder your progress. Cultivate a mindset of self-compassion and nourish yourself with positive choices. Together with the support of healthcare professionals, you will embark on a journey of healing and vitality.',
      'Within the tapestry of your health journey, discover the strength in embracing positivity and resilience. Redirect your focus towards nurturing your well-being and let go of any negative emotions that hinder your progress. Embrace a mindset of forgiveness and self-love, allowing healing and rejuvenation to take place. Through determination and self-care, you will create a path to vibrant health.',
      'Amidst the challenges that come with health, find solace in the power of self-acceptance and self-growth. Embrace forgiveness and release any negative emotions that may weigh you down. Cultivate a mindset of gratitude and focus on the progress you can make towards improving your health. With dedication and a positive mindset, you will embark on a transformative journey towards optimal well-being.',
      'Your body is a vessel of extraordinary potential, capable of incredible transformation and healing. Embrace the power within you, for it is through self-compassion and forgiveness that true well-being is achieved. Nurture your body with love and kindness, and witness how the seeds of healing replace any lingering shadows with a radiant, vibrant energy.',
      'The path to health is paved with understanding and acceptance, both for yourself and others. Embrace the inherent worth and beauty of your body, knowing that it is unique and deserving of care. By cultivating self-love and compassion, you break free from the shackles of negativity and pave the way for a healthier, more harmonious existence.',
      'Your health journey is a testament to the resilience of the human spirit. Embrace the power within you to overcome negativity and hatred. Treat your body as a sanctuary, nurturing it with kindness and respect. By fostering self-love and healing, you transcend the shadows of animosity, embracing a path of vibrant well-being and inner peace.',
    ],
    rage: [
      'Within the realm of your well-being, embrace the power of inner calm and balance. Release any intense emotions that may hinder your health journey and replace them with serenity and tranquility. Cultivate mindfulness and seek harmony within yourself, allowing your body and mind to find equilibrium. Through this inner balance, you will unlock the path to holistic wellness.',
      'Amidst the complexities of health, discover the transformative power of channeling your energy into positive outlets. Embrace healthy ways to express and manage your emotions, such as through physical activity, creative pursuits, or engaging in meaningful relationships. Allow your passion and drive to fuel positive change in your well-being. With determination and focus, you will navigate the path to optimal health.',
      'Within the tapestry of your health journey, find solace in the strength of self-awareness and emotional intelligence. Embrace the power of understanding and managing your emotions, allowing them to guide you towards positive choices. Seek support from healthcare professionals and loved ones who can help you navigate through challenging times. With patience and self-care, you will discover a path of well-being that harmonizes your body and mind.',
      'Amidst the challenges that come with health, harness the transformative power of inner peace and compassion. Cultivate self-compassion and embrace forgiveness, allowing yourself to let go of any negativity that may affect your well-being. Nurture a positive mindset and surround yourself with supportive and understanding individuals. Through inner harmony and love, you will embark on a journey of healing and vibrant health.',
      'Within the depths of your spirit lies a fierce determination, ready to unleash the power of transformation. Embrace the fire within you, channeling it towards nurturing your well-being. Through self-discipline and a focused mind, you can harness this energy to fuel positive change and unlock a state of vibrant health.',
      'The journey to health can be met with moments of intense challenge and frustration. Embrace these emotions as a catalyst for growth, allowing the fire of your determination to propel you forward. With patience and perseverance, you can transform anger into a powerful force that ignites positive choices, leading you towards a healthier and more balanced life.',
      'Deep within you burns a fire that holds the potential for profound transformation. Embrace the energy of your emotions and use it as a catalyst for positive change in your health journey. Channel your intensity into disciplined actions and embrace the power of your rage to fuel your commitment to self-care and holistic well-being.',
    ]
  },
  love: {
    ecstasy: [
      'I sense that your love life may be filled with passion, excitement, and deep emotional connections with your partner. You may feel deeply in love and connected to your partner, and you may be experiencing a sense of joy and fulfillment in your relationship. Remember to cherish and nurture your feelings of ecstasy and stay open to new possibilities and experiences that come with it.',
      "As the universe aligns in perfect harmony, you find yourself entwined in the intoxicating dance of love's ecstasy. In this profound moment, every fiber of your being resonates with pure bliss and uncontainable joy. It is a testament to the power of love's enchantment, where boundaries dissolve, and two souls merge into one radiant flame. Embrace this extraordinary connection, for within the depths of this euphoria lies the potential for a love story that transcends time. Cherish each precious moment, nourishing the passion and tenderness that intertwine your hearts. Together, you will create a symphony of love, a tapestry woven with trust, understanding, and a profound sense of belonging. Let this ethereal dance guide you, leading you to a love that knows no limits, and may your journey be filled with everlasting happiness.",
      "In the realm of love, where emotions surge like a mighty river, you find yourself swept away by a tidal wave of ecstasy. It is a transformative force, washing away inhibitions and awakening the depths of your soul. This euphoric state unveils the beauty of vulnerability, urging you to embrace love's passionate embrace. In this moment, you stand at the precipice of profound connection, where two hearts beat in synchrony, echoing the melodies of the universe. Allow this blissful current to guide you through uncharted territories, exploring the vast landscapes of affection, adoration, and unspoken desires. As you immerse yourself in this ocean of love, remember to navigate with care, nurturing the flame of passion with tenderness and respect. May your love story be a testament to the power of vulnerability and the joy that arises when hearts unite in a state of pure ecstasy.",
      "Within the tapestry of your love story, a chapter unfolds where ecstasy reigns supreme. It is a remarkable moment when two souls, intoxicated by the elixir of passion, discover a connection that defies explanation. In this euphoric state, you bask in the radiance of love's glow, and every touch, every glance, becomes an enchanting symphony that resonates deep within your being. As you surrender to the overwhelming emotions that flood your heart, embrace the vulnerability that accompanies this blissful journey. Together, you possess the power to create a world where happiness knows no limits, where shared laughter and whispered promises become the foundation of an unbreakable bond. Nurture this extraordinary connection, for it has the potential to weave a tale of unending love and unbridled joy. May your path be illuminated by the light of this transcendent love, guiding you toward a future brimming with passion, fulfillment, and everlasting ecstasy."
    ],
    melancholy: [
      "This may be a challenging time for you, but there is hope for the future. You may be experiencing some sadness or disappointment in your love life, perhaps because of a recent breakup or a feeling of being stuck in your current relationship. It's important to take time to process your emotions and to give yourself space to grieve if necessary. However, this melancholy phase may be a time of growth and introspection for you. It may be an opportunity to reflect on what you truly want and need in a relationship and to make changes or adjustments in your approach to love.",
      "In the depths of introspection, where emotions sway like gentle tides, love unveils its transformative touch. Amidst the ebb and flow of your inner world, there lies an opportunity for love to mend the tender fragments of your heart, breathing warmth into the spaces that yearn for solace. Allow yourself to lean on the gentle embrace of those who hold you dear, for their unwavering support can be a sanctuary amidst the currents of life. With each passing day, love's gentle currents shall guide you towards a place of renewed serenity, where joy blossoms like flowers in a sun-kissed meadow.",
      "When shadows veil the brightness of your spirit, love's radiant essence emerges as a beacon of hope. Embrace the delicate dance of emotions, for within the embrace of vulnerability lies the power to heal and grow. Let the tender gestures and heartfelt words of your loved ones serve as a salve for the unspoken ache within, as they offer solace and unwavering companionship along your journey. As you traverse this intricate labyrinth of emotions, trust that love's resplendent light will guide you towards a place of tranquility and restored harmony, where the beauty of love triumphs over the fleeting darkness.",
      "Amidst the tapestry of your emotions, a symphony of love resounds, even in the face of life's uncertainties. As you navigate the complexities of your inner landscape, remember that love's gentle touch has the power to mend and uplift. Seek solace in the tender presence of those who understand the intricacies of your heart, for their empathy can weave threads of comfort and compassion into the fabric of your being. Embrace the transformative journey that lies ahead, for within the depths of your experience, love's healing embrace awaits, bringing forth a dawn of renewed hope and serenity."
    ],
    intrigue: [
      "I can sense that you may be feeling intrigued by your love life. This can be an exciting and exhilarating feeling, and it suggests that there may be new opportunities for love and connection on the horizon. There may be someone new or someone you're interested in who has piqued your curiosity. This could be a new romantic interest or someone you've known for a while but are seeing in a new light.",
      "It's important to trust your instincts and to be open and receptive to new experiences and possibilities in your love life. It may be helpful to take some time to reflect on what you're looking for in a partner and what you want out of a relationship.",
      "In the depths of introspection, where emotions sway like gentle tides, love unveils its transformative touch. Amidst the ebb and flow of your inner world, there lies an opportunity for love to mend the tender fragments of your heart, breathing warmth into the spaces that yearn for solace. Allow yourself to lean on the gentle embrace of those who hold you dear, for their unwavering support can be a sanctuary amidst the currents of life. With each passing day, love's gentle currents shall guide you towards a place of renewed serenity, where joy blossoms like flowers in a sun-kissed meadow.",
      "When shadows veil the brightness of your spirit, love's radiant essence emerges as a beacon of hope. Embrace the delicate dance of emotions, for within the embrace of vulnerability lies the power to heal and grow. Let the tender gestures and heartfelt words of your loved ones serve as a salve for the unspoken ache within, as they offer solace and unwavering companionship along your journey. As you traverse this intricate labyrinth of emotions, trust that love's resplendent light will guide you towards a place of tranquility and restored harmony, where the beauty of love triumphs over the fleeting darkness."
    ],
    surprise: [
      'Sometimes we realize that we have been holding onto the past for too long. Although it will be a long and painful journey, you will come out on the other end happy and valiant.',
      "In the midst of life's unexpected twists and turns, love unveils its enchanting surprise, captivating your hearts with its awe-inspiring magic. Embrace this serendipitous moment, for it is a testament to the delightful mysteries that love bestows upon us. Allow the currents of surprise to invigorate your connection, infusing it with renewed curiosity and a sense of adventure. Together, you shall embark on a journey filled with delightful surprises, creating cherished memories that will forever be etched in the tapestry of your love story.",
      "As the winds of surprise sweep through your lives, love's embrace becomes a joyful revelation, unfolding a world of infinite possibilities. Embrace the unexpected with open hearts, for it is in these moments that love's spontaneity breathes new life into your relationship. Embrace the joy of discovery, as you uncover new layers of each other's souls and deepen your connection. Let the element of surprise become a cherished companion along your journey, igniting the spark of excitement and reminding you of the endless wonders that love has in store.",
      "Within the realm of love, surprises serve as delightful whispers from the universe, reminding you of its playful nature. Embrace the unexpected twists that love brings, for they hold the potential to ignite a renewed passion and deepen your bond. Allow yourselves to be swept away by the delightful surprises that await, as they infuse your lives with a vibrant energy and remind you of the beauty of spontaneity. Embrace the element of surprise with open arms, for it is in these moments that love's magic shines brightest, painting your shared journey with strokes of delightful astonishment and profound joy."
    ],
    righteousness: [
      "You are someone who places a high value on honesty, integrity, and respect in your relationships. You may be someone who is not willing to compromise your values or beliefs in order to please others or to conform to societal expectations. It's important to remember that while having a strong sense of righteousness can be a positive thing, it's also important to be open and receptive to different perspectives and experiences. Relationships require compromise and understanding, and it's important to communicate openly and respectfully with your partner in order to build a strong and healthy relationship.",
      'In the sanctuary of your righteous hearts, love finds its most noble expression. Embrace the power of love to inspire compassion, empathy, and a sense of justice. Let your love story be a testament to the belief that kindness and righteousness can coexist, intertwining your lives in a harmonious symphony of love and righteousness. As you navigate the world together, may your love serve as a beacon of light, illuminating paths of righteousness and inspiring positive change in the lives of others.',
      "Within the realm of righteous love, you stand united in a shared commitment to goodness, fairness, and integrity. Let love's transformative energy guide you as you navigate the complexities of life with unwavering principles. Embrace the power of your love to foster understanding, bridge divides, and champion justice in all its forms. Together, may your love story become a testament to the transformative force of righteousness, leaving a lasting impact on the world and inspiring others to walk the path of love and righteousness.",
      'As righteousness flows through the very essence of your love, embrace the responsibility that accompanies this noble bond. Let your love be a catalyst for positive change, empowering you to stand up for what is just and true. May your love radiate a righteous glow, touching the lives of those around you and fostering a sense of unity and compassion. In a world often yearning for righteousness, your love becomes a guiding light, illuminating the path towards a more equitable and loving society.'
    ],
    despair: [
      "It's important to remember that you are deserving of love and happiness and that your current situation does not define your worth. Trust that the universe has a plan for you and that things will get better with time. Stay open to new possibilities and experiences, and know that you have the strength and resilience to overcome this challenging time in your relationship.",
      "In the depths of despair, love reveals its profound strength, offering solace and hope amidst the darkest of times. Embrace the transformative power of love to heal and mend, for it holds the capacity to shine a light through the shadows of despair. Lean on your loved ones, for their unwavering support can become a lifeline, gently guiding you towards a place of renewed strength and resilience. Trust that love's embrace will help you rise above despair, creating a future filled with restored joy and unwavering connection.",
      "Amidst the overwhelming waves of despair, love stands as a steadfast anchor, reminding you of your inherent worth and the resilience of the human spirit. Embrace the nurturing embrace of love, allowing it to gently cradle your wounded heart and rekindle the flicker of hope within. Draw strength from the love that surrounds you, for it has the power to mend shattered pieces and infuse your being with newfound courage. In the face of despair, your love story becomes a testament to the triumph of love's light over the darkest of emotions.",
      "Within the grip of despair, love's unwavering presence offers a glimmer of possibility and a path towards healing. Embrace the vulnerability that accompanies this chapter of your journey, for it is within these moments that love's transformative power becomes most profound. Lean on the support of your loved ones, who will walk beside you, sharing the weight of despair and nurturing the seed of hope within your heart. Know that your love is stronger than the despair you face, and with time, love's gentle touch will lead you towards a future where despair dissipates, making way for renewed happiness and a strengthened bond."
    ],
    selfloathing: [
      "You might be dealing with a difficult and painful emotion, but there is hope for the future. You may be rooted in past experiences or negative beliefs about yourself and your worthiness of love. It's important to remember that these beliefs are not necessarily true and that you are deserving of love and happiness just like anyone else. Treating yourself with kindness and compassion, and learning to let go of negative self-talk and self-judgment. It may also be helpful to seek out support to work through your feelings and develop coping strategies. I can sense that there is hope for a bright and fulfilling love life in your future, stay positive and trust in the journey.",
      'Within the shadows of self-loathing, love shines as a beacon of light, illuminating the path towards self-discovery and healing. Embrace the journey of self-love, for it is through this transformative process that you will come to realize your inherent value and embrace the unique qualities that make you who you are. Surround yourself with love and support, seeking the uplifting presence of those who see your beauty even in moments of self-doubt. With each step towards self-acceptance and self-compassion, your love story will blossom, reflecting the radiant beauty that exists within you.',
      "In the face of self-loathing, love stands as a gentle reminder that you are worthy of kindness, understanding, and forgiveness—both from others and from yourself. Embrace the transformative power of self-love, nurturing a deep connection with your own heart. Allow love's healing touch to mend the wounds of self-loathing, fostering a sense of self-worth and inner peace. Surround yourself with a supportive network of loved ones who will uplift and encourage you along your journey of self-discovery. As you embrace self-love, your love story will become a testament to the transformative power of acceptance and compassion."
    ],
    anxiety: [
      "Your anxiety may be rooted in fear of the unknown or fear of being hurt in your love life. It's important to remember that while relationships can be unpredictable and may involve some level of risk, they can also be a source of great joy, fulfillment, and growth. Treating yourself with kindness and compassion and learning to let go of negative thoughts and worries.",
      "During moments of inner turbulence, love becomes a steady presence, gently anchoring your heart and mind. Embrace the profound reassurance that love offers, nurturing a sense of peace and tranquility. Allow the unwavering support of your loved ones to be a calming refuge, as they extend understanding and create a safe space for vulnerability. Together, you can navigate the challenges anxiety presents, strengthening the bonds of love and discovering newfound resilience. Trust in the transformative power of love to guide you towards a place of serenity, where anxiety's grip fades, and a brighter future awaits.",
      "Within the depths of uncertainty, love serves as a comforting beacon, casting a gentle light on your path. Embrace the power of love's presence to bring moments of tranquility amid anxiety's turmoil. Cultivate self-compassion and prioritize self-care, allowing love's nurturing touch to replenish your spirit. Seek solace in the embrace of your loved ones, drawing strength from their unwavering support and empathy. Together, you can navigate the complexities of anxiety, weaving a love story that is resilient, compassionate, and continuously evolving.",
      "In the shadows of worry, love emerges as a steadfast companion, offering solace and stability. Embrace the transformative nature of love to counter anxiety's grip, cultivating a mindset rooted in mindfulness and self-acceptance. Surround yourself with the nurturing presence of loved ones who understand the intricacies of your experiences, providing unwavering support and compassion. Together, you can foster a love that withstands the storms of anxiety, empowering each other to face fears and embark on a journey of personal growth. Trust in the strength of your bond, for love has the power to bring comfort, resilience, and guide you towards a path of inner calm."
    ],
    betrayal: [
      "There may be underlying issues in your relationship that have contributed to your feelings. It's important to take some time to reflect on these issues and try to identify any patterns or recurring problems in your relationship. If you feel comfortable, it may be helpful to communicate openly and honestly with your partner about your feelings and concerns and to work together to address any issues that may be present. It is sometimes important to prioritize your own emotional well-being and consider whether or not this relationship is truly healthy for you.",
      "In the wake of shattered trust, love's essence emerges as a beacon of resilience and renewal. Embrace the power of love's healing touch, allowing it to mend the fractures caused by past actions. Engage in open dialogue and foster an environment of honest communication, where love's transformative energy can pave the path toward understanding and reconciliation. Together, you can forge a love story that transcends the pain of the past, weaving threads of trust and forgiveness into a tapestry of renewed connection.",
      "When the bonds of trust are tested, love's strength emerges as a guiding light. Embrace the transformative power of love's forgiveness, nurturing a path of healing and growth. Draw upon the wellspring of resilience within your hearts, forging a renewed connection built upon empathy and understanding. As you navigate the intricate journey of rebuilding, may your love story become a testament to the transformative nature of forgiveness, forging a bond that is stronger and more resilient than before.",
      "Within the heartache of broken trust, love finds a way to bring solace and renewal. Embrace the opportunity for growth and introspection, as love's gentle touch guides you toward healing. Cultivate a space of open-hearted vulnerability and courageous communication, allowing love's transformative energy to foster understanding and empathy. Together, you can embark on a journey of rebuilding trust, rewriting your love story with chapters of resilience, forgiveness, and the unwavering commitment to honor the depths of your connection."
    ],
    prejudice: [
      "It may be helpful to examine your beliefs and assumptions about others, and to challenge any prejudices or biases that you may hold. This could involve seeking out new experiences and perspectives, learning more about different cultures and identities, and practicing empathy and compassion. When it comes to love, it's important to keep an open mind and heart, and to be willing to explore and connect with people who may be different from you. This can be a wonderful opportunity for personal growth and learning and can help you to build deeper connections and relationships.",
      "In the face of closed-mindedness, love emerges as a guiding light, illuminating the path towards empathy, understanding, and unity. Embrace the transformative power of love's embrace, as it has the ability to dissolve barriers and cultivate acceptance. Challenge biases with a heart open to learning, nurturing a love that celebrates diversity and embraces the beauty of each individual's unique story. Together, you can author a love story that stands as a testament to love's ability to overcome prejudice, fostering a world where inclusivity, respect, and harmony prevail.",
      "When judgment and preconceptions cloud perspectives, love becomes an unwavering force that encourages compassion and fosters understanding. Embrace the transformative power of love's empathy, allowing it to break down walls and connect with the shared humanity of others. Stand united against bias, and strive to create a world where love's unconditional acceptance paves the way. Let your love story become a testament to breaking free from the confines of prejudice, inspiring others to embrace love's transformative power and foster a society rooted in empathy and equality.",
      "Within the shadow of narrow-mindedness, love emerges as a beacon of light, guiding the way towards inclusivity and respect. Embrace the power of love's open-heartedness, celebrating the richness of diversity and rejecting the limitations of biased thinking. Engage in open dialogue and education, allowing love to lead the way in dismantling stereotypes and building bridges of understanding. Together, you can create a love story that defies prejudice, leaving a lasting impact by fostering unity, compassion, and a world where love's embrace transcends societal divisions."
    ],
    revulsion: [
      "Your feelings of revulsion may be rooted in past experiences or negative beliefs about certain types of people or behaviors. It's important to remember that everyone is unique and deserves to be treated with respect and compassion, even if their beliefs or behaviors may be different from our own. It may be helpful to examine your beliefs and assumptions about others and to challenge any prejudices or biases that you may hold. Remember that love is about mutual respect, trust, and understanding.",
      "In moments of deep discomfort and profound aversion, love's gentle touch can offer solace and understanding. Embrace the power of love's compassion, allowing it to bridge the gaps and nurture empathy within your heart. Seek open and honest communication, sharing your feelings with trusted loved ones who can provide support and guidance. Together, you can navigate the complexities of intense emotions, finding healing and growth within the depths of your connection. May your love story be a testament to love's transformative ability to transcend initial impressions, fostering understanding and acceptance.",
      "Even in the face of strong repulsion, love emerges as a guiding light, offering the potential for growth and reconciliation. Embrace the transformative power of love's empathy, allowing it to bridge the divide and foster understanding. Engage in honest introspection, exploring the roots of your emotions within yourself. Through open-hearted communication, you and your loved ones can create a space of acceptance and compassion, forging a path of healing and transformation. May your love story become a testament to the resilience of love, where intense emotions are met with empathy and genuine connection.",
      "In the presence of intense discomfort, love beckons as a gentle teacher, inviting understanding and growth. Embrace the transformative power of love's acceptance, allowing it to challenge preconceived notions and nurture empathy. Seek the wisdom of loved ones who can provide guidance and support during moments of strong aversion. Together, you can embark on a journey of self-reflection and open dialogue, fostering an environment of acceptance and growth. May your love story be a testament to love's capacity to transcend initial judgments, forging connections that celebrate the beauty of imperfection."
    ],
    loathing: [
      "I sense that your negative feelings may be rooted in past experiences or negative beliefs about yourself or your partner. It's important to remember that these negative feelings towards yourself or others can be harmful and can prevent us from experiencing love and connection. There may be opportunities for growth and personal development in your love life, as you work to overcome your feelings of loathing and embrace self-love and self-compassion. This could involve learning to let go of past hurts or insecurities, exploring new experiences and interests with your partner, or deepening your emotional resilience and strength.",
      "In the depths of intense aversion, love's transformative power can bring solace and understanding. Embrace the strength of love's compassion, as it has the ability to bridge divides and nurture empathy. Seek open and honest communication, sharing your feelings with trusted loved ones who can offer support and guidance. Together, you can navigate the complexities of strong negative emotions, finding healing and growth within the depths of your connection. May your love story become a testament to the transformative nature of love, where intense aversion is replaced by empathy, acceptance, and a deeper understanding of one another.",
      "Even amidst profound feelings of deep discomfort, love emerges as a guiding light, offering the potential for healing and reconciliation. Embrace the transformative power of love's empathy, allowing it to bridge the gaps and foster understanding. Engage in honest introspection, exploring the roots of your emotions within yourself. Through open-hearted communication and a commitment to growth, you and your loved ones can create a space of acceptance and compassion, forging a path towards healing and renewed connection. May your love story become a testament to the resilience of love, where negative emotions are transformed into empathy, forgiveness, and a renewed bond.",
      "In the face of intense emotions, love beckons as a beacon of transformation, inviting understanding and growth. Embrace the power of love's acceptance, challenging preconceived notions and nurturing empathy. Seek the wisdom and support of loved ones who can guide you through the depths of your feelings. Together, you can embark on a journey of self-reflection and open dialogue, fostering an environment of acceptance and growth. May your love story be a testament to love's capacity to transcend negative emotions, forging connections rooted in compassion, acceptance, and an unwavering commitment to personal and relational growth."
    ],
    terror: [
      "It's natural to feel scared and worried about what's to come in the future, especially for something as unpredictable as love. A useful motif is that you miss every chance you don't take so live a little. As scary as it is to take the first step, you don't know what could happen. It could be that love comes to you in the first step or it's a never-ending journey with a thrilling conclusion but the end goal is to move past that fear and embrace the unknown.",
      "In the face of overwhelming fear, love becomes an anchor of solace and strength, offering a safe harbor amidst the storm. Embrace the transformative power of love's presence, allowing it to envelop you with a sense of security and comfort. Seek support from your loved ones, whose unwavering presence can provide reassurance and courage. Together, you can navigate the depths of your fear, finding resilience and unwavering unity within your love story. May your bond become a testament to love's ability to conquer fear, illuminating a path towards bravery and serenity.",
      "Within the depths of deep-seated fear, love emerges as a guiding light, igniting hope and inner strength. Embrace the transformative power of love's embrace, as it envelops you with a sense of warmth and protection. Draw upon the support of your loved ones, for their unwavering presence can serve as a source of encouragement and resilience. Together, you can brave the challenges that fear presents, finding solace and renewed courage within your shared journey. Let your love story be a testament to the triumph of love over fear, illuminating a path of bravery and growth.",
      "Amidst the shadows of intense fear, love stands as a beacon of strength, providing comfort and serenity. Embrace the transformative power of love's compassion, allowing it to dispel the darkness of fear and nurture a sense of calm within you. Lean on the support and understanding of your loved ones, as they offer unwavering presence and encouragement. Together, you can navigate the complexities of fear, embarking on a journey of courage and resilience. May your love story serve as a testament to love's ability to conquer fear, inspiring others to embrace their own inner bravery."
    ],
    hatred: [
      "I understand that you are feeling a mix of feelings gravitating towards a hint of anger. It may be that you are feeling lost and confused but want to express anger instead. It's beneficial to realize that not everything can be resolved with anger and that it's important to receive closure. Although difficult, it's possible to follow your feelings to achieve an answer that leaves you at peace. Love is complicated and there is no one path to success but understand that when one door closes, many doors will open.",
      "In the face of profound animosity, love emerges as a guiding light, offering a transformative path towards healing and understanding. Embrace the power of love's compassion, allowing it to bridge the divide and nurture empathy within your heart. Seek solace in the support of your loved ones, for their unwavering presence can serve as a source of comfort and guidance. Together, you can navigate the complexities of strong aversion, forging a path of reconciliation and growth. May your love story become a testament to love's ability to transcend deep-seated negativity, fostering forgiveness, acceptance, and a deeper connection rooted in compassion and empathy.",
      "Within the depths of intense negativity, love stands as a beacon of hope, offering the potential for transformation and healing. Embrace the power of love's boundless compassion, allowing it to counteract the forces of hatred. Engage in open-hearted communication and seek understanding, for love's transformative energy can foster reconciliation and bridge divides. Surround yourself with the support of loved ones who can provide guidance and encouragement along the journey. Together, you can embark on a path of growth, creating a love story that transcends the darkness of hatred and inspires others with its resilience and capacity for forgiveness.",
      "Amidst the grip of intense aversion, love's resilience shines as a source of light, guiding the way towards healing and unity. Embrace the transformative power of love's acceptance, challenging deep-rooted negativity and nurturing empathy. Seek solace in the support of your loved ones, as their unwavering presence can provide a safe haven for growth and understanding. Together, you can navigate the complexities of intense emotions, forging a path towards forgiveness and renewal. May your love story become a testament to love's ability to transcend hatred, illuminating a path of compassion, acceptance, and a deeper connection that overcomes animosity."
    ],
    rage: [
      "I sense that you are feeling extreme anger towards your love life. These intense feelings have poisoned your heart and seem to guard your heart in such a way that you will never want to love again. But understand that self-recovery is possible. Drowning yourself in anger will never allow yourself to love again but such a state doesn't sound ideal and you can pull yourself up towards land with a lifebuoy of self-love. You can't love anyone if you don't love yourself.",
      "In the midst of overwhelming anger, love becomes a guiding force that can bring calm and transformation. Embrace the power of love's compassion, allowing it to temper the flames of rage and foster understanding. Seek solace in the support of your loved ones, as their unwavering presence can offer comfort and guidance. Together, you can navigate the turbulent currents of anger, finding healing and growth within your connection. May your love story become a testament to love's ability to transcend rage, fostering forgiveness, harmony, and a deeper bond rooted in compassion and empathy.",
      "Amidst the tempest of rage, love's presence serves as a steadying force, offering the potential for healing and reconciliation. Embrace the transformative power of love's empathy, allowing it to bridge the gap and soften the edges of anger. Engage in open and honest communication, seeking understanding and connection with your loved ones. Together, you can navigate the complexities of rage, forging a path towards healing, forgiveness, and growth. May your love story become a testament to the resilience of love, transforming anger into understanding and nurturing a bond that can weather any storm.",
      "Within the depths of intense anger, love emerges as a guiding light, offering a path towards healing and transformation. Embrace the power of love's acceptance, allowing it to soften the edges of rage and nurture empathy within your heart. Seek solace in the support of your loved ones, as their unwavering presence can provide a calming refuge. Together, you can navigate the tumultuous waves of anger, finding forgiveness and growth within your shared journey. May your love story serve as a testament to love's ability to transcend rage, fostering understanding, compassion, and a profound connection that overcomes even the fiercest of emotions."
    ]
  },
  friends_and_family: {
    ecstasy: [
      'I see that your relationships with your loved ones will continue to be a source of joy and fulfillment. However, you will need to spend a lot of effort and time maintaining your relationships, but in the end it will all be worth it.',
      'Your relationships with friends and family are about to reach new heights of joy and fulfillment. Embrace the harmonious energy surrounding you, as it will strengthen the bond you share with your loved ones. Open your heart and communicate your feelings openly, and you will experience an abundance of love and support.',
      'A period of celebration and togetherness awaits you and your loved ones. Rejoice in the precious moments spent with friends and family, for they will create lasting memories. Cherish the laughter, the shared experiences, and the unconditional support that surrounds you. Embrace this joyful time and bask in the warmth of those you hold dear.',
      'Your friends and family will bring an unexpected source of inspiration and happiness into your life. Pay attention to the unique perspectives they offer, as they may guide you towards new and exciting opportunities. Through their unwavering support and presence, you will find the strength to pursue your dreams with unwavering confidence. Embrace their love and cherish the invaluable connections you have with them.',
      'In the realm of friends and family, your fortune reveals a time of deepening bonds and harmonious connections. Embrace the joyful undertones as you experience moments of profound happiness and bliss within your social circles, fostering a sense of celebration and togetherness that will bring you immense fulfillment.',
      'A wave of jubilant connections is destined to sweep through your life. The ties that bind will flourish, permeating your existence with joyous harmony and profound fulfillment, elevating your spirits to unparalleled heights of happiness.',
      'A radiant tapestry of euphoria awaits you. Your cherished bonds will shimmer with blissful enchantment, weaving moments of pure elation into the fabric of your journey. Embrace the euphoric connections that lie ahead, for they shall illuminate your path with unparalleled joy.',
    ],
    melancholy: [
      'I sense that there may be some challenges and difficulties in your relationships with your family and friends as there may be some conflict in the future. As long as you are patient, understanding, and willing to work through any challenges, you will maintain strong connections between those closest to you.',
      'Your friends and family hold the key to lifting your spirits during this challenging time. Reach out to them, and you will discover a wellspring of love and comfort awaiting you. Allow their unwavering support to envelop you, offering solace and reminding you that you are never alone. Together, you will navigate through the shadows and emerge stronger than ever.',
      'A deep sense of connection and understanding is on the horizon with your friends and family. Even in moments of melancholy, they possess the power to bring light into your life. Lean on their empathy and compassion, as they are eager to provide a listening ear and offer comforting words. Trust in the strength of these relationships, and you will find solace in their presence.',
      'Although you may be feeling down, know that your friends and family are your pillars of strength. They possess an innate ability to uplift your spirit and breathe life into your heart. Seek their companionship and confide in them, for they will lend you their unwavering support. Together, you will overcome the shadows of melancholy, fostering deeper connections and rediscovering the joy that lies within your relationships.',
      'A bittersweet melody shall resonate through your heart. While the bonds you hold dear may carry hints of wistfulness, they also possess a profound beauty that emerges from shared experiences and a deep understanding. Embrace the poignant moments with loved ones, for they have the power to inspire introspection and foster emotional growth.',
      'A tender nostalgia will weave its way into your connections. Embrace the gentle echoes of cherished memories, for they will remind you of the deep bonds that transcend time and distance. Allow the touch of melancholic sweetness to enrich your relationships, fostering a sense of appreciation and understanding that endures.',
      'Amidst the interconnectedness of your relationships, a delicate undercurrent of introspective reflection lingers. Through shared experiences and deep bonds with loved ones, you\'ll find solace in the poignant beauty that accompanies the passage of time, evoking a profound appreciation for the fleeting moments that shape your connections. Embrace this tender sentiment as it enriches your life\'s fabric, allowing it to deepen your relationships and inspire personal growth.',
    ],
    intrigue: [
      'You will meet many new people and have many opportunities to make new friends, while also having new opportunities to get to know those closest to you even better. It will be a tumultuous but exciting time.',
      'An air of mystery and excitement surrounds your relationships with friends and family. Prepare to embark on a journey of discovery as you delve deeper into the hidden depths of these connections. Uncover intriguing secrets and unveil shared passions, creating a bond that transcends the ordinary. Embrace the intrigue and let it guide you to new and thrilling experiences together.',
      'The dynamics within your friends and family circle are about to take a fascinating turn. Unforeseen revelations and surprising encounters await you, bringing a sense of wonder and curiosity. Embrace the unknown with an open heart, as these captivating experiences will strengthen the ties that bind you. Prepare for an exhilarating chapter in your relationships.',
      'There is a captivating aura surrounding your interactions with friends and family. Intrigue is woven into the fabric of your connections, sparking curiosity and a desire to explore deeper. Embrace the enigmatic nature of these relationships, for within the mystery lies the opportunity for profound growth and shared adventures. Open your mind to the possibilities that await and revel in the excitement of the unknown.',
      'Embrace the delicate interplay between trust and curiosity as you navigate this journey, for within these relationships lies the key to unlocking the mysteries that lie ahead. Nurture these bonds, and you shall unveil a world of hidden treasures and profound revelations.',
      'An air of mystery intertwines with the bonds of friendship and family. Embrace the uncharted depths of these connections, for within their folds lies the potential for unexpected discoveries and profound transformations. Trust in the enigmatic journey ahead, and you shall unveil hidden paths that lead to an intriguing tapestry of shared memories and cherished moments.',
      'As the chapters of your life unfold, an air of mystery intertwines with the bonds of friendship and family. Embrace the uncharted depths of these connections, for within their folds lies the potential for unexpected discoveries and profound transformations. Trust in the enigmatic journey ahead, and you shall unveil hidden paths that lead to an intriguing tapestry of shared memories and cherished moments.',
    ],
    surprise: [
      'I see that there may be some unexpected shifts in your social circle, as you drift apart from some friends while you become closer with others. You may also meet completely new people. The future of your relationships will be a mixed bag, but by being adaptable you will thrive.',
      'Unexpected joy awaits you in your connections with friends and family. Prepare for delightful moments that will catch you off guard, filling your heart with warmth. Embrace the spontaneity of these encounters and savor the magic they bring. Your relationships will be infused with a sense of wonder and leave you with lasting memories.',
      'The bonds with your loved ones are about to take an exhilarating turn. Anticipate extraordinary experiences that will leave you amazed. Embrace the extraordinary moments and cherish the serendipitous encounters that lie ahead. Your friends and family will bring delightful surprises that will deepen your connection and create unforgettable shared experiences.',
      'A wave of unexpected blessings is about to grace your relationships with friends and family. Embrace the enchantment of the unknown and welcome the delightful twists and turns. These surprise moments will rejuvenate your bonds and strengthen your connection, creating a tapestry of beautiful memories. Be open to the joyous surprises that await you and relish in the magic of your relationships.',
      'A delightful twist of fate awaits you in the realm of your loved ones. Unexpected connections and joyous reunions will fill your heart with warmth. Embrace the surprise that awaits, as cherished bonds and unforgettable memories are destined to unfold.',
      'The tapestry of your friendships and family ties is about to be woven with a touch of magic. Prepare to be pleasantly surprised as hidden bonds deepen and new connections bloom, creating a vibrant tapestry of love and support that will enrich your life.',
      'As the chapters of your life unfold, a beautiful surprise is in store within your closest circles. Be open to the unexpected, for delightful moments of laughter and shared experiences will strengthen the bonds of friendship and family, leaving you with a heart full of love and gratitude.',
    ],
    righteousness: [
      'I sense that there will be conflict between you and your friends and family that will come about due to differing values. It will be important to stay open minded and empathetic, to maintain your relationships.',
      'Your relationships with friends and family are aligned with deep moral values and integrity. Embrace the strong sense of justice that binds you together, for it will guide your actions and choices. Together, you will inspire and uplift each other, creating a harmonious environment built on trust and fairness. Your united front will bring positive change to those around you.',
      'A powerful sense of righteousness is woven into the fabric of your connections with friends and family. Embrace this shared moral compass and stand firm in your beliefs. Your combined strength will create a formidable force, advocating for justice and making a difference in the world. Embrace the power of unity and let your voices be heard.',
      'In your relationships with friends and family, you are guided by a strong moral compass. Embrace the sense of righteousness that flows through these connections, for it will lead you to make impactful decisions. Together, you will champion noble causes, uplift those in need, and create a world that reflects your shared values. Embrace the power of your united front and let your actions speak volumes.',
      'The bonds of friendship and family will be bathed in the light of truth and integrity. Your commitment to doing what is right will inspire and uplift those around you, creating an environment of trust and harmony that will strengthen your relationships in immeasurable ways.',
      'A sense of justice will prevail in your interactions with loved ones, fostering a deep understanding and respect within your circle. Your unwavering moral compass will guide you to make fair decisions and stand up for what is right, paving the way for strong and meaningful connections.',
      'Your friends and family will find solace in your righteous presence, as your unwavering principles and virtuous actions create a sanctuary of authenticity and honor. Your commitment to fairness and integrity will bring about a harmonious atmosphere, allowing for deeper connections and mutual growth within your cherished relationships.',
    ],
    despair: [
      'There will be difficult struggles and challenges in the future, which may lead to you feeling isolated and disconnected from your family and friends. However, I sense that you will be willing to work through these challenges, and your relationships will become stronger by going through this.',
      'In your relationships with friends and family, a glimmer of hope emerges even in the darkest of times. Lean on their unwavering support, for they are a beacon of light that will guide you through the challenges. Together, you will find solace and strength, transforming despair into resilience. Trust in the power of these connections to bring you comfort and renewal.',
      'Amidst the struggles you face, your friends and family are steadfast pillars of support. Reach out to them, for their presence will bring a renewed sense of purpose. Within their embrace, you will discover a sanctuary where despair gives way to healing and growth. Open your heart and allow their love to restore your spirit.',
      'Though you may be feeling overwhelmed, know that your friends and family are an unwavering source of compassion and understanding. They hold the key to unlocking the resilience within you. Embrace their presence and find solace in their comforting words and gestures. Together, you will rise above despair, forging a path towards renewed hope and brighter days.',
      'Difficult times may cast shadows over your friendships and family ties, but remember that adversity can strengthen the bonds that hold you together. By navigating through challenges with resilience and compassion, you will discover the power of unity and find renewed hope and support within your loved ones.',
      'Within the realm of your relationships, you may encounter moments of profound sadness and uncertainty. However, do not lose sight of the resilience and love that resides in your friends and family. Together, you will find the strength to weather the storms, fostering a deep sense of empathy and understanding that will guide you towards healing and brighter days.',
      'Though the path may seem steep and filled with obstacles, the love and solidarity of your friends and family will be a beacon of hope in the face of despair. Through shared struggles, you will uncover hidden strengths and forge unbreakable bonds, reminding you that even in the darkest of times, you are not alone.',
    ],
    selfloathing: [
      'The future of your friendships may be influenced by how you view yourself, and you may feel isolated and disconnected because of this in the future. However, your friends and family will still care about you, regardless.',
      'Amidst your struggles, your friends and family serve as beacons of unconditional love and acceptance. Embrace their presence and let their unwavering support wash away the shadows of doubt. They see your true worth and will remind you of the beauty that resides within. Together, you will discover a path towards self-compassion and healing.',
      'In the eyes of your friends and family, you are cherished and valued. Their love for you knows no bounds, transcending any self-doubt you may be experiencing. Embrace their perspective and allow their unwavering belief in you to ignite a newfound sense of self-worth. Through their acceptance and encouragement, you will find the strength to embrace self-love and nurture your own well-being.',
      'Within the embrace of your friends and family lies a sanctuary from self-judgment and negativity. Their unwavering support offers solace and reminds you that you are deserving of love and kindness. Embrace their perspective and let their words and actions replace self-loathing with self-acceptance. Together, you will embark on a journey of self-discovery and growth, redefining your relationship with yourself.',
      'As you navigate the intricacies of your relationships, remember to extend the same compassion and forgiveness towards yourself as you do to others. Embrace the unconditional love that surrounds you, allowing it to guide you towards self-acceptance and a deeper appreciation for the unique person you are.',
      'Within the tapestry of your friends and family, acknowledge that your flaws and imperfections are part of what makes you human. Embrace the journey of self-discovery and growth, knowing that the love and support of your loved ones will always be there to remind you of your inherent worth.',
      'Your friends and family cherish you for who you are, with all your strengths and vulnerabilities. Let go of self-judgment and embrace the love that surrounds you, for it is through acceptance and understanding that you will find the courage to break free from the chains of self-doubt and embrace your true value.',
    ],
    anxiety: [
      'The future is somewhat uncertain, and there will likely be challenges that will arise soon between you and those closest to you, however, you will persevere through these challenges and you will maintain your relationships with those most important to you.',
      'In the embrace of your friends and family, find solace from the worries that burden your mind. Their unwavering support and understanding will create a safe haven where peace and tranquility reside. Lean on their strength and guidance, as they will provide the anchor you need during turbulent times. Together, you will navigate through uncertainty with a renewed sense of calm.',
      'Within your relationships with friends and family, discover a source of comfort that eases the restlessness within. Embrace their presence and find solace in the familiarity and love they offer. Their unwavering support will become a balm for your worries, nurturing your spirit and soothing your anxious thoughts. Trust in their companionship to bring you peace of mind.',
      'Amidst the storm of anxious thoughts, your friends and family stand as pillars of strength and stability. Lean on their unwavering support and let their presence be a source of reassurance. Together, you will weather the challenges that come your way, finding a sense of calm amidst the chaos. Embrace their love and find solace in the knowledge that you are never alone on this journey.',
      'Your closest circle of friends and family will provide unwavering support in the face of challenging times. Lean on their strength and love to find solace and overcome any anxieties that may arise. Together, you will create a tapestry of resilience and deep connections that will endure.',
      'A sense of unease may infiltrate your relationships with friends and family, but remember that true bonds are built on trust and understanding. Embrace open communication and vulnerability, as it will help alleviate any underlying anxieties and strengthen the fabric of your connections.',
      'In the intricate web of friends and family, moments of worry may arise, but they are merely threads in the broader tapestry of love and support. Trust that your loved ones will be there to provide comfort and reassurance, helping you navigate any anxieties and creating a beautiful mosaic of unity and understanding.',
    ],
    betrayal: [
      "I am sensing that there is conflict and chao those around you, be careful of who you trust especially those who are close to you because you might find yourself in a tough situation where you will feel hurt and betrayed. Remember that healing from betrayal takes time, and it's important to be patient and kind to yourself during the process.",
      'Within the realm of your relationships, a journey of healing and restoration awaits. Embrace the power of forgiveness and allow the strength of your connections to transcend the pain you have endured. Trust in the resilience of your bond with friends and family, for it has the potential to mend the deepest wounds. Together, you will create a new chapter built on trust, understanding, and renewed loyalty.',
      'Amidst the trials you have faced, your friends and family emerge as beacons of support and empathy. They hold the power to bring healing and understanding to your wounded heart. Embrace their love and compassion, as they have the ability to mend the fractures caused by past events. Through their unwavering presence, you will find solace and rediscover the beauty of authentic connection.',
      'Within the ebb and flow of relationships lies the potential for transformation and growth. While pain may have clouded your experiences, trust in the power of healing and renewal. Embrace the lessons learned from the past and open your heart to the possibilities of rebuilding trust. Your friends and family will prove their loyalty, guiding you towards a future where love and faith in one another prevail.',
      'Be cautious in your relationships with friends and family, as there may be hidden challenges that could test your trust. Stay attuned to subtle cues and rely on your intuition to navigate any potential pitfalls, ensuring that the bonds you forge are built on a foundation of loyalty and authenticity.',
      'As you navigate the intricate dynamics of friends and family, keep in mind that appearances can be deceiving. Exercise discernment and observe the actions of those around you, as there may be subtle signs of disloyalty. Strengthen your connections by fostering open and honest communication, creating a supportive network that withstands the test of time.',
      'The path of relationships with friends and family may not always be smooth, as hidden conflicts may emerge. Stay vigilant and protect your own well-being by setting healthy boundaries and surrounding yourself with those who truly have your best interests at heart. Focus on nurturing the relationships that are built on trust and mutual respect, as they will be the foundation for lasting connections.',
    ],
    prejudice: [
      'Let yourself be more open-minded and understand that your family and friends also have their own obstacles that they are facing, thereforeit is important to give them the benefit of doubts and see how they will come around.',
      'Within the tapestry of your relationships with friends and family, lies the potential for profound understanding and acceptance. Embrace the diversity that exists among your loved ones, for it is through this richness that you will experience growth. Open your heart and mind to different perspectives, breaking free from the constraints of judgment. Together, you will forge a path of inclusivity and unity.',
      'In the realm of your connections, discover the power to transcend biases and embrace the beauty of diversity. Your friends and family will be catalysts for change, challenging your preconceived notions and opening your eyes to the richness of different cultures and backgrounds. Embrace the opportunity to learn and grow together, fostering an environment of acceptance and respect.',
      'Your relationships with friends and family hold the potential to dismantle prejudice and foster compassion. Embrace the unique qualities that each person brings, for they are the building blocks of understanding and harmony. Challenge your own assumptions and biases, embracing the transformative power of empathy. Together, you will create a legacy of love and acceptance that transcends boundaries and embraces the beauty of diversity.',
      'Embrace the diversity within your friends and family, for it is through understanding and acceptance that true connections are formed. Challenge any biases that may arise and foster an inclusive environment that celebrates the unique perspectives and backgrounds of those you hold dear.',
      'In the intricate web of relationships with friends and family, be mindful of the subtle prejudices that may unknowingly creep in. Open your heart and mind to different cultures, beliefs, and experiences, and strive to create an atmosphere of respect and unity. By embracing diversity, you will weave a tapestry of understanding and forge unbreakable bonds.',
      'As you navigate the complex dynamics of friends and family, be aware of the potential for biases to influence your connections. Embrace empathy and strive to see beyond preconceived notions, for it is in transcending prejudices that you will foster deeper connections and create a harmonious network of support.',
    ],
    revulsion: [
      'I can see that you are having a hard time dealing with those close to you like your family and friends especially when you are feeling digusted by them thus it is important that you find your own space and take care of yourself first. It is okay to feel this way, just know that what you are feeling is valid.',
      'Amidst the complexities of relationships, there is an opportunity for growth and understanding. Embrace the potential for transformation as you navigate the challenges that arise. Your friends and family hold the key to finding compassion and acceptance, helping you overcome any feelings of discomfort. Embrace the journey of self-discovery and allow love to guide your interactions, fostering deeper connections.',
      'Within the dynamics of your relationships lies the potential for profound change and growth. Embrace the differences that exist among your loved ones, for they can be a catalyst for expanding your perspective. Open your heart and mind to understanding, allowing empathy to bridge the gaps that may arise. Together, you will navigate through any discomfort and find harmony.',
      'Amidst the complexity of human connections, embrace the potential for transformation. Your friends and family hold the power to challenge your preconceptions and expand your horizons. Embrace the discomfort as an opportunity for growth and self-reflection. Through understanding and open-mindedness, you will forge deeper connections and discover the beauty that lies beyond initial feelings of discomfort.',
      'Your path intertwines with those close to you, the ties that bind woven with familiarity. However, a disquietude lingers beneath the surface, urging caution. Seek solace in the balance between kinship and self-preservation, for unseen currents may stir resentment within the realm of your loved ones.',
      'The tapestry of friendships and family weaves a complex pattern, adorned with shared memories and cherished bonds. Yet, an unsettling unease taints the fabric, a subtle aversion creeping in. Embrace discernment as you navigate this delicate threadwork, for hidden grievances may emerge, requiring delicate mending.',
      'Within the realm of friends and family lies a web of interconnections, layered with deep-rooted affection. Yet, like an inconspicuous shadow, a sense of repulsion hovers nearby. Stay vigilant as you traverse these relationships, for unspoken resentments may fray the fabric of trust, demanding thoughtful resolutions.',
    ],
    loathing: [
      "It's natural to feel loathing or resentment towards someone who has hurt you or betrayed your trust. However, it's important to also consider the reasons behind these feelings and evaluate whether they are justified. If you feel loathed by your family or friends, it may be helpful to communicate with them and try to understand why they feel this way. It's important to approach these conversations with an open mind and a willingness to listen to their perspective. If their reasons for feeling this way are based on misunderstandings or miscommunications, it may be possible to work through these issues and repair the relationship.If, on the other hand, you feel a sense of loathing towards your family or friends that is based on valid reasons, it may be necessary to set boundaries and distance yourself from them. It's important to prioritize your own well-being and not subject yourself to further harm or mistreatment.",
      'In the realm of your relationships with friends and family, discover the power of love and acceptance. Embrace the unconditional support and understanding they offer, for it has the ability to dissolve the barriers that cloud your heart. Open yourself to their compassion, and you will find that forgiveness and healing prevail. Together, you will create a tapestry of love that replaces any feelings of negativity.',
      'Within the embrace of your loved ones lies the antidote to feelings of disdain. Embrace their unwavering support and see the beauty that lies within each of them. Allow their presence to wash away any negativity, replacing it with a renewed sense of appreciation and warmth. Together, you will forge a bond built on love and understanding, where loathing is replaced by compassion.',
      'Amidst the complexity of relationships, discover the transformative power of acceptance. Embrace the uniqueness of each individual in your circle, for they have qualities that are worthy of admiration. Seek understanding and empathy, and you will find that loathing gives way to appreciation. Embrace the beauty of your loved ones and nurture a bond that is rooted in love and respect.',
      'In the realm of connections forged by blood and camaraderie, a subtle disquiet permeates the air. Be cautious of hidden resentments that can poison the well of affection. Nurture honest communication and empathy to overcome these undercurrents of disdain and foster harmony.',
      'The ties that bind you to friends and family may bear the weight of hidden animosity. Pay heed to the subtle signs of discord, for unexpressed loathing can erode the foundation of these relationships. By addressing grievances with understanding and open dialogue, you can restore harmony and rekindle genuine connections.',
      'While friendship and kinship enrich our lives, an undercurrent of aversion may silently flow through these bonds. Stay vigilant for signs of unspoken loathing, for healing can only come through acknowledgement and open-hearted conversations. By facing these complexities head-on, you can pave the way for genuine and lasting connections.',
    ],
    terror: [
      'The bonds that connect you to friends and family can be a source of both comfort and unease. Embrace the opportunity for growth and transformation that arises from these relationships, even in moments of uncertainty. By nurturing connections with love and understanding, you can create a supportive network that provides solace amidst the shadows.',
      'The path of friendship and family may occasionally be shrouded in moments of fear and apprehension. Embrace these challenges as opportunities to strengthen your bonds and deepen your understanding of one another. Through open communication and empathy, you can transform the shadows into stepping stones towards a more harmonious and fulfilling connection.',
      'The dynamics of friends and family can sometimes stir up unsettling emotions, but within lies the potential for profound growth. Embrace the unknown with courage and forge ahead, recognizing that even amidst the shadows, there are opportunities for love and joy. By nurturing relationships with compassion and authenticity, you can navigate the twists and turns of these connections, ultimately finding solace and strength along the way.',
    ],
    hatred: [
      "Hatred is a very strong and intense emotion, Ask yourself why you feel this way. Is it based on past experiences of hurt or betrayal? Is it a result of ongoing conflicts or misunderstandings? It's important to identify the root cause of your feelings so that you can work towards resolving the issue and moving towards a place of healing.",
      'Within the realm of your relationships with friends and family, lies the potential for transformation and healing. Embrace the power of forgiveness and understanding, for it has the ability to transcend the darkest emotions. Open your heart to the possibility of growth and redemption, allowing love to replace animosity. Together, you will forge a path of reconciliation and create a bond that is resilient and unbreakable.',
      'Amidst the complexities of human connections, discover the strength of compassion and empathy. Embrace the shared experiences and moments of joy that bind you together, for they have the power to overshadow any feelings of animosity. Cultivate understanding and forgiveness, allowing the seeds of love to flourish and mend the wounds of the past. Together, you will embark on a journey of healing and build bridges that bridge divides.',
      'In the tapestry of your relationships, find solace and growth through the power of forgiveness. Embrace the shared history and memories you have with friends and family, for they offer a pathway towards reconciliation. Open your heart to empathy, replacing hatred with understanding and acceptance. Together, you will embark on a transformative journey that fosters love, healing, and unity.',
      'The interweaving paths of friends and family hold depths of emotions, where subtle shadows of animosity may lurk. Seek clarity and open communication, for unexpressed tensions can poison the bonds you hold dear. By addressing these undercurrents with compassion and understanding, you can pave the way for healing and reconciliation.',
      'Within the intricate network of relationships, a disquieting undercurrent of discord may taint the connections. Stay mindful of hidden resentments that can breed disdain, and tread lightly with empathy and patience. By fostering an environment of honest dialogue, you can work towards dissipating the seeds of animosity and nurturing genuine bonds.',
      'The realm of friends and family carries the weight of unspoken hostilities, veiled beneath the surface of affections. Remain aware of the simmering undercurrents, for suppressing hatred can strain even the strongest bonds. By embracing vulnerability and embracing difficult conversations, you can embark on a path of healing, nurturing, and restoring harmony within these cherished relationships.',
    ],
    rage: [
      "It's natural to feel angry or frustrated when someone you care about has hurt you or let you down. It's also important to find healthy outlets for your anger and frustration. Remember that healing from feelings of rage takes time, and it's important to be patient and compassionate towards yourself throughout the process.",
      'Within the depths of your relationships with friends and family lies the potential for healing and harmony. Embrace the power of communication and understanding, for they can soothe even the most turbulent emotions. Open your heart to empathy and allow love to conquer the storm within. Together, you will navigate through challenges, transforming anger into compassion and fostering a bond that withstands the test of time.',
      'Amidst the complexities of human connections, discover the strength in finding common ground. Embrace open dialogue and actively listen to the perspectives of your loved ones. Through understanding and mutual respect, you will find a way to channel your intense emotions into positive action. Together, you will forge a path of healing and create a harmonious environment where anger dissipates and love prevails.',
      'Within the embrace of your friends and family, find solace from the fiery emotions that consume you. Embrace their unwavering support and understanding, for they offer a grounding presence in times of anger. Seek healthy outlets for expressing your feelings, allowing space for healing and growth. Together, you will find resolution, transforming rage into empathy, and strengthening the bonds that connect you.',
      'As the intricate web of friendships and family connections unfolds, a subtle storm of anger brews beneath the surface. Beware of the fiery embers that smolder within, for uncontrolled wrath can ignite discord and destroy cherished bonds. Nurture patience and compassion to calm the tempest and foster understanding in the face of turmoil.',
      'Within the realm of friends and family lies a turbulent sea of pent-up fury. Take heed of the signs of seething rage, for unbridled anger can erode the foundation of love and trust. Cultivate empathy and open dialogue as tools to navigate the stormy waters, fostering healing and fortifying the ties that hold you together.',
      'The path of friends and family weaves a tumultuous journey, where anger lurks in the hidden corners. Be mindful of the smoldering resentment that threatens to engulf relationships, for unchecked rage can shatter the bonds you hold dear. Channel your emotions into constructive outlets and strive for understanding to mend the fractures and build a stronger foundation.',
    ]
  }
};

/**
 * The EMOTIONS_TABLE object is an object that maps combinations of emotion1 and emotion2 to corresponding emotion value
 */
export const EMOTIONS_TABLE = {
  joy: {
    joy: 'ecstasy',
    sadness: 'melancholy',
    disgust: 'intrigue',
    fear: 'surprise',
    anger: 'righteousness'
  },
  sadness: {
    joy: 'melancholy',
    sadness: 'despair',
    disgust: 'selfloathing',
    fear: 'anxiety',
    anger: 'betrayal'
  },
  disgust: {
    joy: 'intrigue',
    sadness: 'selfloathing',
    disgust: 'prejudice',
    fear: 'revulsion',
    anger: 'loathing'
  },
  fear: {
    joy: 'surprise',
    sadness: 'anxiety',
    disgust: 'revulsion',
    fear: 'terror',
    anger: 'hatred'
  },
  anger: {
    joy: 'righteousness',
    sadness: 'betrayal',
    disgust: 'loathing',
    fear: 'hatred',
    anger: 'rage'
  }
};

// Define the date ranges for each star sign
export const STAR_SIGNS = [
  {
    name: 'Aquarius	♒',
    start: {
      month: 1,
      day: 20
    },
    end: {
      month: 2,
      day: 18
    }
  },
  {
    name: 'Pisces ♓',
    start: {
      month: 2,
      day: 19
    },
    end: {
      month: 3,
      day: 20
    }
  },
  {
    name: 'Aries ♈',
    start: {
      month: 3,
      day: 21
    },
    end: {
      month: 4,
      day: 19
    }
  },
  {
    name: 'Taurus ♉',
    start: {
      month: 4,
      day: 20
    },
    end: {
      month: 5,
      day: 20
    }
  },
  {
    name: 'Gemini ♊',
    start: {
      month: 5,
      day: 21
    },
    end: {
      month: 6,
      day: 20
    }
  },
  {
    name: 'Cancer ♋',
    start: {
      month: 6,
      day: 21
    },
    end: {
      month: 7,
      day: 22
    }
  },
  {
    name: 'Leo ♌',
    start: {
      month: 7,
      day: 23
    },
    end: {
      month: 8,
      day: 22
    }
  },
  {
    name: 'Virgo ♍',
    start: {
      month: 8,
      day: 23
    },
    end: {
      month: 9,
      day: 22
    }
  },
  {
    name: 'Libra ♎',
    start: {
      month: 9,
      day: 23
    },
    end: {
      month: 10,
      day: 22
    }
  },
  {
    name: 'Scorpio ♏',
    start: {
      month: 10,
      day: 23
    },
    end: {
      month: 11,
      day: 21
    }
  },
  {
    name: 'Sagittarius ♐',
    start: {
      month: 11,
      day: 22
    },
    end: {
      month: 12,
      day: 21
    }
  },
  {
    name: 'Capricorn ♑',
    start: {
      month: 12,
      day: 22
    },
    end: {
      month: 12,
      day: 31
    }
  },
  {
    name: 'Capricorn ♑',
    start: {
      month: 1,
      day: 1
    },
    end: {
      month: 1,
      day: 19
    }
  }
];

// 3 hours in seconds
export const RE_ASK_INTERVAL_SECONDS = 2 * 60 * 60;