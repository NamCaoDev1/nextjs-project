"use server";

import envConfig from "@/app/config";
import { loginSchema, LoginStatus } from "./login-schema";
import { FormState } from "../_components/login-form";

const testAction = () => {
  console.log("Fetch in server");
  return 0;
};

async function handleLogin(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const safeParseData = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!safeParseData.success) {
    return {
      status: LoginStatus.Failure,
      message: safeParseData.error.errors[0].message,
      errors: safeParseData.error.flatten().fieldErrors,
    };
  }

  const data = safeParseData.data;

  console.log("Data", data);

  // mutate data
  try {
    const result = await fetch(
      `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const resultJson = await result.json();
    if (resultJson.statusCode === 422) {
      throw new Error(resultJson.message);
    }
    return {
      message: `Login Successfully ${resultJson.message}`,
      status: LoginStatus.Success,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return { message: `Login failure`, status: LoginStatus.Failure };
  }

  // revalidate cache
}

export { handleLogin, testAction };
