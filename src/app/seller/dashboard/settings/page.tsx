export const metadata = { title: "Store settings · Kahsya Partners" };

export default function SellerSettingsPage() {
  return (
    <div className="space-y-5 max-w-[860px]">
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400">Store</p>
        <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-black text-white tracking-tight leading-tight">Store settings</h1>
      </div>

      {/* Storefront */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
        <h2 className="text-[14px] font-black text-white mb-4">Storefront</h2>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-[#0A0A14] font-black text-[22px] flex-shrink-0">EK</div>
          <div>
            <p className="text-[13px] font-extrabold text-white">ElectroKS</p>
            <p className="text-[11px] text-white/40 font-medium">kahsya.ks/store/electroks</p>
            <button className="mt-1 text-[11px] font-extrabold text-amber-400 hover:underline">Change logo</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Display name</label>
            <input defaultValue="ElectroKS" className="w-full h-[44px] px-3 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[13px] focus:outline-none focus:border-amber-400" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Tagline</label>
            <input defaultValue="Verified electronics, Kosovo-wide" className="w-full h-[44px] px-3 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[13px] focus:outline-none focus:border-amber-400" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Store bio</label>
            <textarea rows={3} defaultValue="ElectroKS is Prishtina's trusted source for smartphones, audio and accessories since 2022. Every device carries a 12-month local warranty." className="w-full p-3 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[13px] focus:outline-none focus:border-amber-400" />
          </div>
        </div>
      </div>

      {/* Shipping */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
        <h2 className="text-[14px] font-black text-white mb-4">Shipping & fulfillment</h2>
        <div className="space-y-3">
          {[
            { label: "Fulfilled by Kahsya", desc: "We store, pick and ship for you", on: true },
            { label: "Self-fulfill (you ship)", desc: "You print labels and drop off", on: false },
            { label: "Free shipping above €30", desc: "Boosts conversion by ~18%", on: true },
            { label: "Express (same-day) in Prishtinë", desc: "For in-stock items before 14:00", on: true },
          ].map((n) => (
            <div key={n.label} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div>
                <p className="text-[13px] font-extrabold text-white">{n.label}</p>
                <p className="text-[11px] text-white/40 font-medium">{n.desc}</p>
              </div>
              <div className={`relative w-11 h-6 rounded-full transition-colors ${n.on ? "bg-amber-400" : "bg-white/10"}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all ${n.on ? "left-[22px]" : "left-0.5"}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bank */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
        <h2 className="text-[14px] font-black text-white mb-4">Payouts & banking</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <p className="text-[11px] text-white/40 font-medium uppercase tracking-wider">IBAN</p>
            <p className="text-[14px] font-extrabold text-white mt-1">XK05 1234 •••• •••• 4402</p>
            <button className="mt-2 text-[11px] font-extrabold text-amber-400 hover:underline">Update banking info</button>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <p className="text-[11px] text-white/40 font-medium uppercase tracking-wider">Tax ID (NF/NUI)</p>
            <p className="text-[14px] font-extrabold text-white mt-1">810884720</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
        <h2 className="text-[14px] font-black text-white mb-4">Team members</h2>
        <div className="space-y-2.5">
          {[
            { name: "Endrit Krasniqi", role: "Owner", email: "endrit@electroks.ks" },
            { name: "Lirim Ahmeti", role: "Fulfillment", email: "lirim@electroks.ks" },
            { name: "Drita Berisha", role: "Customer support", email: "drita@electroks.ks" },
          ].map((m) => (
            <div key={m.email} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white text-[11px] font-black flex-shrink-0">{m.name.split(" ").map((s) => s[0]).join("")}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-extrabold text-white truncate">{m.name}</p>
                <p className="text-[11px] text-white/40 font-medium truncate">{m.email}</p>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/15 text-amber-400">{m.role}</span>
            </div>
          ))}
          <button className="w-full h-[44px] rounded-xl border-2 border-dashed border-white/15 text-white/50 text-[12px] font-extrabold hover:border-amber-400/60 hover:text-amber-400 transition-colors">+ Invite team member</button>
        </div>
      </div>
    </div>
  );
}
