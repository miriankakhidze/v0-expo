import { Email } from "./types";

export const emails: Email[] = [
  {
    id: "1",
    sender: "Sarah Johnson",
    senderEmail: "sarah.johnson@company.com",
    subject: "Project Update - Q4 Planning",
    preview:
      "Hi team, I wanted to share the latest updates on our Q4 planning initiative...",
    body: "Hi team,\n\nI wanted to share the latest updates on our Q4 planning initiative. We've made significant progress on the roadmap and I'd like to schedule a meeting to discuss the next steps.\n\nKey highlights:\n• Budget allocation completed\n• Resource planning in progress\n• Timeline finalized for major milestones\n\nLet me know your availability for next week.\n\nBest regards,\nSarah",
    timestamp: "2 hours ago",
    isRead: false,
    isStarred: true,
    avatar: "SJ",
  },
  {
    id: "2",
    sender: "Marketing Team",
    senderEmail: "marketing@company.com",
    subject: "New Campaign Launch Results",
    preview:
      "Great news! Our latest campaign has exceeded expectations with a 25% increase...",
    body: "Great news!\n\nOur latest campaign has exceeded expectations with a 25% increase in engagement rates. The metrics show:\n\n• Click-through rate: 3.2% (up from 2.1%)\n• Conversion rate: 1.8% (up from 1.2%)\n• Social media engagement: +45%\n\nThanks to everyone who contributed to this success!",
    timestamp: "4 hours ago",
    isRead: true,
    isStarred: false,
    avatar: "MT",
  },
  {
    id: "3",
    sender: "Alex Chen",
    senderEmail: "alex.chen@company.com",
    subject: "Code Review Request",
    preview:
      "Could you please review the pull request for the new authentication system?",
    body: "Hi,\n\nCould you please review the pull request for the new authentication system? I've implemented the OAuth integration and added comprehensive tests.\n\nPR Link: github.com/company/project/pull/123\n\nThe changes include:\n• OAuth 2.0 implementation\n• Unit tests for auth flows\n• Documentation updates\n• Security improvements\n\nThanks!\nAlex",
    timestamp: "1 day ago",
    isRead: true,
    isStarred: false,
    avatar: "AC",
  },
  {
    id: "4",
    sender: "HR Department",
    senderEmail: "hr@company.com",
    subject: "Employee Benefits Update",
    preview:
      "Important updates to your employee benefits package effective January 1st...",
    body: "Dear Team,\n\nWe have important updates to your employee benefits package effective January 1st:\n\n• Health insurance premium reduction by 15%\n• New dental coverage options\n• Increased 401(k) matching up to 6%\n• Additional vacation days for tenured employees\n\nPlease review the attached documents and contact HR with any questions.\n\nBest,\nHR Team",
    timestamp: "2 days ago",
    isRead: false,
    isStarred: true,
    avatar: "HR",
  },
];
