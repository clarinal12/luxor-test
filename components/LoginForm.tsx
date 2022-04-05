import {
  BoxProps,
  Button,
  Input,
  VStack,
  chakra,
  FormControl,
  FormErrorMessage,
  Alert,
  AlertIcon,
  useDisclosure,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Router from "next/router";

const loginFormSchema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm: React.FC<BoxProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    onClose();

    if (data.password === "admin" && data.username === "admin") {
      Router.push("/pokedex");
    } else {
      onOpen();
    }
  };

  return (
    <chakra.form w="full" onSubmit={handleSubmit(onSubmit)}>
      {isOpen && (
        <Alert status="error" mb="40px">
          <AlertIcon />
          <AlertDescription>Invalid credentials</AlertDescription>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={onClose}
          />
        </Alert>
      )}
      <VStack spacing="28px">
        <FormControl isInvalid={Boolean(errors.username)}>
          <Input placeholder="Username" size="lg" {...register("username")} />
          <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.password)}>
          <Input
            placeholder="Password"
            size="lg"
            type="password"
            {...register("password")}
          />
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>
      </VStack>
      <Button size="lg" isFullWidth mt="45px" variant="primary" type="submit">
        LOGIN
      </Button>
    </chakra.form>
  );
};
