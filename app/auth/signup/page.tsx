"use client";
import React, { useState } from "react";
import { auth, db } from "@/firebase/clientApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userEmail && userPassword && userName) {
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
        
        // Add user data to Firestore
        const collectionRef = collection(db, "client/auth/users");
        await addDoc(collectionRef, {
          userName: userName,
          userEmail: userEmail,
        });

        router.push("/auth/login")

      } catch (error: any) {
        setErrorMessage(error.message || "An error occurred");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg h-[36rem] w-[30rem] flex justify-center flex-col gap-5">
          <div className="text-blue-500 text-6xl font-bold mb-4 text-center">
            Quizzr
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex items-center flex-col"
          >
            <div>
              <input
                className="w-[25rem] p-2 border border-gray-300 rounded"
                placeholder="Enter your username"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="w-[25rem] p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="w-[25rem] p-2 border border-gray-300 rounded"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
            <button
              className="w-[25rem] bg-blue-500 text-white p-2 rounded hover:bg-blue-600 hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-shadow duration-200"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
