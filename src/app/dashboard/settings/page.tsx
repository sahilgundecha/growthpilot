"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Store,
  Palette,
  Mail,
  Save,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "store", label: "Store", icon: Store },
  { id: "appearance", label: "Appearance", icon: Palette },
];

export default function SettingsPage() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Settings</h2>
        <p className="text-muted mt-1">Manage your account and preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64 shrink-0">
          <nav className="bg-card rounded-xl border p-2 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted hover:text-foreground hover:bg-secondary",
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === "profile" && (
            <div className="bg-card rounded-xl border p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Profile Information
                </h3>
                <p className="text-sm text-muted">
                  Update your personal details
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  {user?.firstName?.[0]}
                  {user?.lastName?.[0]}
                </div>
                <div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    Change Avatar
                  </button>
                  <p className="text-sm text-muted mt-1">JPG, PNG. Max 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.firstName || ""}
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.lastName || ""}
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.emailAddresses[0]?.emailAddress || ""}
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    disabled
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-foreground">
                    Bio
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about yourself..."
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  {saved ? (
                    <>
                      <Check className="w-4 h-4" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-card rounded-xl border p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Notification Preferences
                </h3>
                <p className="text-sm text-muted">
                  Choose what notifications you receive
                </p>
              </div>

              <div className="space-y-4">
                <NotificationToggle
                  title="Email Notifications"
                  description="Receive email updates about your orders"
                  defaultChecked={true}
                />
                <NotificationToggle
                  title="Order Updates"
                  description="Get notified when order status changes"
                  defaultChecked={true}
                />
                <NotificationToggle
                  title="Marketing Emails"
                  description="Receive tips, trends, and product updates"
                  defaultChecked={false}
                />
                <NotificationToggle
                  title="Weekly Reports"
                  description="Get weekly summary of your store performance"
                  defaultChecked={true}
                />
                <NotificationToggle
                  title="AI Insights"
                  description="Receive AI-generated insights and recommendations"
                  defaultChecked={true}
                />
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-card rounded-xl border p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Security Settings
                </h3>
                <p className="text-sm text-muted">
                  Manage your account security
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Password</p>
                      <p className="text-sm text-muted">
                        Last changed 30 days ago
                      </p>
                    </div>
                    <button className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                      Change Password
                    </button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">
                        Two-Factor Authentication
                      </p>
                      <p className="text-sm text-muted">
                        Add an extra layer of security
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                      Enable
                    </button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">
                        Active Sessions
                      </p>
                      <p className="text-sm text-muted">
                        Manage your logged in devices
                      </p>
                    </div>
                    <button className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="bg-card rounded-xl border p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Billing & Plans
                </h3>
                <p className="text-sm text-muted">
                  Manage your subscription and payment methods
                </p>
              </div>

              <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                      CURRENT PLAN
                    </span>
                    <h4 className="text-xl font-bold text-foreground mt-2">
                      Pro Plan
                    </h4>
                    <p className="text-sm text-muted">$49/month</p>
                  </div>
                  <button className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                    Upgrade
                  </button>
                </div>
                <div className="text-sm text-muted">
                  Next billing date: March 1, 2026
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Payment Method</h4>
                <div className="p-4 border rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-7 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        •••• •••• •••• 4242
                      </p>
                      <p className="text-sm text-muted">Expires 12/27</p>
                    </div>
                  </div>
                  <button className="text-sm text-primary hover:underline">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "store" && (
            <div className="bg-card rounded-xl border p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Store Settings
                </h3>
                <p className="text-sm text-muted">
                  Configure your store preferences
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Store Name
                  </label>
                  <input
                    type="text"
                    defaultValue="My Awesome Store"
                    className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Store URL
                  </label>
                  <div className="flex">
                    <span className="px-4 py-2 bg-secondary border border-r-0 rounded-l-lg text-muted text-sm">
                      https://
                    </span>
                    <input
                      type="text"
                      defaultValue="myawesomestore.com"
                      className="flex-1 px-4 py-2 border rounded-r-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Currency
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                    <option>INR (₹)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Timezone
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option>Pacific Time (PT)</option>
                    <option>Eastern Time (ET)</option>
                    <option>Central European Time (CET)</option>
                    <option>India Standard Time (IST)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="bg-card rounded-xl border p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Appearance
                </h3>
                <p className="text-sm text-muted">
                  Customize how GrowthPilot looks
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Theme
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="p-4 border-2 border-primary rounded-lg bg-white text-center">
                      <div className="w-full h-12 bg-gray-100 rounded mb-2" />
                      <span className="text-sm font-medium">Light</span>
                    </button>
                    <button className="p-4 border rounded-lg bg-gray-900 text-center">
                      <div className="w-full h-12 bg-gray-800 rounded mb-2" />
                      <span className="text-sm font-medium text-white">
                        Dark
                      </span>
                    </button>
                    <button className="p-4 border rounded-lg text-center">
                      <div className="w-full h-12 bg-gradient-to-r from-gray-100 to-gray-800 rounded mb-2" />
                      <span className="text-sm font-medium">System</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Accent Color
                  </label>
                  <div className="flex gap-3">
                    {[
                      "#6366f1",
                      "#8b5cf6",
                      "#ec4899",
                      "#f59e0b",
                      "#22c55e",
                      "#06b6d4",
                    ].map((color) => (
                      <button
                        key={color}
                        className={cn(
                          "w-10 h-10 rounded-full border-2 transition-all",
                          color === "#6366f1"
                            ? "border-foreground scale-110"
                            : "border-transparent",
                        )}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NotificationToggle({
  title,
  description,
  defaultChecked,
}: {
  title: string;
  description: string;
  defaultChecked: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <button
        onClick={() => setChecked(!checked)}
        className={cn(
          "w-12 h-6 rounded-full transition-colors relative",
          checked ? "bg-primary" : "bg-secondary",
        )}
      >
        <span
          className={cn(
            "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
            checked ? "left-7" : "left-1",
          )}
        />
      </button>
    </div>
  );
}
