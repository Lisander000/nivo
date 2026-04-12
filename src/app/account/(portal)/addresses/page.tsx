const addresses = [
  { id: 1, label: "Home", name: "Arta Krasniqi", street: "Rr. Agim Ramadani 14", city: "10000 Prishtinë", country: "Kosovo", phone: "+383 44 123 456", default: true },
  { id: 2, label: "Work", name: "Arta Krasniqi", street: "Bulevardi Bill Klinton 7, Office 402", city: "10000 Prishtinë", country: "Kosovo", phone: "+383 44 123 456", default: false },
  { id: 3, label: "Parents", name: "Lumnije Krasniqi", street: "Rr. Mbretëresha Teutë 22", city: "20000 Prizren", country: "Kosovo", phone: "+383 49 998 221", default: false },
];

export default function AddressesPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="w-1 h-8 bg-accent rounded-full" />
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Delivery</p>
            <h1 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Saved addresses</h1>
          </div>
        </div>
        <button className="inline-flex items-center gap-1.5 h-[42px] px-5 bg-primary text-white text-[13px] font-extrabold rounded-xl hover:bg-primary-dark transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Add new
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((a) => (
          <div key={a.id} className="bg-white rounded-2xl shadow-card border border-divider p-5 hover:shadow-card-hover transition-all relative">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-bg text-ink-secondary text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full">{a.label}</span>
                {a.default && <span className="inline-flex items-center gap-1 bg-success/10 text-success text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full">Default</span>}
              </div>
              <button className="text-ink-faint hover:text-ink">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
              </button>
            </div>
            <p className="text-[14px] font-extrabold text-ink">{a.name}</p>
            <p className="text-[13px] text-ink-secondary font-medium mt-1">{a.street}</p>
            <p className="text-[13px] text-ink-secondary font-medium">{a.city}, {a.country}</p>
            <p className="text-[12px] text-ink-muted font-medium mt-2">{a.phone}</p>
            <div className="flex gap-2 mt-4 pt-4 border-t border-divider">
              <button className="flex-1 h-[36px] rounded-xl border border-border text-[12px] font-extrabold text-ink-secondary hover:border-ink hover:text-ink transition-colors">Edit</button>
              {!a.default && <button className="flex-1 h-[36px] rounded-xl bg-primary-light text-primary text-[12px] font-extrabold hover:bg-primary hover:text-white transition-colors">Set default</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
