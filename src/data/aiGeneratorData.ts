export interface AITemplate {
  id: string;
  name: string;
  description: string;
  iconName: string;
  category: 'blog' | 'social' | 'marketing' | 'seo';
  promptPlaceholder: string;
  defaultPrompt: string;
}

export interface GeneratedContent {
  id: string;
  title: string;
  templateId: string;
  templateName: string;
  prompt: string;
  content: string;
  tone: string;
  length: 'Short' | 'Medium' | 'Long';
  language: string;
  date: string;
  creditsUsed: number;
  isFavorite: boolean;
}

export interface SaaSPlan {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  credits: string;
  features: string[];
  popular: boolean;
  buttonText: string;
}

export const aiTemplates: AITemplate[] = [
  {
    id: 'blog-post',
    name: 'Full Blog Post',
    description: 'Generate a complete, structured blog post with headings, introduction, body, and conclusion.',
    iconName: 'FileText',
    category: 'blog',
    promptPlaceholder: 'e.g. The future of decentralized solar energy in smart cities...',
    defaultPrompt: 'The impact of Web3 and DAO architectures on local community green energy grids.'
  },
  {
    id: 'article-outline',
    name: 'Article Outline',
    description: 'Create a comprehensive, logical outline for a blog post or research article.',
    iconName: 'Layout',
    category: 'blog',
    promptPlaceholder: 'e.g. How to train your first custom RAG AI agent...',
    defaultPrompt: 'A step-by-step guide to building a customer support chatbot using OpenAI and Pinecone.'
  },
  {
    id: 'social-post',
    name: 'Social Media Post',
    description: 'Catchy social media captions for Twitter/X, LinkedIn, or Instagram with hashtags.',
    iconName: 'Share2',
    category: 'social',
    promptPlaceholder: 'e.g. Launching a new headless e-commerce store with 3D models...',
    defaultPrompt: 'Announcing a major 40% mobile conversion increase thanks to Next.js and Three.js.'
  },
  {
    id: 'product-desc',
    name: 'Product Description',
    description: 'Engaging, benefit-focused descriptions that turn visitors into paying e-commerce buyers.',
    iconName: 'ShoppingBag',
    category: 'marketing',
    promptPlaceholder: 'e.g. Premium mechanical keyboard with OLED screen...',
    defaultPrompt: 'Apex Nebula Run-v1: customizable carbon-soled running shoes with breathable mesh.'
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing copy',
    description: 'High-converting newsletters, product launch emails, or cold outreach sequences.',
    iconName: 'Mail',
    category: 'marketing',
    promptPlaceholder: 'e.g. Offering a free web performance audit to SaaS startups...',
    defaultPrompt: 'Special invitation: double your site speed and slash bounce rates by 50%.'
  },
  {
    id: 'seo-meta',
    name: 'SEO Meta Description',
    description: 'Click-worthy, character-optimized title tags and meta descriptions for search engines.',
    iconName: 'Search',
    category: 'seo',
    promptPlaceholder: 'e.g. Freelance full-stack developer portfolio...',
    defaultPrompt: 'Adejax Portfolio - expert full-stack engineer and Web3 smart contract architect.'
  },
  {
    id: 'yt-script',
    name: 'YouTube Video Script',
    description: 'Hook, intro, body outline, and call-to-action scripts for engaging video content.',
    iconName: 'Video',
    category: 'social',
    promptPlaceholder: 'e.g. Why developers are migrating away from legacy web3 libraries...',
    defaultPrompt: 'Viem and Wagmi vs Ethers.js: the ultimate 2026 bundle size showdown.'
  },
  {
    id: 'ad-copy',
    name: 'High-Converting Ad Copy',
    description: 'Persuasive copy for Google Search, Facebook Ads, or LinkedIn sponsored posts.',
    iconName: 'Sparkles',
    category: 'marketing',
    promptPlaceholder: 'e.g. Hiring an AI agent developer to automate support workflows...',
    defaultPrompt: 'Slash customer support overhead by 80% with our autonomous RAG AI assistant.'
  }
];

export const initialHistory: GeneratedContent[] = [
  {
    id: 'gen-1',
    title: 'Web3 Green Energy Grids',
    templateId: 'blog-post',
    templateName: 'Full Blog Post',
    prompt: 'The impact of Web3 and DAO architectures on local community green energy grids.',
    tone: 'Technical',
    length: 'Long',
    language: 'English',
    date: '2 hours ago',
    creditsUsed: 180,
    isFavorite: true,
    content: `### The Decentralized Energy Revolution: How Web3 and DAOs Power the Grid

In the face of global climate challenges and the fragility of centralized utility grids, local communities are seeking resilient, sustainable alternatives. The intersection of **Web3 blockchain technology** and **Decentralized Autonomous Organizations (DAOs)** is paving the way for a democratic, peer-to-peer (P2P) energy future.

#### 1. The Bottleneck of Centralized Grids
Traditional energy grids are designed for one-way distribution: from massive coal or gas power plants down to passive residential consumers. As homeowners install rooftop solar panels, they become "prosumers" capable of generating electricity. However, selling this energy back to central monopolies often results in:
- Unfair feed-in tariffs (often pennies on the dollar).
- Extreme administrative delays.
- High transaction and transmission fees.

#### 2. The DAO Blueprint for Community Energy
By representing local microgrids as DAOs, neighbors can pool assets, co-own battery reserves, and vote on localized energy policies. 
- **Smart Contract Escrows:** Automate billing based on real-time solar generation.
- **P2P Trading:** Neighbors with solar panels sell excess kilowatts directly to apartment complexes next door at a 15% discount compared to utility rates, settling instantly in stablecoins.
- **Democratic Governance:** Tokenized governance allows grid participants to vote on upgrading battery storage capacities or funding local community solar projects.

#### 3. Real-world Integration: SolShare
Projects like **SolShare** prove that on-chain energy routing is no longer theoretical. By linking IoT smart meters with Chainlink Oracles, generation data is written securely to the blockchain. The ledger dynamically matches supply and demand, ensuring optimal capital efficiency and carbon reduction.

*Decentralization isn't just for finance anymore; it's the key to a resilient, green, and self-sustaining energy grid.*`
  },
  {
    id: 'gen-2',
    title: 'SaaS Support Cost Automation Ad',
    templateId: 'ad-copy',
    templateName: 'High-Converting Ad Copy',
    prompt: 'Slash customer support overhead by 80% with our autonomous RAG AI assistant.',
    tone: 'Persuasive',
    length: 'Short',
    language: 'English',
    date: 'Yesterday',
    creditsUsed: 50,
    isFavorite: false,
    content: `🎯 **Is your support team drowning in repetitive technical tickets?**

Standard chatbots frustrate customers, while hiring human support agents scales your overhead linearly. There is a better way.

Meet **Aegis AI**: the autonomous customer support copilot trained directly on your internal Notion, Zendesk, and markdown docs. 

🚀 **Key Achievements:**
- **Resolves 82% of customer queries instantly** with zero hallucination.
- **Semantic RAG search** queries your database and answers with accurate references.
- **Saves up to 80%** on customer support operational overhead.
- **Seamless human-in-the-loop fallback** when complex situations arise.

Stop wasting money on repetitive support chats. Schedule your 1-on-1 AI integration demo today and get your first 10,000 credits FREE! 

👉 [Learn More & Integrate Aegis]`
  },
  {
    id: 'gen-3',
    title: 'Apex Nebula Sneaker Launch',
    templateId: 'product-desc',
    templateName: 'Product Description',
    prompt: 'Apex Nebula Run-v1: customizable carbon-soled running shoes with breathable mesh.',
    tone: 'Friendly',
    length: 'Medium',
    language: 'English',
    date: '3 days ago',
    creditsUsed: 95,
    isFavorite: true,
    content: `### Meet Your Next PB: The Apex Nebula Run-v1 🚀

Step into the future of athletic performance and personalized style. Engineered for marathon runners, urban explorers, and design enthusiasts alike, the **Apex Nebula Run-v1** represents the perfect synergy of comfort and responsive speed.

#### Why You'll Love the Nebula:
- **Responsive Carbon Sole Plate:** A custom-engineered, ultra-light carbon plate snaps back with every stride, returning 85% of your kinetic energy to push you forward faster.
- **Dynamic Biometric Mesh:** The high-tensile woven upper conforms to your foot like a second skin, offering unparalleled breathability and structural support.
- **Fully Customizable in 3D:** Change colors, choose material finishes, and engrave your initials using our real-time interactive **Three.js product builder** before ordering.

#### Environmental Footprint:
We care about the planet as much as your performance. Every pair of Nebula Run-v1 sneakers is crafted using **45% recycled marine plastics** and assembled in carbon-neutral facilities.

**Experience the cloud-like bounce. Pick your colors and claim yours today!**`
  }
];

export const saasPlans: SaaSPlan[] = [
  {
    name: 'Free Plan',
    priceMonthly: 0,
    priceYearly: 0,
    credits: '5,000 Credits / mo',
    features: [
      'Access to 8 AI templates',
      'Standard generation speed',
      'Saved history (up to 7 days)',
      'Single user seat',
      'Community support'
    ],
    popular: false,
    buttonText: 'Current Plan'
  },
  {
    name: 'Pro Creator',
    priceMonthly: 29,
    priceYearly: 22,
    credits: '100,000 Credits / mo',
    features: [
      'Access to 15+ AI templates',
      'Ultra-fast generation speed',
      'Unlimited history & favorites',
      'Advanced length & tone settings',
      'Export to PDF & Markdown',
      'Dedicated API token access',
      'Priority email support'
    ],
    popular: true,
    buttonText: 'Upgrade to Pro'
  },
  {
    name: 'Business Scale',
    priceMonthly: 89,
    priceYearly: 69,
    credits: '500,000 Credits / mo',
    features: [
      'Unlimited generation credits',
      'Custom fine-tuned brand voices',
      'Autonomous agent workflows',
      'Up to 10 team seats',
      'Dedicated vector database hosting',
      'Shared team workspace folders',
      '24/7 Slack support manager'
    ],
    popular: false,
    buttonText: 'Contact Sales'
  }
];

// Helper mock AI generation generator function
export function simulateAIGeneration(
  templateId: string,
  prompt: string,
  tone: string,
  length: 'Short' | 'Medium' | 'Long',
  language: string
): string {
  const cleanPrompt = prompt.trim();
  const toneAdjectives = {
    Professional: 'authoritative, clear, and structured in a business context',
    Friendly: 'warm, welcoming, and highly engaging with a conversational feel',
    Persuasive: 'highly compelling, action-oriented, and focused on driving conversions',
    Casual: 'laid-back, authentic, and easy-to-read with slang or emojis',
    Technical: 'highly detailed, code-literate, and focused on architectural accuracy'
  }[tone as 'Professional' | 'Friendly' | 'Persuasive' | 'Casual' | 'Technical'] || 'clear';

  const langTransl = {
    English: 'in English',
    Spanish: 'in fluent Spanish (Español)',
    French: 'in elegant French (Français)',
    German: 'in precise German (Deutsch)',
    Japanese: 'in polite Japanese (日本語)'
  }[language as 'English' | 'Spanish' | 'French' | 'German' | 'Japanese'] || 'in English';

  const lengthDetails = {
    Short: 'around 120 words focusing on a quick summary or hook',
    Medium: 'around 280 words incorporating subheadings, bullet points, and benefits',
    Long: 'around 600 words featuring an introduction, 3 detailed sections, and a conclusion'
  }[length];

  // Map template specific mock content structures
  if (templateId === 'blog-post') {
    return `### The Complete Guide: ${cleanPrompt || 'Untitled AI Generated Post'}
*(Generated in a ${tone} tone ${langTransl} - ${length} length)*

#### Introduction
In today's fast-paced digital landscape, understanding the dynamics of **${cleanPrompt || 'modern systems'}** is crucial. Whether you're a startup founder, digital creator, or engineering leader, staying ahead of the curve requires continuous innovation. This article breaks down the core concepts and provides actionable strategies.

#### Key Takeaways & Pillars
To effectively navigate this space, here are the three primary considerations:
- **Strategic Optimization:** Prioritize systems that offer high-speed throughput and minimize operational latency.
- **Resource Automation:** Leverage advanced frameworks (such as AI workflows or smart contracts) to eliminate manual bottlenecks.
- **Scalability and Trust:** Ensure your architecture supports high volumes of traffic while maintaining absolute security protocols.

#### Deep Dive & Context
This generation is specifically crafted to be ${toneAdjectives}. By focusing on clean, modular concepts, you can build a system that is resilient to market shifts and satisfies your target audience.

#### Conclusion
In summary, implementing **${cleanPrompt || 'these principles'}** is not a luxury—it is a necessity for long-term growth. Start by identifying your greatest system bottleneck, design a pilot solution, and scale iteratively.`;
  }

  if (templateId === 'ad-copy') {
    return `🎯 **Looking to maximize your impact with "${cleanPrompt || 'our service'}"?**

Stop wasting hours on manual copywriting. Get high-converting copy that hooks your ideal buyers instantly.

🚀 **Why Choose Us?**
- **Tailored Focus:** Specifically designed to be ${toneAdjectives}.
- **Speed & Efficiency:** Launched and deployed in seconds.
- **Proven Conversions:** Engineered to reduce customer acquisition costs by up to 35%.

*Get started today and unlock 10,000 free generation credits!*

👉 [Claim Your Free Access Now]`;
  }

  if (templateId === 'product-desc') {
    return `### Introducing the All-New ${cleanPrompt || 'Smart Product'} ✨
*(Tone: ${tone} | Language: ${language})*

Unlock a new standard of convenience and premium design. Crafted specifically for users who demand the best in **${cleanPrompt || 'quality'}**, this product combines advanced materials with intuitive utility.

#### Core Benefits:
- **Engineered Performance:** Delivers superior results under high-pressure conditions.
- **Elegant Craftsmanship:** A sleek, minimal design that complements any workspace or home aesthetic.
- **Eco-Friendly Materials:** Manufactured using 100% sustainable, recycled components.

**Experience the difference. Grab yours today!**`;
  }

  // Fallback default rich generator response
  return `### ContentForge AI: Generated Result
**Template:** ${templateId} | **Tone:** ${tone} | **Length:** ${length}
**Prompt:** "${cleanPrompt || 'Custom Prompt Request'}"

This content is automatically simulated ${langTransl} with a **${tone}** delivery style, customized to be ${toneAdjectives}.

#### Section 1: The Core Value Proposition
When focusing on **${cleanPrompt || 'your topic'}**, it's important to state clear, actionable benefits. Modern audiences appreciate concise, highly readable structures that answer their questions immediately.

#### Section 2: Bulleted Highlights
- **High-Performance Infrastructure:** Speed is the ultimate feature.
- **Autonomous Integrations:** Automating repetitive steps saves up to 15 hours per week.
- **User-Centric Design:** Premium layouts build immediate trust.

This is a ${lengthDetails} generation. Copy this output, export it to PDF, or save it directly to your history database.`;
}
