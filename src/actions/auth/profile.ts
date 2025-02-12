import { MyProfileResponseType } from "@/types/ResponseType";
import { requestWithAuth } from "../common/common";

export async function getProfile(): Promise<MyProfileResponseType> {
  try {
    const data = await requestWithAuth<MyProfileResponseType>(
      "jwt-login/profile",
      "GET",
      null,
      "force-cache"
    );
    if (typeof data === "string") {
      throw new Error("Unexpected response type");
    }
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get profile");
  }
}
