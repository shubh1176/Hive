import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { SignInFlow } from "../types";

interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
};

export const SignUpCard = ({ setState }: SignUpCardProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Welcome!
                </CardTitle>
                <CardDescription>
                Use Your email or another service to continue
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input 
                    disabled={false}
                    value={email}
                    onChange = {(e)=>setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    required
                    />
                    <Input 
                    disabled={false}
                    value={password}
                    onChange = {(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    required
                    />
                    <Input 
                    disabled={false}
                    value={confirmPassword}
                    onChange = {(e)=>setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    type="password"
                    required
                    />
                    <Button type="submit" className="w-full"  disabled={false}>
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                <Button
                    disabled={false} 
                    onClick={() => {}}
                    variant="outline"
                    className="w-full relative"
                >
                    <FcGoogle className="size-5 absolute top-2.5 left-3.5"/>
                    Sign Up with Google
                </Button>
                <Button
                    disabled={false} 
                    onClick={() => {}}
                    variant="outline"
                    className="w-full relative"
                >
                    <FaGithub className="size-5 absolute top-2.5 left-3.5"/>
                    Sign Up with Github
                </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Already have an account? <span className="text-sky-700 hover:underline hover:cursor-pointer" onClick={()=>setState("signIn")}>Sign In</span>
                </p>
            </CardContent>
        </Card>
    );
};