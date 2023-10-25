import React, { createContext, useState } from "react";

export const Store = createContext();

const DataStore = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      heading: `Arjun Kapoor wrote a post on Malaika Arora's 50th birthday, made this promise to his girlfriend by sharing a romantic photo`,
      image:
        "https://st1.bollywoodlife.com/wp-content/uploads/2023/10/arjunkapoor_1698055700_3219847043531527149_1325895986-1.jpg",
      discription: `Arjun Kapoor Wished Malaika Arora: Bollywood actress Malaika Arora is celebrating her 50th birthday today. On this occasion, along with fans, celebrities are also congratulating him. But Malaika Arora, who surprised everyone with her fitness, has been wished by boyfriend Arjun Kapoor in a very special way. Arjun Kapoor has shared a romantic picture with Malaika Arora, in which Arjun Kapoor is seen hugging his girlfriend. In this picture, while Malaika is looking very beautiful in a white outfit, Arjun Kapoor is seen in a black outfit.`,
      category: "bollywood",
    },
    {
      id: 2,
      heading: "EXCLUSIVE: Harrdy Sandhu to go on his first-ever India tour",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/harrdy_Sandhu_1698141358507_1698141358711.JPG",
      discription: `While he may have performed umpteen times for his fans in concerts, it's for the first time that Harrdy Sandhu is going on a multi-city India tour. This one and a half month long tour will start from November 18 in Delhi and end in Jaipur on December 31, covering cities such as Indore (December 9), Mumbai (December 17), Pune (December 20), Kolkata (December 24), Bhubaneshwar (December 27). `,
      category: "bollywood",
    },
    {
      id: 3,
      heading:
        "Shraddha Kapoor buys ₹4 crore Lamborghini, Pooja Hegde brings home Range Rover",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/25/550x309/shraddha_kapoor_lamborghini_1698217842202_1698217842439.jpg",
      discription: `Actors Shraddha Kapoor and Pooja Hegde celebrated Dussehra on Tuesday in a more special way than others. The two actors are now owners of swanky new cars which hit the road on the festival. While Shraddha welcomed home a red Lamborghini Huracan Tecnica worth around ₹4.8 crore, Pooja stepped out in her new silver Range Rover SV worth a similar price.`,
      category: "bollywood",
    },
    {
      id: 4,
      heading:
        "Many celebs including Mouni Roy, Anupriya Goenka were spotted at the success party of Sultan Of Delhi.",
      image:
        "https://st1.bollywoodlife.com/wp-content/uploads/2023/10/231020231698057849.jpeg",
      discription: `Actress Mouni Roy has impressed the audience a lot with her performance, the entire cast of 'Sultan of Delhi' was spotted in stylish look at the success party, the series includes Tahir Raj Bhasin, Anjum Sharma, Vinay Pathak, Nishant Dahiya and Women include Anupriya Goenka, Mouni Roy, Harleen Sethi and Mehreen Pirzada. Sultan of Delhi has been released on Disney Plus Hotstar on October 13. Let us tell you that 'Sultan of Delhi' is an entertainment gangster series, which shows the audience the Delhi of 1962. The show is based on Arnab Ray's novel 'Sultan of Delhi: Ascension'. Milan Luthria has given his best in bringing it on screen. Suparn S Verma is the co-director and co-writer of this nine-episode series.`,
      category: "bollywood",
    },
    {
      id: 5,
      heading:
        "Asin reemerges on Instagram, shares daughter Arin's birthday pic",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/25/550x309/asin__1698212215758_1698212215975.jpg",
      discription:
        "TAsin has reemerged on Instagram for her annual ritual of posting pictures from daughter Arin's birthday celebrations. Every year, Asin posts only one post on Instagram--a birthday wish for Arin. This year, she did not even make a post but simply shared a couple of photos on her IG story.",
      category: "bollywood",
    },
    {
      id: 6,
      heading:
        "Ganapath box office: Tiger and Kriti's film earns ₹1.5 cr on Dussehra holiday",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/25/550x309/ganapath__1698204192651_1698204192800.jpg",
      discription: `Ganapath box office collection: Tiger Shroff and Kriti Sanon's post apocalyptic dystopian action film showed no improvement despite the Dussehra holiday on Tuesday. The futuristic action film collected ₹1.5 crore on Tuesday as per early estimates shared by Sacnilk.com. It stands at ₹9.8 crore after five days of its release. Also read: Leo box office collection day 6: Vijay's film slows down on Dussehra, to cross ₹250 crore in India`,
      category: "bollywood",
    },
    {
      id: 7,
      heading:
        "Ranbir Kapoor breaks silence on being called ‘toxic’ for his lipstick comment",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/25/550x309/ranbir_kapoor_toxic_1698204642895_1698204643103.jpg",
      discription: `A couple of months ago, Alia Bhatt revealed in an interview how husband Ranbir Kapoor doesn't like it when she wears lipsticks and tells her to ‘wipe it off’. The comment went viral on social media with many calling Ranbir a ‘toxic’ partner. Now, Ranbir has broken silence on the criticism that the comment got. `,
      category: "bollywood",
    },
    {
      id: 8,
      heading:
        "Rajinikanth shares pic with ‘mentor’ Amitabh Bachchan from Thalaivar 170 sets: ‘My heart is thumping with joy' ",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/25/550x309/amitabh_bachchan_rajinikanth_1698218501171_1698218501296.jpeg",
      discription: `Rajinikanth and Amitabh Bachchan have reunited for Thalaivar 170 after 33 years. They last starred together in Hum. Rajinikanth is over the moon to be working with his Hum co-star and ‘mentor’ Amitabh Bachchan. On Wednesday, he took to Twitter to share a picture with the superstar from the sets of his upcoming untitled movie, Thalaivar 170.`,
      category: "bollywood",
    },
    {
      id: 9,
      heading:
        "Karisma told me she saw Raj Kapoor pull women's hair: Dharmesh Darshan",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/Collage_Maker-24-Oct-2023-03-54-PM-64_1698143259074_1698143265033.jpg",
      discription: `Karisma Kapoor belongs to an illustrious film family that included the likes of Prithviraj Kapoor, Shashi Kapoor, Shammi Kapoor, Rishi Kapoor, and her grandfather Raj Kapoor. Now, in an interview with Lehren Retro, director Dharmesh Darshan has revealed how she once told him about Raj's abusive behaviour towards women.`,
      category: "bollywood",
    },
    {
      id: 10,
      heading:
        "Here is the first look of Lord Ram from new TV show Srimad Ramayan",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/srimad_ramayan_1698139491818_1698139492099.jpg",
      discription: `On the occasion of Dussehra, a new teaser of the upcoming show Srimad Ramayan has been unveiled. The show will go on air on Sony soon. The new teaser shows a glimpse of elderly Shabri saying “Mere prabhu, Shri Ram kab aayenge (when will my Lord Ram, come to meet me)." There is also a silhouetted glimpse of the lead character as he arrives with a bow and arrow, clad in saffron robes. `,
      category: "bollywood",
    },
    {
      id: 11,
      heading:
        "Ranbir Kapoor gives update on Brahmastra 2, addresses criticism on Part 1.",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/Ranbir-Kapoor-and-Alia-Bhatt-in-Brahmastra_1662697765151_1698137231322.png",
      discription: `Ranbir Kapoor and Alia Bhatt starred in Brahmastra Part One: Shiva, which released on Septemeber 9 2022. Earlier there were reports that the sequel is shelved.Ranbir Kapoor just gave his fans a big update about Brahmastra 2. The actor spoke to his fans in a live event, which found its way to the Reddit page Bolly Blinds N Gossip. In the clip, Ranbir shared that Brahmastra 2 is 'heavy into writing' and that Ayan Mukerji has 'gone ten times bigger than part 1.'`,
      category: "bollywood",
    },
    {
      id: 12,
      heading:
        "Dussehra 2023: Katrina Kaif, Yash, Radhika Pandit, Allu Arjun post wishes online",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/Collage_Maker-24-Oct-2023-02-00-PM-2573_1698136243404_1698136259164.jpg",
      discription: `Dussehra 2023: Katrina Kaif posted pictures of her in a floral red sari, while Yash sported a grey kurta on the occasion. Today, on the occasion of Dussehra, many celebrities took to Instagram to share their wishes. Among these were Katrina Kaif, Kannada actors Yash and Radhika Pandit, Telugu superstar Allu Arjun among others.`,
      category: "bollywood",
    },
    {
      id: 13,
      heading:
        "Deva first look: Shahid Kapoor to play a cop in new film, to release on Dussehra next year",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/shahid_kapoor_deva_1698129645321_1698129645531.jpg",
      discription: `Deva will star Pooja Hegde and will be directed by Malayalam filmmakers Rosshan Andrrews. Here is more about the film. Shahid Kapoor treated his fans on Dussehra by unveiling his first look from his new film, Deva. He also announced that the film will release on Dussehra next year. It will hit theatres on October 11, 2024. The actor is seen in a beefed up look, looking suave in a white shirt and beige pants, a stubble and shorter hair.`,
      category: "bollywood",
    },
    {
      id: 14,
      heading:
        "No, Tara Sutaria not roped in for Aashiqui 3, director Anurag Basu clarifies| EXCLUSIVE",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/kaspotted_1698126300362_1698126300572.jpg",
      discription: `Director Anurag Basu talks to HT City about the rumours around Tara Sutaria starring with Kartik Aaryan in Aashiqui 3. Actors Kartik Aaryan and Tara Sutaria’s recent public spotting left everyone puzzled about the reason. Are they dating? Are they doing a film? Is it Aashiqui 3? The last one has been a hotly discussed topic for months now. Helmed by Anurag Basu, it will be the third instalment in the popular romantic franchise. However, HT City brings you a clarification, straight from the horse’s mouth.`,
      category: "bollywood",
    },
    {
      id: 15,
      heading: "Cyber experts applaud the new White House cybersecurity plan",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/White-House-Washington-1200x630.jpeg.webp",
      discription: `First, there was a strategy. Now, there’s a plan. The Biden Administration recently released its plan for implementing the highly anticipated national cybersecurity strategy published in March. The new National Cybersecurity Strategy Implementation Plan (NCSIP) lays out specific deadlines and responsibilities for the White House’s vision for cybersecurity. The plan is being managed by the White House’s Office of the National Cyber Director (ONCD).`,
      category: "technology",
    },
    {
      id: 16,
      heading:
        "Taking the complexity out of identity solutions for hybrid environments",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/Businesswoman-leading-a-casual-meeting.jpeg.webp",
      discription: `For the past two decades, businesses have been making significant investments to consolidate their identity and access management (IAM) platforms and directories to manage user identities in one place. However, the hybrid nature of the cloud has led many to realize that this ultimate goal is a fantasy. Instead, businesses must learn how to consistently and effectively manage user identities across multiple IAM platforms and directories.`,
      category: "technology",
    },
    {
      id: 17,
      heading: "Endpoint security in the cloud: What you need to know",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/The-Power-of-Cloud-Computing.-Vibrant-cloud-icon-on-black-background.-Design-element-1200x630.jpeg.webp",
      discription: `Cloud security is a buzzword in the world of technology these days — but not without good reason. Endpoint security is now one of the major concerns for businesses across the world. With ever-increasing incidents of data thefts and security breaches, it has become essential for companies to use efficient endpoint security for all their endpoints to prevent any loss of data. Security breaches can lead to billions of dollars worth of loss, not to mention the negative press in the business world.`,
      category: "technology",
    },
    {
      id: 18,
      heading: "Understanding Saudi Arabia’s personal data protection law",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/Detailed-close-up-of-the-national-flag-of-Saudi-Arabia-waving-in-the-wind-on-a-clear-day-1200x630.jpeg.webp",
      discription: `You may be familiar with data protection laws like HIPAA, GDPR and CCPA. But did you know that other foreign countries are also introducing comprehensive regulations?

      To address escalating data protection challenges, the Personal Data Protection Law (PDPL) was implemented in Saudi Arabia in September 2021. The law was later modified in March 2023, signifying a significant milestone in the country’s efforts to comply with international data protection standards.`,
      category: "technology",
    },
    {
      id: 19,
      heading:
        "Moving beyond vulnerability scanning to strengthen your attack surface",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/Binary-Code-Encryption.jpeg.webp",
      discription: `Staying one step ahead of potential breaches is a top priority for security teams within organizations of all sizes. Vulnerability scanning has long been a foundation of these efforts, allowing businesses to identify weaknesses in their security posture. However, as cyberattacks grow in sophistication and scale and with a large number of Common Vulnerabilities and Exposures (CVEs) cataloged each year, it’s becoming increasingly clear that vulnerability scanning is not enough.`,
      category: "technology",
    },
    {
      id: 20,
      heading: "Reflective call stack detections and evasions",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/Hands-typing-on-a-red-lighting-keyboard-on-dark-background.-Cyber-criminal-concept.jpeg.webp",
      discription: `In a blog published this March, we explored reflective loading through the lens of an offensive security tool developer, highlighting detection and evasion opportunities along the way. This time we are diving into call stack detections and evasions, and how BokuLoader reflectively loads call stack spoofing capabilities into beacon. We created this blog and public release of BokuLoader during Dylan’s summer 2023 internship with IBM X-Force Red. While researching call stack spoofing for our in-house C2, this was one of the techniques identified — the X-Force Adversary Services team’s private C2 has much stealthier techniques implemented. The call stack evasion techniques that have been integrated into BokuLoader are not novel and are publicly disclosed. While these techniques are available to security vendors, detections for these evasions may not be present.`,
      category: "technology",
    },
    {
      id: 21,
      heading:
        "X-Force uncovers global NetScaler Gateway credential harvesting campaign ",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/Network-Security.jpeg.webp",
      discription: `In September of 2023, X-Force uncovered a campaign where attackers were exploiting the vulnerability identified in CVE-2023-3519 to attack unpatched NetScaler Gateways to insert a malicious script into the HTML content of the authentication web page to capture user credentials. The campaign is another example of increased interest from cyber criminals in credentials. The 2023 X-Force cloud threat report found that 67% of cloud-related incident response engagements were associated with the use of stolen credentials.`,
      category: "technology",
    },
    {
      id: 22,
      heading:
        "Does your security program suffer from piecemeal detection and response?",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/TDR-Ft.-Image.jpg-1200x630.jpeg.webp",
      discription: `Multiple security information and event management (SIEM) tools (e.g., one on-premise and one in the cloud). Spending too much time or energy on integrating detection systems. An underperforming security orchestration, automation and response (SOAR) systemOnly capable of taking automated responses on the endpointAnomaly detection in silos (e.g., network separate from identity)If any of these symptoms resonate with your organization, it’s time to address PDR. I know what you’re thinking, PDR isn’t really a thing. While the security industry already has an overloaded number of “DR” terms, like EDR, NDR, CDR, MDR, XDR, TDIR, etc., you’re right — there’s no industry PDR term, but the sentiment behind our playful acronym is certainly real. Case in point: look at the number of “DR” acronyms in our previous sentence. The industry as a whole is fragmented and this has resulted in many enterprises suffering from PDR. Why PDR happensPDR side effects often include malaise, restlessness, a sense of unmanaged risk, a willingness to get distracted by generative AI, a compulsion to attend conferences outside of the office and an uncharacteristic joyfulness when attending budget meetings. This all results from the fact that the road to recovery from PDR can often be difficult. How did you get PDR anyway?`,
      category: "technology",
    },
    {
      id: 23,
      heading: "What to know about new generative AI tools for criminals",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/AI-growth-Risk-1200x630.jpeg.webp",
      discription: `Large language model (LLM)-based generative AI chatbots like OpenAI’s ChatGPT took the world by storm this year. ChatGPT became mainstream by making the power of artificial intelligence accessible to millions. The move inspired other companies (which had been working on comparable AI in labs for years) to introduce their own public LLM services, and thousands of tools based on these LLMs have emerged.`,
      category: "technology",
    },
    {
      id: 24,
      heading:
        "The importance of Infrastructure as Code (IaC) when Securing cloud environments",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/10/Close-up-of-a-smart-young-woman-coding-1200x630.jpeg.webp",
      discription:
        "Computer security, cyber security, digital security or information technology security is the protection of computer systems and networks from attack by malicious actors that may result in unauthorized",
      category: "technology",
    },
    {
      id: 25,
      heading: "Vulnerability resolution enhanced by integrations",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/Confident-IT-Programmer-Working-on-Desktop-Computer.jpeg.webp",
      discription:
        "In the past, many organizations had to support manual integration work to get different security systems to ‘talk’ to each other. As the world has become ever more complicated, and the number of moving parts has exploded, organizations should look for solutions that take the work off the security team and instead back in enhanced integration options. Enhanced integration involves connecting tools, teams, and communication channels within an organization’s structure.",
      category: "technology",
    },
    {
      id: 26,
      heading: "How I got started: SIEM engineer",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/SIEM.jpeg.webp",
      discription:
        "As careers in cybersecurity become increasingly more specialized, Security Information and Event Management (SIEM) engineers are playing a more prominent role. These professionals are like forensic specialists but are also on the front lines protecting sensitive information from the relentless onslaught of cyber threats. SIEM engineers meticulously monitor, analyze and manage security events and incidents within an organization.",
      category: "technology",
    },
    {
      id: 27,
      heading: "Are you ready to build your organization’s digital trust?",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/Businessperson-shaking-hand-with-digital-partner-over-futuristic-background.jpeg.webp",
      discription:
        "As organizations continue their digital transformation journey, they need to be able to trust that their digital assets are secure. That’s not easy in today’s environment, as the numbers and sophistication of cyberattacks increase and organizations face challenges from remote work and insider behavior. Digital trust can make your organization’s digital transformation stronger. A lack of digital trust can do irreparable harm.",
      category: "technology",
    },
    {
      id: 28,
      heading: "Most organizations want security vendor consolidation",
      image:
        "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/Technicians-using-computer-in-server-room-1200x630.jpeg.webp",
      discription:
        "Cybersecurity is complicated, to say the least. Maintaining a strong security posture goes far beyond knowing about attack groups and their devious TTPs. Merely understanding, coordinating and unifying security tools can be challenging.",
      category: "technology",
    },
    {
      id: 29,
      heading:
        "Fans believe this chapter of Jujutsu Kaisen confirms Gojo Satoru's revival: Is it true?",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/25/550x309/jjk_gojo_comeback_1698230711701_1698230751838.png",
      discription: `Ever since Gojo's death, there have been multiple theories that have awakened the hope of Gojo's survival in the Jujutsu Kaisen community. After the release of Jujutsu Kaisen Chapter 239 on Sunday, this one particular theory has been shared by many dedicated fans. It all began with the release of the latest chapter titled "Stupid Survivor". The astute fan quickly connected the dots, pointing out a striking resemblance between this title and the theme song of the cult classic manga series Bobobo-bo Bo-bobo, named "Stupid Survivor".`,
      category: "hollywood",
    },
    {
      id: 30,
      heading:
        "Hollywood mourns the loss of iconic 'Shaft' actor Richard Roundtree: ‘A dream to work with’",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/25/550x309/11_1698223681053_1698223691722.png",
      discription: `The death of Richard Roundtree, the iconic actor who played John Shaft in the 1970s Shaft movies, has saddened many of his fans and colleagues. Roundtree, 81, died of pancreatic cancer at his home in Los Angeles on Tuesday.`,
      category: "hollywood",
    },
    {
      id: 31,
      heading:
        "Snoop Dogg revealed when he rocked at Bar Mitzvah with unfiltered lyrics",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/25/550x309/Germany-Snoop-Dogg-1_1698201341235_1698201392063.jpg",
      discription: `Snoop Dogg talks about the music industry and staying relevant with Latto. He advises Latto to study the greats and make smart business decisions. Snoop Dogg shared some of his wisdom and stories with Latto, 24, in a Rolling Stone interview for the Musicians on Musicians issue.`,
      category: "hollywood",
    },
    {
      id: 32,
      heading:
        "Green Day unveil release date for 14th album Saviors, drop first music video",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/Screenshot_2023-10-24_232413_1698170068834_1698170075326.png",
      discription: `American punk rock band Green Day announced the release date for their 14th studio album on Tuesday, October 24. The band's upcoming album- Saviors, is set to release next year on January 19. Along with this, they have also unveiled its first single titled ‘The American Dream Is Killing Me’. This marks their first full-length album since 2020 and is a follow-up to the album ‘Father of All Motherf–kers’. It will be released via Reprise/Warner Records and is currently available for pre-order.`,
      category: "hollywood",
    },
    {
      id: 33,
      heading:
        "Lil Wayne reacts to his Hollywood Wax Museum figure, ‘Sorry that ain't me!’",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/866693_Wallpaper2_1698156469039.jpg",
      discription:
        "Lil Wayne has a hilarious reaction to his wax figure at the Hollywood Wax Museum in Tennessee. After his figure recently went viral online, the American rapper candidly expressed his feelings on X, formerly Twitter. The 41-year-old hip-hop icon wrote, “Sorry wax museum but dat s**t ain’t me! You tried tho and I appreciate the effort.” His response took the platform by storm and has garnered over 3.3 million views so far. Fans didn't hold back from backing him as many agreed with him.",
      category: "hollywood",
    },
    {
      id: 34,
      heading:
        "Paris Hilton responds to ‘unacceptable’ comments about her son's big head: My baby is perfectly healthy",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/paris_1698151636646_1698151636962.jpg",
      discription: `Paris Hilton has addressed the concerns that arose after many users commented on the size of her infant son's head. Paris Hilton is breaking her silence on the unwarranted comments on a recent picture of her 8-month-old son, Phoenix Barron. The TV personality took to her Instagram Stories to address how "unacceptable" it is for her followers to comment on her child's physical appearance.`,
      category: "hollywood",
    },
    {
      id: 35,
      heading:
        "Blink-182 to return with One More Time, unveil North American tour dates",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/Screenshot_2023-10-24_174119_1698149495172_1698149500674.png",
      discription: `American punk rock band Blink-182 is returning to the music scene after a decade-long hiatus with One More Time stadium and arena tour across North America. The band's original members Mark Hoppus, Tom DeLonge, and Travis Barker are set to tour together for the first time in 10 years, during the summer of 2024 in support of their recently launched album ‘One More Time’. The 30-city trek, which is produced by Live Nation, will include stadium performances at Petco Park in the band’s hometown of San Diego, Sofi Stadium in Los Angeles, Citi Field in New York, Fenway Park in Boston, and Rogers Center in Toronto, along with 25 arena performances.`,
      category: "hollywood",
    },
    {
      id: 36,
      heading:
        "Netflix's One Piece Season 2 reveals behind-the-scenes after WGA strike storm",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/www_1690811415560_1698146428565.webp",
      discription: `In the vast ocean of streaming platforms, Netflix has discovered a treasure trove with its live-action adaptation of the beloved anime, One Piece. As the Wano Saga unfolds in the animated realm, fans worldwide are eagerly awaiting Luffy's adventures in the upcoming season of the live-action series. Breaking streaming records upon its debut, One Piece quickly garnered a massive fan base, leading Netflix to swiftly greenlight a second season.`,
      category: "hollywood",
    },
    {
      id: 37,
      heading:
        "Peaky Blinders composer Otnicka reacts after users claim Leo song Ordinary Person has been copied from his track",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/ani_1698145252101_1698145252471.jpg",
      discription: `Several users tagged Leo music composer Anirudh Ravichander in the comments and accused him of plagiarism. Peaky Blinders composer Otnicka has now reacted. Anirudh Ravichander landed into a plagiarism controversy after he dropped the 'Ordinary Person' track from Leo on YouTube. Several users accused the composer of plagiarism after it sounded very similar to Belarusian musician Otnicka’s track ‘Where Are You?’ The singer even shared a post on Instagram to address the issue in detail.`,
      category: "hollywood",
    },
    {
      id: 38,
      heading:
        "BLACKPINK's Jisoo to star in Omniscient Reader's Viewpoint alongside Lee Min-ho",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/jISOO_1683712946814_1698140638428.jpg",
      discription: `South Korean singer Jisoo, 28, is all set to star in Omniscient Reader's Viewpoint, a film adaptation of the popular namesake webtoon. Alongside the BLACKPINK star, the upcoming film will have Lee Min-ho, Ahn Hyo-seop, and Nana as the lead cast members. The filming is scheduled to begin in December and is produced by Realies Pictures, famous for films like - Confession, Masquerade, Warriors of the Dawn, and the action film series Along With the Gods.`,
      category: "hollywood",
    },
    {
      id: 39,
      heading:
        "Gal Gadot shares video of 9 year-old child captured by Hamas, calls for release of hostages",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/Gal_Gadot_1697024752244_1698133986823.jpg",
      discription: `Gal Gadot was also among Hollywood’s biggest names to have signed an open letter to Joe Biden for the release of hostages. Gal Gadot is taking to Instagram to weigh in on the ongoing war between Israel and Palestine. On Monday, the actor took to her Instagram account to share a video of a 9 year-old child who has been abducted by the Hamas in Gaza. She also signed an open letter to US president Joe Biden in an urgent call for release of multiple hostages.`,
      category: "hollywood",
    },
    {
      id: 40,
      heading:
        "BLACKPINK's Jisoo, actor Ahn Bo-hyun break up after dating for 3 months, fans say ‘that was quick’",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/jisoo__1698131414288_1698131414461.jpg",
      discription: `Jisoo and Ahn Bo-hyun have decided to part ways less than three months after they started dating. As per sources, their busy schedules caused the split. Mere months after they started dating, Korean pop star Jisoo and actor Ahn Bo-hyun have decided to end their relationship. The same was confirmed by her agency YG Entertainment.`,
      category: "hollywood",
    },
    {
      id: 41,
      heading:
        "Taylor Swift plants a kiss on boyfriend Travis Kelce in adorable pic, fans are ‘absolutely smitten’",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/taylor_swift_1698122066005_1698122066233.jpeg",
      discription: `Taylor Swift and Travis Kelce look the perfect couple in a new picture that shows her planting a kiss on his cheek. Check out how fans reacted. Singer Taylor Swift and football star Travis Kelce are the cutest couple in town and their latest picture is proof. A new photo of them has surfaced on social media and it shows Taylor planting a sweet kiss on Travis' face. `,
      category: "hollywood",
    },
    {
      id: 42,
      heading:
        "Mission Impossible — Dead Reckoning Part Two pushed to 2025 amid actors strike",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/10/24/550x309/mission_impossible_dead_reckoning_part_two_1698116343772_1698116343942.jpg",
      discription: `A string of Marvel movies have previously shifted back, as did the third Venom film. Spider-Man: Beyond the Spider-Verse, has been delayed indefinitely. The eighth installment of the Mission: Impossible franchise has been postponed a year, signaling a new wave of release schedule juggling for Hollywood studios as the actors strike surpasses three months of work stoppage.`,
      category: "hollywood",
    },
    {
      id: 43,
      heading: "How can doing lighter workouts like Alaya F help?",
      image: "https://images.indianexpress.com/2023/10/alaya-f_1600.jpg",
      discription: `We all have those days when we feel ‘less is more’, especially on the fitness front. Instead of forgoing your fitness routine, it is good to work out a little to stay consistent in your fitness journey. Alaya F too felt something similar and opted for a lighter workout recently in the gym when she wasn’t feeling too good about anything. She shared a glimpse of her workout with weight plates with the caption, “A lighter workout today because I was feeling very bleh…”`,
      category: "fitness",
    },
    {
      id: 44,
      heading:
        "Decoding how our genes affect obesity, 5 strategies to fight it",
      image: "https://images.indianexpress.com/2023/10/obesity-fat-woman.jpg",
      discription:
        "Genetics can significantly influence a person’s likelihood of becoming obese. Some individuals inherit genes that make them more susceptible to weight gain. Dr Krishnamohan. Y, clinical director, bariatric and GI surgery, CARE Hospitals, explained that various genes are associated with obesity, which can affect two aspects.",
      category: "fitness",
    },
    {
      id: 45,
      heading:
        "Don’t compromise on your fitness, instead practise some yoga in bed!",
      image:
        "https://images.indianexpress.com/2023/06/yoga-in-bed-featured.jpg",
      discription:
        "Are you too lazy to get out of the comfort of your bed and hit the gym? Well, we have all been there. But this does not mean that you have to compromise on your fitness. You can still practice yoga while staying in bed. Demonstrating the same is celebrity yoga trainer Anshuka Parwani, who is known for training numerous A-listers such as Kareena Kapoor Khan and Alia Bhatt. Recently, she shared a video on Instagram showing various yoga asanas that can be performed on the bed. “Stop daydreaming while lying in bed, 🛌 instead do some Yoga ☺️,” she captioned the video.",
      category: "fitness",
    },
    {
      id: 46,
      heading:
        "7 exercises that are beneficial for those suffering from osteoporosis",
      image: "https://images.indianexpress.com/2023/10/osteoporosis.jpg",
      discription: `Ordinarily, your bones possess the density and strength needed to bear your weight and absorb various forms of impact. As you grow older, your bones naturally undergo a reduction in density and a diminished capacity for self-renewal or regrowth. In cases of osteoporosis, your bones become significantly more fragile and weaker than they should be.`,
      category: "fitness",
    },
    {
      id: 47,
      heading:
        "Find out Shilpa Shetty’s daily health secret (hint: it’s a fruit)",
      image: "https://images.indianexpress.com/2023/10/noni-juice.jpg",
      discription:
        "Noni juice, derived from the fruit of the Morinda citrifolia tree, has a long history of use in Polynesian folk medicine — spanning over 2,000 years. Known for its rich heritage of health applications, noni juice is now capturing the attention of fitness enthusiasts, including our very own Shilpa Shetty.",
      category: "fitness",
    },
    {
      id: 48,
      heading:
        "Pre-workout snacks are important. These are some healthy ones you should try",
      image:
        "https://images.indianexpress.com/2023/09/fitness-man_1200_freepik.jpg",
      discription:
        "You know that wild hunger that threatens to have you falling flat on your face while you’re working out? That is precisely the reason why pre-workout snacks are important. Ekta Singhwal, dietician at Ujala Cygnus Group of Hospitals, explained that these snacks play a crucial role in enhancing performance and promoting overall well-being while you’re exercising.",
      category: "fitness",
    },
    {
      id: 49,
      heading:
        "Gearing to sign up for a fitness challenge? Here’s what to know",
      image:
        "https://images.indianexpress.com/2023/10/fitness-challenges_200_getty.jpg",
      discription:
        "These days social media is flooded with various fitness challenges ranging from 21-day transformation to 75 days hard challenge to 90 days habit-building challenges. The core idea behind such challenges is to motivate everyone to get fit in a specific period of time. But have you ever wondered why there is a sudden blitz of such finite challenges from fitness influencers and enthusiasts running transformation programs?",
      category: "fitness",
    },
    {
      id: 50,
      heading: "Are juice cleanses a safe and effective way to lose weight?",
      image: "https://images.indianexpress.com/2023/06/juices.jpg",
      discription: `There has been an influx of searches on juice cleanses, also known as detox diets. They promise to help you shed those extra kilos quickly while giving your skin that much-needed glow and flushing toxins from your body. But do juice cleanses work, and should they be a part of your diet regime? Before we answer that, let’s understand what juice cleanses entail.`,
      category: "fitness",
    },
    {
      id: 51,
      heading: "Here’s why you should eat in the Sukhasana pose",
      image: "https://images.indianexpress.com/2023/10/sukhasana.jpg",
      discription:
        "Sitting on the floor and using your hands to enjoy a meal is a time-honored tradition in India, but have you ever wondered about the reasons behind it? Is there any wisdom in this practice? Recently, celebrity nutritionist Rujuta Diwekar shed light on a yoga posture that can enhance your eating experience. She recommends enjoying at least one meal while seated on the floor in Sukhasana, the cross-legged position.",
      category: "fitness",
    },
    {
      id: 52,
      heading: "Overcome overthinking with this easy yoga mudra",
      image: "https://images.indianexpress.com/2023/10/yoga-mudra.jpg",
      discription:
        "Overthinking is a common struggle that many people face, and breaking free from this habit can be a daunting challenge. The constant rumination about past decisions, imagining worst-case scenarios, and second-guessing every choice can leave you mentally drained. Research has even shown that overthinking is closely associated with feelings of depression, anxiety, and post-traumatic stress disorder (PTSD).",
      category: "fitness",
    },
    {
      id: 53,
      heading:
        "This is Hrithik Roshan’s diet during day-long shoots: ‘One meal every 3 hours’",
      image: "https://images.indianexpress.com/2023/09/hrithik_3.jpg",
      discription: `Many times, we tend to overlook the hard work and effort that one puts in every day to achieve their dream body. That just does not include one’s fitness schedule but dietary needs too. It can especially be tough to meet when you have a busy day at work. But definitely not impossible. Giving us a glimpse into his diet during a day-long shooting, Fighter actor Hrithik Roshan admitted that he does “makes compromises”.`,
      category: "fitness",
    },
    {
      id: 54,
      heading:
        "When Zerodha’s CEO Nithin Kamath shared the importance of strength training: ‘Integral to increasing health span’",
      image: "https://images.indianexpress.com/2023/05/nithin-kamath.jpg",
      discription:
        "Some time ago, Zerodha’s co-founder Nithin Kamath had shared data on the ‘gym membership adoption rate’ claiming that only 0.2 per cent of India’s population (50 lakh people) were engaged in gym activities. Sharing the data from the World of Statistics on the percentage of the population of different countries that go to the gym, Kamath had written, “Most Indians think that you don’t need strength training as you age. The truth is strength training becomes even more critical as we get older, especially after our 40s. The stronger we are, the more active we can be when we are older.”",
      category: "fitness",
    },
    {
      id: 55,
      heading: "Beat constipation with these 3 simple yoga mudras",
      image: "https://images.indianexpress.com/2023/06/yoga-mudra.jpg",
      discription:
        "Constipation is one of the most common digestive problems that affects people of almost all age groups. More and more individuals globally are facing this ailment due to the increase in stress, dehydration and sedentary lifestyles. If you are having a hard time passing bowel movements, you may be suffering from constipation",
      category: "fitness",
    },
    {
      id: 56,
      heading:
        "Rashmika Mandanna is channelling her ‘inner beast’ while working out",
      image:
        "https://images.indianexpress.com/2023/09/rashmika-mandanna_200_insta.jpg",
      discription: `Rashmika Mandanna‘s commitment to fitness needs no introduction. In fact, she has been on the fitness trail for the longest time and ensures that she dedicates enough time to strength and conditioning. As such, the Pushpa actor was seen working on her quadricep muscles with a challenging leg workout.`,
      category: "fitness",
    },
    {
      id: 57,
      heading: "This bedtime drink can help detoxify",
      image:
        "https://static.toiimg.com/thumb/msid-104580380,imgsize-47858,width-400,resizemode-4/104580380.jpg",
      discription:
        "Liver  is one of the most vital organs of the body, which plays an essential role in filtering and removing toxins and waste products from the blood, metabolizing nutrients, and producing vital proteins that help in better functioning of the digestive system. However, with an increase in unhealthy lifestyle and bad food habits, the need for liver cleansing increases, which can be naturally done by consuming a healthy diet coupled with some natural home remedies.",
      category: "food",
    },
    {
      id: 58,

      heading: "5 fruits that will keep you healthy this winter season",
      image:
        "https://static.toiimg.com/thumb/104587173.cms?width=680&height=512&imgsize=107072",
      discription: `Winter season is now slowly knocking in the country and cold has started showing its full effect in the early morning and evening. And its time that we start preparing to protect ourselves from this weather. Though, there are several foods that we can consume to keep ourselves warm and cozy, we will talk about certain fruits that can help us keep healthy. These fruits not only increase the immunity, but can help prevent diseases as well. Here is a list of fruits that we must keep in handy during winter season. (Images courtesy: Canva)`,
      category: "food",
    },
    {
      id: 59,
      heading: "Traditional to fusion, Bengali mishtis thrill NCR’s foodies",
      image:
        "https://static.toiimg.com/thumb/msid-104649756,imgsize-143760,width-400,resizemode-4/104649756.jpg",
      discription:
        "From sweet shops in Delhi’s CR Park  to kitchens of , traditional and fusion Bengali sweets are in demand during Durga Puja. Whether it’s sandesh, mishti doi or chhenar jilipi, NCR’s  lovers gorge on a range of sweets – both known and lesser-known – during the festive season. “During Durga Puja, we work in three shifts, and the sale goes up by 10 times.",
      category: "food",
    },
    {
      id: 60,
      heading: "This is why you should add Gur (jaggery) to regular chai",
      image:
        "https://static.toiimg.com/thumb/imgsize-23456,msid-104579030,width-600,resizemode-4/104579030.jpg",
      discription: `Winter is around the corner and the changing weather calls for a healthy immunity to sustain the challenges of the changing season. Well, a hearty cup of tea can actually turn out to be the game changer and tweak your regular chai into a healthy enriching elixir. If you too are fond of masala chai, then this one simple addition can boost your health without putting in much effort. `,
      category: "food",
    },
    {
      id: 61,

      heading:
        "Navratri 2023: The tradition of preparing Poori, Halwa, and Kale Chane on Ashtami/Navmi",
      image:
        "https://static.toiimg.com/thumb/104615422.cms?width=680&height=512&imgsize=111042",
      discription:
        "Today is the eighth day of Shardiya Navratri, and on this day the eighth manifestation of Maa Durga, called Mahaguri, is worshipped. Also known as Maha Astami, the day calls for the celebration of little girls, popularly known as Kanya Pujan. In some parts of Northern India, the ritual of Kanya Pujan is also performed on the 9th day of the festival. On this day, the devotees break the fast by offering the bhog of Poori, Sooji Halwa, and Sookhe Kale Chane to the deity and the young girls. Here’s everything you need to know about the tradition of eating Poori, Sooji Halwa, and Sookhe Kale Chane on Ashtami and Navmi.",
      category: "food",
    },
    {
      id: 62,
      heading: "Why should you eat ghee and jaggery after meals",
      image:
        "https://static.toiimg.com/thumb/msid-104628183,imgsize-66172,width-400,resizemode-4/104628183.jpg",
      discription:
        "Ghee and jaggery are an inseparable part of Indian cuisine, but do you know what happens when you consume these two potent ingredients together? Here’s all you need to know about the benefits of consuming ghee and jaggery together.",
      category: "food",
    },
    {
      id: 63,
      heading: "Why should you eat ginger daily?",
      image:
        "https://static.toiimg.com/thumb/msid-104628682,imgsize-61112,width-400,resizemode-4/104628682.jpg",
      discription: `Ginger is a quintessential part of every Indian household, from adding a punch of flavour to regular chai to making delicacies flavoursome, this aromatic and strong herbs can add soul to anything and everything! But do you know what happens when you eat ginger daily? Here are some lesser known benefits of eating ginger daily.`,
      category: "food",
    },
    {
      id: 64,
      heading: "How to choose good-quality dry fruits and store them",
      image:
        "https://static.toiimg.com/thumb/104626455.cms?width=680&height=512&imgsize=89794",
      discription:
        "Dry fruits are not just a delicious addition to your diet; they also pack a powerful nutritional punch. They are loaded with protein, essential oils, and antioxidants, making them an indispensable part of a healthy eating plan. However, in order to reap the maximum benefits from these nutrient-rich treasures, it's crucial to choose them wisely.  Here are some valuable tips to guide you in making an informed decision when purchasing dry fruits.",
      category: "food",
    },
    {
      id: 65,
      heading:
        "FSSAI promotes the consumption of millets during Navratri, shares the recipe of Kuttu Beetroot Tikki",
      image:
        "https://static.toiimg.com/thumb/104540567.cms?width=680&height=512&imgsize=186786",
      discription:
        "The joy of Navratri can be seen in every corner of India. In some places Navratri festival is enjoyed through Garba and in some places through Dandiya where you require a lot of energy. But, to take part in these you need extra energy and if your eating habits are not right during the fast, then leave aside energy, you will feel dizzy and weak. Therefore, during this time it is advisable to focus more on healthy and nutritional options.  (Imags courtesy: Canva)",
      category: "food",
    },
    {
      id: 66,
      heading:
        "US man tries Butter Chicken & Naan for the first time: This is his reaction",
      image:
        "https://static.toiimg.com/thumb/imgsize-23456,msid-104528546,width-600,resizemode-4/104528546.jpg",
      discription: `Indian cuisine has gained international fame for its delectable dishes that tantalize taste buds. Social media has played a significant role in amplifying its popularity. The infusion of unique spices and delightful flavors has captivated global audiences, prompting people from various corners of the world to explore its culinary treasures. While some misconceive Indian food as excessively spicy, there are iconic dishes that are relatively mild in spice yet incredibly satisfying.`,
      category: "food",
    },
    {
      id: 67,
      heading: "5 Lesser known benefits of sesame seeds",
      image:
        "https://static.toiimg.com/thumb/104527308.cms?width=680&height=512&imgsize=96498",
      discription:
        "Since ages, sesame seeds have been a quintessential part of Indian cuisine. Right from accentuating the taste and texture of sweet treats, drinks to adding a boost of nutrition, sesame has been used for its numerous health benefits. Here are five lesser-known benefits of sesame seeds:",
      category: "food",
    },
    {
      id: 68,
      heading:
        "What’s cooked in Bengali homes during the 9-days of Durga Pooja",
      image:
        "https://static.toiimg.com/thumb/imgsize-23456,msid-104501716,width-600,resizemode-4/104501716.jpg",
      discription: `It’s that time of the year, when the heart and soul of every Bengali is in sync with the euphoric rhythm of dhak dhunuchi and shonko dhoni as Maa Durga graces the world with her presence, and the festive spirit can be felt everywhere. Interestingly, this is also the time when the world is fasting and Bengalis are feasting; And with that zest and zeal, let’s dive into the culinary fare that is made and relished during the 9-day long festival.`,
      category: "food",
    },
    {
      id: 69,
      heading:
        "Navratri Thali: Easy recipes that can be made in under-30 minutes",
      image:
        "https://static.toiimg.com/thumb/104497240.cms?width=680&height=512&imgsize=123810",
      discription:
        "Navratri is one of the most important festivals celebrated in India, with much pomp and show. This Hindu festival is a vibrant one and is a time for devotion, fasting, and feasting. A crucial part of Navratri celebrations is the delectable food prepared to appease the goddess and delight the taste buds. Here are six essential foods that are commonly included in a Navratri Thali, and here’s how you can easily make them at home.",
      category: "food",
    },
    {
      id: 70,
      heading: "9 Drinks to stay hydrated during Navratri",
      image:
        "https://static.toiimg.com/thumb/msid-104494701,imgsize-36178,width-400,resizemode-4/104494701.jpg",
      discription: `Navratri has begun and it’s that time of the year, when devotees leave no stone unturned to impress Goddess Durga. From observing austertious fasts to following a sattvik diet, there are times when the body needs ample nourishment to keep up with the 9-day long fasts. Here are 9 simple drinks, which are naturally rich in nutrients and can replenish and rehydrate the body. `,
      category: "food",
    },
  ]);
  return (
    <Store.Provider value={[data, setData]}>{props.children}</Store.Provider>
  );
};
export default DataStore;
