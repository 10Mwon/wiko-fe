import { SignUpFormValues } from "@/types/FormValues";
import { requestWithoutAuth } from "../common/common";

export async function signUp(signUpData: SignUpFormValues) {
  try {
    const data = await requestWithoutAuth("jwt-login/join", "POST", signUpData);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to sign up");
  }
}
