"use client";

import { Button } from "@/components/ui/button";

export type AlertType = "CRITICAL" | "WARNING" | "SYSTEM";

type SystemAlertBoxProps = {
  message: string;
  type: AlertType;
  top: string;
  right: string;
  onClose?: () => void;
};

const SystemAlertBox = ({
  message,
  type,
  top,
  right,
  onClose,
}: SystemAlertBoxProps) => {
  // Dicionário de estilos inspirado em erros do Windows XP, mas versão "Dark Cyber"
  const getStylesByType = (alertType: AlertType) => {
    switch (alertType) {
      case "WARNING":
        return {
          window: "border-[#eab308] shadow-[0_0_15px_rgba(234,179,8,0.15)]",
          titleBar:
            "bg-gradient-to-r from-[#eab308]/40 to-transparent border-b border-[#eab308]",
          text: "text-[#eab308]",
          title: "Warning.exe",
          icon: "/!\\",
          button: "border-[#eab308] hover:bg-[#eab308] hover:text-black",
        };
      case "SYSTEM":
        return {
          window:
            "border-kat-accent shadow-[0_0_15px_var(--kat-accent-glow-sm)]",
          titleBar:
            "bg-gradient-to-r from-kat-accent/40 to-transparent border-b border-kat-accent",
          text: "text-kat-accent",
          title: "sys_info.dll",
          icon: "( i )",
          button: "border-kat-accent hover:bg-kat-accent hover:text-black",
        };
      case "CRITICAL":
      default:
        return {
          window: "border-kat-error shadow-[0_0_20px_var(--color-kat-error)]",
          titleBar:
            "bg-gradient-to-r from-kat-error/50 to-transparent border-b border-kat-error",
          text: "text-kat-error",
          title: "FATAL_ERROR",
          icon: "[ X ]",
          button: "border-kat-error hover:bg-kat-error hover:text-black",
        };
    }
  };

  const styles = getStylesByType(type);

  return (
    <div
      className={`absolute pointer-events-auto w-64 md:w-72 border-2 bg-[#050505]/95 font-mono select-none flex flex-col ${styles.window} animate-[pulse_3s_ease-in-out_infinite]`}
      style={{ top, right }}
    >
      <div
        className={`flex items-center justify-between px-2 py-1 ${styles.titleBar}`}
      >
        <span className={`text-[11px] font-bold tracking-wider ${styles.text}`}>
          {styles.title}
        </span>
        <Button
          variant="bare"
          size="auto"
          onClick={onClose}
          className={`h-5 w-5 flex items-center justify-center border ${styles.text} border-transparent hover:border-current bg-black/50 cursor-pointer text-[10px] leading-none transition-none rounded-none`}
        >
          X
        </Button>
      </div>

      <div className="flex flex-row p-3 gap-3 items-center">
        <div
          className={`text-xl md:text-2xl font-black shrink-0 animate-pulse ${styles.text}`}
        >
          {styles.icon}
        </div>

        <div className="flex-1">
          <p
            className={`text-[11px] md:text-[12px] leading-tight wrap-break-words ${styles.text}`}
          >
            {message}
          </p>
        </div>
      </div>

      <div className="flex justify-center pb-3 pt-1">
        <Button
          variant="bare"
          size="auto"
          onClick={onClose}
          className={`border px-6 py-1 text-[11px] uppercase tracking-widest cursor-pointer transition-colors bg-black/50 rounded-none ${styles.text} ${styles.button}`}
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export { SystemAlertBox };
