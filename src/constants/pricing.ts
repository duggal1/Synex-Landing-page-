export type PlanFeature = {
    text: string;
    included: boolean;
};

export type Plan = {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Starter",
        description: "For small businesses automating invoices & tickets",
        price: {
            monthly: 19,
            yearly: 190,
        },
        features: [
            { text: "Automated Invoice Processing (up to 100/month)", included: true },
            { text: "Basic Ticket Automation", included: true },
            { text: "Email Support", included: true },
            { text: "Basic Reporting & Analytics", included: true },
            { text: "Custom AI Training", included: false },
            { text: "API Access", included: false },
        ],
    },
    {
        name: "Growth",
        description: "Best for scaling businesses needing advanced automation",
        price: {
            monthly: 69,
            yearly: 690,
        },
        popular: true,
        features: [
            { text: "Unlimited Invoice Processing", included: true },
            { text: "Advanced Ticket Automation", included: true },
            { text: "Priority Support", included: true },
            { text: "AI-Powered Smart Suggestions", included: true },
            { text: "Custom AI Training", included: true },
            { text: "Zapier & Webhook Integrations", included: true },
        ],
    },
    {
        name: "Enterprise",
        description: "For large teams & custom AI automation needs",
        price: {
            monthly: 199,
            yearly: 1990,
        },
        features: [
            { text: "Unlimited Invoice & Ticket Automation", included: true },
            { text: "Custom AI Models", included: true },
            { text: "Team Management & Multi-User Access", included: true },
            { text: "24/7 Dedicated Support", included: true },
            { text: "Full API Access", included: true },
            { text: "On-Premise Deployment Available", included: true },
        ],
    },
];