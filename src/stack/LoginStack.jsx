import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/AuthStore";
import { toast } from "sonner";

export const useCrearUsuarioYSesionMutate = () => {
  const { credenciales, crearUserYLogin } = useAuthStore();
  return useMutation({
    mutationKey: ["iniciar con email testers"],
    mutationFn: async () => {
      await crearUserYLogin({
        email: credenciales.email,
        password: credenciales.password,
      });
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
    onSuccess:()=>{
        toast.success("Ok, todo salió bien")
    }
  });
};
