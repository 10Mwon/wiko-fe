import { SignUpFormValues } from "@/types/FormValues";
import { requestWithoutAuth } from "../common/common";

export async function signUp(signUpData: SignUpFormValues) {
  try {
    // ✅ 필드명 변환 및 Date 객체를 ISO 8601 문자열로 변환
    const formattedData = {
      name: signUpData.name,
      loginId: signUpData.id, // id → loginId
      password: signUpData.password,
      passwordCheck: signUpData.passwordConfirm, // passwordConfirm → passwordCheck
      address: signUpData.address,
      visaType: signUpData.visa, // visa → visaType
      email: signUpData.email,
      phoneNumber: signUpData.phone, // phone → phoneNumber
      birth: signUpData.birth ? signUpData.birth.toISOString() : "", // Date → ISO String 변환
    };

    // ✅ JSON-safe 데이터로 API 요청
    const data = await requestWithoutAuth(
      "jwt-login/join",
      "POST",
      formattedData
    );
    console.log("signUP 결과", data);
    if (data === "회원가입 성공") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to sign up");
  }
}
