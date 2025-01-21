import React, { useState, useEffect } from "react";

interface Step {
  target: string; // Selector del elemento objetivo
  content: string; // Texto del tooltip
  position?: { top: number; left: number }; // Posición personalizada del tooltip
}

const Tour: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0); // Índice del paso actual
  const [visible, setVisible] = useState(true); // Visibilidad del tooltip
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  // Define los pasos del tour con posiciones personalizadas
  const steps: Step[] = [
    { target: "div#navbar", content: "Este es el menú de navegación.", position: { top: -60, left: 0 } },
    { target: "div#hero", content: "Este es el encabezado principal de la página.", position: { top: 20, left: 0 } },
    { target: "div#team-gallery", content: "Aquí puedes ver a nuestro equipo.", position: { top: -50, left: 30 } },
    { target: "div#results-sponsors", content: "Estos son los resultados y patrocinadores.", position: { top: -70, left: -20 } },
    { target: "div#features", content: "Estas son las características principales.", position: { top: -80, left: 0 } },
    { target: "div#fun-facts", content: "Estos son los datos curiosos.", position: { top: 10, left: 0 } },
    { target: "div#services", content: "Descubre los servicios que ofrecemos.", position: { top: 500, left: 50 } },
    { target: "div#price-plans", content: "Aquí puedes ver nuestros planes de precios.", position: { top: 200, left: 0 } },
    { target: "div#feedback", content: "Estos son los comentarios de nuestros clientes.", position: { top: -50, left: -30 } },
    { target: "div#faq", content: "Preguntas frecuentes.", position: { top: -50, left: 0 } },
    { target: "div#get-in-touch", content: "Ponte en contacto con nosotros.", position: { top: -70, left: -10 } },
    { target: "div#contact", content: "Información de contacto.", position: { top: -40, left: 0 } },
    { target: "div#footer", content: "Este es el pie de página.", position: { top: -100, left: 0 } },
  ];

  // Función para calcular la posición del tooltip
  const calculateTooltipPosition = (target: string, position?: { top: number; left: number }) => {
    const element = document.querySelector(target);
    if (element) {
      const rect = element.getBoundingClientRect();

      // Coordenadas base según la posición del componente objetivo
      let top = rect.top + window.scrollY;
      let left = rect.left + window.scrollX;

      // Aplica las posiciones personalizadas si están definidas
      if (position) {
        top += position.top;
        left += position.left;
      } else {
        // Posición predeterminada (arriba y centrado)
        top -= 50; // Coloca encima
        left += rect.width / 2; // Centra horizontalmente
      }

      return { top, left };
    }
    return { top: 0, left: 0 };
  };

  // Función para desplazarse al paso actual
  const scrollToStep = (index: number) => {
    const step = steps[index];
    const position = calculateTooltipPosition(step.target, step.position);

    setTooltipPosition(position); // Actualiza la posición del tooltip

    const element = document.querySelector(step.target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Avanza al siguiente paso
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setVisible(false); // Oculta el tour si es el último paso
    }
  };

  // Salta el tour
  const handleSkip = () => {
    setVisible(false);
  };

  // Desplázate automáticamente al componente objetivo cuando cambie el paso
  useEffect(() => {
    if (visible) {
      scrollToStep(currentStep);
    }
  }, [currentStep, visible]);

  if (!visible) return null; // No renderiza el tooltip si el tour está oculto

  return (
    <div>
      {/* Tooltip */}
      <div
        style={{
          position: "absolute",
          zIndex: 1000,
          top: `${tooltipPosition.top}px`,
          left: `${tooltipPosition.left}px`,
          transform: "translate(50%, 100%)", // Ajusta el tooltip relativo al componente
          padding: "1rem",
          backgroundColor: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          borderRadius: "8px",
          maxWidth: "300px",
          textAlign: "center",
        }}
      >
        <p>{steps[currentStep].content}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={handleSkip} style={{ marginRight: "1rem" }}>
            Skip
          </button>
          <button onClick={handleNext}>
            {currentStep < steps.length - 1 ? "Next" : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
