"use client";

import { useAsciiMask } from "@/app/hooks/useAsciiMask";
import { Button } from "@/components/ui/button";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";

type LoginFormProps = {
  onSuccess?: () => void;
  onClose?: () => void;
};

const loginSchema = z.object({
  username: z
    .string()
    .refine(
      (val) =>
        val.replace(/[\[\]\s]/g, "").toUpperCase() === "ESKORIA.ASCENSÃO",
      { message: "ERRO CRÍTICO: CREDENCIAIS NÃO RECONHECIDAS NO SISTEMA." },
    ),
  password: z.string().min(1),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = ({ onSuccess, onClose }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: standardSchemaResolver(loginSchema),
    defaultValues: {
      username: "[ ESKORIA.ASCENSÃO ]",
      password: "12345678901",
    },
  });

  const passwordValue = useWatch({ control, name: "password" });
  const maskedPassword = useAsciiMask(passwordValue ?? "");

  const onSubmit = () => {
    if (onSuccess) onSuccess();
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
      <div className="pointer-events-auto flex flex-col font-mono w-175 max-w-[90vw] h-auto max-h-[85dvh] bg-kat-bg/90 backdrop-blur-sm border border-kat-accent shadow-[0_4px_30px_var(--kat-accent-glow-sm)]">
        <div className="flex items-center justify-between px-4 py-2 shrink-0 border-b border-kat-accent bg-kat-accent/10">
          <span className="text-[12px] md:text-[14px] font-bold tracking-widest text-kat-accent">
            KNOWLEDGE ASCENSION TERMINAL
          </span>
          <div className="flex space-x-4 text-kat-accent font-bold">
            <Button
              variant="bare"
              size="auto"
              className="hover:text-kat-text transition-colors cursor-pointer leading-none"
            >
              _
            </Button>
            <Button
              variant="bare"
              size="auto"
              onClick={onClose}
              className="hover:text-kat-error transition-colors cursor-pointer leading-none"
            >
              X
            </Button>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col flex-1 p-8 gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-kat-accent text-[16px]">
              {">"} USER:
            </label>
            <input
              id="username"
              type="text"
              autoComplete="off"
              className="w-full bg-transparent text-kat-accent outline-none placeholder-kat-accent/30 uppercase text-[16px]"
              {...register("username")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-kat-accent text-[16px]">
              {">"} PASSWORD:
            </label>
            <div className="relative flex">
              <span className="min-w-50 text-kat-accent tracking-widest text-[16px]">
                {(passwordValue?.length ?? 0) > 0
                  ? `[ ${maskedPassword} ]`
                  : ""}
              </span>
              <input
                id="password"
                type="text"
                className="absolute inset-0 w-full opacity-0 cursor-text"
                {...register("password")}
              />
            </div>
          </div>

          <div className="h-4">
            {errors.username && (
              <p className="text-kat-error animate-pulse text-[12px] tracking-wider">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mt-auto flex justify-center">
            <Button
              type="submit"
              variant="bare"
              size="auto"
              className="border border-kat-accent px-8 py-3 text-kat-accent transition-all hover:bg-kat-accent hover:text-kat-bg rounded-none uppercase tracking-widest text-[16px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-kat-accent focus:ring-offset-2 focus:ring-offset-kat-bg"
            >
              [LOGIN]
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
