/*
 * Script: by ChatGPT
 * Usage: front animation
 * Animation: Parabula
 */

const canvas = document.getElementById("animation-canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

class ComplexFunction {
  constructor() {
    // Zufällige Parameter für verschiedene Funktionen
    this.amplitude = Math.random() * canvas.height * 0.4 + 20; // Amplitude der Funktion
    this.frequency = Math.random() * 0.02 + 0.005; // Frequenz für Sinus/Kosinus
    this.phase = Math.random() * 2 * Math.PI; // Phasenverschiebung
    this.exponentialScale = Math.random() * 0.002; // Skalierung für die Exponentialfunktion
    this.offsetX = Math.random() * canvas.width; // Initialer x-Offset
    this.offsetY = Math.random() * canvas.height; // Initialer y-Offset
    this.dx = Math.random() * 1.5 - 0.75; // Geschwindigkeit auf der x-Achse
    this.dy = Math.random() * 1 - 0.5; // Geschwindigkeit auf der y-Achse
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Zufällige Farbe
  }

  // Berechnet den y-Wert für einen gegebenen x-Wert basierend auf einer Kombination komplexer Funktionen
  getY(x) {
    return (
      this.amplitude *
        Math.sin(this.frequency * (x + this.offsetX) + this.phase) +
      this.amplitude * Math.cos(this.frequency * (x + this.offsetX)) +
      Math.exp(this.exponentialScale * (x + this.offsetX)) -
      Math.sqrt(Math.abs(x + this.offsetX)) +
      this.offsetY
    );
  }

  // Funktion, um die Parameter dynamisch anzupassen und den Startpunkt zu verschieben
  update() {
    // Langsamere und weichere Anpassung der Parameter für glattere Bewegungen
    this.frequency += (Math.random() - 0.5) * 0.00005;
    this.phase += (Math.random() - 0.5) * 0.01;
    this.exponentialScale += (Math.random() - 0.5) * 0.00001;
    this.amplitude += (Math.random() - 0.5) * 0.1;

    // Begrenzung der Werte, um extreme Veränderungen zu vermeiden
    this.frequency = Math.max(0.001, Math.min(0.05, this.frequency));
    this.exponentialScale = Math.max(
      0.0001,
      Math.min(0.005, this.exponentialScale),
    );
    this.amplitude = Math.max(
      20,
      Math.min(canvas.height * 0.5, this.amplitude),
    );

    // Langsamere Verschiebung auf der x- und y-Achse
    this.offsetX += this.dx;
    this.offsetY += this.dy;

    // Umkehren der Bewegungsrichtung, wenn die Funktion den Rand erreicht
    if (this.offsetX > canvas.width || this.offsetX < 0) {
      this.dx *= -1;
    }

    if (this.offsetY > canvas.height || this.offsetY < 0) {
      this.dy *= -1;
    }
  }

  // Funktion, um die Funktion zu zeichnen
  draw() {
    ctx.beginPath();
    ctx.moveTo(0, this.getY(0));

    for (let x = 0; x < canvas.width; x += 1) {
      let y = this.getY(x);
      if (y > canvas.height || y < 0) continue;
      ctx.lineTo(x, y);
    }

    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

const functions = [];

// Erstellen von mehreren komplexen Funktionen
for (let i = 0; i < 7; i++) {
  functions.push(new ComplexFunction());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < functions.length; i++) {
    functions[i].update();
    functions[i].draw();
  }

  requestAnimationFrame(animate);
}

animate();
