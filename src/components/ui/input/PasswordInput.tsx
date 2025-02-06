import { PasswordInputProps } from "@/types/FormValues";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export default function PasswordInput({
  name,
  placeholder = "비밀번호",
  value,
  onChange,
  isSignUp = false,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        className={`w-full text-gray-600 ${
          isSignUp ? "p-4 rounded-xl bg-gray-200" : "p-3 rounded-md bg-white"
        } ${error ? "border-red-500" : "border-gray-300"}`}
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value} // ✅ Controlled Component 적용
        onChange={onChange} // ✅ 이벤트 핸들러 추가
      />
      <button
        className="absolute inset-y-0 right-3 text-gray-500"
        type="button"
        onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <EyeClosed /> : <Eye />}
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
