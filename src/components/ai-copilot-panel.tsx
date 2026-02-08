"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  X,
  Send,
  Sparkles,
  User,
  Bot,
  Loader2,
  TrendingUp,
  ShoppingCart,
  DollarSign,
  Lightbulb,
  RotateCcw,
  Keyboard,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCopilotStore } from "@/store/copilot";
import { getDashboardContext } from "@/features/analytics/dashboard";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  {
    icon: TrendingUp,
    text: "Why did sales drop last week?",
    category: "Trends",
  },
  {
    icon: ShoppingCart,
    text: "What are my top performing products?",
    category: "Products",
  },
  {
    icon: DollarSign,
    text: "Summarize last month's performance",
    category: "Revenue",
  },
  {
    icon: Lightbulb,
    text: "How can I improve conversion rate?",
    category: "Strategy",
  },
];

// Simple markdown-like formatting for AI responses
function formatMessage(content: string) {
  // Bold text: **text** or __text__
  let formatted = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // Bullet points: - item or * item
  formatted = formatted.replace(
    /^[\-\*]\s+(.*)$/gm,
    '<li class="ml-4">$1</li>',
  );

  // Numbered lists: 1. item
  formatted = formatted.replace(
    /^\d+\.\s+(.*)$/gm,
    '<li class="ml-4 list-decimal">$1</li>',
  );

  // Line breaks
  formatted = formatted.replace(/\n/g, "<br />");

  return formatted;
}

export function AICopilotPanel() {
  const { isOpen, close, toggle } = useCopilotStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Global keyboard shortcut to open/close the panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to toggle panel
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      // Escape to close panel
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close, toggle]);

  // Trap focus within panel when open
  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusableElements = panel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    panel.addEventListener("keydown", handleTabKey);
    return () => panel.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  const handleSend = useCallback(
    async (question?: string) => {
      const messageText = question || input.trim();
      if (!messageText || isLoading) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: messageText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      try {
        const context = getDashboardContext();

        const response = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: messageText,
            context,
          }),
        });

        const data = await response.json();

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data?.answer?.content || "Sorry, I couldn't process that request.",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:bg-black/10"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="AI Copilot"
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] lg:w-[420px] bg-card border-l shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-linear-to-r from-primary/5 via-purple-500/5 to-pink-500/5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-linear-to-br from-primary via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">AI Copilot</h2>
              <p className="text-xs text-muted-foreground">Powered by GPT-4</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="p-2 hover:bg-secondary rounded-lg transition-colors group"
                title="Clear chat"
                aria-label="Clear chat history"
              >
                <RotateCcw className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>
            )}
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-secondary/50 rounded-md text-xs text-muted-foreground">
              <Keyboard className="w-3 h-3" />
              <span>⌘K</span>
            </div>
            <button
              onClick={close}
              className="p-2 hover:bg-secondary rounded-lg transition-colors group"
              aria-label="Close AI Copilot panel"
            >
              <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col">
              {/* Welcome */}
              <div className="text-center py-6">
                <div className="w-20 h-20 bg-linear-to-br from-primary via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-primary/20">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Hi! I&apos;m your AI Copilot
                </h3>
                <p className="text-sm text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
                  I can help you understand your analytics data and provide
                  actionable insights to grow your business.
                </p>
              </div>

              {/* Suggested Questions */}
              <div className="mt-auto pt-4">
                <p className="text-xs font-medium text-muted-foreground mb-3 px-1 uppercase tracking-wide">
                  Suggested Questions
                </p>
                <div className="space-y-2">
                  {suggestedQuestions.map((q, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(q.text)}
                      disabled={isLoading}
                      className="w-full flex items-center gap-3 p-3 text-left text-sm bg-secondary/30 hover:bg-secondary/60 rounded-xl transition-all group disabled:opacity-50 disabled:cursor-not-allowed border border-transparent hover:border-primary/20"
                    >
                      <div className="p-2 bg-linear-to-br from-primary/10 to-purple-500/10 rounded-lg group-hover:from-primary/20 group-hover:to-purple-500/20 transition-all">
                        <q.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-foreground block truncate">
                          {q.text}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {q.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.role === "user" ? "flex-row-reverse" : "",
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                      message.role === "user"
                        ? "bg-primary shadow-md shadow-primary/25"
                        : "bg-linear-to-br from-primary via-purple-500 to-pink-500 shadow-md shadow-purple-500/25",
                    )}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4 text-primary-foreground" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-4 py-3 relative group",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-secondary/60 text-foreground rounded-tl-sm",
                    )}
                  >
                    {message.role === "assistant" ? (
                      <div
                        className="text-sm prose prose-sm max-w-none dark:prose-invert prose-p:my-1 prose-li:my-0"
                        dangerouslySetInnerHTML={{
                          __html: formatMessage(message.content),
                        }}
                      />
                    ) : (
                      <p className="text-sm whitespace-pre-wrap">
                        {message.content}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-2 gap-2">
                      <p
                        className={cn(
                          "text-xs",
                          message.role === "user"
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground",
                        )}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                      {message.role === "assistant" && (
                        <button
                          onClick={() =>
                            copyToClipboard(message.content, message.id)
                          }
                          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-secondary rounded transition-all"
                          title="Copy response"
                          aria-label="Copy response to clipboard"
                        >
                          {copiedId === message.id ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <Copy className="w-3 h-3 text-muted-foreground" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/25">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-secondary/60 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <span
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-2 h-2 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground ml-1">
                        Analyzing your data...
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-card/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about your data..."
                disabled={isLoading}
                aria-label="Ask a question about your analytics data"
                className="w-full px-4 py-3 pr-12 border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50 transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-linear-to-r from-primary to-purple-500 text-white rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-primary/25 disabled:shadow-none"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 px-1">
            <p className="text-xs text-muted-foreground">
              AI responses are based on your dashboard data
            </p>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Press Enter to send
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
