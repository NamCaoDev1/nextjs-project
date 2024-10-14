"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
import { handleLogin } from "../_data/login-action";
import { useFormState, useFormStatus } from "react-dom";
import { LoginSchemaType, LoginStatus } from "../_data/login-schema";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export type FormState = {
  status: LoginStatus;
  message: string;
  errors?: { [key in keyof LoginSchemaType]?: string[] } | undefined;
};

const initialState: FormState = {
  status: LoginStatus.Failure,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full mt-6" disabled={pending}>
      Sign in
    </Button>
  );
}

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState<FormState, FormData>(
    handleLogin,
    initialState
  );

  useEffect(() => {
    if (state.status === LoginStatus.Success) {
      router.push("/me");
      router.refresh();
    }
  }, [state.status, router]);

  return (
    <form action={formAction}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required name="email" />
          {state.errors?.email && (
            <span className="text-red-500 text-xs mt-3 block">
              {state.errors.email[0]}
            </span>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required name="password" />
          {state.errors?.password && (
            <span className="text-red-500 text-xs mt-3 block">
              {state.errors.password[0]}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
      </div>
      {state?.message && !state.errors && (
        <p
          className={cn("mt-4 text-sm", {
            "text-green-500": state.status === LoginStatus.Success,
            "text-red-500": state.status === LoginStatus.Failure,
          })}
        >
          {state?.message}
        </p>
      )}
      <SubmitButton />
    </form>
  );
};

export default LoginForm;
