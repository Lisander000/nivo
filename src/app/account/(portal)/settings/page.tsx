export default function SettingsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-1 h-8 bg-accent rounded-full" />
        <div>
          <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Preferences</p>
          <h1 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Account settings</h1>
        </div>
      </div>

      {/* Profile */}
      <div className="bg-white rounded-2xl shadow-card border border-divider p-5 md:p-6">
        <h2 className="text-[14px] font-black text-ink mb-4">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-ink mb-1.5 uppercase tracking-wider">First name</label>
            <input defaultValue="Arta" className="w-full h-[44px] px-3 rounded-xl border-2 border-border text-[13px] focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-ink mb-1.5 uppercase tracking-wider">Last name</label>
            <input defaultValue="Krasniqi" className="w-full h-[44px] px-3 rounded-xl border-2 border-border text-[13px] focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-ink mb-1.5 uppercase tracking-wider">Email</label>
            <input defaultValue="arta@example.com" className="w-full h-[44px] px-3 rounded-xl border-2 border-border text-[13px] focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-ink mb-1.5 uppercase tracking-wider">Phone</label>
            <input defaultValue="+383 44 123 456" className="w-full h-[44px] px-3 rounded-xl border-2 border-border text-[13px] focus:outline-none focus:border-primary" />
          </div>
        </div>
        <button className="mt-5 h-[44px] px-6 bg-primary text-white text-[13px] font-extrabold rounded-xl hover:bg-primary-dark transition-colors">Save changes</button>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl shadow-card border border-divider p-5 md:p-6">
        <h2 className="text-[14px] font-black text-ink mb-4">Security</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-xl bg-bg">
            <div>
              <p className="text-[13px] font-extrabold text-ink">Password</p>
              <p className="text-[11px] text-ink-muted font-medium">Last changed 3 months ago</p>
            </div>
            <button className="h-[36px] px-4 rounded-xl border border-border text-[12px] font-extrabold text-ink-secondary hover:border-ink hover:text-ink transition-colors">Change</button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-bg">
            <div>
              <p className="text-[13px] font-extrabold text-ink">Two-factor authentication</p>
              <p className="text-[11px] text-ink-muted font-medium">Extra protection for your account</p>
            </div>
            <button className="h-[36px] px-4 rounded-xl bg-primary text-white text-[12px] font-extrabold hover:bg-primary-dark transition-colors">Enable</button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl shadow-card border border-divider p-5 md:p-6">
        <h2 className="text-[14px] font-black text-ink mb-4">Notifications</h2>
        <div className="space-y-3">
          {[
            { label: "Order updates", desc: "Shipping, delivery and returns", on: true },
            { label: "Deals & drops", desc: "Weekly newsletter with handpicked offers", on: true },
            { label: "Price drops", desc: "When items in your wishlist go on sale", on: true },
            { label: "New arrivals", desc: "Fresh drops in your favorite categories", on: false },
          ].map((n) => (
            <div key={n.label} className="flex items-center justify-between p-4 rounded-xl bg-bg">
              <div>
                <p className="text-[13px] font-extrabold text-ink">{n.label}</p>
                <p className="text-[11px] text-ink-muted font-medium">{n.desc}</p>
              </div>
              <div className={`relative w-11 h-6 rounded-full transition-colors ${n.on ? "bg-primary" : "bg-border"}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all ${n.on ? "left-[22px]" : "left-0.5"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-2xl border border-danger/20 p-5 md:p-6">
        <h2 className="text-[14px] font-black text-danger mb-1">Danger zone</h2>
        <p className="text-[12px] text-ink-muted mb-4">Permanently delete your account and all associated data. This cannot be undone.</p>
        <button className="h-[40px] px-5 rounded-xl border border-danger/40 text-danger text-[12px] font-extrabold hover:bg-danger hover:text-white transition-colors">Delete account</button>
      </div>
    </div>
  );
}
