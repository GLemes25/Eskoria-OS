"use client";

import { SystemAlertBox } from "@/app/components/SystemAlertBox";
import { useEffect, useState } from "react";

export type AlertType = "CRITICAL" | "WARNING" | "SYSTEM";

type AlertItem = {
  id: string;
  message: string;
  type: AlertType;
  top: string;
  right: string;
};

const ALERT_MESSAGES: { text: string; type: AlertType }[] = [
  { text: "SYS_ERR_0x00F", type: "CRITICAL" },
  { text: "FIREWALL BREACH DETECTED", type: "WARNING" },
  { text: "MEMORY LEAK", type: "CRITICAL" },
  { text: "UNAUTHORIZED THREAD", type: "WARNING" },
  { text: "DATA CORRUPTION", type: "CRITICAL" },
  { text: "KERNEL_PANIC_0xFF", type: "CRITICAL" },
  { text: "NULL_PTR_EXCEPTION", type: "CRITICAL" },
  { text: "RECALCULATING HASH", type: "SYSTEM" },
];

const MAX_ACTIVE_ALERTS = 5;

const AlertManager = () => {
  const [activeAlerts, setActiveAlerts] = useState<AlertItem[]>([]);

  const removeAlert = (id: string) => {
    setActiveAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  useEffect(() => {
    let isMounted = true;

    const spawnAlert = () => {
      if (!isMounted) return;

      const id = `alert-${Date.now()}-${Math.random()}`;
      const randomAlert =
        ALERT_MESSAGES[Math.floor(Math.random() * ALERT_MESSAGES.length)];

      const top = `${Math.floor(Math.random() * 65) + 10}%`;
      const right = `${Math.floor(Math.random() * 18) + 2}%`;

      setActiveAlerts((prev) => {
        if (prev.length >= MAX_ACTIVE_ALERTS) return prev;
        return [
          ...prev,
          { id, message: randomAlert.text, type: randomAlert.type, top, right },
        ];
      });

      const lifetimeMs = Math.floor(Math.random() * 3000) + 4000;
      setTimeout(() => {
        if (isMounted) {
          setActiveAlerts((current) => current.filter((a) => a.id !== id));
        }
      }, lifetimeMs);

      const nextSpawnDelayMs = Math.floor(Math.random() * 3000) + 2000;
      setTimeout(() => {
        if (isMounted) spawnAlert();
      }, nextSpawnDelayMs);
    };

    const initialDelayMs = Math.floor(Math.random() * 3000) + 2000;
    setTimeout(() => {
      if (isMounted) spawnAlert();
    }, initialDelayMs);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-40">
      {activeAlerts.map((alert) => (
        <SystemAlertBox
          key={alert.id}
          message={alert.message}
          type={alert.type}
          top={alert.top}
          right={alert.right}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
    </div>
  );
};

export { AlertManager };
