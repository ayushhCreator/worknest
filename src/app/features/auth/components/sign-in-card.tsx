"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export const SignInCard = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        // Add your sign-in logic here
    };

    return (
        <Card className="w-full h-full md:w-[487px] p-5 border-none shadow-none">
            <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-center font-bold">
                    Sign in
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            type="email" 
                                            placeholder="Enter email address"
                                            className="h-12 px-4 border-gray-300 rounded-lg"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            type="password" 
                                            placeholder="Enter password"
                                            className="h-12 px-4 border-gray-300 rounded-lg"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <Button 
                            type="submit" 
                            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? "Signing in..." : "Login"}
                        </Button>
                    </form>
                </Form>
                
                <div className="flex flex-col space-y-3 pt-4">
                    <Button 
                        variant="outline" 
                        className="w-full h-12 border-gray-300 rounded-lg font-normal"
                    >
                        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Login with Google
                    </Button>
                    <Button 
                        variant="outline" 
                        className="w-full h-12 border-gray-300 rounded-lg font-normal"
                    >
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Login with GitHub
                    </Button>
                </div>
                
                <p className="text-xs text-center text-gray-500 mt-6">
                    By signing in, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                    </a>
                </p>

                                <p className="text-sm text-center text-gray-600 mt-4">
                    Do not have an account?{" "}
                    <a href="/sign-up" className="text-blue-600 hover:underline font-medium">
                        Sign up
                    </a>
                </p>

            </CardContent>
        </Card>
    );
};