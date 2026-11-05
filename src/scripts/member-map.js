let resources;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function loadMapResources() {
  resources ??= (async () => {
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js");
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js");
    const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
    if (!response.ok) throw new Error("Map data is unavailable");
    return response.json();
  })().catch((error) => {
    resources = undefined;
    throw error;
  });
  return resources;
}

document.addEventListener("astro:page-load", () => {
  const canvas = document.getElementById("cs-map-canvas");
  if (!canvas) return;
  const traveledPlaces = JSON.parse(canvas.dataset.places || "[]");
  const scaledTooltip = canvas.dataset.scaledTooltip === "true";
  if (scaledTooltip && !traveledPlaces.length) canvas.style.display = "none";
  const controller = new AbortController();
  const { signal } = controller;
  document.addEventListener("astro:before-swap", () => controller.abort(), { once: true });

  if (canvas && traveledPlaces.length > 0) {
    const ctx = canvas.getContext("2d");
    const wrap = document.getElementById("cs-map-wrap");
    const tooltip = document.getElementById("cs-map-tooltip");

    let proj, pathFn, W, H, worldData;
    const PIN_COLOR = "#e02020";

    function drawPin(x, y, r) {
      const h = r * 2.2;
      ctx.beginPath();
      ctx.arc(x, y - h + r, r, Math.PI, 0);
      ctx.quadraticCurveTo(x + r, y - h + r * 1.8, x, y);
      ctx.quadraticCurveTo(x - r, y - h + r * 1.8, x - r, y - h + r);
      ctx.closePath();
      ctx.fillStyle = PIN_COLOR;
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y - h + r, r * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }

    async function init() {
      worldData = await loadMapResources();
      if (signal.aborted || !canvas.isConnected) return;
      resize();
      window.addEventListener("resize", resize, { signal });
    }

    function setupProjection() {
      W = canvas.width / (window.devicePixelRatio || 1);
      H = canvas.height / (window.devicePixelRatio || 1);
      proj = d3.geoNaturalEarth1().scale(W / 6.5).translate([W / 2, H / 2]);
      pathFn = d3.geoPath(proj, ctx);
    }

    function draw() {
      const dpr = window.devicePixelRatio || 1;
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, W, H);
      ctx.beginPath();
      pathFn({ type: "Sphere" });
      ctx.fillStyle = "#b2dfd4";
      ctx.fill();
      const graticule = d3.geoGraticule()();
      ctx.beginPath();
      pathFn(graticule);
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      const countries = topojson.feature(worldData, worldData.objects.countries);
      countries.features.forEach((f) => {
        ctx.beginPath();
        pathFn(f);
        ctx.fillStyle = "#c8ddb0";
        ctx.fill();
        ctx.strokeStyle = "#a8c890";
        ctx.lineWidth = 0.4;
        ctx.stroke();
      });
      ctx.beginPath();
      pathFn({ type: "Sphere" });
      ctx.strokeStyle = "#7bbfb0";
      ctx.lineWidth = 1;
      ctx.stroke();
      traveledPlaces.forEach((p) => {
        const xy = proj([p.lon, p.lat]);
        if (!xy) return;
        drawPin(xy[0], xy[1], 6);
      });
      ctx.restore();
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = wrap.getBoundingClientRect().width;
      const h = Math.round(w * 0.5);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      setupProjection();
      draw();
    }

    canvas.addEventListener("mousemove", (e) => {
      if (!proj) return;
      const rect = canvas.getBoundingClientRect();
      const pointerX = e.clientX - rect.left;
      const pointerY = e.clientY - rect.top;
      const dpr = window.devicePixelRatio || 1;
      const mx = scaledTooltip ? pointerX * (canvas.width / dpr) / rect.width : pointerX;
      const my = scaledTooltip ? pointerY * (canvas.height / dpr) / rect.height : pointerY;
      const hit = traveledPlaces.find((p) => {
        const xy = proj([p.lon, p.lat]);
        return xy && Math.hypot(mx - xy[0], my - xy[1]) < 10;
      });
      if (hit) {
        tooltip.style.display = "block";
        tooltip.style.left = pointerX + 12 + "px";
        tooltip.style.top = pointerY - 48 + "px";
        document.getElementById("cs-tt-name").textContent = hit.name;
        document.getElementById("cs-tt-info").textContent = hit.country + (hit.label ? " · " + hit.label : "");
        canvas.style.cursor = "pointer";
      } else {
        tooltip.style.display = "none";
        canvas.style.cursor = "default";
      }
    });

    canvas.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    init().catch(() => { /* Keep the existing empty map when the CDN is unavailable. */ });
  }
});
