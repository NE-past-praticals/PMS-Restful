
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { usePasswordReset } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/CommonComponents/LoadingSpinner";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPassword() {
  const { sendResetEmail, isResetEmailLoading } = usePasswordReset();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      await sendResetEmail(data.email);
      setIsSuccess(true);
    } catch (error) {
      console.error("Failed to send reset email:", error);
    }
  };

  return (
    <div className={`space-y-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
          <Mail className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
        <p className="text-muted-foreground mt-2">
          Enter your email to receive a password reset link
        </p>
      </div>

      {isSuccess ? (
        <div className="animate-fade-in">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-green-800 text-lg">
              Password reset email sent
            </h3>
            <p className="text-green-700 mt-3">
              Check your inbox for instructions to reset your password.
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/login" className="text-primary flex items-center justify-center hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to login
            </Link>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 animate-fade-in">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input
                        placeholder="email@example.com"
                        type="email"
                        autoComplete="email"
                        className="pl-10 h-12 rounded-lg"
                        disabled={isResetEmailLoading}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12 text-base hover-lift"
              disabled={isResetEmailLoading}
            >
              {isResetEmailLoading ? (
                <LoadingSpinner size="sm" />
              ) : (
                "Send Reset Link"
              )}
            </Button>
          </form>
        </Form>
      )}

      {!isSuccess && (
        <div className="text-center">
          <p className="text-sm">
            Remember your password?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Back to login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
