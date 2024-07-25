import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupAPI({ fullName, email, password }),
    onSuccess: () => {
      toast.success(
        "Account successfully created!. Please check your email address to verify your account."
      );
    },
  });

  return { signup, isSigningUp };
}
