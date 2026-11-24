(function () {
  if (window.__mowtPlatformDocsMounted) return;
  window.__mowtPlatformDocsMounted = true;

  function createDocsUI() {
    if (document.getElementById('national_roads-docs-trigger')) return;

    const btn = document.createElement('button');
    btn.id = 'national_roads-docs-trigger';
    btn.type = 'button';
    btn.textContent = 'Platform Documentation';
    btn.setAttribute('aria-label', 'Open Platform Documentation');
    Object.assign(btn.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: '1200',
      padding: '8px 14px',
      borderRadius: '999px',
      border: '1px solid #E2E8F0',
      background: '#FFFFFF',
      color: '#0F172A',
      fontFamily: 'Arial, sans-serif',
      fontSize: '12px',
      fontWeight: '700',
      cursor: 'pointer',
      boxShadow: '0 4px 14px rgba(15, 23, 42, 0.08)'
    });

    const backdrop = document.createElement('div');
    backdrop.id = 'national_roads-docs-modal';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-labelledby', 'national_roads-docs-title');
    Object.assign(backdrop.style, {
      position: 'fixed',
      inset: '0',
      zIndex: '2000',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'rgba(15, 23, 42, 0.24)',
      backdropFilter: 'blur(6px)'
    });

    const card = document.createElement('div');
    Object.assign(card.style, {
      width: 'min(860px, 96vw)',
      maxHeight: '86vh',
      overflowY: 'auto',
      background: '#FFFFFF',
      color: '#0F172A',
      border: '1px solid #E2E8F0',
      borderRadius: '16px',
      padding: '24px 28px',
      boxShadow: '0 20px 50px rgba(15, 23, 42, 0.14)',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.55'
    });

    card.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid #E2E8F0;padding-bottom:14px;margin-bottom:18px;">
        <div>
          <div style="font-size:11px;font-weight:700;letter-spacing:0.06em;color:#0071E3;text-transform:uppercase;">National Road Network Authority · National Road Network Administration</div>
          <h2 id="national_roads-docs-title" style="margin:4px 0 0;font-size:20px;font-weight:800;color:#0F172A;">Platform Documentation: Uganda Network Traffic</h2>
        </div>
        <button id="national_roads-docs-close" type="button" aria-label="Close Platform Documentation" style="padding:6px 14px;border-radius:10px;border:1px solid #E2E8F0;background:#F5F5F7;color:#0F172A;font-size:12px;font-weight:700;cursor:pointer;">Close</button>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:18px;">
        <div style="background:#F5F5F7;border:1px solid #E2E8F0;border-radius:12px;padding:12px 14px;">
          <div style="font-size:11px;font-weight:700;color:#475569;">National Road Network</div>
          <div style="font-size:20px;font-weight:800;color:#0071E3;margin-top:2px;">21,284.02 km</div>
          <div style="font-size:12px;color:#475569;">6,406.69 km Paved · 14,877.33 km Unpaved</div>
        </div>
        <div style="background:#F5F5F7;border:1px solid #E2E8F0;border-radius:12px;padding:12px 14px;">
          <div style="font-size:11px;font-weight:700;color:#475569;">Major Structures</div>
          <div style="font-size:20px;font-weight:800;color:#16A34A;margin-top:2px;">552 Bridges · 452 Major Culverts</div>
          <div style="font-size:12px;color:#475569;">Authoritative National Register (01/10/2026)</div>
        </div>
        <div style="background:#F5F5F7;border:1px solid #E2E8F0;border-radius:12px;padding:12px 14px;">
          <div style="font-size:11px;font-weight:700;color:#475569;">Forecast Horizon</div>
          <div style="font-size:20px;font-weight:800;color:#7C3AED;margin-top:2px;">2016 to 2040 (Vision 2040)</div>
          <div style="font-size:12px;color:#475569;">View-Only Public Decision Support</div>
        </div>
      </div>

      <h3 style="font-size:14px;font-weight:800;color:#0F172A;margin:14px 0 6px;">1. System Purpose and View-Only Architecture</h3>
      <p style="margin:0 0 10px;font-size:13px;color:#334155;">
        The Uganda Network Traffic platform provides view-only geospatial mapping, summary registers, deep traffic analytics, axle load monitoring, origin-destination matrices, and an interactive TIS Mind Map across the 21,284.02 km National Road Network. All modules operate without login gates, role-based access controls, or user data entry.
      </p>

      <h3 style="font-size:14px;font-weight:800;color:#0F172A;margin:14px 0 6px;">2. Field Survey and Condition Assessment Tools</h3>
      <p style="margin:0 0 10px;font-size:13px;color:#334155;">
        Network condition and pavement roughness data supporting traffic and corridor prioritisation are collected using <strong>MOBICAP(Road condition assesment tool)</strong> and <strong>ROMDAS(Roughness and rutting machine based testing)</strong>, integrated with weighbridge axle-load observations and automated traffic counters.
      </p>

      <h3 style="font-size:14px;font-weight:800;color:#0F172A;margin:14px 0 6px;">3. Geospatial Basemap and Cartographic Standards</h3>
      <p style="margin:0 0 10px;font-size:13px;color:#334155;">
        All interactive maps use Esri World Imagery with World Transportation and World Boundaries and Places hybrid label overlays. Coordinates are expressed strictly in decimal degrees, distances in kilometres (km), vehicle masses in tonnes (T), and dates in dd/mm/yyyy format.
      </p>

      <h3 style="font-size:14px;font-weight:800;color:#0F172A;margin:14px 0 6px;">4. Interactive TIS Mind Map</h3>
      <p style="margin:0;font-size:13px;color:#334155;">
        Navigate to <strong>Deep Analytics</strong> and select <strong>TIS Mind Map</strong> to inspect the interactive architecture connecting traffic forecasting algorithms, weighbridge analytics, road safety metrics, and Vision 2040 planning dimensions.
      </p>
    `;

    backdrop.appendChild(card);
    document.body.appendChild(btn);
    document.body.appendChild(backdrop);

    const open = () => { backdrop.style.display = 'flex'; };
    const close = () => { backdrop.style.display = 'none'; };

    btn.addEventListener('click', open);
    card.querySelector('#national_roads-docs-close').addEventListener('click', close);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createDocsUI);
  } else {
    createDocsUI();
  }
})();
