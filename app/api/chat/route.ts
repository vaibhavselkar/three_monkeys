import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const contextData = {
      businessName: "ThreeMonkeys",
      description:
        "ThreeMonkeys is a software development team specializing in building scalable digital products, custom software solutions, web applications, mobile apps, and AI-powered systems for startups and businesses.",
      team: [
        {
          "name": "Vaibhav Selkar",
          "role": "Full Stack Engineer",
          "expertise": [
            "Backend architecture",
            "API development",
            "System optimization",
            "AI integrations",
            "Product-focused engineering"
          ]
        },
        {
          "name": "Mayur Shevale",
          "role": "Full Stack Engineer",
          "expertise": [
            "Frontend development",
            "Responsive UI design",
            "Modern JavaScript frameworks",
            "Performance optimization",
            "Client-focused implementations"
          ]
        },
        {
          "name": "Siddhant Shende",
          "role": "Full Stack Engineer",
          "expertise": [
            "Database design",
            "Cloud deployment",
            "DevOps workflows",
            "Scalable infrastructure",
            "System integration"
          ]
        }
      ],
      services: {
        "softwareDevelopment": {
          "description": "We build custom software solutions tailored to business requirements.",
          "includes": [
            "Web applications",
            "Enterprise software",
            "SaaS platforms",
            "Internal management systems",
            "Automation tools"
          ]
        },
        "websiteDevelopment": {
          "description": "We design and develop responsive, high-performance websites.",
          "includes": [
            "Business websites",
            "E-commerce platforms",
            "Portfolio websites",
            "Landing pages",
            "Custom dashboards"
          ]
        },
        "mobileAppDevelopment": {
          "description": "We build Android and iOS mobile applications.",
          "includes": [
            "Cross-platform apps",
            "Native apps",
            "Startup MVP apps",
            "Business mobile tools"
          ]
        },
        "domainAndHosting": {
          "description": "We provide domain registration and reliable hosting services.",
          "includes": [
            "Domain registration",
            "Shared hosting",
            "Cloud hosting",
            "VPS setup",
            "Server configuration"
          ]
        },
        "aiSolutions": {
          "description": "We develop AI-powered solutions for modern businesses.",
          "includes": [
            "AI chatbots",
            "Automation workflows",
            "Custom AI integrations",
            "Data analytics solutions"
          ]
        },
        "maintenanceAndSupport": {
          "description": "We provide ongoing technical support and system maintenance.",
          "includes": [
            "Website maintenance",
            "Server monitoring",
            "Bug fixing",
            "Performance optimization"
          ]
        }
      },
      pricing: {
        "note": "Pricing depends on project complexity, required features, and timeline.",
        "consultation": "Free initial consultation is available.",
        "customQuote": "Clients receive a tailored proposal after requirement discussion."
      },
      contact: {
        "email": "support@threemonkeys.com",
        "website": "https://threemonkeys.com",
        "contactPage": "https://threemonkeys.com/contact"
      },
      strictRule:
        "I'm not sure about that. Please submit your query through our contact page at https://threemonkeys.com/contact and our team will assist you."
    };

    const prompt = `
You are the official AI assistant for ${contextData.businessName}.

STRICT RULES:
1. Answer ONLY using the provided business context.
2. If answer is not found, respond:
"${contextData.strictRule}"
3. Do NOT invent services or team members.

Business Context:
${JSON.stringify(contextData)}

User Question:
${message}

Answer:
`;

    const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 300,
            temperature: 0.3
        })
        }
    );
    
    const data = await response.json();
    
    // 🔥 Debug log
    console.log("Groq Raw Response:", data);
    
    // If Groq returns error
    if (!response.ok || !data.choices) {
        console.error("Groq Error Response:", data);
        return NextResponse.json(
        { reply: "AI service is temporarily unavailable." },
        { status: 500 }
        );
    }
    
    return NextResponse.json({
        reply: data.choices[0].message.content
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { reply: "Something went wrong." },
      { status: 500 }
    );
  }
}
