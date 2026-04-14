const heroPanel = document.querySelector<HTMLElement>(".hero__panel");

if (heroPanel) {
  const IDLE_DELAY_MS = 800;
  let idleTimer: ReturnType<typeof setTimeout> | null = null;

  const startIdleTimer = () => {
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      heroPanel.classList.add("hero__panel--idle");
    }, IDLE_DELAY_MS);
  };

  const triggerWobble = (event: PointerEvent) => {
    heroPanel.classList.remove("hero__panel--idle");

    const rect = heroPanel.getBoundingClientRect();
    const clientX = event.clientX ?? rect.left + rect.width / 2;
    const clientY = event.clientY ?? rect.top + rect.height / 2;
    const normalizedX = (clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (clientY - rect.top) / rect.height - 0.5;
    const rotateY = normalizedX * 26;
    const rotateX = normalizedY * -26;

    heroPanel.style.setProperty("--wobble-rotate-x", `${rotateX.toFixed(2)}deg`);
    heroPanel.style.setProperty("--wobble-rotate-y", `${rotateY.toFixed(2)}deg`);
    heroPanel.classList.remove("hero__panel--wobble");

    window.requestAnimationFrame(() => {
      heroPanel.classList.add("hero__panel--wobble");
    });
  };

  heroPanel.addEventListener("pointermove", (event: PointerEvent) => {
    heroPanel.classList.add("hero__panel--light-on");
    const rect = heroPanel.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    heroPanel.style.setProperty("--light-x", `${x.toFixed(1)}%`);
    heroPanel.style.setProperty("--light-y", `${y.toFixed(1)}%`);
  });

  heroPanel.addEventListener("pointerleave", () => {
    heroPanel.classList.remove("hero__panel--light-on");
  });

  heroPanel.addEventListener("pointerup", triggerWobble);
  heroPanel.addEventListener("animationend", (event: AnimationEvent) => {
    if (event.animationName === "hero-wobble-3d") {
      heroPanel.classList.remove("hero__panel--wobble");
      startIdleTimer();
    }
  });

  startIdleTimer();
}
